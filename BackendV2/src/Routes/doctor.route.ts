import express from 'express';
import { createDoctor } from '../Controllers/doctor.controller';

const router = express.Router();

router.post('/create', createDoctor);

export default router;
