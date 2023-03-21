// src/components/Challenge/EditChallengeButton.js
import React from 'react';
import './editChallenge.scss';
import { useNavigate } from 'react-router-dom';

const EditChallengeButton = ({ challengeId }) => {
    const navigate = useNavigate();

    const handleEditChallenge = () => {
        navigate(`/edit-challenge/${challengeId}`);
    };

    // prevent editing if challenge is already started


    return (
        <button onClick={handleEditChallenge} className="edit-challenge-button">
            Edit Challenge
        </button>
    );
};

export default EditChallengeButton;