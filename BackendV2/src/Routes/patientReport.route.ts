import express from 'express';
import { getReportsByDoctorId, getReportsByPatientId, createPatientReport, updatePatientReport, deletePatientReport, getReportById } from '../Controllers/patientReport.controller';
import { upload } from '../utils/uploadingFile';

const router = express.Router();

router.get('/doctor/:doctorId', getReportsByDoctorId);
router.get('/patient/:patientId', getReportsByPatientId);
router.post('', upload.single('prescriptionPhoto'), createPatientReport);
router.put('/:id', updatePatientReport);
router.delete('/:id', deletePatientReport);
router.get('/:id', getReportById);

export default router;
