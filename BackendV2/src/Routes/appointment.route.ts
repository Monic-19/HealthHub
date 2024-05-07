import express from 'express';
import { createAppointment, cancelAppointment, getAppointmentByDoctorId, getAppointmentByPatientId, getAppointmentByDateTime } from '../Controllers/appointment.controller';

const router = express.Router();

router.post('/create', createAppointment);
router.delete('/cancel/:appointmentId', cancelAppointment);
router.get('/patient/:patientId', getAppointmentByPatientId);
router.get('/doctor/:doctorId', getAppointmentByDoctorId);
router.get('/:date/:startingTime', getAppointmentByDateTime);

export default router;
