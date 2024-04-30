import express from 'express';
import { createDoctor, getDoctorsInformation } from '../Controllers/doctor.controller';

const router = express.Router();

router.post('/create', createDoctor);
router.get('/info', getDoctorsInformation);

export default router;
