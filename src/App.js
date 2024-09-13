
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LandingPage from './components/LandingPage';
import GiveKudos from './components/GiveKudos';
import Analytics from './components/Analytics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/give-kudos" element={<GiveKudos />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
