import express from 'express';
import { createReview, deleteReview, getReviewsByPatientId, getReviewsByDoctorId } from '../Controllers/review.controller';

const router = express.Router();

router.post('/create', createReview);
router.delete('/:reviewId', deleteReview);
router.get('/:patientId', getReviewsByPatientId);
router.get('/:doctorId', getReviewsByDoctorId);

export default router;