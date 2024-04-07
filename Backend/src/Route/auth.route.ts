import express from 'express';
import { SignUp, login } from '../Controllers/auth.controller';

const router = express.Router();

router.post('/signup', SignUp);
router.post('/login', login);

export default router;
