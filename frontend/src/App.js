import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Users from './components/Admin/Users/users';
import UserProfile from './components/UserProfile/userProfile';
import EditProfile from './components/UserProfile/EditProfile/editProfile';
import Dashboard from './components/Dashboard/dashboard';
import ChallengeList from './components/Challenge/ChallengesList/challengesList';
import ChallengeScreen from './components/Challenge/ChallengeDetail/challengeScreen';
import CreateChallengeForm from './components/Challenge/CreateChallengeForm/createChallengeForm';
import EditChallengeButton from './components/Challenge/EditChallenge/editChallenge';
import ChallengeLeaderboard from './components/Challenge/ChallengeLeaderboard/challengeLeaderboard';
import FriendList from './components/Social/FriendList/friendList';
import SearchUsers from './components/Social/SearchUsers/searchUsers';
import FriendRequest from './components/Social/FriendRequest/friendRequest';
import CoachProfile from './components/Coach/CoachProfile/coachProfile';
import CoachLedChallenge from './components/Coach/CoachLedChallenge/coachLedChallenge';
import CoachList from './components/Coach/CoachList/coachList';
import Onboarding from './components/Onboarding/onboarding';
import Register from './components/Auth//Register/register';
import Login from './components/Auth/Login/login';
import Logout from './components/Auth/Logout/logout';
import { UserProvider } from './Context/userContext';
import { ChallengeProvider } from './Context/challengeContext';
import { AdminProvider } from './Context/adminContext';
import withAuthentication from './components/Auth/withAuthentication';



function App() {
  
  const [loggedInUser, setLoggedInUser] = React.useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const handleSaveProfile = (updatedUser) => {
    console.log('Updated user:', updatedUser);
  };
  const handleLogin = (loggedInUserData) => {
    setLoggedInUser(loggedInUserData);
  };
  const AuthenticatedUserProfile = withAuthentication(UserProfile);
  const AuthenticatedDashboard = withAuthentication(Dashboard);

  return (
    <div className="App">
      <AdminProvider>
       <UserProvider value={{ user: loggedInUser, setUser: setLoggedInUser }}>
        <ChallengeProvider >
        <Router>
          {loggedInUser && <Header />}
          <Routes>
            <Route path="/profile" element={<AuthenticatedUserProfile />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/edit-profile" element={<EditProfile onSave={handleSaveProfile} />} />
            <Route path="/" element={loggedInUser ? <AuthenticatedDashboard /> : <Onboarding />} />
            <Route path="/api/challenges/create-challenge" element={<CreateChallengeForm />} />
            <Route path="/api/challenges/:id" element={<ChallengeScreen />} />
            <Route path="/challenge/:id/checkin" element={<ChallengeScreen />} />
            <Route path="/challenge/:id/leaderboard" element={<ChallengeLeaderboard />} />
            <Route path="/friends" element={<FriendList />} />
            <Route path="/search-users" element={<SearchUsers />} />
            <Route path="/friend-requests" element={<FriendRequest />} />
            <Route path="/coach/:id" element={<CoachProfile />} />
            <Route path="/coach-led-challenge/:id" element={<CoachLedChallenge />} />
            <Route path="/coaches" element={<CoachList />} />
            <Route path="/api/challenges" element={<ChallengeList />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/dashboard" element={loggedInUser ? <AuthenticatedDashboard /> : <Onboarding />} />
            <Route path="/edit-challenge/:challengeId" component={<EditChallengeButton />} />
            <Route path="/api/users" element={<Users />} />
            <Route path="/api/users/:id" element={<Users />} />
          </Routes>
          <Footer />
        </Router>
        </ChallengeProvider>
      </UserProvider>
      </AdminProvider>
    </div>
  );
}

export default App;
