import { Request, Response } from 'express';
import User from '../Models/User';

export const getDoctorsList = async(req: Request, res: Response) => {
    try {
        const doctors = await User.findAll({
            where: {
                role: 'Doctor'
            }
        });
        return res.status(200).json(doctors);
    } catch (error) {
        console.error('Error fetching doctors list:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


