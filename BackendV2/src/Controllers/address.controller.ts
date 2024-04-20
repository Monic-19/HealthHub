import { Request, Response } from 'express';
import Address from '../Models/Address';
import User from '../Models/User';
import Clinic from '../Models/Clinic';

export const createAddressForUser = async (req: Request, res: Response) => {
  try {
    const { userId, pincode, building, area, landmark, townCity, state } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const address = await Address.create({
      userId,
      pincode,
      building,
      area,
      landmark,
      townCity,
      state
    });
    const addressId = address.id;
    await User.update({ addressId }, { where: { id: userId } });

    res.status(201).json({ message: 'Address created successfully', address });
  } catch (error) {
    console.error('Error creating address:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createAddressForClinic = async (req: Request, res: Response) => {
    try {
      const { clinicId, pincode, building, area, landmark, townCity, state } = req.body;
  
      const clinic = await Clinic.findByPk(clinicId);
      if (!clinic) {
        return res.status(404).json({ error: 'Clinic not found' });
      }
  
      const address = await Address.create({
        pincode,
        building,
        area,
        landmark,
        townCity,
        state
      });
  
      const addressId = address.id;
      await Clinic.update({ addressId }, { where: { id: clinicId } });
  
      res.status(201).json({ message: 'Address created successfully', address });
    } catch (error) {
      console.error('Error creating address for clinic:', error);
      res.status(500).json({ error: 'Server error' });
    }
};


export const deleteAddressById = async (req: Request, res: Response) => {
  try {
    const addressId = req.params.addressId;

    const address = await Address.findByPk(addressId);
    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }

    await address.destroy();

    res.json({ message: 'Address deleted successfully' });
  } catch (error) {
    console.error('Error deleting address:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
