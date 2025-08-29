import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';

const Checkout: React.FC = () => {
    const { user } = useContext(AuthContext);
    const history = useHistory();
    const [orderDetails, setOrderDetails] = useState({
        name: user?.name || '',
        phone: '',
        additionalNote: '',
    });
    const [cartItems, setCartItems] = useState<any[]>([]); // Replace with actual cart item type
    const [totalAmount, setTotalAmount] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOrderDetails({ ...orderDetails, [name]: value });
    };

    const handleCheckout = async () => {
        try {
            const response = await api.post('/orders', {
                ...orderDetails,
                items: cartItems,
                total: totalAmount,
            });
            if (response.status === 200) {
                // Handle successful order placement
                history.push('/profile'); // Redirect to profile or order confirmation page
            }
        } catch (error) {
            console.error('Error placing order:', error);
            // Handle error (e.g., show a notification)
        }
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={orderDetails.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={orderDetails.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Additional Note:</label>
                    <textarea
                        name="additionalNote"
                        value={orderDetails.additionalNote}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;