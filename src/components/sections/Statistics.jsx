import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Active Voters', value: 900, suffix: 'M+', description: 'Registered nationwide' },
  { label: 'Polling Stations', value: 1.2, suffix: 'M', description: 'Across all regions' },
  { label: 'Voter Turnout', value: 67, suffix: '%', description: 'In the last general election' },
  { label: 'Election Officials', value: 15, suffix: 'M', description: 'Ensuring fair processes' }
];

// Custom hook for counting animation
const useCounter = (end, duration = 2) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(easeOutQuart * end);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure we hit the exact target
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return { count, nodeRef };
};

const StatCard = ({ stat, index }) => {
  const { count, nodeRef } = useCounter(stat.value);
  
  // Format number, keeping decimal if the original value had one
  const formattedCount = stat.value % 1 !== 0 
    ? count.toFixed(1) 
    : Math.floor(count);

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="flex items-center justify-center text-4xl md:text-5xl font-bold text-primary-600 mb-2 font-heading">
        {formattedCount}
        {stat.suffix}
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</h4>
      <p className="text-sm text-gray-500">{stat.description}</p>
    </motion.div>
  );
};

const Statistics = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
