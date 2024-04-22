import express from 'express';
import { saveDoctorInformation, savePatientInformation, getDoctorInformation, getPatientInformation } from '../Controllers/Information.controller';

const router = express.Router();

router.post('/doctor', saveDoctorInformation);
router.get('/doctor', getDoctorInformation);
router.post('/patient', savePatientInformation);
router.get('/patient', getPatientInformation);

export default router;
