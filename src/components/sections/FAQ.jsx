import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: "Who is eligible to vote?",
    answer: "Any citizen who is 18 years of age or older on the qualifying date (usually January 1st of the year of revision of electoral roll) and is ordinarily resident of the constituency is eligible to vote, provided they are not disqualified under the law."
  },
  {
    question: "How can I register to vote online?",
    answer: "You can register online by visiting the official National Voters' Services Portal (NVSP). You will need to fill out Form 6 and upload necessary documents like age proof and address proof. Alternatively, you can use the Voter Helpline App."
  },
  {
    question: "What should I do if my name is not on the voter list?",
    answer: "If your name is missing from the electoral roll despite having a Voter ID, you should immediately fill out Form 6 and submit it to the Electoral Registration Officer (ERO) of your assembly constituency before the final list is published."
  },
  {
    question: "Can I vote without a Voter ID card?",
    answer: "Yes, if your name is on the electoral roll, you can vote even without a Voter ID card (EPIC). The Election Commission usually allows alternative photo identity documents such as an Aadhaar Card, Passport, Driving License, or PAN Card."
  },
  {
    question: "How do I find my polling booth?",
    answer: "You can find your polling booth by searching your name on the electoral search portal, checking the Voter Helpline App, or sending an SMS with your EPIC number to the designated election commission number."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Got questions about the election process? We've got answers.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          {faqs.map((faq, index) => (
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
