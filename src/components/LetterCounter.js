import React, { useState } from 'react';

const LetterCounter = () => {
  const [inputValue, setInputValue] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [numberCount, setNumberCount] = useState(0);
  const [punctuationCount, setPunctuationCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const letterCount = countLetters(value);
    const numberCount = countNumbers(value);
    const punctuationCount = countPunctuation(value);
    const spaceCount = countSpaces(value);

    const totalCount = letterCount + numberCount + punctuationCount + spaceCount;

    setTotalCount(totalCount);
    setLetterCount(letterCount);
    setNumberCount(numberCount);
    setPunctuationCount(punctuationCount);
    setSpaceCount(spaceCount);

    setError('');
  };

  const countLetters = (str) => {
    return str.replace(/[^a-zA-Z]/g, '').length;
  };

  const countNumbers = (str) => {
    return str.replace(/[^0-9]/g, '').length;
  };

  const countPunctuation = (str) => {
    return str.replace(/[^\.,!?;:(){}[\]"'`\/\\-]/g, '').length;
  };
  

  const countSpaces = (str) => {
    return (str.match(/\s/g) || []).length; // Regjistron hapësirat (faktor përhapës është \s)
  };

  const handleReset = () => {
    setInputValue('');
    setTotalCount(0);
    setLetterCount(0);
    setNumberCount(0);
    setPunctuationCount(0);
    setSpaceCount(0);
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Numëruesi i Karaktereve</h2>

        <label className="text-white mb-2 block">Futni tekstin tuaj:</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Shkruaj tekstin këtu"
          className="border border-gray-600 rounded-lg p-3 w-full mb-6 text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="text-white text-l mb-3 p-2 rounded-lg bg-blue-900">
          <strong>Numri total i karaktereve:</strong> {totalCount}
        </div>

        <div className="text-white text-l mb-3 p-2 rounded-lg bg-blue-500">
          <strong>Numri i shkronjave:</strong> {letterCount}
        </div>

        <div className="text-white text-l mb-3 p-2 rounded-lg bg-green-500">
          <strong>Numri i numrave:</strong> {numberCount}
        </div>

        <div className="text-white text-l mb-3 p-2 rounded-lg bg-yellow-500">
          <strong>Numri i shenjave të pikësimit:</strong> {punctuationCount}
        </div>

        <div className="text-white text-l mb-3 p-2 rounded-lg bg-gray-500">
          <strong>Numri i hapësirave:</strong> {spaceCount}
        </div>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg text-center mb-4">
            {error}
          </div>
        )}

        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
        >
          Resetoni
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

export default LetterCounter;
