import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Timeline from './components/sections/Timeline';
import Statistics from './components/sections/Statistics';
import VoterGuide from './components/sections/VoterGuide';
import FAQ from './components/sections/FAQ';
import VotingSimulator from './components/sections/VotingSimulator';
import CandidateFinder from './components/sections/CandidateFinder';
import NewsSection from './components/sections/NewsSection';

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-yellow-50 font-sans selection:bg-violet-200 selection:text-violet-900">
        <Navbar />

        <main>
          <Hero />
          <Statistics />
          <Timeline />
          <VotingSimulator />
          <CandidateFinder />
          <VoterGuide />
          <NewsSection />
          <FAQ />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;