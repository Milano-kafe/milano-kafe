import React, { useEffect, useState } from 'react';
import { MenuItem } from './MenuItem';
import { fetchMenuItems } from '../../services/api';

const MenuList: React.FC = () => {
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getMenuItems = async () => {
            try {
                const items = await fetchMenuItems();
                setMenuItems(items);
            } catch (err) {
                setError('Failed to load menu items');
            } finally {
                setLoading(false);
            }
        };

        getMenuItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="menu-list">
            {menuItems.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MenuList;