import React, { useState } from 'react';
import { FaBirthdayCake, FaClock, FaRedo } from 'react-icons/fa';

const BirthdayTimeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState(null);

  const calculateTime = () => {
    if (!birthdate) return;

    const birthDateObj = new Date(birthdate);
    const now = new Date();
    
    if (birthDateObj > now) {
      setResult('Ju lutem shkruani një datë të vlefshme në të kaluarën.');
      return;
    }

    const diffMilliseconds = now - birthDateObj;
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30.44);
    const diffYears = Math.floor(diffMonths / 12);

    setResult({
      years: diffYears,
      months: diffMonths,
      weeks: diffWeeks,
      days: diffDays,
      hours: diffHours,
      minutes: diffMinutes,
      seconds: diffSeconds,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6 flex items-center justify-center gap-2">
          <FaBirthdayCake className="text-yellow-500" /> Kalkulatori i Kohës
        </h2>

        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-600 mb-4"
        />

        <button
          onClick={calculateTime}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 flex items-center justify-center gap-2"
        >
          <FaClock /> Llogarit Kohën
        </button>

        {result && (
          <div className="bg-gray-700 text-white p-4 rounded-lg mt-4">
            {typeof result === 'string' ? (
              <p className="text-red-500">{result}</p>
            ) : (
              <ul className="list-disc pl-5">
                <li><strong>Vite:</strong> {result.years}</li>
                <li><strong>Muaj:</strong> {result.months}</li>
                <li><strong>Javë:</strong> {result.weeks}</li>
                <li><strong>Dita:</strong> {result.days}</li>
                <li><strong>Orë:</strong> {result.hours}</li>
                <li><strong>Minuta:</strong> {result.minutes}</li>
                <li><strong>Sekonda:</strong> {result.seconds}</li>
              </ul>
            )}
          </div>
        )}

        <button
          onClick={() => {
            setBirthdate('');
            setResult(null);
          }}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 mt-4 flex items-center justify-center gap-2"
        >
          <FaRedo /> Fshij të dhënat
        </button>

        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Kthehu në faqën kryesore
        </button>
      </div>
    </div>
  );
};

export default BirthdayTimeCalculator;
