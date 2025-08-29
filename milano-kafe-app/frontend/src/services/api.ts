import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL according to your backend setup

// Auth API calls
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

// Menu API calls
export const fetchMenuItems = async () => {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data;
};

export const fetchMenuItemById = async (id) => {
    const response = await axios.get(`${API_URL}/menu/${id}`);
    return response.data;
};

// Order API calls
export const createOrder = async (orderData) => {
    const response = await axios.post(`${API_URL}/order`, orderData);
    return response.data;
};

export const fetchUserOrders = async (userId) => {
    const response = await axios.get(`${API_URL}/order/user/${userId}`);
    return response.data;
};

// Review API calls
export const submitReview = async (reviewData) => {
    const response = await axios.post(`${API_URL}/review`, reviewData);
    return response.data;
};

// Contact API calls
export const submitContactForm = async (contactData) => {
    const response = await axios.post(`${API_URL}/contact`, contactData);
    return response.data;
};

// Utility function to set auth token
export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};