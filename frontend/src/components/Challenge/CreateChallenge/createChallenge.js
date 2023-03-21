import React from 'react';
import { Link } from 'react-router-dom';

const CreateChallengeButton = () => {
    return (
        <Link to="/api/challenges/create-challenge" className="create-challenge-button">
            Create Challenge
        </Link>
    );
};

export default CreateChallengeButton;
