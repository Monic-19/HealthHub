import Appointment from "../Models/Appointment";
import User from "../Models/User";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';


const createAppointment = async (req: Request, res: Response) => {
    try {
        const { doctorId, patientId, description, date, startingTime, endingTime, mode, videoLink } = req.body;
        
        const doctor = User.findOne({where: {id: doctorId}});
        const patient = User.findOne({where: {id: patientId}});

        if(!date || !startingTime || !endingTime || !mode){
            return res.status(404).json({
                message: "Incomplete credentials",
            })
        }

        if(!doctor || !patient){
            return res.status(404).json({
                success: false,
                message: 'Not valid users to create appointment b/w',
            })
        }

        const appointment = await Appointment.create({ doctorId, patientId, description, date, startingTime, endingTime, mode });
        const token = jwt.sign({ appointmentId: appointment.id }, 'your_secret_key');
        if (mode == true && videoLink !== null) {
            await appointment.update({ videoLink, token }, { where: { id: appointment.id } });
        }

        res.status(200).json({ token, appointment });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { appointmentId } = req.params;

        const appointment = await Appointment.findByPk(appointmentId);

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        await appointment.destroy();

        res.json({ message: 'Appointment canceled successfully' });

    } catch (error) {
        console.error('Error canceling appointment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAppointment = async (req: Request, res: Response) => {
    try {
        const { userId, isDoctor } = req.params;
        let appointments;

        if (isDoctor) {
            appointments = await Appointment.findAll({ where: { doctorId: userId } });
        } else {
            appointments = await Appointment.findAll({ where: { patientId: userId } });
        }

        res.status(200).json({
            appointments,
        });

    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { getAppointment, createAppointment, cancelAppointment};