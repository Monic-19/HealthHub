import express from 'express';
import { createDoctor, doctors } from '../Controllers/doctor.controller';

const router = express.Router();

router.post('/create', createDoctor);
router.get('/info', doctors);

export default router;
