import { Request, Response } from 'express';
import Review from '../models/review.model';
import { createReview, getReviewsByMenuItem } from '../services/review.service';

export const addReview = async (req: Request, res: Response) => {
    try {
        const reviewData = req.body;
        const newReview = await createReview(reviewData);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};

export const getReviews = async (req: Request, res: Response) => {
    try {
        const menuItemId = req.params.menuItemId;
        const reviews = await getReviewsByMenuItem(menuItemId);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};