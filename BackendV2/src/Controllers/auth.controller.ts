import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User';
import OTP from '../Models/OTP';
import { Op } from 'sequelize';


interface UserType {
    id: number;
    firstName: string;
    lastName: string;
    profileImg: string | null;
    email: string;
    password: string;
    phoneNo: string | null;
    dob: Date | null;
    gender: string | null;
    bloodGroup: string | null;
    addressId: number | null; 
    role: 'Doctor' | 'Patient' | 'Admin';
}

const SignUp = async (req: Request, res: Response) => {
    try {
        const { password, email, otp, role} = req.body;

        const otpEntry = await OTP.findOne({
            where: {
                email,
                otp,
                createdAt: {
                    [Op.gt]: new Date(new Date().getTime() - 5 * 60 * 1000),
                },
            },
        });

        if (!otpEntry) {
            return res.status(400).json({ message: 'Invalid OTP or OTP expired.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email,
            password: hashedPassword,
            role,
        });

        await otpEntry.destroy();
        const token = jwt.sign({ userId: newUser.id, email: newUser.email, role: newUser.role }, 'your-secret-key', { expiresIn: '3d' });
        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({ message: 'User created successfully.', token });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'Internal server error while SignUp' });
    }
};

const login = async (req: Request, res: Response) => {
    try {

        const user: UserType | null = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            console.log("Password does not match");
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id,role: user.role,email: user.email }, 'your_secret_key');
        res.setHeader('Authorization', `Bearer ${token}`);

		user.password = '';
		const options = {
			expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
			httpOnly: true,
		};

		res.cookie("token", token, options).status(200).json({
			success: true,
			token,
			user,
			message: `User Login Success`,
		});
    } catch (error) {
        res.status(500).json({ error });
    }
};

const sendOtp = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000);
        await OTP.create({
            email,
            otp
        });

        return res.status(200).json({ success: true, message: 'OTP created and verification email sent successfully' });
    } catch (error) {
        console.error('Error creating OTP and sending email:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const verificationEmail = async (req: Request, res: Response) => {
    try{
        const { email } = req.body;
        const user = await User.findOne(email);

        if(!user){
            return res.status(200).json({
                message: 'User Does not exists',
                bool: false,
            });
        } else {
            return res.status(200).json({
                message: 'User Does exists',
                bool: true,
            });
        }
    }catch(error){
        return res.status(404).json({
            message: 'Error while verifying Email',
            error: error
        })
    }
}

const changePassword = async (req: Request, res: Response) => {
    try {
        const { email, newPassword, confirmNewPassword, oldPassword } = req.body;

        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({ success: false, error: 'New passwords do not match' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, error: 'Incorrect old password' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ success: true, message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

const forgotPassword = async (req: Request, res: Response) => {
    try {
        const { email, newPassword, confirmNewPassword } = req.body;

        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({ success: false, error: 'New passwords do not match' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ success: true, message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export { SignUp, login, sendOtp, verificationEmail, forgotPassword, changePassword };