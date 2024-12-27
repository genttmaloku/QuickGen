import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQrcode, FaLock, FaPalette, FaParagraph, FaLink, FaBarcode, FaGlobe, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const AppSelector = () => {
  const navigate = useNavigate();

  const apps = [
    { name: 'QRCode Generator', url: '/qrcode', icon: <FaQrcode className="text-4xl" /> },
    { name: 'Strong Password Generator', url: '/password', icon: <FaLock className="text-4xl" /> },
    { name: 'Color Generator', url: '/colorgenerator', icon: <FaPalette className="text-4xl" /> },
    { name: 'Lorem Ipsum Generator', url: '/loremipsumgenerator', icon: <FaParagraph className="text-4xl" /> },
    { name: 'URL Shortener', url: '/urlshortener', icon: <FaLink className="text-4xl" /> },
   // { name: 'Barcode Generator', url: '/barcode', icon: <FaBarcode className="text-4xl" /> },
  ];

  const openApp = (url) => {
    navigate(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 animate__animated animate__fadeInUp">
          Mirësevini në QuickGen!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-xl rounded-lg p-6 text-center transition-all transform hover:scale-110 hover:shadow-2xl hover:ring-2 hover:ring-opacity-50"
            >
              <div className="mb-4 flex justify-center ">
                {app.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{app.name}</h2>
              <button
                onClick={() => openApp(app.url)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                Hap Aplikacionin
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 text-center py-4">
        <p className="text-lg font-semibold mb-2">
          © {new Date().getFullYear()} QuickGen - A GM Creation
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/gent-maloku-7985a4256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-600 transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/malokugentt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-600 transition-colors duration-300 text-2xl"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:contact@gentmaloku.live"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-2xl"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.gentmaloku.live/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-500 transition-colors duration-300 text-2xl"
          >
            <FaGlobe />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AppSelector;
