import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiBookOpen, FiAward, FiBriefcase, FiUser } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const candidateDB = {
  "110001": [ // Example Pincode (New Delhi)
    { id: 1, name: "Arvind Rao", party: "National Progress Party", age: 45, education: "Ph.D in Economics", profession: "Social Worker", cases: 0, highlights: ["Free Healthcare", "Urban Development", "Youth Employment"] },
    { id: 2, name: "Sunita Verma", party: "Democratic Front", age: 52, education: "LL.B", profession: "Lawyer", cases: 1, highlights: ["Women Empowerment", "Clean Water Initiatives", "Education Reform"] },
  ],
  "700001": [ // Example Pincode (Kolkata)
    { id: 3, name: "Tapas Chatterjee", party: "Bengal Unity Forum", age: 60, education: "M.A. Political Science", profession: "Retired Teacher", cases: 0, highlights: ["Cultural Heritage", "Infrastructure", "Local Business Support"] },
    { id: 4, name: "Rina Das", party: "Progressive Alliance", age: 38, education: "B.Tech", profession: "Software Engineer", cases: 0, highlights: ["Digital Literacy", "IT Hub Development", "Women Safety"] },
  ]
};

const CandidateFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const { t } = useLanguage();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setResults(null);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Simple mock logic: if pincode exists in DB, return those, else return a default set
      const found = candidateDB[searchTerm.trim()];
      if (found) {
        setResults(found);
      } else {
        // Return dummy data for any other pincode
        setResults([
           { id: 5, name: "Generic Candidate 1", party: "Independent", age: 40, education: "Graduate", profession: "Business", cases: 0, highlights: ["Local Infrastructure", "Better Roads"] },
           { id: 6, name: "Generic Candidate 2", party: "People's Voice", age: 55, education: "Post Graduate", profession: "Social Worker", cases: 2, highlights: ["Public Health", "Education"] }
        ]);
      }
    }, 1500);
  };

  return (
    <section id="candidate-finder" className="py-24 relative bg-violet-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-violet-600 font-bold tracking-wider uppercase text-sm mb-4 block">{t('candidate.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 font-heading">{t('candidate.title')}</h2>
          <p className="text-lg text-gray-600">
            {t('candidate.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <form onSubmit={handleSearch} className="relative flex items-center">
            <div className="absolute left-6 text-violet-500">
              <FiMapPin className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('candidate.placeholder')} 
              className="w-full bg-white border-2 border-violet-200 rounded-full py-5 pl-16 pr-40 text-lg font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20 shadow-lg shadow-violet-100 transition-all"
            />
            <button 
              type="submit"
              className="absolute right-3 bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>‍<FiSearch /> {t('candidate.searchBtn')}</>
              )}
            </button>
          </form>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {results && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                {t('candidate.resultsFor')} <span className="text-violet-600">"{searchTerm}"</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {results.map((candidate, idx) => (
                  <motion.div 
                    key={candidate.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl p-8 shadow-xl shadow-violet-100/50 border border-violet-50 flex flex-col h-full hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex items-start gap-6 mb-6 pb-6 border-b border-gray-100">
                      <div className="w-20 h-20 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-500 shrink-0">
                        <FiUser className="w-10 h-10" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">{candidate.name}</h4>
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-semibold text-sm rounded-lg mb-2">
                          {candidate.party}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-1">
                           <FiBookOpen /> {t('candidate.education')}
                        </div>
                        <p className="font-semibold text-gray-800">{candidate.education}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-1">
                           <FiBriefcase /> {t('candidate.profession')}
                        </div>
                        <p className="font-semibold text-gray-800">{candidate.profession}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-1">
                           <FiUser /> {t('candidate.age')}
                        </div>
                        <p className="font-semibold text-gray-800">{candidate.age} {t('candidate.years')}</p>
                      </div>
                      <div className={`p-4 rounded-xl ${candidate.cases > 0 ? 'bg-red-50' : 'bg-green-50'}`}>
                        <div className={`flex items-center gap-2 text-sm font-medium mb-1 ${candidate.cases > 0 ? 'text-red-500' : 'text-green-600'}`}>
                           <FiAward /> {t('candidate.criminalCases')}
                        </div>
                        <p className={`font-semibold ${candidate.cases > 0 ? 'text-red-700' : 'text-green-700'}`}>{candidate.cases}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-violet-50 to-blue-50 p-5 rounded-2xl border border-violet-100">
                      <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        🌟 {t('candidate.manifesto')}
                      </h5>
                      <ul className="space-y-2">
                        {candidate.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CandidateFinder;
