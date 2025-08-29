import React from 'react';
import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem';

const CartList: React.FC = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleRemove = (id: string) => {
        removeFromCart(id);
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateQuantity(id, quantity);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-list">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={handleRemove}
                            onQuantityChange={handleQuantityChange}
                        />
                    ))}
                    <div className="total-amount">
                        <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;