import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/userContext';

const LogoutButton = () => {
    const { setUser } = useContext(UserContext) || {};
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            // Clear any stored user data on the frontend, e.g., local or session storage.
            localStorage.removeItem('jwt'); // Replace 'jwt' with the name of the stored JWT token, if applicable.
            localStorage.removeItem('user'); // Replace 'user' with the name of the stored user data, if applicable.

            // Clear user data and JWT token from the context (or Redux store, or local storage)
            setUser(null);

            // Redirect the user to the login page.
            navigate('/onboarding');
        } catch (error) {
            console.error('Error logging out:', error);
            // Handle the error, e.g., show a notification or an error message to the user.
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
