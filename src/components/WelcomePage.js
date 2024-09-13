
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to KudoSpot</h1>
      <p>Promote engagement by giving kudos to your colleagues!</p>
      <Link to="/landing">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
