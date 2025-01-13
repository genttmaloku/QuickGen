import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-12 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto p-8 bg-transparent border-2 rounded-lg shadow-xl">
        <h1 className="text-4xl font-semibold text-white text-center mb-6">Politika e Privatësisë</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Kjo Politika e Privatësisë shpjegon se si ne mbledhim, përdorim dhe mbrojmë informacionet tuaja personale kur përdorni faqen tonë të internetit ose shërbimet tona.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Informacionet që Ne Mbledhim</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Ne mbledhim të dhëna personale si emrin tuaj, adresën e emailit, adresën IP, dhe të dhëna përdorimi nga ndërveprimet tuaja me faqen tonë të internetit. Këto mund të përfshijnë informacionin që mbledhim automatikisht nga përdorimi i faqes dhe shërbimeve tona.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Gjithashtu, mund të mbledhim informacion në lidhje me pajisjen tuaj, sistemin e operimit, dhe shfletuesin që përdorni.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Si Përdorim të Dhënat Tuaja</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Informacionet tuaja përdoren për të përmirësuar përvojën e përdoruesit, për të dërguar përditësime, dhe për qëllime analitike. Ne nuk i ndajmë të dhënat tuaja personale me palë të treta, përveç nëse kërkohet nga ligji.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Të dhënat mund të përdoren për të analizuar sjelljet tuaja, për të krijuar raporte të cilat ndihmojnë në përmirësimin e shërbimeve tona.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Përdorimi i Cookies dhe Teknologjive të Ndjekjes</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Ne përdorim cookies për të përmirësuar përvojën tuaj në faqen tonë. Duke vazhduar të shfletoni, ju pranoni përdorimin e cookies. Mund të menaxhoni preferencat e cookies në cilësimet e shfletuesit tuaj.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Cookies janë skedarë të vegjël që ruajnë informacion për përdorimin e faqes dhe që mund të përdoren për të personalizuar përvojën tuaj të shfletimit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Të Drejtat Tuaja</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Keni të drejtë të aksesoni, korrigjoni ose fshini të dhënat tuaja personale. Nëse dëshironi të ushtroni ndonjë nga të drejtat tuaja, mund të na kontaktoni në <a href="mailto:contact@gentmaloku.live" className="text-blue-600 hover:underline">contact@gentmaloku.live</a>.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Keni gjithashtu të drejtë të kërkoni kufizimin e përpunimit të të dhënave tuaja ose të bëni një ankesë nëse mendoni se të drejtat tuaja janë shkelur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Siguria e të Dhënave</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Ne implementojmë masa sigurie për të mbrojtur të dhënat tuaja personale nga qasja e paautorizuar ose nga shpërndarja e paautorizuar. Përdorim teknologji të avancuara për mbrojtjen e informacionit.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Siguria e të dhënave është një prioritet për ne dhe ne monitorojmë rregullisht sistemet tona për të siguruar që ato janë të mbrojtura.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Ndryshimet në Këtë Politikë të Privatësisë</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Ne mund ta përditësojmë këtë Politika të Privatësisë herë pas here. Çdo ndryshim do të publikohet në këtë faqe dhe data e përditësimit do të shfaqet në fund të kësaj politike.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Kontaktoni me Ne</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Nëse keni ndonjë pyetje ose shqetësim në lidhje me këtë Politikë të Privatësisë ose si ne trajtojmë të dhënat tuaja, ju lutemi na kontaktoni në <a href="mailto:contact@gentmaloku.live" className="text-blue-600 hover:underline">contact@gentmaloku.live</a>.
          </p>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; 2025 QuickGen. Të drejtat janë të rezervuara. <span className="text-blue-600">A GM CREATION</span></p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
