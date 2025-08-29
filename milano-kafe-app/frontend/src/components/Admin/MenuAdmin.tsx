import React, { useEffect, useState } from 'react';
import { fetchMenuItems, addMenuItem, deleteMenuItem } from '../../services/api';

const MenuAdmin = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        loadMenuItems();
    }, []);

    const loadMenuItems = async () => {
        const items = await fetchMenuItems();
        setMenuItems(items);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleAddMenuItem = async () => {
        await addMenuItem(newItem);
        setNewItem({ name: '', price: '', description: '' });
        loadMenuItems();
    };

    const handleDeleteMenuItem = async (id) => {
        await deleteMenuItem(id);
        loadMenuItems();
    };

    return (
        <div>
            <h1>Menu Administration</h1>
            <div>
                <h2>Add New Menu Item</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={newItem.description}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddMenuItem}>Add Item</button>
            </div>
            <h2>Current Menu Items</h2>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => handleDeleteMenuItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuAdmin;