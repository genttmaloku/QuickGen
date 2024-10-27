import React, { useState } from 'react';
import QRCodeGenerator from './QRCodeGenerator'; // Importoni komponentët e aplikacioneve
import StrongPasswordGenerator from './StrongPasswordGenerator';

const AppSelector = () => {
  const [activeApp, setActiveApp] = useState(null);

  const apps = [
    { name: 'QRCode Generator', component: <QRCodeGenerator /> },
    { name: 'Strong Password Generator', component: <StrongPasswordGenerator /> },
    // Mund të shtoni aplikacione të tjera këtu
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">Mirësevini në QuickGen!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app, index) => (
          <div key={index} className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{app.name}</h2>
            <button
              onClick={() => setActiveApp(app.component)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Hap Aplikacionin
            </button>
          </div>
        ))}
      </div>

      {activeApp && (
        <div className="mt-8 w-full">
          {activeApp}
        </div>
      )}
    </div>
  );
};

export default AppSelector;
