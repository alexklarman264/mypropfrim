import React from 'react';
import { motion } from 'framer-motion';

const TrustStats = () => {
  const stats = [
    { title: "300K+", subtitle: "Monthly Visitors" },
    { title: "$100k+", subtitle: "Saved By Our Traders Monthly" },
    { title: "5000+", subtitle: "Free Accounts Distributed" },
    { title: "75K+", subtitle: "Trading Community" }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="inline-block bg-gray-800 rounded-full px-4 py-1 text-sm text-blue-400 mb-4 border border-blue-900 glow-border">
            Top Trusted
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Realize How Trustworthy
          </h2>
          <div className="inline-block mt-2">
            <h2 className="text-3xl lg:text-5xl font-bold bg-[#19224d] text-white px-6 py-2 rounded-lg">
              The Trusted Prop
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-[#0f172a] rounded-2xl p-8 text-center space-y-4 border border-blue-900/50 shadow-2xl shadow-blue-500/10 grid-overlay-light"
            >
              {(index === 0 || index === 3) && (
                <div
                  className={`absolute -top-16 left-1/2 -translate-x-1/2 w-8 h-16 hidden md:block ${index === 3 ? 'scale-x-[-1]' : ''
                    }`}
                >
                  <div className="w-full h-full glowing-pen"></div>
                </div>
              )}
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.title}</div>
                <div className="text-gray-400 mt-2 font-bold text-sm md:text-base">{stat.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;