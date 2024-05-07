import Appointment from "../Models/Appointment";
import User from "../Models/User";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import mailSender from "../utils/mailSender";
import {appointmentConfirmation} from '../Template/appointmentConfirmation';
import { appointmentDoctor } from "../Template/appoitmentDoctor";


const createAppointment = async (req: Request, res: Response) => {
    try {
        let { doctorId, patientId, description, date, startingTime, endingTime, mode, videoLink } = req.body;
        
        const doctor = await User.findOne({ where: { id: doctorId } });
        const patient = await User.findOne({ where: { id: patientId } });

        if (!doctor || !patient) {
            return res.status(404).json({
                success: false,
                message: 'Not valid users to create appointment between',
            });
        }

        const appointment = await Appointment.create({ doctorId, patientId, date, startingTime, endingTime, mode });
        if (description) {
            await appointment.update({ description }, { where: { id: appointment.id } });    
        }

        const token = jwt.sign({ appointment: appointment.id}, 'your_secret_key');
        await appointment.update({ token }, { where: { id: appointment.id } });

        if (mode && videoLink !== null) {
            videoLink = `http://localhost:5174/call/${doctor?.firstName}-${doctor?.id}/${patient?.firstName}-${patient?.id}`
            await appointment.update({ videoLink }, { where: { id: appointment.id } });
        }

        const mailResponsePatient = await mailSender(
            patient.email, 
            'Appointment Confirmation',
            appointmentConfirmation({PatientName: patient?.firstName + ' ' + patient?.lastName, DoctorName: doctor?.firstName + ' ' + doctor?.lastName, videoLink: videoLink + '/pat', Date: String(appointment.date), startingTime, endingTime, phoneNo: String(doctor?.phoneNo)})
        );

        const mailResponseDoctor = await mailSender(
            doctor.email, 
            'Appointment Confirmation',
            appointmentDoctor({PatientName: patient.firstName + ' ' + patient.lastName, DoctorName: doctor.firstName + ' ' + doctor.lastName, videoLink: videoLink + '/doc'})
        );

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

const getAppointmentByPatientId = async (req: Request, res: Response) => {
    try {
        const { patientId } = req.params;
        const appointments = await Appointment.findAll({
            where: { patientId: patientId },
            include: [
                { model: User, as: 'doctor' },
                { model: User, as: 'patient' }            ]
        });
        res.status(200).json({
            appointments,
        });

    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAppointmentByDoctorId = async (req: Request, res: Response) => {
    try {
        const { doctorId } = req.params;
        const appointments = await Appointment.findAll({
            where: { doctorId: doctorId },
            include: [
                { model: User, as: 'doctor' },
                { model: User, as: 'patient' }            ]
        });
        res.status(200).json({
            appointments,
        });

    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { getAppointmentByDoctorId, getAppointmentByPatientId, createAppointment, cancelAppointment};