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
                initial={{ opacity: 0, y: 50 }} // Fillon me opacity 0 dhe lëviz poshtë
                animate={{ opacity: 1, y: 0 }} // Shfaqet me opacity 1 dhe kthehet në pozita normale
                exit={{ opacity: 0, y: -50 }} // Del me opacity 0 dhe lëviz lart
                transition={{ duration: 0.8, ease: 'easeInOut' }} // Zgjat kohëzgjatjen në 0.8 sekonda
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
                initial={{ opacity: 0, y: 50 }} // Fillon me opacity 0 dhe lëviz poshtë
                animate={{ opacity: 1, y: 0 }} // Shfaqet me opacity 1 dhe kthehet në pozita normale
                exit={{ opacity: 0, y: -50 }} // Del me opacity 0 dhe lëviz lart
                transition={{ duration: 0.8, ease: 'easeInOut' }} // Zgjat kohëzgjatjen në 0.8 sekonda
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
                initial={{ opacity: 0, y: 50 }} // Fillon me opacity 0 dhe lëviz poshtë
                animate={{ opacity: 1, y: 0 }} // Shfaqet me opacity 1 dhe kthehet në pozita normale
                exit={{ opacity: 0, y: -50 }} // Del me opacity 0 dhe lëviz lart
                transition={{ duration: 0.8, ease: 'easeInOut' }} // Zgjat kohëzgjatjen në 0.8 sekonda
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
