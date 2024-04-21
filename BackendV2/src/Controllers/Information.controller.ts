import { Request, Response } from "express";
import Address from "../Models/Address";
import User from "../Models/User";
import Doctor from "../Models/Doctor";
import { sequelize } from "../Config/sequelize";

const saveDoctorInformation = async (req: Request, res: Response) => {
    // Start an Transaction... 
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

        const user = await User.findByPk(userId, { transaction });
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

        const doctor = await Doctor.create({
            userId,
            education,
            experience,
            specialization,
            medicalField
        }, { transaction });

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

        return res.status(200).json({
            success: true,
            message: 'Doctor information saved successfully',
        });
    } catch (error) {
        console.error('Error saving doctor information:', error);
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

        const user = await User.findByPk(userId, { transaction });
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

        return res.status(200).json({
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

export { saveDoctorInformation, savePatientInformation };
