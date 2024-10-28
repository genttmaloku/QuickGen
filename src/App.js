import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppSelector from './components/AppSelector';
import QRCodeGenerator from './components/QRCodeGenerator';
import StrongPasswordGenerator from './components/StrongPasswordGenerator';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppSelector />} />
        <Route path="/qrcode" element={<QRCodeGenerator />} />
        <Route path="/password" element={<StrongPasswordGenerator />} />
        {/* Shtoni rruge te tjera nese keni */}
      </Routes>
    </Router>
  );
};

export default App;
