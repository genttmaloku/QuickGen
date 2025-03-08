import React, { useState } from 'react';

const TextConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleChange = (e) => setInputValue(e.target.value);

  const handleConvert = (type) => {
    if (!inputValue) {
      setError('Ju lutem, futni tekstin që dëshironi të konvertoni.');
      return;
    }
    setError('');
    let newConvertedValue = '';
    
    switch (type) {
      case 'uppercase':
        newConvertedValue = inputValue.toUpperCase();
        break;
      case 'lowercase':
        newConvertedValue = inputValue.toLowerCase();
        break;
      case 'titlecase':
        newConvertedValue = inputValue.replace(/\b\w/g, char => char.toUpperCase());
        break;
      case 'reverse':
        newConvertedValue = inputValue.split('').reverse().join('');
        break;
      case 'alternating':
        newConvertedValue = inputValue.split('').map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('');
        break;
      case 'slugify':
        newConvertedValue = inputValue.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        break;
      default:
        break;
    }

    setConvertedValue(newConvertedValue);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(convertedValue)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Gabim në kopjimin e tekstit:', err);
      });
  };

  const clearText = () => {
    setInputValue('');
    setConvertedValue('');
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Konvertues Teksti</h2>

        <textarea
          placeholder="Fut tekstin këtu"
          value={inputValue}
          onChange={handleChange}
          className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-col justify-between mb-6">
        <button
            onClick={() => handleConvert('uppercase')}
            className="bg-teal-900 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
          >
            SHKRONJA TË MËDHA
          </button>
          <button
            onClick={() => handleConvert('lowercase')}
            className="bg-teal-800 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
          >
            shkrim të vogla
          </button> 

          <button
            onClick={() => handleConvert('titlecase')}
            className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
          >
            Titulli
          </button>
          <button
            onClick={() => handleConvert('reverse')}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
          >
            Përmbys
          </button>

          <button
            onClick={() => handleConvert('alternating')}
            className="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
          >
            Alternuese
          </button>
          <button
            onClick={() => handleConvert('slugify')}
            className="bg-teal-400 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
          >
            Slugify
          </button>

        </div>


        <div className="flex justify-between mb-6">
          <button
            onClick={clearText}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
          >
            Fshije Tekstin
          </button>
        </div>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg text-center mb-4">
            {error}
          </div>
        )}

        {convertedValue && (
          <div className="bg-gray-700 text-white p-3 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Teksti i konvertuar:</h3>
            <p>{convertedValue}</p>
          </div>
        )}

        {convertedValue && (
          <button
            onClick={copyToClipboard}
            className={`${
              copySuccess ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'
            } text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline w-full mb-4 transition duration-300 ease-in-out shadow-lg`}
          >
            {copySuccess ? 'Kopjuar!' : 'Kopjo Tekstin'}
          </button>
        )}

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

export default TextConverter;
