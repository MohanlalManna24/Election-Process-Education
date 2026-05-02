import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const newsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop",
    category: "ANNOUNCEMENT",
    time: "2 HOURS AGO",
    title: "Commission Finalizes Security Audit of Voting Hardware",
    excerpt: "Independent cybersecurity firms have completed their final review of all tabulating machines ahead of..."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop",
    category: "VOTER GUIDE",
    time: "5 HOURS AGO",
    title: "What to Bring: Identification Requirements for Election Day",
    excerpt: "Ensure a smooth voting process by bringing one of the approved forms of government-issued photo..."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
    category: "ACCESSIBILITY",
    time: "YESTERDAY",
    title: "New Accessible Voting Options for Seniors and Citizens with Disabilities",
    excerpt: "We have expanded our curbside voting services and audio-assisted devices at over 4,000 locations..."
  }
];

const NewsSection = () => {
  const { t } = useLanguage();
  return (
    <section id="news" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-[32px] font-bold text-[#003366] mb-3 tracking-tight font-heading">
              {t('news.badge')}
            </h2>
            <p className="text-gray-600 text-[17px]">
              {t('news.subtitle')}
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#0055A4] font-semibold hover:text-blue-700 transition-colors pb-1 group">
            {t('news.allUpdates')} <FiArrowRight className="transform transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {newsData.map((news) => (
            <article key={news.id} className="flex flex-col cursor-pointer group">
              
              {/* Image Container */}
              <div className="w-full h-56 md:h-64 overflow-hidden mb-6 bg-gray-100 rounded-sm">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Meta Tags */}
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#4B7BAC] tracking-widest uppercase mb-3">
                <span>{news.category}</span>
                <span className="text-[#A0B7CC]">•</span>
                <span>{news.time}</span>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-[#003366] leading-snug mb-3 group-hover:text-[#0055A4] transition-colors">
                {news.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {news.excerpt}
              </p>
              
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
