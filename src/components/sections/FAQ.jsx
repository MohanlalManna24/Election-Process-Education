import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(239, 246, 255, 0.5)" : "rgba(255, 255, 255, 0.8)" }}
      className="border border-violet-100 rounded-2xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow backdrop-blur-md"
    >
      <button
        className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-violet-700' : 'text-gray-800'}`}>
          {faq.q}
        </h3>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? "#8b5cf6" : "#f3f4f6", color: isOpen ? "#ffffff" : "#6b7280" }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
        >
          {isOpen ? <FiMinus /> : <FiPlus />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-violet-100/50 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();
  const faqs = t('faq.items');

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-bold tracking-wider uppercase text-sm mb-4 block">{t('faq.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 font-heading">{t('faq.title')}</h2>
          <p className="text-lg text-gray-600">{t('faq.subtitle')}</p>
        </motion.div>

        <div className="space-y-4">
          {Array.isArray(faqs) && faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;

