import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('#000000');
  const [logo, setLogo] = useState(null);
  const [scanCount, setScanCount] = useState(0); 
  const [error, setError] = useState(''); 

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleColorChange = (e) => {
    setQrColor(e.target.value);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (!inputValue) {
      setError('Ju lutem, futni një URL ose tekst për të gjeneruar QR Code!');
      return;
    } else {
      setError(''); 
    }

    const canvas = document.getElementById('qr-code');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    link.click();
  };

  // Simulimi i numrit të skanimeve
  const simulateScan = () => {
    setScanCount(prevCount => prevCount + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Krijo QR Code</h2>
        
        <input
          type="text"
          placeholder="Fut URL ose tekst"
          value={inputValue}
          onChange={handleChange}
          className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <label className="text-white mb-2 block">Zgjidh ngjyrën e QR kodit:</label>
        
        <input
          type="color"
          value={qrColor}
          onChange={handleColorChange}
          className="w-10 h-10 rounded-md cursor-pointer transition-transform transform hover:scale-110"
          style={{ appearance: 'none', border: 'none', backgroundColor: 'transparent' }}
        />
        
        <label className="text-white mb-2 block">Ngarko logon (opsionale):</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
          className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {inputValue && (
          <div className="flex justify-center mb-6">
            <QRCodeCanvas
              id="qr-code"
              value={inputValue}
              size={200}
              bgColor="transparent"
              fgColor={qrColor}
              imageSettings={{
                src: logo,
                excavate: true,
                height: 50, // Rritur lartësia e logos
                width: 50,  // Rritur gjerësia e logos
              }}
              onClick={simulateScan} // Simulimi i skanimeve kur klikohet
            />
          </div>
        )}

        {/* Shfaq mesazhin e gabimit nëse është e nevojshme */}
        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg text-center mb-4">
            {error}
          </div>
        )}

        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
        >
          Shkarko QR Code
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;