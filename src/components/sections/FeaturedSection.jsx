import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart, CheckSquare, BarChart2 } from 'lucide-react';

const FeaturedSection = () => {
  const stats = [
    { icon: Briefcase, text: '20+ Trusted Prop Firms' },
    { icon: BarChart, text: '1200+ Challenge Account' },
    { icon: CheckSquare, text: '3000+ Verified Reviews' },
    { icon: BarChart2, text: '1M+ Monthly Website Visits' }
  ];

  const logos = [
    { name: 'Digital Journal', src: '/featured_logo/digitaljournal.webp' },
    { name: 'MarketWatch', src: '/featured_logo/marketwatch.webp' },
    { name: 'Forex Factory', src: '/featured_logo/forexfactory.webp' },
    { name: 'Business Insider', src: '/featured_logo/businessinsider.webp' },
    { name: 'Benzinga', src: '/featured_logo/benzinga.webp' },
    { name: 'Barchart', src: '/featured_logo/barchart.webp' },
    { name: 'Yahoo Finance', src: '/featured_logo/yahoo.webp' },
  ];

  const logoRowRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Measure actual scroll width of logos
  useEffect(() => {
    if (logoRowRef.current) {
      setScrollWidth(logoRowRef.current.scrollWidth);
    }
  }, []);

  // Duration based on total scroll width and speed (in px/sec)
  const SCROLL_SPEED = 60; // pixels per second
  const duration = scrollWidth / SCROLL_SPEED;

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Trustpilot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 px-4 py-2 border border-blue-500/60 rounded-full bg-gradient-to-b from-white/10 to-blue-900/10"
        >
          <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/trustpilot/logo.png" alt="Trustpilot" className="h-5 object-contain" />
            <span className="text-sm text-white font-bold mt-1">4.8</span>
            <img src="/trustpilot/stars.png" alt="5 stars" className="h-5 object-contain" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs sm:text-base text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700"
            >
              <stat.icon className="w-5 h-5 text-[#4A6CF7]" />
              <span>{stat.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Logos */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-8 mt-8">
          <p className="text-lg md:text-xl font-bold whitespace-nowrap">Featured In</p>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex"
              ref={logoRowRef}
              animate={{ x: [`0px`, `-${scrollWidth / 2}px`] }}
              transition={{ ease: 'linear', duration, repeat: Infinity }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-36 sm:w-48 h-16 flex items-center justify-center mx-2 sm:mx-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain hover:opacity-80 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
