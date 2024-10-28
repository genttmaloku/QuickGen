import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppSelector = () => {
  const navigate = useNavigate();

  const apps = [
    { name: 'QRCode Generator', url: '/qrcode' },
    { name: 'Strong Password Generator', url: '/password' },
    // Mund të shtoni aplikacione të tjera këtu
  ];

  const openApp = (url) => {
    navigate(url); // Përdorimi i navigate për të hapur aplikacionin
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">Mirësevini në QuickGen!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app, index) => (
          <div key={index} className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{app.name}</h2>
            <button
              onClick={() => openApp(app.url)} // Përdorimi i `openApp` për të naviguar
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
