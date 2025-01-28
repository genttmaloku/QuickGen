import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-12 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto p-10 bg-transparent rounded-3xl shadow-2xl space-y-12">
        
        {/* QuickGen Overview */}
        <h1 className="text-6xl font-bold text-white text-center mb-6 transform transition duration-300 hover:text-indigo-400">
          Rreth Nesh
        </h1>
        <p className="text-lg text-gray-300 text-center mb-8 leading-relaxed">
        QuickGen është një aplikacion inovativ që përbëhet nga një seri mini-aplikacionesh, të cilat janë krijuar për t'u ofruar përdoruesve zgjidhje të shpejta dhe efikase për nevoja të ndryshme. Çdo mini-aplikacion është i dizajnuar për të përmirësuar përvojën e përdoruesit dhe për të ndihmuar ata të arrijnë objektivat e tyre në mënyrë të thjeshtë dhe të aksesueshme. QuickGen është platforma ideale për ata që kërkojnë mjete të fuqishme dhe fleksibël për t’u përballur me sfida të ndryshme dixhitale
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          
          {/* Mission Section */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-800">
            <h2 className="text-3xl font-semibold text-white mb-4">Misioni Ynë</h2>
            <p className="text-gray-400 leading-relaxed">
              Misioni ynë është të krijojmë dhe të ofrojmë teknologji që ndihmojnë përdoruesit të arrijnë qëllimet e tyre, përmes zgjidhjeve inovative dhe efikase që janë të lehta për t’u përdorur.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-purple-800">
            <h2 className="text-3xl font-semibold text-white mb-4">Vizioni Ynë</h2>
            <p className="text-gray-400 leading-relaxed">
              Vizioni ynë është të krijojmë një botë ku teknologjia është e thjeshtë, e aksesueshme dhe sjell vlerë të qëndrueshme për përdoruesit tanë, duke ofruar mundësi të mëdha për të gjithë.
            </p>
          </div>

          {/* Founder Section */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-blue-800">
            <h2 className="text-3xl font-semibold text-white mb-4">Themeluesi</h2>
            <p className="text-gray-400 leading-relaxed">
              QuickGen u krijua nga Gent Maloku, një pasionant i zhvillimit dhe inovacionit teknologjik. Me një vizion të qartë dhe një angazhim të fortë, ai i dha formë QuickGen për të ofruar mundësi më të mira për përdoruesit globalë.
            </p>
          </div>

          {/* Free Usage Section */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-green-800">
            <h2 className="text-3xl font-semibold text-white mb-4">Përdorimi FALAS</h2>
            <p className="text-gray-400 leading-relaxed">
              Të gjitha shërbimet dhe produktet tona janë të disponueshme FALAS! Ne besojmë se mundësitë e mëdha duhet të jenë të hapura për të gjithë, pa barriera kostoje.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; 2025 QuickGen. Të drejtat janë të rezervuara. <span className="text-blue-500">A GM CREATION</span></p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
