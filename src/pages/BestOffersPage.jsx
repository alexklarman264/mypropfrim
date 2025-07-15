import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import FirmOfferGroup from '@/components/offers/FirmOfferGroup';
import OffersFaqSection from '@/components/sections/OffersFaqSection';
import { getOffersData } from '@/data/firms';


const BestOffersPage = () => {
    const offersData = getOffersData();
    return (
        <>
            <Helmet>
                <title>Best Prop Firm Discount Codes | The Trusted Prop</title>
                <meta name="description" content="Verified discount offers from top prop firms. Use our exclusive codes to save instantly on your trading challenges and get funded." />
            </Helmet>
            <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl lg:text-6xl font-extrabold">Best Prop Firm Discount Codes</h1>
                        <p className="mt-6 text-xl text-gray-400">
                            Verified discount offers from top firms. Use the code and save instantly.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {offersData.map((firmData, index) => (
                           <motion.div
                             key={firmData.firmName}
                             initial={{ opacity: 0, x: -50 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.5, delay: index * 0.1 }}
                           >
                             <FirmOfferGroup {...firmData} />
                           </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-24">
                  <OffersFaqSection />
                </div>
            </div>
        </>
    );
};

export default BestOffersPage;
