import React, { useState } from 'react';
import { FiMenu, FiX, FiGlobe, FiCheck, FiChevronDown } from 'react-icons/fi';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { scrollY } = useScroll();
  const { setLang, t, lang } = useLanguage();

  // Derive currentLang from context — always in sync
  const currentLang = languages.find((l) => l.code === lang) ?? languages[0];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    if (langOpen) setLangOpen(false);
  });

  const navLinks = [
    { nameKey: 'nav.home', href: '#' },
    { nameKey: 'nav.simulator', href: '#simulator' },
    { nameKey: 'nav.candidates', href: '#candidate-finder' },
    { nameKey: 'nav.process', href: '#process' },
    { nameKey: 'nav.guide', href: '#guide' },
  ];

  const handleLangChange = (lang) => {
    setLang(lang.code);
    setLangOpen(false);
    setIsOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-violet-100/50 py-2'
          : 'bg-gradient-to-b from-black/40 to-transparent md:bg-transparent md:from-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-tr from-violet-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-bold text-2xl">EG</span>
              </div>
              <span className={`font-heading font-extrabold text-2xl tracking-tight ${scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
                Election<span className={scrolled ? 'text-violet-600' : 'text-blue-300'}>Guide</span>
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className={`font-semibold transition-colors hover:text-violet-500 ${scrolled ? 'text-gray-600' : 'text-gray-200 hover:text-white drop-shadow-sm'}`}
                >
                  {t(link.nameKey)}
                </motion.a>
              ))}

              {/* Language Switcher - Desktop */}
              <div className="relative">
                <motion.button
                  onClick={() => setLangOpen(!langOpen)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold text-sm transition-all border ${
                    scrolled
                      ? 'bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <FiGlobe className="w-4 h-4" />
                  <span>{currentLang.flag} {currentLang.nativeName}</span>
                  <FiChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl shadow-violet-200/50 border border-violet-100 py-2 overflow-hidden z-50"
                    >
                      <p className="px-4 pt-1 pb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 mb-1">
                        Select Language
                      </p>
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLangChange(lang)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors group"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-lg">{lang.flag}</span>
                            <span>
                              <span className="font-semibold block leading-tight">{lang.nativeName}</span>
                              <span className="text-xs text-gray-400 group-hover:text-violet-400">{lang.name}</span>
                            </span>
                          </span>
                          {currentLang.code === lang.code && (
                            <FiCheck className="text-violet-500 w-4 h-4 shrink-0" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Register Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-bold transition-all shadow-lg ${scrolled
                    ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-violet-500/30 hover:shadow-violet-500/50'
                    : 'bg-white text-violet-700 shadow-white/20 hover:shadow-white/40'
                  }`}
              >
                {t('nav.register')}
              </motion.button>
            </div>

            {/* Mobile: Language + Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`p-2.5 rounded-xl flex items-center gap-1.5 text-sm font-semibold border transition-colors ${
                  scrolled ? 'bg-violet-50 text-violet-700 border-violet-200' : 'bg-white/10 text-white border-white/20'
                }`}
              >
                <FiGlobe className="w-4 h-4" />
                <span>{currentLang.flag}</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Language Dropdown */}
        <AnimatePresence>
          {langOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full top-full left-0 overflow-hidden z-40"
            >
              <div className="px-4 py-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Select Language</p>
                <div className="grid grid-cols-1 gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        currentLang.code === lang.code
                          ? 'bg-violet-100 text-violet-700'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xl">{lang.flag}</span>
                        <span>
                          <span className="font-bold block">{lang.nativeName}</span>
                          <span className="text-xs text-gray-400">{lang.name}</span>
                        </span>
                      </span>
                      {currentLang.code === lang.code && <FiCheck className="text-violet-500" />}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl absolute w-full top-full left-0 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.nameKey}
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-lg font-bold text-gray-800 hover:text-violet-600 hover:bg-violet-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(link.nameKey)}
                  </a>
                ))}
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-violet-600 to-blue-500 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-violet-500/30">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-4 bg-gray-900 text-white pl-4 pr-6 py-3.5 rounded-2xl shadow-2xl shadow-black/30 border border-gray-700"
          >
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
              <FiCheck className="w-5 h-5 text-white font-bold" />
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">Language switched!</p>
              <p className="text-gray-400 text-xs">{currentLang.nativeName} ({currentLang.name}) — Demo mode</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
