import express from 'express';
import { saveDoctorInformation, savePatientInformation, saveClinicInformation, getDoctorInformation, getPatientInformation, getClinicInformation } from '../Controllers/Information.controller';

const router = express.Router();

router.post('/doctor', saveDoctorInformation);
router.get('/doctor/:userId', getDoctorInformation);
router.post('/patient', savePatientInformation);
router.get('/patient/:userId', getPatientInformation);
router.post('/clinic', saveClinicInformation);
router.get('/clinic/:userId', getClinicInformation);

export default router;
