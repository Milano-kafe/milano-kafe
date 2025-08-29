import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
    async createOrder(req: Request, res: Response) {
        try {
            const orderData = req.body;
            const newOrder = await OrderService.createOrder(orderData);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error });
        }
    }

    async getOrder(req: Request, res: Response) {
        try {
            const orderId = req.params.id;
            const order = await OrderService.getOrderById(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order', error });
        }
    }

    async getAllOrders(req: Request, res: Response) {
        try {
            const orders = await OrderService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving orders', error });
        }
    }

    async updateOrder(req: Request, res: Response) {
        try {
            const orderId = req.params.id;
            const updatedData = req.body;
            const updatedOrder = await OrderService.updateOrder(orderId, updatedData);
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(updatedOrder);
        } catch (error) {
            res.status(500).json({ message: 'Error updating order', error });
        }
    }

    async deleteOrder(req: Request, res: Response) {
        try {
            const orderId = req.params.id;
            const deletedOrder = await OrderService.deleteOrder(orderId);
            if (!deletedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting order', error });
        }
    }
}

export default new OrderController();