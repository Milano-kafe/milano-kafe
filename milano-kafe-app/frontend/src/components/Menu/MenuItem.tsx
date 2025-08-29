import React from 'react';

interface MenuItemProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    onAddToCart: (id: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, name, description, price, imageUrl, onAddToCart }) => {
    return (
        <div className="menu-item">
            <img src={imageUrl} alt={name} className="menu-item-image" />
            <h3 className="menu-item-name">{name}</h3>
            <p className="menu-item-description">{description}</p>
            <p className="menu-item-price">${price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(id)} className="add-to-cart-button">
                Add to Cart
            </button>
        </div>
    );
};

export default MenuItem;