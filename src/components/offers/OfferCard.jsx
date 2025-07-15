import React from 'react';
import { Star, ChevronDown, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CopyCodeButton } from '@/components/offers/CopyCodeButton';
import { toast } from '@/components/ui/use-toast';
import { InfoTooltip } from '@/components/ui/InfoTooltip';

const OfferCard = ({
    firmName,
    logo,
    rating,
    reviews,
    offer,
    isFirst,
    hasMultipleOffers,
    isExpanded,
    onToggleExpand, 
    buylink
}) => {
    const showBuyNowToast = () => {
        toast({
            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            description: "This will open the firm's website in a new tab.",
        });
    };

    return (
        <div className="p-6 md:p-8 bg-[#101827] hover:bg-[#131c2f] transition-colors duration-200 rounded-xl">
            {/* Mobile Layout */}
            <div className="block md:hidden">
                {/* Top Row: Company Info (left) + Discount Badge (right) */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Company Info */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-lg flex items-center justify-center ring-2 ring-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]">
                                <img src={logo} alt="Logo" className="w-16 h-16 rounded-lg object-contain" />
                            </div>
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-base leading-tight truncate">{firmName}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Star className="w-3 h-3 text-yellow-400 fill-current flex-shrink-0" />
                                <span>{rating}</span>
                                <span>({reviews})</span>
                            </div>
                        </div>
                    </div>

                    {/* Discount Badge */}
                    <div className="text-right flex-shrink-0">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-1.5 px-2.5 rounded-md shadow-md text-sm inline-block">
                            {offer.discount}
                        </div>
                        {offer.extra && (
                            <div className="flex items-center justify-end gap-1 text-[10px] text-gray-400 mt-2">

                                <span>🎁 {offer.extra}</span>
                                {offer.tooltip && <InfoTooltip content={offer.tooltip} />}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Section: Action buttons in 3 columns */}
                <div className="grid grid-cols-3 gap-2 items-center">
                    {/* Column 1: More offers button or empty space */}
                    <div className="flex justify-start">
                        {isFirst && hasMultipleOffers && (
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <button
                                    onClick={onToggleExpand}
                                    className="flex items-center justify-center gap-1 px-2 py-1.5 rounded-md border border-blue-700 bg-blue-900/20 hover:bg-blue-800/30 transition-colors duration-200 relative shadow-sm"
                                >
                                    <Tag className="w-3 h-3 text-blue-400" />
                                    <ChevronDown className="w-3 h-3 text-blue-400" />

                                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] font-semibold px-1 py-0.5 rounded-full shadow-sm border border-white min-w-[16px] h-4 flex items-center justify-center">
                                        {offer && hasMultipleOffers ? offer.remainingOffers || 1 : 0}
                                    </span>
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Column 2: Copy code button */}
                    <div className="flex justify-center">
                        <CopyCodeButton code={offer.code} />
                    </div>

                    {/* Column 3: Buy button */}
                    <div className="flex justify-end">
                        <Button
                            onClick={() => window.open(buylink, '_blank')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2"
                        >
                            Buy
                        </Button>
                    </div>
                </div>
            </div>

            {/* Desktop Layout (unchanged) */}
            <div className="hidden md:flex items-center gap-6">
                {/* Discount Badge */}
                <div className="w-1/4 flex-shrink-0 text-left">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-2 px-4 rounded-lg inline-block shadow-md text-lg">
                        {offer.discount}
                    </div>
                    {offer.extra && (
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                            <span>🎁 {offer.extra}</span>
                            {offer.tooltip && <InfoTooltip content={offer.tooltip} />}
                        </div>
                    )}
                </div>

                {/* Firm Info */}
                <div className="w-1/2 flex items-center gap-4">
                    <div className="relative">
                            <div className="w-16 h-16 rounded-lg flex items-center justify-center ring-2 ring-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]">
                                <img src={logo} alt="Logo" className="w-16 h-16 rounded-lg object-contain" />
                            </div>
                        </div>
                    <div>
                        <h3 className="font-semibold text-2xl">{firmName}</h3>
                        <div className="flex items-center gap-2 text-base text-gray-400">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{rating}</span>
                            <span>({reviews} reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Offer Tools */}
                <div className="w-1/4 flex items-center justify-end gap-3">
                    {isFirst && hasMultipleOffers && (
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative me-4"
                        >
                            <button
                                onClick={onToggleExpand}
                                className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-blue-700 bg-blue-900/20 hover:bg-blue-800/30 transition-colors duration-200 relative shadow-md"
                            >
                                <Tag className="w-5 h-5 text-blue-400" />
                                <ChevronDown className="w-4 h-4 text-blue-400" />

                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full shadow-sm border border-white">
                                    {offer && hasMultipleOffers ? offer.remainingOffers || 1 : 0}
                                </span>
                            </button>
                        </motion.div>
                    )}

                    <CopyCodeButton code={offer.code} />

                    <Button
                        onClick={() => window.open(buylink, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base"
                        
                    >
                        Buy
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;