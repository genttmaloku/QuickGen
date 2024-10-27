import React, { useState } from 'react';

const StrongPasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); 
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [error, setError] = useState('');

  const generatePassword = () => {

    if (length < 8) {
      setError('Fjalëkalimi duhet të ketë të paktën 8 karaktere!');
      return;
    } else {
      setError(''); 
    }

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numbers = includeNumbers ? '0123456789' : '';
    const symbols = includeSymbols ? '!@#$%^&*()_+[]{}|;:,.<>?' : '';

    const characters = lowercase + uppercase + numbers + symbols;

    if (characters.length === 0) {
      setError('Të paktën një lloj karakteri duhet të jetë i zgjedhur!');
      return;
    }

    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);
    }
    
    setPassword(generatedPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Strong Password Generator</h2>
        
        <label className="text-white mb-2">Zgjidh gjatësi të fjalëkalimit:</label>
        <input
          type="number"
          min="8"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border border-gray-600 rounded-lg p-3 mb-4 w-full text-gray-300 bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mb-4">
          <label className="text-white flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="mr-2"
            />
            Përfshij karaktere të mëdha
          </label>
          <label className="text-white flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2"
            />
            Përfshij numra
          </label>
          <label className="text-white flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2"
            />
            Përfshij simbole
          </label>
        </div>
        
   
        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg text-center mb-4">
            {error}
          </div>
        )}

        <button
          onClick={generatePassword}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
        >
          Gjenero Fjalëkalim
        </button>

        {password && (
          <div className="bg-gray-700 text-white p-3 rounded-lg text-center mb-4">
            <strong>Fjalëkalimi i gjeneruar:</strong> {password}
          </div>
        )}
      </div>
    </div>
  );
};

export default StrongPasswordGenerator;
