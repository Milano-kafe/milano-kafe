import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartList from '../components/Cart/CartList';
import Checkout from '../components/Cart/Checkout';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <CartList />
                    <Checkout />
                </>
            )}
        </div>
    );
};

export default Cart;