import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppSelector from './components/AppSelector';
import QRCodeGenerator from './components/QRCodeGenerator';
import StrongPasswordGenerator from './components/StrongPasswordGenerator';
import Preloader from './components/Preloader';
import ColorGenerator from './components/ColorGenerator';
import GenerateLoremIpsum from './components/GenerateLoremIpsum';
import UrlShortener from './components/UrlShortener';
import BarcodeGenerator from './components/BarcodeGenerator';
import LetterCounter from './components/LetterCounter';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';



const routes = [
  { path: '/', element: <AppSelector /> },
  { path: '/qrcode', element: <QRCodeGenerator /> },
  { path: '/password', element: <StrongPasswordGenerator /> },
  { path: '/colorgenerator', element: <ColorGenerator /> },
  { path: '/loremipsumgenerator', element: <GenerateLoremIpsum /> },
  { path: '/urlshortener', element: <UrlShortener /> },

  
  //{ path: '/barcode', element: <BarcodeGenerator /> },
  //{ path: '/lettercounter', element: <LetterCounter /> },
];

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  {element}
                </motion.div>
              }
            />
          ))}
        
        </Routes>
     
      </div>
    </Router>
  );
};

export default App;
