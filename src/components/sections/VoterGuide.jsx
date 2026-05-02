import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCamera, FiHome, FiCreditCard, FiMail, FiPhone } from 'react-icons/fi';

const documents = [
  {
    icon: <FiCamera className="w-8 h-8" />,
    title: "Recent Photograph",
    description: "Passport size color photograph taken within the last 6 months with a clear background."
  },
  {
    icon: <FiHome className="w-8 h-8" />,
    title: "Proof of Address",
    description: "Utility bill, bank passbook, rent agreement, or any official document showing your current address."
  },
  {
    icon: <FiCreditCard className="w-8 h-8" />,
    title: "Age Proof",
    description: "Birth certificate, school leaving certificate, or passport to verify you are 18 years or older."
  },
  {
    icon: <FiFileText className="w-8 h-8" />,
    title: "Identity Proof",
    description: "National ID, PAN card, driving license, or any government-issued photo identity card."
  }
];

const VoterGuide = () => {
  return (
    <section id="guide" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voter Registration Guide</h2>
          <p className="text-lg text-gray-600">
            Getting ready to vote? Make sure you have the required documents before starting your registration process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                {doc.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{doc.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {doc.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-primary-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need help with your application?</h3>
              <p className="text-primary-100 mb-0">
                Our support team is available to assist you with any questions regarding the voter registration process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="flex items-center justify-center gap-2 bg-white text-primary-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                <FiPhone /> Call Helpline
              </button>
              <button className="flex items-center justify-center gap-2 bg-primary-800 border border-primary-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors">
                <FiMail /> Email Support
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VoterGuide;
