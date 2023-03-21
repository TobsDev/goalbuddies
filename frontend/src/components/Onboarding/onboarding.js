// src/components/Onboarding/Onboarding.js
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './onboarding.scss';
import GoogleIcon from '../../assets/images/google-icon.svg';
import AppleIcon from '../../assets/images/apple-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import { useNavigate } from 'react-router-dom';


const Onboarding = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className="onboarding">
        <p className="onboarding__welcome">Welcome to Goal Buddies!</p>
        <h1 className="onboarding__title">GoalBuddies</h1>
        <button className="onboarding__button" onClick={handleShowModal}>
          Let's Go!
        </button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Get Started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button className="onboarding__option onboarding__option--signup" onClick={handleSignupClick}>
            Sign Up
          </button>
          <button className="onboarding__option onboarding__option--login" onClick={handleLoginClick}>
            Login
          </button>
          <div className="onboarding__social">
            <button className="onboarding__social-option onboarding__social-option--google">
              <img src={GoogleIcon} alt="Google icon" />
              Continue with Google
            </button>
            <button className="onboarding__social-option onboarding__social-option--apple">
              <img src={AppleIcon} alt="Apple icon" />
              Continue with Apple
            </button>
            <button className="onboarding__social-option onboarding__social-option--facebook">
              <img src={FacebookIcon} alt="Facebook icon" />
              Continue with Facebook
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Onboarding;
