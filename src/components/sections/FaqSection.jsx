import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const faqs = [
        "How do I figure out which prop firm is the best for me?",
        "Are instant funding prop firms real or risky?",
        "Can I use bots or EAs?",
        "When do firms pay out?",
        "Is prop trading legal in my country?",
        "What's the difference between evaluation and instant funding?",
        "How much can I make with prop trading?",
        "What happens if I fail the challenge?"
    ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12"
        >
          Prop Trading Insights: Expert Guides, Reviews & Strategies
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glow-border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium">{faq}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-[#4A6CF7]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#B0B0B0]" />
                )}
              </button>
              
              {openFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4 text-[#B0B0B0] border-t border-gray-800"
                >
                  <p className="pt-4">
                    This is a detailed answer to the question "{faq}". 
                    Our experts provide comprehensive guidance based on years of experience in prop trading.
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;