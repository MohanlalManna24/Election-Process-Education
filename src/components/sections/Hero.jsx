import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-50/80 to-white -z-10"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/50 border border-primary-200 text-primary-700 font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
              </span>
              Elections 2026 Approaching
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Understand Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-800">
                Democracy
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empowering citizens with knowledge. Navigate the election process step-by-step, know your rights, and make your voice heard with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30"
              >
                How to Vote
                <FiArrowRight />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-sm"
              >
                Check Registration
              </motion.button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span>Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span>Accessible</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract visual representation of voting/democracy */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-blue-400 rounded-[2rem] transform rotate-3 opacity-20 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-blue-400 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
                <div className="h-12 bg-white/10 backdrop-blur-sm border-b border-white/20 flex items-center px-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="h-4 w-1/3 bg-gray-200 rounded-full"></div>
                    <div className="h-8 w-3/4 bg-gray-100 rounded-lg"></div>
                    <div className="h-8 w-1/2 bg-gray-100 rounded-lg"></div>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.2) }}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50"
                      >
                        <div className="w-6 h-6 rounded-full border-2 border-primary-400 flex items-center justify-center">
                          {i === 2 && <div className="w-3 h-3 rounded-full bg-primary-600"></div>}
                        </div>
                        <div className="flex-1 h-3 bg-gray-200 rounded-full"></div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 h-12 w-full bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30"
                  >
                    <div className="h-2 w-1/4 bg-white/50 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-8 -bottom-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <FiCheckCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Status</p>
                  <p className="font-bold text-gray-900">Registered</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
