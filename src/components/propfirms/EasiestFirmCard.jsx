import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, Copy, ExternalLink, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

const EasiestFirmCard = ({ firm, index }) => {
    const { name, logo, rating, reviews, features, badge, discountCode, discountLabel, ctaLink, reviewLink, buylink } = firm;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast({ title: "Copied!", description: `Code ${text} copied to clipboard.` });
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="bg-[#101827] rounded-xl border border-blue-900/30 overflow-hidden shadow-lg shadow-blue-900/10 transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-700 hover:-translate-y-1 flex flex-col"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="p-6 flex-grow">
                {/* Header */}
                <div className="relative mb-4">
  {/* Top-left Badge */}
  {badge && (
    <Badge className="absolute -top-6 -right-2 bg-green-600/20 text-green-300 border-green-500/30 text-[11px] sm:text-xs px-2 py-1 rounded shadow-md">
      {badge}
    </Badge>
  )}

  {/* Main Company Info */}
  <div className="flex items-center gap-3">
    <div className="w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center ring-2 ring-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]">
      <img src={logo} alt="Logo" className="w-16 h-16 rounded-lg object-contain" />
    </div>
    <div className="min-w-0">
      <h3 className="text-xl font-bold break-words">{name}</h3>
      <div className="flex items-center gap-1.5 text-sm text-gray-400">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="font-semibold text-white">{rating}</span>
        <span>({reviews})</span>
      </div>
    </div>
  </div>
</div>


                {/* Features */}
                <div className="my-6 space-y-3">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-200">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0A0A0A]/50 p-6 mt-auto">
                {discountCode && discountCode !== "N/A" && (
  <div className="mb-4 text-center">
    <p className="text-sm text-yellow-400 font-semibold mb-1">{discountLabel}</p>
    <div className="flex w-full items-center justify-center gap-2 bg-gray-800 border border-dashed border-gray-600 rounded-md p-2">
      <span className="font-mono text-lg text-white">{discountCode}</span>
      <Copy className="w-5 h-5 cursor-pointer text-gray-400 hover:text-white" onClick={() => copyToClipboard(discountCode)} />
    </div>
  </div>
)}

                <div className="flex flex-col gap-2">
                    <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open(buylink, '_blank')}
                    >
                        Start Challenge
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Link to={reviewLink} className="w-full">
                        <Button
                            variant="link"
                            className="w-full text-blue-400 hover:text-blue-300"
                        >
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read Full Review
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default EasiestFirmCard;