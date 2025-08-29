import { Review } from '../models/review.model';
import { User } from '../models/user.model';
import { Menu } from '../models/menu.model';

export const createReview = async (userId: string, menuId: string, reviewData: any) => {
    const review = new Review({
        user: userId,
        menu: menuId,
        ...reviewData
    });
    return await review.save();
};

export const getReviewsByMenuId = async (menuId: string) => {
    return await Review.find({ menu: menuId }).populate('user', 'name');
};

export const getReviewById = async (reviewId: string) => {
    return await Review.findById(reviewId).populate('user', 'name');
};

export const updateReview = async (reviewId: string, reviewData: any) => {
    return await Review.findByIdAndUpdate(reviewId, reviewData, { new: true });
};

export const deleteReview = async (reviewId: string) => {
    return await Review.findByIdAndDelete(reviewId);
};