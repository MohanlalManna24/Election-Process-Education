import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCamera, FiHome, FiCreditCard, FiMail, FiPhone } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const docIcons = [
  <FiCamera className="w-8 h-8" />,
  <FiHome className="w-8 h-8" />,
  <FiCreditCard className="w-8 h-8" />,
  <FiFileText className="w-8 h-8" />,
];
const docStyles = [
  { color: 'text-blue-500', bg: 'bg-blue-100' },
  { color: 'text-violet-500', bg: 'bg-violet-100' },
  { color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { color: 'text-blue-500', bg: 'bg-blue-100' },
];

const VoterGuide = () => {
  const { t } = useLanguage();
  const docs = t('guide.docs');

  return (
    <section id="guide" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-50/50 to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 font-heading">{t('guide.title')}</h2>
          <p className="text-lg text-gray-600">{t('guide.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(docs) && docs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg shadow-violet-100/50 border border-white hover:shadow-xl hover:shadow-violet-200/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl ${docStyles[index].bg} ${docStyles[index].color} flex items-center justify-center mb-6 shadow-sm`}
              >
                {docIcons[index]}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{doc.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{doc.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-violet-500 via-blue-500 to-blue-400 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl shadow-blue-500/20"
        >
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-80 h-80 bg-white/20 rounded-full blur-3xl"></motion.div>
          <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"></motion.div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 font-heading text-white drop-shadow-md">{t('guide.helpTitle')}</h3>
              <p className="text-blue-50 text-lg mb-0 font-medium">{t('guide.helpSubtitle')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center gap-2 bg-yellow-400 text-yellow-950 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg">
                <FiPhone className="w-5 h-5" /> {t('guide.callBtn')}
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors shadow-lg">
                <FiMail className="w-5 h-5" /> {t('guide.emailBtn')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VoterGuide;
