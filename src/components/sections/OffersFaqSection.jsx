import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "How often are these offers updated?",
    answer: "We update our offers daily to ensure you get the latest and greatest discounts from top prop firms. Our team works around the clock to verify each code."
  },
  {
    question: "Are these coupon codes verified?",
    answer: "Yes, every single coupon code on My Prop Firm is manually verified by our team. We guarantee that our codes are active and ready to use."
  },
  {
    question: "Is it possible to use more than one discount at the same time?",
    answer: "Typically, prop firms only allow one discount code per purchase. We recommend using the code that gives you the best deal for your specific needs."
  },
  {
    question: "Is there an account creation requirement to get the discount?",
    answer: "Most of the time, you'll apply the discount code during the checkout process when purchasing a challenge. An account is usually created as part of that process."
  },
  {
    question: "What is the maximum discount at this time?",
    answer: "Discounts vary by firm and can change frequently. Our list always shows the best available offers, with some reaching as high as 50% off or including special bonuses like free accounts."
  },
  {
    question: "Is it possible for these offers to go out of date?",
    answer: "While we strive to keep our list 100% accurate, offers can sometimes change without notice. If you find a code that's not working, please let us know so we can update it!"
  },
  {
    question: "Do these apply to instant funding accounts too?",
    answer: "Many of our discount codes apply to both evaluation and instant funding accounts. Check the details of each offer, as some may be specific to a certain account type."
  },
  {
    question: "What is My Prop Firm?",
    answer: "My Prop Firm is your #1 resource for prop firm comparisons, verified reviews, and exclusive discounts. Our mission is to help traders find the best firms and save money."
  }
];

const OffersFaqSection = () => {
  return (
    <section className="mt-16 sm:mt-24">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-200"
        >
          FAQs
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-[#101827] rounded-xl mb-3 border-none px-4 shadow-sm hover:bg-[#131c2f] transition-colors duration-200">
                <AccordionTrigger className="flex justify-between items-center w-full text-base text-white hover:no-underline px-0">
  <span className="text-left">{faq.question}</span>
</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersFaqSection;