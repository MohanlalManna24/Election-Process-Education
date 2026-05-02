import React from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiUsers, FiMapPin, FiCheckSquare, FiPieChart, FiAward } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const stepIcons = [
  <FiEdit3 className="w-6 h-6" />,
  <FiUsers className="w-6 h-6" />,
  <FiMapPin className="w-6 h-6" />,
  <FiCheckSquare className="w-6 h-6" />,
  <FiPieChart className="w-6 h-6" />,
  <FiAward className="w-6 h-6" />,
];

const stepStyles = [
  { color: 'bg-blue-400 text-white', glow: 'shadow-blue-300' },
  { color: 'bg-violet-400 text-white', glow: 'shadow-violet-300' },
  { color: 'bg-yellow-400 text-white', glow: 'shadow-yellow-300' },
  { color: 'bg-blue-500 text-white', glow: 'shadow-blue-400' },
  { color: 'bg-violet-500 text-white', glow: 'shadow-violet-400' },
  { color: 'bg-yellow-500 text-white', glow: 'shadow-yellow-400' },
];

const Timeline = () => {
  const { t } = useLanguage();
  const steps = t('timeline.steps');

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-violet-600 font-bold tracking-wider uppercase text-sm mb-4 block">{t('timeline.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 font-heading">
            {t('timeline.title')}
          </h2>
          <p className="text-lg text-gray-600">{t('timeline.subtitle')}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-200 via-violet-200 to-yellow-200 transform md:-translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-16">
            {Array.isArray(steps) && steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const style = stepStyles[index] || stepStyles[0];
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot/Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-white shadow-xl z-10">
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${style.color} shadow-lg ${style.glow}`}>
                      {stepIcons[index]}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white relative group"
                    >
                      <span className={`inline-block py-1.5 px-4 rounded-full ${style.color.replace('text-white', 'bg-opacity-20')} text-gray-800 text-xs font-bold mb-4 tracking-wider uppercase`}>
                        Step {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

