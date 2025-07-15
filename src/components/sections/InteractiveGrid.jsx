import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Gift, BarChart3, Users, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const InteractiveGrid = () => {
    const showComingSoon = () => {
        toast({
          title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
      };
    
      const gridCards = [
        { title: "Prop Firm Web Traffic", icon: TrendingUp, buttonText: "Visit", color: "from-green-500 to-emerald-600" },
        { title: "Prop Firm Giveaway", icon: Gift, buttonText: "Get Funded", color: "from-green-500 to-emerald-600" },
        { title: "Prop Firm Spreads", icon: BarChart3, buttonText: "Coming Soon", color: "from-gray-500 to-gray-600", disabled: true },
        { title: "Compare Prop Firms", icon: Users, buttonText: "Visit", color: "from-green-500 to-emerald-600" },
        { title: "Consistency Calculator", icon: Calculator, buttonText: "Visit", color: "from-green-500 to-emerald-600" }
      ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {gridCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glow-border rounded-xl p-6 text-center space-y-4 cursor-pointer group ${card.disabled ? 'opacity-50' : ''}`}
              onClick={card.disabled ? undefined : showComingSoon}
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold">{card.title}</h3>
              
              <Button 
                className={`w-full ${card.disabled ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'} text-white`}
                disabled={card.disabled}
                onClick={card.disabled ? showComingSoon : undefined}
              >
                {card.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveGrid;