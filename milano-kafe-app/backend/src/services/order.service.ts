import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { Menu } from '../models/menu.model';

class OrderService {
    async createOrder(userId: string, menuItems: Array<{ menuItemId: string; quantity: number }>, additionalInfo?: string) {
        const order = new Order({
            user: userId,
            items: menuItems,
            additionalInfo,
            status: 'pending',
            createdAt: new Date(),
        });

        await order.save();
        return order;
    }

    async getOrderById(orderId: string) {
        return await Order.findById(orderId).populate('user').populate('items.menuItemId');
    }

    async getOrdersByUserId(userId: string) {
        return await Order.find({ user: userId }).populate('items.menuItemId');
    }

    async updateOrderStatus(orderId: string, status: string) {
        return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    }

    async deleteOrder(orderId: string) {
        return await Order.findByIdAndDelete(orderId);
    }
}

export const orderService = new OrderService();