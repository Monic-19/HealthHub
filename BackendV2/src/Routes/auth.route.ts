import express from 'express';
import { SignUp, login, sendOtp, verificationEmail, changePassword, forgotPassword, forgotPasswordLink } from '../Controllers/auth.controller';

const router = express.Router();
router.post('/signup', SignUp);
router.post('/login', login);
router.post('/send-otp', sendOtp);
router.get('/verify-email', verificationEmail);
router.put('/change-password', changePassword);
router.put('/forgot-password', forgotPassword);
router.post('/forgot-password/link', forgotPasswordLink);

export default router;
