import React from 'react';
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8 border-t border-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EG</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Election<span className="text-primary-400">Guide</span>
              </span>
            </div>
            <p className="text-primary-200 mb-6 text-sm leading-relaxed">
              Empowering citizens with accurate, accessible, and timely information about the democratic election process. Make your voice heard.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-colors">
                <FiYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#process" className="text-primary-300 hover:text-white transition-colors text-sm">The Process</a></li>
              <li><a href="#guide" className="text-primary-300 hover:text-white transition-colors text-sm">Voter Guide</a></li>
              <li><a href="#faq" className="text-primary-300 hover:text-white transition-colors text-sm">FAQs</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Official Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  Election Commission <FiExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  Voter Registration Portal <FiExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  Know Your Candidate <FiExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  Electoral Roll Search <FiExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-primary-200 text-sm mb-4">
              Subscribe for updates on upcoming elections and registration deadlines.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-900 border border-primary-800 rounded-lg px-4 py-2 text-white placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg px-4 py-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-400 text-sm">
            &copy; {new Date().getFullYear()} Election Process Guide. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
