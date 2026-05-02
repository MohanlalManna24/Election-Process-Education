import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiInfo, FiAlertCircle } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const mockCandidates = [
  { id: 1, name: 'Ananya Sharma', party: 'Progressive Alliance', symbol: '🌟' },
  { id: 2, name: 'Rajeev Kumar', party: 'Development Front', symbol: '🚀' },
  { id: 3, name: 'Meera Reddy', party: 'United People Party', symbol: '🤝' },
  { id: 4, name: 'NOTA', party: 'None of the Above', symbol: '❌' }
];

const VotingSimulator = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showVVPAT, setShowVVPAT] = useState(false);
  const { t } = useLanguage();

  const vvpatTimerRef = useRef(null);
  const voteTimerRef = useRef(null);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(voteTimerRef.current);
      clearTimeout(vvpatTimerRef.current);
    };
  }, []);

  const handleVote = (candidate) => {
    if (hasVoted) return;

    setSelectedCandidate(candidate);

    // Simulate the EVM beep and VVPAT process
    voteTimerRef.current = setTimeout(() => {
      setShowVVPAT(true);
      setHasVoted(true);

      // Hide VVPAT slip after 7 seconds (like in real life)
      vvpatTimerRef.current = setTimeout(() => {
        setShowVVPAT(false);
      }, 7000);
    }, 500);
  };

  const resetSimulator = () => {
    clearTimeout(voteTimerRef.current);
    clearTimeout(vvpatTimerRef.current);
    setSelectedCandidate(null);
    setHasVoted(false);
    setShowVVPAT(false);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10 opacity-30">
        <div className="absolute top-0 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-violet-600 font-bold tracking-wider uppercase text-sm mb-4 block">{t('simulator.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 font-heading">{t('simulator.title')}</h2>
          <p className="text-lg text-gray-600">{t('simulator.subtitle')}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* EVM Machine UI */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-gray-100 rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-gray-300 relative"
          >
            {/* EVM Header */}
            <div className="flex justify-between items-center bg-gray-800 text-white p-3 rounded-xl mb-6 shadow-inner">
              <span className="font-mono font-bold tracking-widest text-sm">BALLOT UNIT</span>
              <div className="flex gap-2 items-center">
                <span className="text-xs text-gray-400">{t('simulator.ready')}</span>
                <div className={`w-3 h-3 rounded-full ${hasVoted ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`}></div>
              </div>
            </div>

            {/* EVM Buttons */}
            <div className="space-y-4">
              {mockCandidates.map((candidate, idx) => (
                <div key={candidate.id} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
                  {/* Serial Number */}
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-sm border border-gray-300 shrink-0">
                    {idx + 1}
                  </div>
                  
                  {/* Candidate Info */}
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">{candidate.name}</p>
                    </div>
                    <div className="text-2xl ml-2 bg-gray-50 w-10 h-10 rounded-lg flex items-center justify-center border border-gray-100 shrink-0">
                      {candidate.symbol}
                    </div>
                  </div>

                  {/* Red Light Indicator */}
                  <div className={`w-4 h-4 rounded-full border-2 border-gray-300 shrink-0 transition-colors duration-300 ${
                    selectedCandidate?.id === candidate.id ? 'bg-red-500 border-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-gray-200'
                  }`}></div>

                  {/* Blue Voting Button */}
                  <button 
                    onClick={() => handleVote(candidate)}
                    disabled={hasVoted}
                    className={`w-12 h-10 rounded-lg shadow-md border-b-4 shrink-0 transition-all active:border-b-0 active:translate-y-1 ${
                      hasVoted 
                        ? 'bg-blue-300 border-blue-400 cursor-not-allowed opacity-50' 
                        : 'bg-blue-600 border-blue-800 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
                    }`}
                  ></button>
                </div>
              ))}
            </div>

          </motion.div>

          {/* VVPAT Machine & Instructions */}
          <div className="w-full max-w-md flex flex-col gap-8">
            
            {/* VVPAT display */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-3xl p-6 shadow-2xl border-4 border-gray-700 relative overflow-hidden h-80 flex flex-col items-center"
            >
              <div className="w-full text-center bg-gray-900 text-gray-400 py-2 rounded-lg mb-4 text-xs font-mono tracking-widest border border-gray-700">
                VVPAT UNIT
              </div>
              
              {/* Glass window */}
              <div className="w-48 h-56 bg-white border-8 border-gray-900 rounded-xl relative overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 bg-blue-500/5 z-10 pointer-events-none"></div> {/* Glass reflection */}
                
                <AnimatePresence>
                  {showVVPAT && selectedCandidate && (
                    <motion.div 
                      initial={{ y: -200, opacity: 0 }}
                      animate={{ y: 20, opacity: 1 }}
                      exit={{ y: 200, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                      className="w-40 bg-gray-50 border border-gray-300 shadow-md p-4 flex flex-col items-center mt-4 print-receipt font-mono text-sm"
                    >
                      <div className="border-b border-dashed border-gray-400 w-full mb-2"></div>
                      <p className="font-bold text-center text-gray-800 text-lg mb-2">{selectedCandidate.symbol}</p>
                      <p className="font-bold text-center text-gray-900 leading-tight mb-1">{selectedCandidate.name}</p>
                      <p className="text-xs text-center text-gray-500">{selectedCandidate.party}</p>
                      <div className="border-b border-dashed border-gray-400 w-full mt-2"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Light indicator for VVPAT */}
              <div className="absolute bottom-6 right-6">
                 <div className={`w-3 h-3 rounded-full ${showVVPAT ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-gray-600'}`}></div>
              </div>
            </motion.div>

            {/* Status Message */}
            <AnimatePresence mode="wait">
              {!hasVoted ? (
                <motion.div 
                  key="instruction"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex gap-4"
                >
                  <FiInfo className="text-blue-500 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">{t('simulator.instructTitle')}</h4>
                    <p className="text-blue-800/80 text-sm">{t('simulator.instructBody')}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="flex gap-4">
                    <FiCheckCircle className="text-green-500 w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-green-900 mb-1">{t('simulator.successTitle')}</h4>
                      <p className="text-green-800/80 text-sm">{t('simulator.successBody')}</p>
                    </div>
                  </div>
                  <button 
                    onClick={resetSimulator}
                    className="w-full bg-white border border-green-300 text-green-700 py-2 rounded-xl font-semibold hover:bg-green-100 transition-colors"
                  >
                    {t('simulator.resetBtn')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VotingSimulator;
