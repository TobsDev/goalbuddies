import React, { useContext } from 'react';
import { UserContext } from '../../../Context/userContext';

const PremiumFeature = ({ children }) => {
    const { user } = useContext(UserContext);

    if (user?.role === 'premium-user' || user?.role === 'admin') {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        return null;
    }
};

export default PremiumFeature;
