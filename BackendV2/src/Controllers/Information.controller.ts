import { Request, Response } from "express";
import Address from "../Models/Address";
import User from "../Models/User";
import Doctor from "../Models/Doctor";
import { sequelize } from "../Config/sequelize";
import Clinic from "../Models/Clinic";
import cloudinary from 'cloudinary'


cloudinary.v2.config({
    cloud_name: '',
    api_key: '',
    api_secret: '',
});

const saveProfilePic = async(req: Request,res: Response) => {
    try {  
        
        const { userId } =  req.params;
        
        if (!req.file || !req.file.path) {
          return res.status(400).json({ message: 'Photo upload failed' });
        }

        let user = await User.findOne({where: {id: userId}});
        if(!user){
            return res.status(304).json({
                message: 'Not a valid user',
            })
        }
    
        const uploadedPhoto = await cloudinary.v2.uploader.upload(req.file.path);    
        
        await User.update({profileImg: uploadedPhoto.secure_url},{where: {id: userId}});

        user = await User.findOne({where: {id:userId}});
        return res.status(200).json({
            user,
            message: 'User photo uploaded successfully',
        })

      } catch (error) {
        res.status(500).json({ message: 'Internal server error' ,error});
      }
}

const saveDoctorInformation = async (req: Request, res: Response) => {
    const transaction = await sequelize.transaction();

    try {
        const {
            userId,
            phoneNo,
            dob,
            gender,
            bloodGroup,
            pincode,
            building,
            area,
            landmark,
            townCity,
            state,
            education,
            experience,
            specialization,
            medicalField
        } = req.body;

        if (
            !userId ||
            !phoneNo ||
            !dob ||
            !gender ||
            !bloodGroup ||
            !pincode ||
            !building ||
            !area ||
            !townCity ||
            !state ||
            !education ||
            !experience ||
            !specialization ||
            !medicalField
        ) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        let user = await User.findByPk(userId, { transaction });
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User does not exist',
            });
        }

        if (user.addressId !== null) {
            await User.update({ addressId: null }, { where: { id: userId }, transaction });
            await Address.destroy({ where: { id: user.addressId }, transaction });
        }

        const address = await Address.create({
            pincode,
            building,
            area,
            landmark,
            townCity,
            state
        }, { transaction });

        if (!address || !address.id) {
            await transaction.rollback();
            return res.status(400).json({
                success: false,
                error: 'Invalid address information',
            });
        }
        
        let existingDoctor = await Doctor.findOne({ where: { userId } });
        if (existingDoctor) {
            await Doctor.destroy({ where: { userId }, transaction });
        }
        
        
        const doctor = await Doctor.create({
            userId,
            education,
            experience,
            specialization,
            medicalField
        }, { transaction });
        
        const clinic = await Clinic.findOne({where: {userId: user.id}, transaction});
        if(clinic){
            await doctor.update({clinicId: clinic.id},{where: {userId: user.id}, transaction});
        }

        if (!doctor || !doctor.id) {
            await transaction.rollback();
            return res.status(400).json({
                success: false,
                error: 'Invalid doctor information',
            });
        }

        await User.update({
            phoneNo,
            dob,
            gender,
            bloodGroup,
            addressId: address.id,
        }, {
            where: { id: userId },
            transaction
        }); 

        await transaction.commit();
        
        user = await User.findOne({where: {id:userId}});
        return res.status(200).json({
            user,
            success: true,
            message: 'Doctor information saved successfully',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
        });
    }
};

const savePatientInformation = async (req: Request, res: Response) => {
    const transaction = await sequelize.transaction();

    try{
        const {userId, phoneNo, dob, gender, bloodGroup, pincode, building, area, landmark, townCity, state} = req.body;
        if (
            !userId ||
            !phoneNo ||
            !dob ||
            !gender ||
            !bloodGroup ||
            !pincode ||
            !building ||
            !area ||
            !townCity ||
            !state
        ) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        let user = await User.findByPk(userId, { transaction });
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User does not exist',
            });
        }

        const address = await Address.create({
            pincode,
            building,
            area,
            landmark,
            townCity,
            state
        }, { transaction });

        if (!address || !address.id) {
            await transaction.rollback();
            return res.status(400).json({
                success: false,
                error: 'Invalid address information',
            });
        }

        await User.update({
            phoneNo,
            dob,
            gender,
            bloodGroup,
            addressId: address.id,
        }, {
            where: { id: userId },
            transaction
        }); 

        await transaction.commit();
        
        user = await User.findOne({where: {id:userId}});
        return res.status(200).json({
            user,
            success: true,
            message: 'Patient information saved successfully',
        });
    } catch(error){
        console.error('Error saving patient information:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
        });
    }
}

const saveClinicInformation = async (req: Request, res: Response) => {
    const transaction = await sequelize.transaction();
    
    try {
        const { userId, name, fee, openingTime, closingTime, pincode, building, area, landmark, townCity, state } = req.body;
        
        if (!userId || !name || !fee || !openingTime || !closingTime || !pincode || !building || !area || !landmark || !townCity || !state) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields in request body',
            });
        }

        const user = await User.findByPk(userId, { transaction });
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User does not exist',
            });
        }

        const findClinic = await Clinic.findOne({where: {userId: user.id}});
        if(findClinic){
            await Clinic.destroy({where: {userId: user.id}, transaction });
            await Address.destroy({where: {id: findClinic.addressId }, transaction });
        }

        const address = await Address.create({
            pincode,
            building,
            area,
            landmark,
            townCity,
            state
        }, { transaction });
        
        if (!address || !address.id) {
            await transaction.rollback();
            return res.status(400).json({
                success: false,
                error: 'Invalid address information',
            });
        }

        const clinic = await Clinic.create({
            name,
            addressId: address.id,
            fee,
            openingTime,
            closingTime,
            userId,
        }, { transaction });

        const doctor = await Doctor.findOne({where: {userId: user.id}, transaction });
        if(doctor){
            await doctor.update({clinicId: clinic.id},{where: { userId: user.id }, transaction });
        }

        await transaction.commit();
        return res.status(200).json({
            success: true,
            message: 'Clinic information saved successfully',
        });

    } catch(error) {
        console.error('Error saving clinic information:', error);
        await transaction.rollback();
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
        });
    }
}


const getClinicInformation = async (req: Request, res: Response) => {
    try {
        const userId  = req.params.userId;
        

        const clinics = await Clinic.findOne({where: {userId: userId}});

        if (!clinics) {
            return res.status(404).json({
                success: false,
                message: 'No clinic information found',
            });
        }

        const address = await Address.findOne({where: {id: clinics.addressId}});

        if(!address) {
            return res.status(404).json({
                success: false,
                message: 'Address not saved'
            })
        }

        return res.status(200).json({
            success: true,
            clinics,
            address,
        });

    } catch (error) {
        console.error('Error fetching clinic information:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
        });
    }
};


const getDoctorInformation = async (req: Request, res: Response) => {
    try {
        const userId  = req.params.userId;
        const user = await User.findByPk(userId);
        const doctor = await Doctor.findOne({where: {userId: userId}});
    
        if (!doctor) {
          return res.status(404).json({ error: 'Doctor not found' });
        }

        const address = await Address.findOne({where : {id: user?.addressId}});
        if(!address){
            return res.status(404).json({
                error: 'address not saved',
            })
        }

        return res.status(200).json({
            user, 
            doctor,
            address
        });
    } catch (error) {
        console.error('Error fetching doctor information:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
        });
    }
};

const getPatientInformation = async(req: Request, res: Response) => {
    try{
        const userId  = req.params.userId;
        const user = await User.findByPk(userId);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User does not exist',
            });
        }

        const address = await Address.findOne({where: {id: user.addressId}});
        if(!address){
            return res.status(404).json({
                success: false,
                error: 'Address not saved'
            })
        }

        return res.status(200).json({
            user: user,
            address
        });
    } catch(error){
        console.error('Error fetching patient information:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
        });
    }
} 

export { saveDoctorInformation, savePatientInformation, saveClinicInformation , getPatientInformation, getDoctorInformation, getClinicInformation, saveProfilePic };
