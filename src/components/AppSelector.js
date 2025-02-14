import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQrcode, FaLock, FaPalette, FaParagraph, FaLink, FaGlobe, FaInstagram, FaEnvelope, FaLinkedin, FaBarcode  } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';

const AppSelector = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const apps = [
    { name: 'QRCode Generator', url: '/qrcode', icon: <FaQrcode className="text-4xl text-blue-400" /> },
    { name: 'Strong Password Generator', url: '/password', icon: <FaLock className="text-4xl text-green-400" /> },
    { name: 'Color Generator', url: '/colorgenerator', icon: <FaPalette className="text-4xl text-yellow-400" /> },
    { name: 'Lorem Ipsum Generator', url: '/loremipsumgenerator', icon: <FaParagraph className="text-4xl text-purple-400" /> },
    { name: 'URL Shortener', url: '/urlshortener', icon: <FaLink className="text-4xl text-red-400" /> },
    { name: 'Letter Counter', url: '/numro-karaktere', icon: <AiOutlineFileText className="text-4xl text-purple-700" />, status: 'new' },
    { name: 'Barcode Generator', url: '/gjenero-barcode', icon: <FaBarcode className="text-4xl text-red-900" />, status: 'new' }
  ];

  const openApp = (url) => {
    navigate(url);
  };

  const openModal = (info) => {
    setModalContent(info);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10 animate-fade-in">
          Mirësevini në QuickGen!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div
              key={index}
              className="relative bg-gray-800 shadow-2xl rounded-xl p-8 text-center transition-all transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-opacity-50"
            >
              <div className="flex justify-center mb-4 animate-bounce-slow">
                {app.icon}
              </div>
              {app.status && (
                <div
                  className="absolute top-2 right-2 mt-2 mr-2 cursor-pointer"
                  onClick={app.status === 'updated' ? () => openModal(app.updateInfo) : undefined}
                >
                  <span
                    className={`text-white text-xs px-4 py-2 rounded-xl ${app.status === 'new' ? 'bg-green-500 shadow-lg  ' : 'bg-blue-500 shadow-md cursor-pointer'}`}
                  >
                    {app.status === 'new' ? 'I Ri' : 'I Përditësuar'}
                  </span>
                </div>
              )}
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{app.name}</h2>
              <button
                onClick={() => openApp(app.url)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:ring focus:ring-blue-400 transition-all duration-300"
              >
                Hap Aplikacionin
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 py-6">
          <div className="bg-white p-8 rounded-lg max-w-md w-full sm:max-w-lg transform transition-all duration-500 scale-100 opacity-100 animate-modal">
            <h2 className="text-2xl font-semibold mb-4">Informacioni i Përditësimit</h2>
            <p className="text-lg mb-4">{modalContent}</p>
            <button
              onClick={closeModal}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:ring focus:ring-red-400 transition-all duration-300"
            >
              Mbyll
            </button>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-gray-300 text-center py-6">
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
