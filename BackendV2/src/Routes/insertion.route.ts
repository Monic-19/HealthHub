import express from 'express';
import {saveDoctorFullInformation} from '../Controllers/Insertion.controller';
const router = express.Router();

router.post('/doctor',saveDoctorFullInformation);

export default router;



