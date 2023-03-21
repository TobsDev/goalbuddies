import React, { createContext, useState } from 'react';
import axios from 'axios';
import { config } from '../config'
export const AdminContext = createContext();



export const AdminProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState([]);

    const fetchAllUsers = async () => {
        try {
            const response = await axios.get(`${config.API_BASE_URL}/api/users`);
            setAllUsers(response.data);
        } catch (error) {
            console.error('Error fetching all users', error);
        }
    };

    return (
        <AdminContext.Provider value={{ allUsers, fetchAllUsers }}>
            {children}
        </AdminContext.Provider>
    );
};
