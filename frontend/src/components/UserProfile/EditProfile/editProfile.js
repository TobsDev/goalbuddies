// src/components/UserProfile/EditProfile/EditProfile.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './editProfile.scss';
import { UserContext } from '../../../Context/userContext';
import { config } from '../../../config';
import axios from 'axios';

const EditProfile = ({ onSave }) => {
  const { user, setUser } = useContext(UserContext) || {};
  const [name, setName] = useState(user ? user.name : '');
  const [username, setUsername] = useState(user ? user.username : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [profilePicture, setProfilePicture] = useState(
    user ? user.profilePicture : ''
  );
  const [role, setRole] = useState(user ? user.role : '');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare the updated user data
    const updatedUser = { ...user, name, username, bio, profilePicture, role };

    try {
      // Make an API call to update the user data in the database
      await axios.put(`${config.API_BASE_URL}/api/users/${user._id}`, updatedUser);

      // Update the user data in the UserContext and local storage
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      // Navigate to the user profile page
      navigate('/profile');
    } catch (error) {
      // Handle the error (e.g., show an error message)
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <form className="edit-profile" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="bio">Bio</label>
      <textarea
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>

      <label htmlFor="profilePicture">Profile Picture</label>
      <input
        type="text"
        id="profilePicture"
        value={profilePicture}
        onChange={(e) => setProfilePicture(e.target.value)}
      />

      <label htmlFor="role">Role</label>
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
  

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfile;
