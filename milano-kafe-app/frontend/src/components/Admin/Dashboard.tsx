import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchOrders, fetchContacts } from '../../services/api';

const Dashboard: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const usersData = await fetchUsers();
            const ordersData = await fetchOrders();
            const contactsData = await fetchContacts();

            setUsers(usersData);
            setOrders(ordersData);
            setContacts(contactsData);
        };

        loadData();
    }, []);

    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-section">
                <h2>Registered Users</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                </ul>
            </div>
            <div className="dashboard-section">
                <h2>Orders</h2>
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>Order #{order.id} - {order.total} USD</li>
                    ))}
                </ul>
            </div>
            <div className="dashboard-section">
                <h2>Contact Requests</h2>
                <ul>
                    {contacts.map(contact => (
                        <li key={contact.id}>{contact.name} - {contact.message}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;