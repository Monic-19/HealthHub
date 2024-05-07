import express from 'express';
import { createAppointment, cancelAppointment, getAppointmentByDoctorId, getAppointmentByPatientId } from '../Controllers/appointment.controller';

const router = express.Router();

router.post('/create', createAppointment);
router.delete('/cancel/:appointmentId', cancelAppointment);
router.get('/patient/:patientId', getAppointmentByPatientId);
router.get('/doctor/:doctorId', getAppointmentByDoctorId);

export default router;
