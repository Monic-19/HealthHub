import express from 'express';
import { SignUp, login, sendOtp, verificationEmail } from '../Controllers/auth.controller';

const router = express.Router();
router.post('/signup', SignUp);
router.post('/login', login);
router.post('/send-otp', sendOtp);
router.get('/verify-email', verificationEmail);

export default router;
