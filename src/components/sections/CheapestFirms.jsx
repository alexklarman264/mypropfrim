import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { getCheapestFirms } from '@/data/firms';


const CheapestFirms = () => {
  const cheapestFirms = getCheapestFirms();
    const showComingSoon = () => {
        toast({
          title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
      };
    
     
      
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12"
        >
          Cheapest Prop Firms
        </motion.h2>
        
        <div className="space-y-6">
          {cheapestFirms.map((firm, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glow-border rounded-lg p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A6CF7] to-[#6C8CFF] rounded-full flex items-center justify-center font-bold text-lg">
                    #{firm.rank}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4A6CF7] to-[#6C8CFF] rounded-lg flex items-center justify-center font-bold text-sm">
                      {firm.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{firm.name}</h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(firm.score) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-sm text-[#B0B0B0] ml-2">{firm.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                  <div className="text-center lg:text-right">
                    <div className="text-sm text-[#B0B0B0] line-through">${firm.originalPrice}</div>
                    <div className="text-2xl font-bold text-green-400">${firm.discountedPrice}</div>
                    <div className="trust-badge px-3 py-1 rounded-full text-sm font-semibold text-[#3B82F6] inline-block mt-1">
                      {firm.code}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800" onClick={showComingSoon}>
                      Read Review
                    </Button>
                    <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white" onClick={showComingSoon}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheapestFirms;