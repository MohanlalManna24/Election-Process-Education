import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube, FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const links = t('footer.links');
  const officialLinks = t('footer.officialLinks');

  return (
    <footer className="bg-white text-gray-800 pt-20 pb-10 border-t border-violet-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-tr from-violet-600 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">EG</span>
              </div>
              <span className="font-heading font-extrabold text-2xl text-gray-900">
                Election<span className="text-violet-600">Guide</span>
              </span>
            </div>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed font-medium">{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              {[FiTwitter, FiFacebook, FiInstagram, FiYoutube].map((Icon, idx) => (
                <motion.a key={idx} whileHover={{ scale: 1.1, y: -2 }} href="#" className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 hover:bg-violet-600 hover:text-white transition-colors shadow-sm">
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {Array.isArray(links) && links.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors text-sm font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">{t('footer.resources')}</h4>
            <ul className="space-y-4">
              {Array.isArray(officialLinks) && officialLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors text-sm font-medium flex items-center gap-2 group">
                    {item} <FiExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">{t('footer.newsletter')}</h4>
            <p className="text-gray-600 text-sm mb-4 font-medium">{t('footer.newsletterDesc')}</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white font-bold rounded-xl px-4 py-3 transition-colors shadow-md shadow-violet-200">
                {t('footer.subscribe')}
              </motion.button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">{t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors">{t('footer.terms')}</a>
            <a href="#" className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors">{t('footer.accessibility')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
