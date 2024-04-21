import { Request, Response } from "express";
import Doctor from "../Models/Doctor";
import User from "../Models/User";

const createDoctor = async (req: Request, res: Response) => {
  try {
    const { userId, education, experience, specialization, medicalField} = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if(user.role != "Doctor"){
        return res.status(500).json({error: 'User role does not match'});
    }

    const doctor = await Doctor.create({
      userId,
      education,
      experience,
      specialization,
      medicalField,
    });

    return res.status(201).json(doctor);
  } catch (error) {
    console.error('Error creating doctor:', error);
    return res.status(500).json({ error: 'Could not create doctor' });
  }
};
  
export { createDoctor };