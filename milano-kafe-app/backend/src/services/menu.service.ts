import { MenuItem } from '../models/menu.model';
import { Request, Response } from 'express';

class MenuService {
    private menuItems: MenuItem[] = [];

    public async getAllMenuItems(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json(this.menuItems);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching menu items' });
        }
    }

    public async addMenuItem(req: Request, res: Response): Promise<Response> {
        try {
            const newItem: MenuItem = req.body;
            this.menuItems.push(newItem);
            return res.status(201).json(newItem);
        } catch (error) {
            return res.status(500).json({ message: 'Error adding menu item' });
        }
    }

    public async updateMenuItem(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const index = this.menuItems.findIndex(item => item.id === id);
            if (index === -1) {
                return res.status(404).json({ message: 'Menu item not found' });
            }
            this.menuItems[index] = { ...this.menuItems[index], ...req.body };
            return res.status(200).json(this.menuItems[index]);
        } catch (error) {
            return res.status(500).json({ message: 'Error updating menu item' });
        }
    }

    public async deleteMenuItem(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            this.menuItems = this.menuItems.filter(item => item.id !== id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting menu item' });
        }
    }
}

export default new MenuService();