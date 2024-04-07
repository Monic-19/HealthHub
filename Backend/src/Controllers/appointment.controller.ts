import Appointment from '../Models/Appointment';
import { Request, Response } from 'express';
import User from '../Models/User';
import mailSender from '../utils/mailSender';

interface AppointmentType {
    id: number;
    patientId: number;
    doctorId: number;
    description: string;
    date: Date;
    time: string;
    token: string;
}

interface UserType {
    id: number;
    firstName: string;
    lastName: string;
    profileImg: string;
    email: string;
    password: string;
    phoneNo: string;
    address: string;
    gender: string;
    bloodGroup: string;
    document: string;
    role: 'Doctor' | 'Patient' | 'Admin';
}

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const { doctorId, patientId, description, date, time } = req.body;

        const existingAppointment = await Appointment.findOne({
            where: { doctorId, patientId, date, time }
        });

        if (existingAppointment) {
            return res.status(400).json({
                message: 'An appointment already exists for this doctor and patient at the specified date and time'
            });
        }

        const userPatient: UserType | null = await User.findOne({ where: { id: patientId, role: 'Patient' } });
        if (!userPatient) {
            return res.status(404).json({
                message: 'User as patient not found',
            });
        }

        const userDoctor: UserType | null = await User.findOne({ where: { id: doctorId, role: 'Doctor' } });
        if (!userDoctor) {
            return res.status(404).json({
                message: 'User as doctor not found',
            });
        }

        const newAppointment: AppointmentType = await Appointment.create({ doctorId, patientId, description, date, time });

        const sendMailToUser = await mailSender(userPatient.email, newAppointment.description, '<h1>OTP</h1>');
        if (!sendMailToUser) {
            return res.status(500).json({
                message: 'Error while sending email to User',
            });
        }

        const sendMailToDoctor = await mailSender(userDoctor.email, newAppointment.description, '<h1>Appointment Information</h1>');
        if (!sendMailToDoctor) {
            return res.status(500).json({
                message: 'Error while sending email to Doctor',
            });
        }

        return res.status(201).json({
            success: true,
            message: 'Appointment created successfully',
            appointment: newAppointment
        });
    } catch (error) {
        console.error('Error creating appointment:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
};


export const removeAppointment = async (req: Request, res: Response) => {
    try {
        const { appointmentId } = req.params; 
        const appointment = await Appointment.findByPk(appointmentId);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        await appointment.destroy();
        return res.status(200).json({ message: 'Appointment removed successfully' });
    } catch (error) {
        console.error('Error removing appointment:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getAppointmentsForPatient = async (req: Request, res: Response) => {
    try {
        const { patientId } = req.params; 

        const appointments = await Appointment.findAll({ where: { patientId } });

        return res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching appointments for patient:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getAppointmentsForDoctor = async (req: Request, res: Response) => {
    try {
        const { doctorId } = req.params; 

        const appointments = await Appointment.findAll({ where: { doctorId } });

        return res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching appointments for doctor:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}