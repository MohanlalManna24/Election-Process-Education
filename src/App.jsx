import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Timeline from './components/sections/Timeline';
import Statistics from './components/sections/Statistics';
import VoterGuide from './components/sections/VoterGuide';
import FAQ from './components/sections/FAQ';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      
      <main>
        <Hero />
        <Statistics />
        <Timeline />
        <VoterGuide />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;