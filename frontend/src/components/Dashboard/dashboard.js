import React from 'react';
import './dashboard.scss';
import UserChallengeList from './UserChallengeList/userChallengeList';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../Context/userContext';
import CreateChallengeButton from '../Challenge/CreateChallenge/createChallenge';


const Dashboard = () => {

  const { user } = useContext(UserContext) || {};

  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard, {user.name}</h1>
      <UserChallengeList />
      <br/>
      <Link >
        <CreateChallengeButton />
      </Link>
      <br/>
      <Link to="/friends">Friends</Link>
    </div>
  );
};

export default Dashboard;
