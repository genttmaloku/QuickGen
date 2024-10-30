import React, { useState } from 'react';

const ColorGenerator = () => {
  const [color1, setColor1] = useState('#ffffff');
  const [color2, setColor2] = useState('#000000');
  const [direction, setDirection] = useState('to right');
  const [isSingleColor, setIsSingleColor] = useState(false);
  const [copySuccess, setCopySuccess] = useState({ hex1: false, rgb1: false, hex2: false, rgb2: false, gradient: false });

  const [generatedColor1, setGeneratedColor1] = useState(null);
  const [generatedColor2, setGeneratedColor2] = useState(null);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  const handleColorChange1 = (event) => {
    setColor1(event.target.value);
  };

  const handleColorChange2 = (event) => {
    setColor2(event.target.value);
  };

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const copyToClipboard = (value, type) => {
    navigator.clipboard.writeText(value);
    setCopySuccess((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => setCopySuccess((prev) => ({ ...prev, [type]: false })), 2000);
  };

  const isLightColor = (color) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;
    return (0.299 * r + 0.587 * g + 0.114 * b) > 186;
  };

  const generateGradient = () => {
    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    return gradient;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Ngjyrat për një Klik</h2>

        <div
          style={{ background: isSingleColor ? color1 : generateGradient() }}
          className="w-full h-64 mb-4 rounded border-4 border-gray-700"
        />

        <div className="flex justify-between mb-4">
          <div>
            <label className="text-white mb-2 block">Zgjidh ngjyrën:</label>
            <input
              type="color"
              value={color1}
              onChange={handleColorChange1}
              className="w-10 h-10 rounded-md cursor-pointer transition-transform transform hover:scale-110"
              style={{ appearance: 'none', border: 'none', backgroundColor: 'transparent' }}
            />
          </div>

          {!isSingleColor && (
            <div>
              <label className="text-white mb-2 block">Zgjidh ngjyrën 2:</label>
              <input
                type="color"
                value={color2}
                onChange={handleColorChange2}
                className="w-10 h-10 rounded-md cursor-pointer transition-transform transform hover:scale-110"
                style={{ appearance: 'none', border: 'none', backgroundColor: 'transparent' }}
              />
            </div>
          )}
        </div>

        {!isSingleColor && (
          <div className="mb-4">
            <label className="text-white mb-2 block">Zgjidh direksionin e gradientit:</label>
            <select
              value={direction}
              onChange={handleDirectionChange}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-600"
            >
              <option value="to right">Djathtas</option>
              <option value="to left">Majtas</option>
              <option value="to bottom">Poshtë</option>
              <option value="to top">Lart</option>
              <option value="to bottom right">Poshtë Djathtas</option>
              <option value="to bottom left">Poshtë Majtas</option>
              <option value="to top right">Lart Djathtas</option>
              <option value="to top left">Lart Majtas</option>
            </select>
          </div>
        )}

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => {
              const newColor1 = generateRandomColor();
              const newColor2 = generateRandomColor();
              setColor1(newColor1);
              setColor2(newColor2);
              setIsSingleColor(false);
              setGeneratedColor1(newColor1);
              setGeneratedColor2(newColor2);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Gjenero Gradient
          </button>

          <button
            onClick={() => {
              const newColor = generateRandomColor();
              setColor1(newColor);
              setColor2(newColor);
              setIsSingleColor(true);
              setGeneratedColor1(newColor);
              setGeneratedColor2(null);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Gjenero Ngjyrë të Vetme
          </button>
        </div>

        <h3 className="text-lg font-bold text-white">Ngjyrat e Gjeneruara:</h3>
        {/* Shfaq ngjyrat e gjeneruara */}
        {generatedColor1 && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <p className="text-white">Ngjyra 1: <span style={{ color: generatedColor1 }}>{generatedColor1}</span></p>
            <p className="text-white">RGB: <span>{hexToRgb(generatedColor1)}</span></p>
          </div>
        )}

        {generatedColor2 && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <p className="text-white">Ngjyra 2: <span style={{ color: generatedColor2 }}>{generatedColor2}</span></p>
            <p className="text-white">RGB: <span>{hexToRgb(generatedColor2)}</span></p>
          </div>
        )}

        <div className="mt-4">
          <button
            onClick={() => copyToClipboard(color1, 'hex1')}
            className={`${
              copySuccess.hex1 ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'
            } text-${isLightColor(color1) ? 'black' : 'white'} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4`}
            style={{ backgroundColor: generatedColor1 || color1 }}
          >
            {copySuccess.hex1 ? 'Kopjuar!' : ' HEX Ngjyra '}
          </button>

          <button
            onClick={() => copyToClipboard(hexToRgb(color1), 'rgb1')}
            className={`${
              copySuccess.rgb1 ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'
            } text-${isLightColor(color1) ? 'black' : 'white'} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4`}
            style={{ backgroundColor: generatedColor1 || color1 }}
          >
            {copySuccess.rgb1 ? 'Kopjuar!' : ' RGB Ngjyra '}
          </button>

          {generatedColor2 && (
            <>
              <button
                onClick={() => copyToClipboard(color2, 'hex2')}
                className={`${
                  copySuccess.hex2 ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'
                } text-${isLightColor(color2) ? 'black' : 'white'} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4`}
                style={{ backgroundColor: generatedColor2 || color2 }}
              >
                {copySuccess.hex2 ? 'Kopjuar!' : ' HEX Ngjyra 2'}
              </button>

              <button
                onClick={() => copyToClipboard(hexToRgb(color2), 'rgb2')}
                className={`${
                  copySuccess.rgb2 ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'
                } text-${isLightColor(color2) ? 'black' : 'white'} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4`}
                style={{ backgroundColor: generatedColor2 || color2 }}
              >
                {copySuccess.rgb2 ? 'Kopjuar!' : ' RGB Ngjyra 2'}
              </button>
            </>
          )}

          {!isSingleColor && (
            <button
              onClick={() => copyToClipboard(generateGradient(), 'gradient')}
              className={`${
                copySuccess.gradient ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'
              } text-${isLightColor(generateGradient()) ? 'black' : 'white'} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`}
              style={{ background: generateGradient() }}
            >
              {copySuccess.gradient ? 'Kopjuar!' : ' Kopjo Gradient '}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
