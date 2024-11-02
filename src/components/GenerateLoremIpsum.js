import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [loremText, setLoremText] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [style, setStyle] = useState('classic');

  const loremStyles = {
    classic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    
    modern: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, veniam? Quisquam, dolore odit? Magnam repellendus, veritatis, alias blanditiis a quas molestias, provident distinctio nisi pariatur quis! Maiores alias assumenda excepturi?",
    
    cicero: "Cicero: Quod erat demonstrandum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam turpis. In tempor, nulla a vulputate dictum, magna libero ullamcorper purus, et luctus mi magna vel dui.",
    
    pirate: "Ahoy matey! Lorem ipsum dolor sit amet, ye scallywags! No quarter given! Shiver me timbers, this text be a fine treasure indeed! Arrr, let's sail the seven seas of typography!",
    
    funny: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    
    business: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."
  };

  const generateLoremIpsum = () => {
    const selectedLorem = loremStyles[style];
    const generatedText = Array.from({ length: paragraphs }, () => selectedLorem).join('\n\n');
    setLoremText(generatedText);
    setCopySuccess(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(loremText)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Gabim në kopjimin e tekstit:', err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Gjenero Lorem Ipsum</h2>
        
        <div className="mb-4">
          <label className="text-white mb-2 block">Numri i Paragrafëve:</label>
          <input
            type="number"
            min="1"
            value={paragraphs}
            onChange={(e) => setParagraphs(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="text-white mb-2 block">Zgjidh Stilin:</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-600"
          >
            <option value="classic">Klasik</option>
            <option value="modern">Modern</option>
            <option value="cicero">Cicero</option>
            <option value="pirate">Pirate</option>
            <option value="funny">Funny</option>
            <option value="business">Business</option>
          </select>
        </div>

        <button
          onClick={generateLoremIpsum}
          className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2 shadow-lg"
        >
          Gjenero Tekstin
        </button>

        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-bold text-white">Teksti i Gjeneruar:</h3>
          <p className="text-white whitespace-pre-line">{loremText}</p>
        </div>

        {loremText && (
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
          className="bg-gray-600 hover:bg-gray-700 transition mt-4 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Kthehu në faqën kryesore
        </button>
      </div>
    </div>
  );
};

export default LoremIpsumGenerator;
