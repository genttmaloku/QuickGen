import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true); // Shto këtë linjë për të shfaqur komponentin kur nuk ka konsent
    } else if (consent === "accepted") {
      // Nëse përdoruesi ka pranuar cookies, mund të vendosësh scriptin
      const script = document.createElement("script");
      script.src = "https://www.statcounter.com/counter/counter.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-center z-50 border border-gray-700">
      <p className="text-sm mb-3 sm:mb-0">
      Ne përdorim cookies për të përmirësuar përvojën tuaj. Duke vazhduar shfletimin, ju pranoni politikën tonë.{" "}
        <a
          href="/politika-e-privatesise"
          className="text-blue-400 underline hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
         Politika e Privatësisë
        </a>.
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-3 w-full sm:w-auto">
        <button
          onClick={handleAccept}
          className="bg-green-500 text-white py-2 px-4 rounded mb-2 sm:mb-0 hover:bg-green-600 transition-all w-full sm:w-auto"
        >
          Prano 
        </button>
        <button
          onClick={handleDecline}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all w-full sm:w-auto"
        >
         Refuzo
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
