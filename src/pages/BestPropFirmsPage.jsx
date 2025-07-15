import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import FirmShowcaseCard from '@/components/propfirms/FirmShowcaseCard';
import SectionSeparator from '@/components/propfirms/SectionSeparator';
import { getTopFirmsData } from '@/data/firms';



const BestPropFirmsPage = () => {
    const topFirmsData = getTopFirmsData();
    return (
        <>
            <Helmet>
                <title>Top 3 Prop Trading Firms of 2025 | The Trusted Prop</title>
                <meta name="description" content="Hand-picked highest-converting and most trusted prop firms based on results, payout conditions, and performance." />
            </Helmet>
            <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl lg:text-5xl font-extrabold">
                            <span role="img" aria-label="trophy">🥇</span> Top 3 Prop Trading Firms of 2025
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                            We’ve hand-picked the highest-converting and most trusted prop firms based on trader results, payout conditions, and overall performance.
                        </p>
                    </motion.div>

                    <div className="space-y-8 md:space-y-12">
                        {topFirmsData.map((firmData, index) => (
                           <React.Fragment key={firmData.firm}>
                                <motion.div
                                 initial={{ opacity: 0, y: 50 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                 <FirmShowcaseCard {...firmData} />
                                </motion.div>
                                {index < topFirmsData.length - 1 && (
                                    <SectionSeparator icon={firmData.separator.icon} text={firmData.separator.text} />
                                )}
                           </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestPropFirmsPage;