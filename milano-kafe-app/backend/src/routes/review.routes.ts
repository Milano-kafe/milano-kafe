import { Router } from 'express';
import { createReview, getReviewsByMenuItem, updateReview, deleteReview } from '../controllers/review.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Route to create a new review
router.post('/:menuItemId', authenticate, createReview);

// Route to get reviews for a specific menu item
router.get('/:menuItemId', getReviewsByMenuItem);

// Route to update a review
router.put('/:reviewId', authenticate, updateReview);

// Route to delete a review
router.delete('/:reviewId', authenticate, deleteReview);

export default router;