import React, { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [barcodeColor, setBarcodeColor] = useState('#000000');
  const [error, setError] = useState('');
  const [inputType, setInputType] = useState('Text');
  const [logo, setLogo] = useState(null);
  
  // Reference për elementin SVG
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (inputValue) {
      JsBarcode(barcodeRef.current, inputValue, {
        format: "CODE128", // Lloji i barcode
        lineColor: barcodeColor, // Ngjyra e linjave
        width: 2,              // Gjerësia e linjave
        height: 100,           // Lartësia e barcode
        displayValue: true,    // Tregon vlerën tekstuale nën barcode
      });
    }
  }, [inputValue, barcodeColor]); // Kjo do të thirret çdo herë që ndryshon inputValue ose barcodeColor

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
    setInputValue('');
    setError('');
  };

  const handleChange = (e) => setInputValue(e.target.value);

  const handleColorChange = (e) => setBarcodeColor(e.target.value);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const barcodeValue = inputValue;
    if (barcodeValue === '') {
      setError('Ju lutem, futni të dhëna të plota për të gjeneruar Barcode.');
      return;
    }

    const canvas = document.createElement('canvas');
    JsBarcode(canvas, barcodeValue, {
      format: "CODE128",
      lineColor: barcodeColor,
      width: 2,
      height: 100,
      displayValue: true,
    });
    
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'barcode.png';
    link.click();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Gjenerues Barkode</h2>
        
        <label className="text-white mb-2 block">Zgjidh llojin e përmbajtjes:</label>
        <select
          value={inputType}
          onChange={handleInputTypeChange}
          className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Text">Tekst</option>
          <option value="Numra">Numra</option>
        </select>

        <input
          type="text"
          placeholder={`Fut ${inputType.toLowerCase()} këtu`}
          value={inputValue}
          onChange={handleChange}
          className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-white mb-2 block">Zgjidh ngjyrën e Barcode:</label>
        <input
          type="color"
          value={barcodeColor}
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
            <svg
              ref={barcodeRef}
              width="200"
              height="100"
              style={{ margin: '0 auto' }}
            />
          </div>
        )}

        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg text-center mb-4">
            {error}
          </div>
        )}

        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
        >
          Shkarko Barcode
        </button>

        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Kthehu në faqën kryesore
        </button>
      </div>
    </div>
  );
};

export default BarcodeGenerator;
