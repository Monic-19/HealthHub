import express from 'express';
import { createReview, deleteReview, getReviewsByUserId } from '../Controllers/review.controller';

const router = express.Router();

router.post('/create', createReview);
router.delete('/:reviewId', deleteReview);
router.get('/:userId', getReviewsByUserId);

export default router;