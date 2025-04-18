import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQrcode, FaLock, FaPalette, FaParagraph, FaLink, FaGlobe, FaInstagram, FaEnvelope, FaLinkedin, FaBarcode, FaHeading, FaBirthdayCake } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';
import { motion } from 'framer-motion';

const AppSelector = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const apps = [
    { name: 'QRCode Generator', url: '/qr-code', icon: <FaQrcode className="text-4xl text-blue-400" /> },
    { name: 'Strong Password Generator', url: '/gjenero-password', icon: <FaLock className="text-4xl text-green-400" /> },
    { name: 'Color Generator', url: '/gjenero-ngjyra', icon: <FaPalette className="text-4xl text-yellow-400" /> },
    { name: 'Lorem Ipsum Generator', url: '/gjenero-lorem-ipsum', icon: <FaParagraph className="text-4xl text-purple-400" /> },
    { name: 'URL Shortener', url: '/gjenero-url-te-shkurt', icon: <FaLink className="text-4xl text-red-400" /> },
    { name: 'Letter Counter', url: '/numro-karaktere', icon: <AiOutlineFileText className="text-4xl text-purple-700" /> },
    { name: 'Barcode Generator', url: '/gjenero-barcode', icon: <FaBarcode className="text-4xl text-red-900" /> },
    { name: 'Tekst Konvertues', url: '/tekst-konvertues', icon: <FaHeading className="text-4xl text-teal-800" />, status: 'new' },
    { name: 'Kalkulatori i Ditëlindjes', url: '/llogarit-ditelindjen', icon: <FaBirthdayCake className="text-4xl text-teal-300" />, status: 'new' },
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Titulli me efekt wave */}
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          QuickGen -{" "}
          <motion.span 
            className="text-teal-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Gjithçka që të duhet në çast
          </motion.span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 shadow-2xl rounded-xl p-8 text-center transition-all transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-opacity-50 hover:ring-blue-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
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
                    className={`text-white text-xs px-4 py-2 rounded-xl ${app.status === 'new' ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-lg' : 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-md cursor-pointer'}`}
                  >
                    {app.status === 'new' ? 'I Ri' : 'I Përditësuar'}
                  </span>
                </div>
              )}
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{app.name}</h2>
              <button
                onClick={() => openApp(app.url)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:ring focus:ring-blue-400 transition-all duration-300"
              >
                Hap Aplikacionin
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full sm:max-w-lg transform transition-all duration-500 scale-100 opacity-100">
            <h2 className="text-2xl font-semibold mb-4 text-white">Informacioni i Përditësimit</h2>
            <p className="text-lg mb-4 text-gray-300">{modalContent}</p>
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:ring focus:ring-red-400 transition-all duration-300"
            >
              Mbyll
            </button>
          </div>
        </motion.div>
      )}

      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <p className="text-lg font-semibold mb-2">
          © {new Date().getFullYear()} QuickGen - A GM Creation
        </p>

        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/gent-maloku-7985a4256/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition-colors duration-300 text-2xl">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/malokugentt/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-600 transition-colors duration-300 text-2xl">
            <FaInstagram />
          </a>

          <a href="mailto:contact@gentmaloku.live" className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-2xl">
            <FaEnvelope />
          </a>

          <a href="https://www.gentmaloku.live/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-500 transition-colors duration-300 text-2xl">
            <FaGlobe />
          </a>
        </div>
        <div className='text-gray-300 text-center py-4 pb-0'>
            <a href="#rreth-nesh" className="hover:text-blue-400 transition duration-300">
              Rreth Nesh
            </a> 
            {" / "}
            <a href="#kushtet-e-perdorimit" className="hover:text-blue-400 transition duration-300">
              Kushtet e Perdorimit
            </a>
        </div>

      </footer>
    </div>
  );
};

export default AppSelector;
