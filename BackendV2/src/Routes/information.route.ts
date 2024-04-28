import express from 'express';
import { saveDoctorInformation, savePatientInformation, saveClinicInformation, getDoctorInformation, getPatientInformation, getClinicInformation } from '../Controllers/Information.controller';

const router = express.Router();

router.post('/doctor', saveDoctorInformation);
router.get('/doctor', getDoctorInformation);
router.post('/patient', savePatientInformation);
router.get('/patient', getPatientInformation);
router.post('/clinic', saveClinicInformation);
router.get('/clinic', getClinicInformation);

export default router;
