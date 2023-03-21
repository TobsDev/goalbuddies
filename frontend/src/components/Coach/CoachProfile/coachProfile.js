import React from 'react';
import './coachProfile.scss';

const CoachProfile = ({ coach }) => {
    return (
        <div className="coach-profile">
            <h1>{coach.name}</h1>
            <p>{coach.bio}</p>
            {/* Add more details and features for the coach profile */}
        </div>
    );
};

export default CoachProfile;
