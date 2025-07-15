import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const PlaceholderPage = ({ title }) => {
    return (
        <>
            <Helmet>
                <title>{title} | My Trusted Prop</title>
                <meta name="description" content={`Find information about ${title} on My Trusted Prop.`} />
            </Helmet>
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    <Construction className="w-24 h-24 text-blue-500 mb-8" />
                </motion.div>
                <motion.h1 
                    className="text-4xl lg:text-5xl font-extrabold mb-4"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {title}
                </motion.h1>
                <motion.p 
                    className="text-lg text-gray-400 max-w-2xl"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    This page is currently under construction. We're working hard to bring you the best content. Stay tuned!
                </motion.p>
            </div>
        </>
    );
};

export default PlaceholderPage;