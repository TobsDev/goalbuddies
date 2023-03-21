// src/components/Challenge/JoinChallengeButton.js
import React, { useContext } from 'react';
import { ChallengeContext } from '../../../Context/challengeContext';
import { UserContext } from '../../../Context/userContext';


const JoinChallengeButton = ({ challengeId, ownerId }) => {
    const { joinChallenge } = useContext(ChallengeContext);
    const { user } = useContext(UserContext);


    const handleJoinChallenge = () => {
        joinChallenge(challengeId, user.id);
    };

    // Check if the current user is the challenge owner
    const isOwner = user && user.id === ownerId;

    if (isOwner) {
        // If the user is the owner, don't render the "Join Challenge" button
        return null;
    }

    return (
        <button onClick={handleJoinChallenge} className="join-challenge-button">
            Join Challenge
        </button>
    );
};

export default JoinChallengeButton;
