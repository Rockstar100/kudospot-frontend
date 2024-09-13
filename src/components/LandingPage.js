
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Welcome to KudoSpot Dashboard</h2>
      <nav>
        <Link to="/give-kudos">
          <button>Give Kudos</button>
        </Link>
        <Link to="/analytics">
          <button>View Analytics</button>
        </Link>
      </nav>
    </div>
  );
};

export default LandingPage;
