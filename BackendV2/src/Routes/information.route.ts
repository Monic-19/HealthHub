import express from 'express';
import { saveDoctorInformation, savePatientInformation } from '../Controllers/Information.controller';

const router = express.Router();
router.post('/doctor', saveDoctorInformation);
router.post('/patient', savePatientInformation);

export default router;
