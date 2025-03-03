// src/components/ThankYouPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigate('/rides');
    }, 2000);

  
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thank-you-page">
      <h2>Thank You for Your Payment!</h2>
      <p>Your payment has been successfully processed. You will be redirected back to the ride list shortly.</p>
    </div>
  );
};

export default ThankYouPage;
