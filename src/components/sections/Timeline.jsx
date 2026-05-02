import React from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiUsers, FiMapPin, FiCheckSquare, FiPieChart, FiAward } from 'react-icons/fi';

const timelineSteps = [
  {
    id: 1,
    title: 'Voter Registration',
    description: 'Ensure you are eligible and register to vote before the deadline. Keep your documents ready.',
    icon: <FiEdit3 className="w-6 h-6" />,
    color: 'bg-blue-500',
    date: 'Step 1'
  },
  {
    id: 2,
    title: 'Candidate Nominations',
    description: 'Candidates from various parties file their nominations. The election commission scrutinizes them.',
    icon: <FiUsers className="w-6 h-6" />,
    color: 'bg-indigo-500',
    date: 'Step 2'
  },
  {
    id: 3,
    title: 'Campaigning Period',
    description: 'Candidates and parties share their manifestos, hold rallies, and communicate their vision to the public.',
    icon: <FiMapPin className="w-6 h-6" />,
    color: 'bg-purple-500',
    date: 'Step 3'
  },
  {
    id: 4,
    title: 'Voting Day',
    description: 'Go to your designated polling booth. Verify your identity and cast your vote secretly.',
    icon: <FiCheckSquare className="w-6 h-6" />,
    color: 'bg-primary-600',
    date: 'Step 4'
  },
  {
    id: 5,
    title: 'Counting of Votes',
    description: 'EVMs and ballot boxes are opened under strict security. Votes are counted transparently.',
    icon: <FiPieChart className="w-6 h-6" />,
    color: 'bg-teal-500',
    date: 'Step 5'
  },
  {
    id: 6,
    title: 'Declaration of Results',
    description: 'The final results are announced. The winning candidates are declared, paving the way for government formation.',
    icon: <FiAward className="w-6 h-6" />,
    color: 'bg-green-500',
    date: 'Step 6'
  }
];

const Timeline = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How the Election Process Works</h2>
          <p className="text-lg text-gray-600">
            A step-by-step guide to understanding the lifecycle of an election, from initial registration to the final results.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-12">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot/Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-white shadow-md z-10">
                    <div className={`w-full h-full rounded-full flex items-center justify-center text-white ${step.color} shadow-inner`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${
                    isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  }`}>
                    <div className="bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-6 rounded-2xl border border-gray-100 relative group">
                      {/* Arrow connecting box to timeline - Desktop */}
                      <div className={`hidden md:block absolute top-6 w-4 h-4 bg-gray-50 border-gray-100 group-hover:bg-white transition-colors duration-300 transform rotate-45 ${
                        isEven ? 'right-[-8px] border-t border-r' : 'left-[-8px] border-b border-l'
                      }`}></div>
                      
                      <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-gray-700 text-xs font-bold mb-3 tracking-wider uppercase">
                        {step.date}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
