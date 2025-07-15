import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Tag } from 'lucide-react';
import OfferCard from '@/components/offers/OfferCard';

const FirmOfferGroup = ({ firmName, logo, rating, reviews, offers, buylink }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!offers || offers.length === 0) {
        return null;
    }

    const hasMultipleOffers = offers.length > 1;

    return (
        <div className="bg-[#101827] rounded-xl border border-blue-900/30 overflow-hidden shadow-lg">
            <OfferCard
                firmName={firmName}
                logo={logo}
                rating={rating}
                reviews={reviews}
                offer={{ ...offers[0], remainingOffers: offers.length - 1 }}
                isFirst={true}
                hasMultipleOffers={hasMultipleOffers}
                isExpanded={isExpanded}
                onToggleExpand={() => setIsExpanded(!isExpanded)}
                buylink= {buylink}
            />

            <AnimatePresence>
                {isExpanded && hasMultipleOffers && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col">
                            {offers.slice(1).map((offer, index) => (
                                <div key={index} className="border-t border-blue-900/20">
                                    <OfferCard
                                        firmName={firmName}
                                        logo={logo}
                                        rating={rating}
                                        reviews={reviews}
                                        offer={offer}
                                        isFirst={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FirmOfferGroup;