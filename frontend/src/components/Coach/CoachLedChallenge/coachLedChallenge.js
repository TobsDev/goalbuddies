import React from 'react';
import './coachLedChallenge.scss';

const CoachLedChallenge = ({ challenge }) => {
    return (
        <div className="coach-led-challenge">
            <h1>{challenge.title}</h1>
            <p>Coach: {challenge.coach.name}</p>
            {/* Add more details and features for the coach-led challenge */}
        </div>
    );
};

export default CoachLedChallenge;
