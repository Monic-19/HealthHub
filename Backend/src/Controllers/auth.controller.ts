import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User';


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

const SignUp = async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser: UserType = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            phoneNo: req.body.phoneNo,
            address: req.body.address,
            role: req.body.role
        });
        
        const token = jwt.sign({ userId: newUser.id,role: newUser.role,email: newUser.email }, 'your-secret-key', { expiresIn: '3d' });
        res.setHeader('Authorization', `Bearer ${token}`);

        res.status(201).json({ message: 'User created successfully', token });

    } catch (error) {
        res.status(500).json({ error });
    }
};

const login = async (req: Request, res: Response) => {
    try {
        const { password, confirmPassword } = req.body;
        if(password != confirmPassword){
            return res.status(500).json({ message: 'Password does not match.' });
        }

        const user: UserType | null = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id,role: user.role,email: user.email }, 'your_secret_key');
        res.setHeader('Authorization', `Bearer ${token}`);

        res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export { SignUp, login };
