import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectManagementPage from './pages/ProjectManagementPage';
import TimeTrackingPage from './pages/TimeTrackingPage';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">Project & Time Management</header>
      <Router>
        <Routes>
          <Route path="/" element={<ProjectManagementPage />} />
          <Route path="/time-tracking" element={<TimeTrackingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
