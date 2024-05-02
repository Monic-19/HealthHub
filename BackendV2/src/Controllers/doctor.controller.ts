import { Request, Response } from "express";
import Doctor from "../Models/Doctor";
import User from "../Models/User";
import Clinic from "../Models/Clinic";
import Address from "../Models/Address";

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

const getDoctorsInformation = async (req: Request, res: Response) => {
  try {
    const doctors = await Doctor.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Clinic, as: 'clinic' }
      ]
    });

    for (const doctor of doctors) {
      const addressId = doctor?.clinic?.addressId;

      if (addressId) {
        try {
          const address = await Address.findOne({ where: { id: addressId } });
          if (address) {
            doctor.clinic.address = address;
          }
        } catch (error) {
          console.error('Error fetching address:', error); 
        }
      }
      
    }

    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error fetching doctors information:', error);
    return res.status(500).json({ error: 'Could not fetch doctors information' });
  }
};
  
export { createDoctor, getDoctorsInformation };