import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto p-8 space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 animate-gradient-x"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Politika e Privatësisë
            </motion.h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Kjo Politika e Privatësisë shpjegon se si ne mbledhim, përdorim dhe mbrojmë informacionet tuaja personale kur përdorni faqen tonë të internetit ose shërbimet tona.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Information Collection Card */}
            <motion.div 
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">Informacionet që Ne Mbledhim</h2>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Ne mbledhim të dhëna personale si emrin tuaj, adresën e emailit, adresën IP, dhe të dhëna përdorimi nga ndërveprimet tuaja me faqen tonë të internetit.
              </p>
            </motion.div>

            {/* Data Usage Card */}
            <motion.div 
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">Si Përdorim të Dhënat Tuaja</h2>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Informacionet tuaja përdoren për të përmirësuar përvojën e përdoruesit, për të dërguar përditësime, dhe për qëllime analitike.
              </p>
            </motion.div>

            {/* Cookies Card */}
            <motion.div 
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">Përdorimi i Cookies</h2>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Ne përdorim cookies për të përmirësuar përvojën tuaj në faqen tonë. Duke vazhduar të shfletoni, ju pranoni përdorimin e cookies.
              </p>
            </motion.div>

            {/* User Rights Card */}
            <motion.div 
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">Të Drejtat Tuaja</h2>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Keni të drejtë të aksesoni, korrigjoni ose fshini të dhënat tuaja personale. Kontaktoni në <a href="mailto:contact@gentmaloku.live" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">contact@gentmaloku.live</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="text-center pt-4 pb-4 border-t border-gray-700/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400">
          &copy; 2025 QuickGen. Të drejtat janë të rezervuara.
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
          A GM CREATION
        </p>
      </motion.footer>
    </div>
  );
};

export default PrivacyPolicy;
