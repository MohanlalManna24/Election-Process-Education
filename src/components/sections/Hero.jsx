import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiBarChart2, FiArrowRight } from 'react-icons/fi';
import heroBg from '../../assets/hero.png';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-950 selection:bg-blue-500/30 selection:text-white"
    >
      {/* Background Image with Parallax-like scale effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Dynamic Gradient Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-slate-950/10"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 text-left"
          >
            {/* Glowing Top Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              {t('hero.badge')}
            </motion.div>

            {/* Headline with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white font-heading tracking-tight"
            >
              {t('hero.title1')} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                {t('hero.title2')},
              </span> <br className="hidden sm:block" />
              {t('hero.title3')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <button
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-500 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-base"
              >
                <FiMapPin className="text-xl group-hover:-translate-y-0.5 transition-transform" />
                {t('hero.cta1')}
              </button>

              <button
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 text-base"
              >
                <FiBarChart2 className="text-xl text-blue-400 group-hover:scale-110 transition-transform" />
                {t('hero.cta2')}
              </button>
            </motion.div>

          </motion.div>

          {/* Decorative Right Side Elements (Interactive Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden lg:block lg:col-span-4 relative h-[450px]"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
            
            {/* Main Interactive Card */}
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Registration Status</p>
                  <h3 className="text-white font-bold text-xl">Open Nationwide</h3>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30 cursor-pointer"
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </motion.div>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Verify Identity", desc: "Takes 2 minutes", icon: <FiArrowRight />, active: true },
                  { title: "Cast Ballot", desc: "Election Day", icon: <FiArrowRight />, active: false }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors ${item.active ? '' : 'opacity-60'}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.active ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-400'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Element 1 - Draggable */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              whileHover={{ scale: 1.05 }}
              whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
              animate={{ y: [0, -15, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -top-6 -right-8 z-30 bg-gradient-to-br from-violet-500 to-blue-600 p-4 rounded-2xl shadow-xl shadow-violet-500/30 cursor-grab border border-white/20 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <FiBarChart2 />
                </div>
                <div>
                  <p className="text-white/80 text-xs font-medium">{t('hero.stat1Label')}</p>
                  <p className="text-white font-bold">67.8%</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Element 2 - Animated */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
              whileHover={{ scale: 1.05, x: -10 }}
              className="absolute -bottom-8 -left-8 z-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/10 cursor-pointer"
            >
               <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-slate-300 text-xs font-medium">{t('hero.stat2Label')}</p>
                  <p className="text-white font-bold">{t('hero.stat2Value')}</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
