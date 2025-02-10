import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Portal from './pages/Portal';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoModal from './components/InfoModal';
import LogoImage from './components/LogoImage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    <div>
      <InfoModal />
      <LogoImage />
    </div>
    </Router>
  );
};

export default App;