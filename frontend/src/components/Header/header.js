// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <h1>GoalBuddies</h1>
            <Link to="/profile">User Profile</Link>
            <br/>
            <Link to="/dashboard">Dashboard</Link>
            <br/>
            <Link to="/coaches">Coaches</Link>
            <br/>
            {/* Add navigation links and user menu here */}
        </header>
    );
};

export default Header;
