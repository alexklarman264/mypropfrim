import React from 'react';
import { motion } from 'framer-motion';

const SectionSeparator = ({ icon, text }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 my-8 md:my-12"
        >
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-800 to-transparent"></div>
            <div className="flex items-center gap-3 bg-blue-900/40 text-blue-300 font-semibold px-4 py-2 rounded-full border border-blue-700 shadow-md">
                <span role="img" aria-label="icon" className="text-lg">{icon}</span>
                <span>{text}</span>
            </div>
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-800 to-transparent"></div>
        </motion.div>
    );
};

export default SectionSeparator;