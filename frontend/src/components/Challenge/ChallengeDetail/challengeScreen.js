import React from 'react';
import './challengeScreen.scss';
import { Link } from 'react-router-dom';

const ChallengeScreen = ({ challenge }) => {
    return (
        <div className="challenge-screen">
            <Link to="/dashboard">Back</Link>
            <h1>{challenge.name}</h1>
            <p>{challenge.description}</p>
            <h2>Rules</h2>
            <ul>
                {challenge.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                ))}
            </ul>
            <p><strong>Duration:</strong> {challenge.duration}</p>
            <p><strong>Buy-in:</strong> {challenge.buyIn}</p>
            <p><strong>Privacy:</strong> {challenge.privacy ? 'Private' : 'Public'}</p>
            <p><strong>Category:</strong> {challenge.category}</p>

            <button>Share</button>
            <button>Start Now</button>
            <Link to={`/edit-challenge/${challenge._id}`}>Edit</Link>
            <button>Set Countdown</button>
        </div>
    );
};

export default ChallengeScreen;
