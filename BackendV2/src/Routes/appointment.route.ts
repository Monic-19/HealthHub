import express from 'express';
import { createAppointment, cancelAppointment, getAppointment } from '../Controllers/appointment.controller';

const router = express.Router();

router.post('/create', createAppointment);
router.delete('/cancel/:appointmentId', cancelAppointment);
router.get('/:userId/:isDoctor', getAppointment);

export default router;
