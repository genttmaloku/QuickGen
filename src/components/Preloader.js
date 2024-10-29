import React from 'react';

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="loader">
        <div className="w-16 h-16 border-8 border-dashed border-blue-600 rounded-full animate-spin"></div>
      </div>
      <h1 className="text-4xl font-bold text-white mt-4">QuickGen</h1>
      <p className="text-lg text-gray-400 mt-2">Gjithçka që të duhet, në cast</p>
    </div>
  );
};

export default Preloader;
