import React from 'react';
import { motion } from 'framer-motion';

const TrustpilotReviews = () => {
   const reviews = [
  {
    name: 'Samantha L.',
    title: 'Surprisingly Detailed and Honest',
    text: 'I’ve visited a lot of review sites, but My Trusted Prop actually gives you everything in one place—fees, rules, and pros & cons. It helped me avoid a firm with hidden costs.',
    time: '1 week ago'
  },
  {
    name: 'Liam B.',
    title: 'A must-use for serious traders',
    text: 'This site made it way easier to compare prop firms. I ended up picking a firm that offered weekend trading—something I would’ve missed without this platform.',
    time: '2 weeks ago'
  },
  {
    name: 'Fatima R.',
    title: 'Very Helpful, Especially for Newcomers',
    text: 'As someone new to prop trading, I had no idea what to look for. The guides and comparisons here gave me the confidence to choose a firm that fit my trading style.',
    time: '3 weeks ago'
  },
  {
    name: 'Daniel M.',
    title: 'Unbiased and straight to the point',
    text: 'What I like is that they don’t sugarcoat things. Some firms are rated poorly and they explain exactly why. That kind of honesty is rare.',
    time: '3 weeks ago'
  },
  {
    name: 'Chioma E.',
    title: 'Clean interface and reliable info',
    text: 'Easy to navigate and the info is always up-to-date. I even found a discount code that saved me money on my challenge fee.',
    time: '4 weeks ago'
  }
];


    const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

    return (
        <section className="py-16 sm:py-24 bg-[#0A0A0A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold">TrustPilot Review</h2>
                    <p className="mt-4 text-base md:text-lg text-gray-400">
                        Don't trust our words. See what our users say about My Trusted Prop
                    </p>
                </motion.div>

                <div className="relative h-72">
                    <motion.div
                        className="absolute top-0 left-0 flex gap-6"
                        animate={{ x: ['0%', '-100%'] }}
                        transition={{ ease: 'linear', duration: 200, repeat: Infinity }}
                    >
                        {duplicatedReviews.map((review, index) => (
                            <div
                                key={index}
                                className="w-80 h-64 flex-shrink-0 rounded-[16px] p-5 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#312E81] transition-all duration-300 hover:shadow-[0_0_40px_rgba(147,197,253,0.4)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        {/* Star rating display */}
                                        <img
                                            src="/trustpilot/stars.png"
                                            alt="5 stars"
                                            className="h-6 object-contain"
                                        />
                                        <p className="text-xs text-gray-400">{review.time}</p>
                                    </div>
                                    <h3 className="font-bold text-base mb-2">{review.title}</h3>
                                    <p className="text-sm text-gray-300">{review.text}</p>
                                </div>
                                <p className="font-semibold text-right">{review.name}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustpilotReviews;