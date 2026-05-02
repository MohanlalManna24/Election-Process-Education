import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const statData = [
  { value: 900, suffix: 'M+', color: 'text-blue-500', bg: 'bg-blue-100', labelKey: 'stats.stat1Label', descKey: 'stats.stat1Desc' },
  { value: 1.2, suffix: 'M', color: 'text-violet-500', bg: 'bg-violet-100', labelKey: 'stats.stat2Label', descKey: 'stats.stat2Desc' },
  { value: 67, suffix: '%', color: 'text-yellow-600', bg: 'bg-yellow-100', labelKey: 'stats.stat4Label', descKey: 'stats.stat4Desc' },
  { value: 15, suffix: 'M', color: 'text-blue-400', bg: 'bg-blue-50', labelKey: 'stats.stat3Label', descKey: 'stats.stat3Desc' },
];

const useCounter = (end, duration = 2) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let rafId = null;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(easeOutQuart * end);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    rafId = window.requestAnimationFrame(step);

    // Cleanup: cancel animation frame on unmount or re-trigger
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [isInView, end, duration]);

  return { count, nodeRef };
};

const StatCard = ({ stat, index, t }) => {
  const { count, nodeRef } = useCounter(stat.value);
  const formattedCount = stat.value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className={`text-center p-8 rounded-3xl bg-white/60 backdrop-blur-md shadow-xl border border-white/40 hover:shadow-2xl transition-all`}
    >
      <div className={`mx-auto w-20 h-20 rounded-full ${stat.bg} flex items-center justify-center mb-6`}>
        <div className={`text-4xl md:text-5xl font-bold ${stat.color} font-heading`}>
          {formattedCount}<span className="text-2xl">{stat.suffix}</span>
        </div>
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{t(stat.labelKey)}</h4>
      <p className="text-sm text-gray-500">{t(stat.descKey)}</p>
    </motion.div>
  );
};

const Statistics = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-40 -right-20 w-80 h-80 bg-yellow-200/40 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
