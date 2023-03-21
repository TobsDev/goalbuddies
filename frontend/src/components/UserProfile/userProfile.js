// src/components/UserProfile/UserProfile.js
import React, { useContext } from 'react';
import './userProfile.scss';
import UserStats from './UserStats/userStats';
import { UserContext } from '../../Context/userContext';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useContext(UserContext) || {};

    const defaultUser = {
        name: 'Anonymous',
        username: 'anonymous',
        bio: 'Not logged in',
        profilePicture: 'https://via.placeholder.com/150',
    };

    const currentUser = user || defaultUser;

    if (!currentUser) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile">
            <img src={currentUser.profilePicture} alt="Profile" className="user-profile__picture" />
            <h2 className="user-profile__name">Name: {currentUser.name}</h2>
            <p className="user-profile__username">Username: @{currentUser.username}</p>
            <p className="user-profile__bio">Bio: {currentUser.bio}</p>
            <p className="user-profile__email">Email: {currentUser.email}</p>
            <p className="user-profile__id">ID:{currentUser.id}</p>
            <p className="user-profile__createdAt">CreatedAt: {currentUser.createdAt}</p>
            <p className="user-profile__role">Role: {currentUser.role}</p>
            <Link to="/edit-profile">Edit Profile</Link>
            <UserStats stats={currentUser} />
            <Link to="/logout">Logout</Link>
        </div>
    );
};

export default UserProfile;
