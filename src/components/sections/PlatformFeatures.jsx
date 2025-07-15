import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const featuresData = [
  {
    title: 'Best Forex Prop Trading Firms of 2025',
    description:
      "We conduct in-depth reviews of the top forex prop trading firms, based on tight spreads, advanced trading platforms, profit splits, leverage, and funding models. These prop firms grant traders access to global forex markets, with low trading fees and high leverage, often surpassing the limits set by regulated forex brokers. We test each prop firm challenge to ensure fair evaluations, clear risk management rules, and reliable payouts, helping traders find the best forex prop firms. We also assess whether these prop firms provide a strong trader community for traders",
    image: 'forex'
  },
  {
    title: 'Best Crypto Prop Firms of 2025',
    description:
      "We review the top crypto prop trading firms that offer high profit sharing, strong risk control, and affordable challenge fees. Whether you're trading Bitcoin, Ethereum, or altcoins, these prop firms provide access to a wide range of crypto markets with scalable funded accounts, ideal for both experienced and beginner crypto traders. We also assess whether these crypto prop firms offer educational resources, fair challenges, and advanced trading tools to help traders maximize profits in the volatile crypto market",
    image: 'crypto'
  },
  {
    title: 'Exclusive Prop Firm Discounts & Cashback Offers',
    description:
      "We’ve partnered with the most trusted prop trading firms to offer exclusive discount codes that help you save on challenge fees and reduce upfront trading costs. These prop firm promo codes make it easier for traders to access funded accounts and trade in markets like forex, stocks, commodities, crypto, and futures with less financial risk. Our prop firm deals and coupons are constantly updated to ensure you get the latest discounts and best savings when signing up for a prop trading firm",
    image: 'discounts'
  },
  {
    title: 'Best Futures Prop Trading Firms of 2025',
    description:
      "We review the best futures prop trading firms, focusing on firms that offer low-cost challenges, high earning potential, advanced trading platforms, fast payouts, and access to top futures markets. Whether you're an experienced or a beginner futures trader, our in-depth reviews help you find a trusted futures prop firm with scalable funded accounts, strong risk control, and competitive profit splits. Our in-depth reviews help traders make informed decisions in the futures trading space",
    image: 'futures'
  },
  {
    title: 'Best Stock Prop Trading Firms of 2025',
    description:
      "We review the top stock prop trading firms based on trading platform access, stock market coverage, fair challenge fees, profit splits, and trading rules. Whether you're trading US stocks, global equities, or integrating stocks with other asset classes, these prop firms offer funded accounts with transparent evaluations and fast payouts. While stock prop trading firms are still limited compared to forex and futures, we continuously update our rankings as more firms introduce equity trading solutions",
    image: 'stocks'
  }
];


const textVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.5
        }
    }),
};

const PlatformFeatures = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + featuresData.length) % featuresData.length);
    };

    const currentFeature = featuresData[currentIndex];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold">Your #1 Platform for Prop Firm Comparisons, Discounts & Reviews</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        At My Prop Firm, we make it easier for traders to find, compare, and choose the best proprietary trading firms. Whether you’re looking for discounts, cashback offers, or side-by-side in-depth prop firm comparisons, we’ve got you covered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-80 lg:h-96">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0, x: direction * 200, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -direction * 200, scale: 0.8 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
                                className="absolute inset-0 w-full h-full flex items-center justify-center"
                            >
                                {/* <div className="w-full h-full bg-[#0F172A] rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl p-8 relative"> */}
                                    <div className="w-full h-full rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl p-8 relative bg-gradient-radial from-[#0F172A] via-[#0F172A] to-[#020617]">

                                    {/* Logo + Brand Name */}
                                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">

                                        <div className="w-8 h-8 bg-[#1D4ED8] rounded-sm flex items-center justify-center">
                                            <p className="text-white text-sm font-bold">TTP</p>
                                        </div>
                                        <span className="text-white font-medium text-sm">My Prop Firm</span>
                                    </div>

                                    {/* Badge Image */}
                                    <img
                                        src="/certificates/1.png"
                                        alt="Best Prop Firm Badge"
                                        className="w-40 h-40 object-contain mt-12 mb-6"
                                    />

                                    {/* Title */}
                                    <h3 className="text-white text-lg sm:text-xl font-semibold px-4">
                                        Best Stock Prop Trading Firms of 2025
                                    </h3>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 gradient-text">

                                    {currentFeature.title.split(' ').map((word, i) => (
                                        <motion.span key={i} custom={i} variants={textVariant} initial="hidden" animate="visible">
                                            {word}{' '}
                                        </motion.span>
                                    ))}
                                </h3>
                                <div className="text-gray-300 space-y-2 text-sm sm:text-base">
                                    {currentFeature.description.split('. ').map((sentence, i) => (
                                        <motion.p key={i} custom={i + currentFeature.title.split(' ').length} variants={textVariant} initial="hidden" animate="visible">
                                            {sentence}{sentence && '.'}
                                        </motion.p>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-4 mt-4">
                            <button onClick={handlePrev} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button onClick={handleNext} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformFeatures;