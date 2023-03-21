import React, { useContext } from 'react';
import './challengeCard.scss';
import JoinChallengeButton from '../../Challenge/JoinChallenge/joinChallenge';
import EditChallengeButton from '../../Challenge/EditChallenge/editChallenge';
import { UserContext } from '../../../Context/userContext';
import { Link } from 'react-router-dom';


const ChallengeCard = ({ challenge }) => {

    const { user } = useContext(UserContext);
    const isOwner = user && user.id === challenge.ownerId;

    return (
        <Link to={`api/challenges/${challenge._id}`} className="challenge-card-link">
            <div className="challenge-card">
                <h2 className="challenge-card__title">{challenge.title}</h2>
                <p className="challenge-card__description">{challenge.description}</p>
                <p><strong>Duration:</strong> {challenge.duration}</p>
                <p><strong>Buy-in:</strong> {challenge.buyIn}</p>
                <p><strong>Privacy:</strong> {challenge.privacy ? 'Private' : 'Public'}</p>
                <p><strong>Category:</strong> {challenge.category}</p>
                <p><strong>Owner ID:</strong> {challenge.ownerId}</p>
                <p><strong>Challenge ID:</strong> {challenge._id} </p>
                <p><strong>Participants: </strong>{challenge.particpants}</p>
                <p><strong>Owner: </strong>{challenge.ownerId}</p>
                <JoinChallengeButton challengeId={challenge._id} ownerId={challenge.ownerId} />
                {isOwner && <EditChallengeButton challengeId={challenge._id} />}
            </div>
        </Link>
    );
};

export default ChallengeCard;
