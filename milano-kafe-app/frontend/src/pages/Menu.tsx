import React, { useEffect, useState } from 'react';
import MenuItem from '../components/Menu/MenuItem';
import { fetchMenuItems } from '../services/api';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMenuItems = async () => {
            try {
                const items = await fetchMenuItems();
                setMenuItems(items);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getMenuItems();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="menu-page">
            <h1>Menu</h1>
            <div className="menu-list">
                {menuItems.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Menu;