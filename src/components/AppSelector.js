import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQrcode, FaLock, FaPalette, FaParagraph, FaLink,    } from 'react-icons/fa'; // Importo ikonën FaLink

const AppSelector = () => {
  const navigate = useNavigate();

  const apps = [
    { name: 'QRCode Generator', url: '/qrcode', icon: <FaQrcode className="text-4xl" /> },
    { name: 'Strong Password Generator', url: '/password', icon: <FaLock className="text-4xl" /> },
    { name: 'Color Generator', url: '/colorgenerator',     icon: <FaPalette className="text-4xl"/> },
    { name: 'Lorem Ipsum Generator', url: '/loremipsumgenerator',     icon: <FaParagraph FileAlt  className="text-4xl"/> },
    { name: 'URL Shortener', url: '/urlshortener',     icon: <FaLink  FileAlt  className="text-4xl"/> },

  ];

  const openApp = (url) => {
    navigate(url); // Përdorimi i navigate për të hapur aplikacionin
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">Mirësevini në QuickGen!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            <div className="mb-4 flex justify-center">
              {app.icon} {/* Ikona vendosur në mes */}
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{app.name}</h2>
            <button
              onClick={() => openApp(app.url)} // Përdorimi i `openApp` për të naviguar
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Hap Aplikacionin
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppSelector;
