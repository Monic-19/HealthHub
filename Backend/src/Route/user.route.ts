import express from 'express';
import { getDoctorsList } from '../Controllers/user.controller';

const router = express.Router();

router.get('/doctors', getDoctorsList);

export default router;
