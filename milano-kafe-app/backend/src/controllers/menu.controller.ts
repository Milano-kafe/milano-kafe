import { Request, Response } from 'express';
import MenuService from '../services/menu.service';

// Fetch all menu items
export const getAllMenuItems = async (req: Request, res: Response) => {
    try {
        const menuItems = await MenuService.getAllMenuItems();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu items', error });
    }
};

// Fetch a single menu item by ID
export const getMenuItemById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const menuItem = await MenuService.getMenuItemById(id);
        if (menuItem) {
            res.status(200).json(menuItem);
        } else {
            res.status(404).json({ message: 'Menu item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu item', error });
    }
};

// Add a new menu item
export const addMenuItem = async (req: Request, res: Response) => {
    const newItem = req.body;
    try {
        const createdItem = await MenuService.addMenuItem(newItem);
        res.status(201).json(createdItem);
    } catch (error) {
        res.status(500).json({ message: 'Error adding menu item', error });
    }
};

// Update an existing menu item
export const updateMenuItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedItem = req.body;
    try {
        const result = await MenuService.updateMenuItem(id, updatedItem);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Menu item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating menu item', error });
    }
};

// Delete a menu item
export const deleteMenuItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await MenuService.deleteMenuItem(id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Menu item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting menu item', error });
    }
};