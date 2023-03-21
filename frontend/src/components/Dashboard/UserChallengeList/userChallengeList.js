import React, { useContext, useEffect } from 'react';
import './userChallengeList.scss';
import ChallengeCard from '../../Challenge/ChallengeCard/challengeCard';
import { ChallengeContext } from '../../../Context/challengeContext';

const UserChallengeList = () => {

    const { challenges, fetchChallenges } = useContext(ChallengeContext);

    useEffect(() => {
        fetchChallenges();
    }, []);

    if (!challenges) {
        return <div>Loading...</div>;
    }



    return (
        <div className="user-challenge-list">
            <h2 className='user-challenge-list__title'>Your Challenges</h2>
            <p className="user-challenge-list__count">Number of challenges: {challenges.length}</p>
            {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
};

export default UserChallengeList;
