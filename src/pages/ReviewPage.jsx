import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, CheckCircle, XCircle, ExternalLink, User, MessageSquare, BarChart, Shield, DollarSign, Target, Clock, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getReviewFirmsData } from '@/data/firms';

const Section = ({ title, icon, children }) => (
    <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
    >
        <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-6 text-gray-100">
            {icon}
            <span className="ml-3">{title}</span>
        </h2>
        <div className="bg-[#101827] p-6 rounded-lg border border-blue-900/20 shadow-lg">
            {children}
        </div>
    </motion.div>
);

const ReviewPage = () => {
    const { slug } = useParams();
    const [firm, setFirm] = useState(null);
    
    // Get review firms data from centralized source
    const reviewFirmsData = getReviewFirmsData();

    useEffect(() => {
        setFirm(reviewFirmsData[slug]);
    }, [slug, reviewFirmsData]);

    if (!firm) {
        return <div className="text-center py-20">Loading firm review...</div>;
    }

    const handleCtaClick = () => {
        window.open(firm.ctaLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <Helmet>
                <title>{firm.name} Review | The Trusted Prop</title>
                <meta name="description" content={`A detailed breakdown of challenges, rules, trust score, and real user experiences with ${firm.name}.`} />
                <meta property="og:title" content={`${firm.name} Review`} />
                <meta property="og:description" content={`Is ${firm.name} the right prop firm for you? Read our in-depth review.`} />
            </Helmet>

            <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center font-bold text-4xl flex-shrink-0">{firm.logo}</div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold">{firm.name}</h1>
                            {firm.tag && <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold hidden sm:block">{firm.tag}</span>}
                        </div>
                        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                            A detailed breakdown of challenges, rules, trust score, and real user experiences with {firm.name}.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-md text-gray-300 mt-4">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="font-semibold text-white">{firm.rating}</span>
                            </div>
                            <span>|</span>
                            <span>{firm.reviews} reviews</span>
                        </div>
                    </motion.header>

                    {/* Main Content */}
                    <main>
                        <Section title="Challenge Structure" icon={<BarChart className="text-blue-400" />}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                                <div className="bg-[#0A0A0A] p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Challenge Type</p>
                                    <p className="font-bold text-lg">{firm.challenge.type}</p>
                                </div>
                                <div className="bg-[#0A0A0A] p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Profit Target</p>
                                    <p className="font-bold text-lg">{firm.challenge.profitTarget}</p>
                                </div>
                                <div className="bg-[#0A0A0A] p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Max Daily Drawdown</p>
                                    <p className="font-bold text-lg">{firm.challenge.maxDailyDrawdown}</p>
                                </div>
                                <div className="bg-[#0A0A0A] p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Max Overall Drawdown</p>
                                    <p className="font-bold text-lg">{firm.challenge.maxOverallDrawdown}</p>
                                </div>
                                <div className="bg-[#0A0A0A] p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Time Limit</p>
                                    <p className="font-bold text-lg">{firm.challenge.timeDuration}</p>
                                </div>
                                <div className="bg-[#0A0A0A] p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Refundable Fee</p>
                                    <p className="font-bold text-lg">{firm.challenge.refund}</p>
                                </div>
                            </div>
                        </Section>

                        <Section title={`Why Choose ${firm.name}?`} icon={<CheckCircle className="text-green-400" />}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {firm.recommendations.map((rec, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-[#0A0A0A] p-3 rounded-md">
                                        <ThumbsUp className="w-5 h-5 text-green-500" />
                                        <span className="font-medium">{rec}</span>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section title="Pros & Cons" icon={<Shield className="text-yellow-400" />}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-xl mb-4 text-green-400">Pros</h3>
                                    <ul className="space-y-2">
                                        {firm.pros.map((pro, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-4 text-red-400">Cons</h3>
                                    <ul className="space-y-2">
                                        {firm.cons.map((con, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                                                <span>{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        <Section title="What Traders Say" icon={<MessageSquare className="text-purple-400" />}>
                            <div className="space-y-6">
                                {firm.userReviews.map((review, i) => (
                                    <div key={i} className="bg-[#0A0A0A] p-4 rounded-lg border-l-4 border-purple-500">
                                        <div className="flex items-center mb-2">
                                            <User className="w-5 h-5 mr-2" />
                                            <span className="font-bold">{review.name}</span>
                                            <div className="flex ml-auto">
                                                {[...Array(5)].map((_, j) => (
                                                    <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-300">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section title="Final Thoughts" icon={<Target className="text-red-400" />}>
                            <p className="text-lg text-gray-300 mb-6">
                                {firm.name} stands out as a {firm.pros[0].toLowerCase()} and is an excellent choice for traders looking for {firm.pros[1].toLowerCase()}. While it has {firm.cons[0].toLowerCase()}, the overall package is highly compelling.
                            </p>
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300 whitespace-normal text-center px-4 py-3"
                                onClick={handleCtaClick}
                            >
                                Get Funded With {firm.name}
                                <ExternalLink className="w-5 h-5 ml-2 shrink-0" />
                            </Button>

                        </Section>
                    </main>
                </div>
            </div>
        </>
    );
};

export default ReviewPage;