// src/components/UserProfile/UserStats/UserStats.js
import React from 'react';
import './userStats.scss';

const UserStats = ({ stats }) => {
    return (
        <div className="user-stats">
            <div className="user-stats__item">
                <span className="user-stats__value">{stats.challengesCompleted}</span>
                <span className="user-stats__label">Challenges Completed</span>
            </div>
            <div className="user-stats__item">
                <span className="user-stats__value">{stats.successRate}%</span>
                <span className="user-stats__label">Success Rate</span>
            </div>
            {/* Add more stats and graphical representations here */}
        </div>
    );
};

export default UserStats;
