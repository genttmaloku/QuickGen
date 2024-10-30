import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppSelector from './components/AppSelector';
import QRCodeGenerator from './components/QRCodeGenerator';
import StrongPasswordGenerator from './components/StrongPasswordGenerator';
import Preloader from './components/Preloader';
import ColorGenerator from './components/ColorGenerator';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Kohëzgjatja e ngarkimit për 1.5 sekonda

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <AppSelector />
              </motion.div>
            }
          />
          <Route
            path="/qrcode"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <QRCodeGenerator />
              </motion.div>
            }
          />
          <Route
            path="/password"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <StrongPasswordGenerator />
              </motion.div>
            }
          />
          <Route
            path="/colorgenerator"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <ColorGenerator />
              </motion.div>
            }
          />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
