import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import EasiestFirmCard from '@/components/propfirms/EasiestFirmCard';
import { getEasiestFirmsData } from '@/data/firms';

const EasiestFirmsPage = () => {
    // Get easiest firms data from centralized source
    const firmsData = getEasiestFirmsData();
    
    const [activeFilter, setActiveFilter] = useState('All');
    
    const filters = ['All', '1-Step Only', 'No Daily Drawdown', 'Free Retry', 'Instant Funding'];

    const filteredFirms = firmsData.filter(firm => {
        if (activeFilter === 'All') return true;
        if (activeFilter === '1-Step Only') return firm.features.some(f => f.includes('1-Step'));
        if (activeFilter === 'No Daily Drawdown') return firm.features.some(f => f.includes('No Daily Drawdown'));
        if (activeFilter === 'Free Retry') return firm.features.some(f => f.includes('Free Retry'));
        if (activeFilter === 'Instant Funding') return firm.features.some(f => f.includes('Instant Funding'));
        return false;
    });

    return (
        <>
            <Helmet>
                <title>Easiest Prop Firms to Pass in 2025 | My Trusted Prop</title>
                <meta name="description" content="Beginner-friendly prop firm challenges with low profit targets, no daily drawdowns, and quick payouts." />
            </Helmet>
            <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl lg:text-5xl font-extrabold">
                            <span role="img" aria-label="brain">🧠</span> Easiest Prop Firms to Pass in 2025
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                           Whether you're new to prop trading or looking for simpler rules, these firms offer the most beginner-friendly challenges. Low profit targets, no daily drawdowns, and quick payouts — all verified.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-2 mb-12"
                    >
                        {filters.map(filter => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? 'default' : 'outline'}
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full transition-all duration-300 ${activeFilter === filter ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 border-gray-700 hover:bg-gray-700'}`}
                            >
                                {filter}
                            </Button>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredFirms.map((firm, index) => (
                            <EasiestFirmCard key={firm.slug} firm={firm} index={index} />
                        ))}
                    </div>
                    {filteredFirms.length === 0 && (
                        <div className="text-center col-span-full py-20">
                            <h3 className="text-2xl font-semibold">No Firms Match This Filter</h3>
                            <p className="text-gray-400 mt-2">Try selecting another category to see more firms.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EasiestFirmsPage;