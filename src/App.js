import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppSelector from './components/AppSelector';
import QRCodeGenerator from './components/QRCodeGenerator';
import StrongPasswordGenerator from './components/StrongPasswordGenerator';
import Preloader from './components/Preloader'; // Importo komponentin e preloaderit

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Zgjatja e ngarkimit për 3 sekonda

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
                initial={{ x: '-100%', opacity: 0 }} // Fillon jashtë majtas
                animate={{ x: 0, opacity: 1 }} // Futet në ekran
                exit={{ x: '100%', opacity: 0 }} // Del jashtë djathtas
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Rrisni kohëzgjatjen dhe përdorni easin
                className="absolute inset-0" // Sigurohuni që e mbulon plotësisht
              >
                <AppSelector />
              </motion.div>
            }
          />
          <Route
            path="/qrcode"
            element={
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Zvogëloni kohëzgjatjen dhe përdorni easin
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
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Zvogëloni kohëzgjatjen dhe përdorni easin
                className="absolute inset-0"
              >
                <StrongPasswordGenerator />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
