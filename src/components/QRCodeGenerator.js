import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [securityType, setSecurityType] = useState('WPA'); // Lloji i sigurisë për WiFi
  const [qrColor, setQrColor] = useState('#000000');
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState('');
  const [inputType, setInputType] = useState('URL'); // Lloji i përmbajtjes

  const qrRef = useRef();

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
    setInputValue('');
    setSsid('');
    setPassword('');
    setError('');
  };

  const handleChange = (e) => setInputValue(e.target.value);

  const handleColorChange = (e) => setQrColor(e.target.value);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (inputType === 'WiFi' && (!ssid || !password)) {
      setError('Ju lutem, futni SSID dhe fjalëkalimin për WiFi.');
      return;
    } else if (inputType !== 'WiFi' && !inputValue) {
      setError('Ju lutem, futni një URL ose tekst për të gjeneruar QR Code!');
      return;
    } else {
      setError('');
    }

    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'qrcode.png';
      link.click();
    } else {
      setError('Gabim gjatë gjenerimit të QR Code. Ju lutem provoni përsëri.');
    }
  };

  // Gjenero përmbajtjen për QR bazuar në llojin e përmbajtjes
  const getQRCodeValue = () => {
    if (inputType === 'WiFi') {
      return `WIFI:S:${ssid};T:${securityType};P:${password};;`;
    }
    return inputValue;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Krijo QR Code</h2>

        <label className="text-white mb-2 block">Zgjidh llojin e përmbajtjes:</label>
        <select
          value={inputType}
          onChange={handleInputTypeChange}
          className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="URL">URL</option>
          <option value="Text">Tekst</option>
          <option value="WiFi">WiFi</option>
        </select>

        {inputType === 'WiFi' ? (
          <>
            <input
              type="text"
              placeholder="SSID (emri i WiFi)"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
              className="border border-gray-600 rounded-lg p-3 w-full mb-4 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Fjalëkalimi i WiFi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-600 rounded-lg p-3 w-full mb-4 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="text-white mb-2 block">Lloji i Sigurisë:</label>
            <select
              value={securityType}
              onChange={(e) => setSecurityType(e.target.value)}
              className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="WPA">WPA</option>
              <option value="WEP">WEP</option>
              <option value="nopass">Asnjë</option>
            </select>
          </>
        ) : (
          <input
            type="text"
            placeholder={`Fut ${inputType.toLowerCase()} këtu`}
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

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

        <div ref={qrRef} className="flex justify-center mb-6">
          {(inputValue || (ssid && password)) && (
            <QRCodeCanvas
              id="qr-code"
              value={getQRCodeValue()}
              size={200}
              bgColor="transparent"
              fgColor={qrColor}
              imageSettings={{
                src: logo,
                excavate: true,
                height: 50,
                width: 50,
              }}
            />
          )}
        </div>

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
