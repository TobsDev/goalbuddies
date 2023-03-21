import React, { useContext } from 'react';
import './challengesList.scss';
import ChallengeCard from '../ChallengeCard/challengeCard';
import { ChallengeContext } from '../../../Context/challengeContext';

const ChallengeList = () => {
    const { challenges } = useContext(ChallengeContext);

    return (
        <div className="challenge-list">
            <h1>Challenges</h1>
            {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
};

export default ChallengeList;
