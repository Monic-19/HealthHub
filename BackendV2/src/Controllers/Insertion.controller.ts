import bcrypt from 'bcrypt';
import { Response, Request } from 'express';
import { sequelize } from '../Config/sequelize';
import User from '../Models/User';
import Address from '../Models/Address';
import Clinic from '../Models/Clinic';
import Doctor from '../Models/Doctor';

const saveDoctorFullInformation = async (req: Request, res: Response) => {
    const transaction = await sequelize.transaction();
    try {
        const {
            firstName,
            lastName,
            email,
            role,
            password,
            phoneNo,
            dob,
            gender,
            bloodGroup,
            userPincode,
            userBuilding,
            userArea,
            userLandmark,
            userTownCity,
            userState,
            education,
            experience,
            specialization,
            medicalField,
            clinicName,
            clinicPincode,
            clinicBuilding,
            clinicArea,
            clinicLandmark,
            clinicTownCity,
            clinicState,
            fee,
            openingTime,
            closingTime
        } = req.body;
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const parsedDob = new Date(dob).toISOString();

        // Create user address
        const userAddress = await Address.create({ 
            pincode: userPincode, 
            building: userBuilding, 
            area: userArea, 
            landmark: userLandmark, 
            townCity: userTownCity, 
            state: userState 
        }, { transaction });

        console.log('User Address:', userAddress);

        // Create user with hashed password
        const user = await User.create({
            firstName,
            lastName,
            email,
            role,
            password: hashedPassword,
            phoneNo,
            dob: parsedDob,
            gender,
            bloodGroup,
            addressId: userAddress.id
        }, { transaction });


        // Create clinic address
        const clinicAddress = await Address.create({ 
            pincode: clinicPincode,
            building: clinicBuilding,
            area: clinicArea,
            landmark: clinicLandmark,
            townCity: clinicTownCity,
            state: clinicState,
        }, { transaction });

        console.log('Clinic Address:', clinicAddress);

        // Create clinic
        const clinic = await Clinic.create({ 
            name: clinicName,
            addressId: clinicAddress.id,
            userId: user.id,
            fee,
            openingTime,
            closingTime
        }, { transaction });

        console.log('Clinic:', clinic);
        
        // Create doctor
        const doctor = await Doctor.create({ 
            education,
            experience,
            specialization,
            medicalField,
            userId: user.id,
            clinicId: clinic.id
        }, { transaction });

        console.log('Doctor:', doctor);

        await transaction.commit();
        res.status(200).json({ message: 'Doctor information saved successfully' });
    } catch(error) {
        await transaction.rollback();
        res.status(500).json({ error });
    }
}

export { saveDoctorFullInformation };
