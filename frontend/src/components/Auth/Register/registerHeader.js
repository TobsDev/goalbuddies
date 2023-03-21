import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterHeader = ({ onBack, currentStep }) => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className="register-header">
      {currentStep > 1 && (
        <button className="back-button" onClick={onBack}>
          Back
        </button>
      )}
      <button className="sign-in-button" onClick={handleSignInClick}>
        Sign In
      </button>
    </div>
  );
};

export default RegisterHeader;
