import React from 'react';
import { useEffect, useState } from 'react';
import { getUsers, getOrders, getContacts } from '../services/api';
import Dashboard from '../components/Admin/Dashboard';
import Users from '../components/Admin/Users';
import Orders from '../components/Admin/Orders';
import Contacts from '../components/Admin/Contacts';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await getUsers();
            const ordersData = await getOrders();
            const contactsData = await getContacts();
            setUsers(usersData);
            setOrders(ordersData);
            setContacts(contactsData);
        };
        fetchData();
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <Dashboard />;
            case 'users':
                return <Users users={users} />;
            case 'orders':
                return <Orders orders={orders} />;
            case 'contacts':
                return <Contacts contacts={contacts} />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="admin-page">
            <h1>Admin Panel</h1>
            <nav>
                <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
                <button onClick={() => setActiveTab('users')}>Users</button>
                <button onClick={() => setActiveTab('orders')}>Orders</button>
                <button onClick={() => setActiveTab('contacts')}>Contacts</button>
            </nav>
            <div className="admin-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Admin;