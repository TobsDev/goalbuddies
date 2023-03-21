import React, { useState } from 'react';
import axios from 'axios';
import { config } from '../../../config';
import RegisterHeader from './registerHeader';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [motivation, setMotivation] = useState([]);
  const navigate = useNavigate();

  const stepHeadlines = [
    'Create your account',
    'Tell us your name',
    'Enter your email',
    'Set your password',
    'Select your motivations',
  ];

  const stepDescriptions = [
    'Choose a unique username for your account.',
    'What should we call you?',
    'We will send you a confirmation email.',
    'Choose a strong and secure password.',
    'Let us know why you joined.',
  ];

  const motivationsList = [
    'Improve my health',
    'Lose weight',
    'Build muscle',
    'Gain more energy',
    'Join a community',
    'Challenge myself',
    'Learn new skills',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/users/register`, { username, name, email, password });
      console.log(response.data);
      setRegistrationSuccess(true);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleMotivationChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setMotivation([...motivation, value]);
    } else {
      setMotivation(motivation.filter((item) => item !== value));
    }
  };

  return (
    <div className="register">
      <RegisterHeader onBack={handleBack} currentStep={currentStep} />
      <h2 className="register__headline">{stepHeadlines[currentStep - 1]}</h2>
      <p className="register__description">{stepDescriptions[currentStep - 1]}</p>
      {error && <p className="register__error">{error}</p>}
      {!registrationSuccess && (
        <form onSubmit={currentStep === 4 ? handleSubmit : handleNext} className="register__form">
          {currentStep === 1 && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="register__input"
            />
          )}
          {currentStep === 2 && (
            <input
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="register__input"
            />
          )}
          {currentStep === 3 && (
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="register__input"
            />
          )}
          {currentStep === 4 && (
            <>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="register__input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="register__input"
              />
            </>
          )}
          <button type="submit" className="register__button">
            {currentStep === 4 ? 'Register' : 'Next'}
          </button>
        </form>
      )}
      {registrationSuccess && currentStep === 5 && (
        <div className="register__motivation">
          <form>
            {motivationsList.map((item, index) => (
              <label key={index} className="register__motivation-label">
                <input
                  type="checkbox"
                  value={item}
                  onChange={handleMotivationChange}
                  className="register__motivation-input"
                />
                {item}
              </label>
            ))}
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="register__motivation-button"
            >
              Next
            </button>
          </form>
        </div>
      )}
      {currentStep === 6 && (
        <div className="register__success">
          <p>Thank you for registering and sharing your motivations! You will be redirected to the dashboard shortly.</p>
          {/* Redirect to dashboard after 5 seconds */}
          {setTimeout(() => navigate('/dashboard'), 50000)}
        </div>
      )}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;

