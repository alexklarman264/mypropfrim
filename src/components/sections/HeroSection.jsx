import React from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Heart, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { getHeroTopFirms } from '@/data/firms';

const HeroSection = () => {
   const topFirms = getHeroTopFirms();
    const showComingSoon = () => {
        toast({
          title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
      };
    
     

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Find the Best Prop Trading Firms in 2025:{' '}
            <span className="gradient-text">Verified by The Trusted Prop</span>
          </h1>
          
          <p className="mt-6 text-lg text-[#B0B0B0] leading-relaxed">
            Discover trusted prop trading firms with verified reviews, exclusive discounts, and comprehensive comparisons. 
            Join thousands of traders who trust our platform for safe and profitable funding opportunities.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Top 7 Most Trusted Prop Firms</h2>
          
          <div className="flex flex-col space-y-4">
            {topFirms.slice(0, 7).map((firm, index) => (
              <div key={index} className="glow-border rounded-xl p-4">
                {/* Mobile Layout */}
                <div className="block sm:hidden relative">
                  {/* Trusted Badge - Top Right */}
                  <div className="absolute top-2 right-0">
                    <Button size="sm" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs px-3 py-1" onClick={showComingSoon}>
                      TRUSTED
                    </Button>
                  </div>

                  {/* Firm Info Row */}
                  <div className="flex items-start space-x-4 mb-8 pt-2">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center font-bold text-lg">
                        {firm.logo}
                      </div>
                      <CheckCircle2 className="absolute -top-2 -right-2 w-5 h-5 text-green-500 fill-green-500 bg-[#0A0A0A] rounded-full" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-lg mb-2">
                        {firm.name.map((part, i) => <div key={i}>{part}</div>)}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-gray-800/20 text-gray-300 text-xs rounded-full border border-gray-700/30">
                        {firm.type}
                      </span>
                    </div>
                  </div>

                  {/* Stats Grid - 3 columns 1 row */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {/* Rating */}
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <span className="font-bold text-lg">{firm.score}</span>
                        <Star className="w-4 h-4 text-blue-500 fill-current" />
                      </div>
                      <p className="text-xs text-gray-400">Rating</p>
                    </div>

                    {/* Trusted By */}
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Heart className="w-4 h-4 text-gray-400" />
                        <span className="font-bold text-lg">{firm.users.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-400">Trusted by</p>
                    </div>

                    {/* Discount */}
                    <div className="text-center">
                      <p className="font-bold text-lg text-green-400 mb-1">{firm.discount}</p>
                      <p className="text-xs text-gray-400">Discount</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 border-[#4A6CF7] text-[#4A6CF7] hover:bg-[#4A6CF7]/10 hover:text-[#6C8CFF] text-sm" onClick={showComingSoon}>
                      Review
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-[#4A6CF7] to-[#6C8CFF] hover:opacity-90 text-white text-sm" onClick={showComingSoon}>
                      Buy Now
                    </Button>
                  </div>
                </div>

                {/* Desktop Layout - unchanged */}
                <div className="hidden sm:flex items-center justify-between text-left">
                  {/* Firm Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center font-bold text-xl">
                        {firm.logo}
                      </div>
                      <CheckCircle2 className="absolute -top-2 -right-2 w-6 h-6 text-green-500 fill-green-500 bg-[#0A0A0A] rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">
                        {firm.name.map((part, i) => <div key={i}>{part}</div>)}
                      </h3>
                      <p className="text-sm text-gray-400">{firm.type}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xl">{firm.score}</span>
                    <Star className="w-6 h-6 text-blue-500 fill-current" />
                  </div>

                  {/* Trusted By */}
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-400">Trusted by</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Heart className="w-5 h-5 text-gray-400" />
                      <span className="font-semibold">{firm.users}</span>
                    </div>
                    <p className="text-xs text-gray-500">users</p>
                  </div>

                  {/* Offer */}
                  <div className="flex flex-col items-center space-y-2">
                    <p className="font-semibold text-lg">{firm.discount}</p>
                    <Button size="sm" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs w-28" onClick={showComingSoon}>
                      TRUSTED
                    </Button>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" className="border-[#4A6CF7] text-[#4A6CF7] hover:bg-[#4A6CF7]/10 hover:text-[#6C8CFF]" onClick={showComingSoon}>
                      Read Review
                    </Button>
                    <Button className="bg-gradient-to-r from-[#4A6CF7] to-[#6C8CFF] hover:opacity-90 text-white" onClick={showComingSoon}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;