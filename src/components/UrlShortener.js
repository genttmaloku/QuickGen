import React, { useState } from 'react';
import axios from 'axios';
import { FaCopy } from 'react-icons/fa';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Butoni është klikuar');

    try {
      const response = await axios.post('https://is.gd/create.php?format=json&url=' + encodeURIComponent(url));
      setShortenedUrl(response.data.shorturl);
    } catch (error) {
      console.error('Gabim në shkurtimin e URL-së:', error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl)
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
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">Shkurtimi i URL-ve</h2>
        
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="text-white mb-2 block">Fut URL-në këtu:</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-600"
            required
            placeholder="https://example.com"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
          >
            Shkurto 
          </button>
        </form>

        {shortenedUrl && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-lg font-bold text-white">URL e Shkurtuar:</h3>
            <p className="text-white">{shortenedUrl}</p>
            <button
              onClick={copyToClipboard}
              className={`${
                copySuccess ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'
              } text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out shadow-lg`}
            >
              {copySuccess ? 'Kopjuar!' : 'Kopjo URL-në'}
            </button>
          </div>
        )}

        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 hover:bg-gray-700 transition duration-200 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Kthehu në faqën kryesore
        </button>
      </div>
    </div>
  );
};

export default UrlShortener;
