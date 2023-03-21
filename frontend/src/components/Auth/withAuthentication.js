import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

const withAuthentication = (WrappedComponent) => {
    const AuthenticatedComponent = (props) => {
        const { user } = useContext(UserContext) || {};
        const navigate = useNavigate();

        useEffect(() => {
            const isLoggedIn = user || localStorage.getItem('jwt'); // Replace 'jwt' with the name of the stored JWT token, if applicable.

            // If the user is not logged in, redirect them to the onboarding page
            if (!isLoggedIn) {
                navigate('/onboarding');
            }
        }, [user, navigate]);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuthentication;
