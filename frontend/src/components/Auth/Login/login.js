import React, { useState, useContext } from 'react';
import axios from 'axios';
import { config } from '../../../config';
import { UserContext } from '../../../Context/userContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/users/login`, { email, password });
      const { data } = response;
      console.log(data);

      // Update the loggedInUser state in the App component
      onLogin(response.data);
      // Redirect the user to the dashboard

      
      // Save user data and JWT token
      setUser(data.user);
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', JSON.stringify(data.user)); // Save user object to local storage

      // Redirect to the dashboard or another protected page
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error &&   <p>{error}</p>}
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Login</button>
  </form>
  <p>Don't have an account? <Link to="/signup">Register</Link></p>
</div>
);
};

export default Login;
