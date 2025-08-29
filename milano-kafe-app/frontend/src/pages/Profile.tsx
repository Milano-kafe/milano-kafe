import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { api } from '../services/api';
import ProfileInfo from '../components/Profile/ProfileInfo';
import Orders from '../components/Profile/Orders';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get(`/user/${user.id}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchUserOrders = async () => {
            try {
                const response = await api.get(`/orders/user/${user.id}`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            }
        };

        if (user) {
            fetchUserData();
            fetchUserOrders();
        }
    }, [user]);

    return (
        <div className="profile-page">
            {userData && <ProfileInfo user={userData} />}
            <Orders orders={orders} />
        </div>
    );
};

export default Profile;