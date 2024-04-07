import express from 'express';
import { createAppointment, removeAppointment, getAppointmentsForPatient, getAppointmentsForDoctor } from '../Controllers/appointment.controller';

const router = express.Router();

router.post('/create', createAppointment);
router.delete('/:appointmentId', removeAppointment);
router.get('/patient/:patientId', getAppointmentsForPatient);
router.get('/doctor/:doctorId', getAppointmentsForDoctor);

export default router;
