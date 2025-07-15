import React from 'react';
import { Star, CheckCircle, ExternalLink, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FirmShowcaseCard = ({ firm, logo, rating, reviews, highlights, cta, reviewLink, slug, buylink }) => {

    const handleCtaClick = () => {
        window.open(cta.link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="bg-[#101827] rounded-xl border border-blue-900/30 overflow-hidden shadow-2xl shadow-blue-900/10 transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-700">
            <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                    <div className="relative">
                            <div className="w-16 h-16 rounded-lg flex items-center justify-center ring-2 ring-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]">
                                <img src={logo} alt="Logo" className="w-16 h-16 rounded-lg object-contain" />
                            </div>
                        </div>
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold">{firm}</h2>
                        <div className="flex items-center justify-center sm:justify-start gap-2 text-md text-gray-400 mt-1">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="font-semibold text-white">{rating}</span>
                            <span>({reviews} reviews)</span>
                        </div>
                    </div>
                </div>
                
                {/* Divider */}
                <hr className="border-t border-blue-900/20 my-6"/>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="font-semibold text-gray-200">{highlight}</span>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                     <Button 
                        size="lg" 
                        className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-base rounded-full shadow-lg hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open(buylink, '_blank')}
                    >
                        {cta.text}
                        <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                    <Link to={`/reviews/${slug}`}>
                        <Button 
                            variant="link" 
                            className="text-blue-400 hover:text-blue-300"
                        >
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read Full Review
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FirmShowcaseCard;