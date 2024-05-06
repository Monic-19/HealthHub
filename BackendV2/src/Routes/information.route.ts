import express from 'express';
import { saveDoctorInformation, savePatientInformation, saveClinicInformation, getDoctorInformation, getPatientInformation, getClinicInformation, saveProfilePic } from '../Controllers/Information.controller';
import { upload } from '../middleware/multer'

const router = express.Router();

router.post('/doctor', saveDoctorInformation);
router.get('/doctor/:userId', getDoctorInformation);
router.post('/patient', savePatientInformation);
router.get('/patient/:userId', getPatientInformation);
router.post('/clinic', saveClinicInformation);
router.get('/clinic/:userId', getClinicInformation);
router.post('/profile-pic/:userId', upload.single('image'), saveProfilePic);

export default router;
