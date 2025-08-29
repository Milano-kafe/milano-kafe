import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
    async getUserProfile(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const userProfile = await UserService.getUserProfile(userId);
            res.status(200).json(userProfile);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user profile', error });
        }
    }

    async updateUserProfile(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const updatedData = req.body;
            const updatedProfile = await UserService.updateUserProfile(userId, updatedData);
            res.status(200).json(updatedProfile);
        } catch (error) {
            res.status(500).json({ message: 'Error updating user profile', error });
        }
    }

    async getUserOrders(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const orders = await UserService.getUserOrders(userId);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user orders', error });
        }
    }

    async deleteUserAccount(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            await UserService.deleteUserAccount(userId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user account', error });
        }
    }
}

export default new UserController();