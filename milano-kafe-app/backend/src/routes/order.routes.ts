import { Router } from 'express';
import { createOrder, getOrders, getOrderById } from '../controllers/order.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Create a new order
router.post('/', authenticate, createOrder);

// Get all orders (admin only)
router.get('/', authenticate, getOrders);

// Get a specific order by ID
router.get('/:id', authenticate, getOrderById);

export default router;