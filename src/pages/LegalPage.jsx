import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const legalContent = {
    privacy: {
        title: "Privacy Policy",
        content: [
            {
                heading: "Introduction",
                text: "Welcome to The Trusted Prop. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
            },
            {
                heading: "Information We Collect",
                text: "We may collect personal information such as your name, email address, and browsing data. This information is collected when you subscribe to our newsletter, use our comparison tools, or interact with our website features."
            },
            {
                heading: "How We Use Your Information",
                text: "We use the information we collect to personalize your experience, improve our website, send periodic emails, and provide you with relevant offers and information about prop trading firms."
            },
            {
                heading: "Disclosure of Your Information",
                text: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, so long as those parties agree to keep this information confidential."
            }
        ]
    },
    cookies: {
        title: "Cookies Policy",
        content: [
            {
                heading: "What Are Cookies",
                text: "As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies."
            },
            {
                heading: "How We Use Cookies",
                text: "We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use."
            },
            {
                heading: "Disabling Cookies",
                text: "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site."
            }
        ]
    },
    terms: {
        title: "Terms & Conditions",
        content: [
            {
                heading: "Agreement to Terms",
                text: "By using our website, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website."
            },
            {
                heading: "Intellectual Property Rights",
                text: "The content on our website, including text, graphics, logos, and images, is the property of The Trusted Prop and is protected by copyright and other intellectual property laws."
            },
            {
                heading: "User Responsibilities",
                text: "You are responsible for your use of the website and for any consequences thereof. You agree to use the website in compliance with all applicable laws, rules, and regulations."
            },
            {
                heading: "Limitation of Liability",
                text: "The Trusted Prop will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our website."
            }
        ]
    },
    disclaimer: {
        title: "Disclaimer",
        content: [
            {
                heading: "No Financial Advice",
                text: "The information provided on The Trusted Prop is for educational and informational purposes only. It is not intended as, and shall not be understood or construed as, financial advice. We are not attorneys, accountants, or financial advisors, nor are we holding ourselves out to be."
            },
            {
                heading: "Affiliate Disclosure",
                text: "Some of the links on this website are affiliate links, which means that we may earn a commission if you click on the link or make a purchase using the link. When you make a purchase, the price you pay will be the same whether you use the affiliate link or go directly to the vendor’s website using a non-affiliate link."
            },
            {
                heading: "Accuracy of Information",
                text: "We do our best to ensure that the information on this website is accurate and up-to-date. However, we cannot guarantee the accuracy of all information, and we are not responsible for any errors or omissions."
            }
        ]
    },
    tos: {
        title: "Terms of Service",
        content: [
            {
                heading: "1. Acceptance of Terms",
                text: "By accessing and using The Trusted Prop, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services."
            },
            {
                heading: "2. Description of Service",
                text: "The Trusted Prop provides users with access to a rich collection of resources, including but not limited to, prop firm reviews, comparison tools, and educational content. You understand and agree that the Service is provided 'AS-IS' and that The Trusted Prop assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings."
            },
            {
                heading: "3. User Conduct",
                text: "You agree to not use the Service to: upload, post, email, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable."
            }
        ]
    },
    howitworks: {
        title: "How It Works",
        content: [
            {
                heading: "1. Discover & Compare",
                text: "Use our comprehensive comparison tools and in-depth reviews to discover the best prop trading firms that match your trading style and goals. We provide all the key details, from challenge rules to payout splits."
            },
            {
                heading: "2. Get Funded",
                text: "Once you've chosen a firm, use our exclusive discount codes to get the best deal on your challenge. We guide you through the process of signing up and starting your journey to getting funded."
            },
            {
                heading: "3. Succeed & Get Paid",
                text: "Pass the challenge by meeting the profit targets and respecting the drawdown rules. Once you're a funded trader, you'll receive regular payouts based on your trading performance. We're here to support you every step of the way."
            }
        ]
    }
};

const LegalPage = ({ page }) => {
    const { title, content } = legalContent[page] || { title: "Page Not Found", content: [] };

    return (
        <>
            <Helmet>
                <title>{title} | The Trusted Prop</title>
                <meta name="description" content={`Read the ${title} of The Trusted Prop.`} />
            </Helmet>
            <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
                            {title}
                        </h1>
                        <p className="mt-4 text-lg text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#101827] rounded-xl border border-blue-900/30 p-8 md:p-12 space-y-8"
                    >
                        {content.map((section, index) => (
                            <div key={index}>
                                <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                                <p className="text-gray-300 leading-relaxed">{section.text}</p>
                            </div>
                        ))}
                         {content.length === 0 && (
                            <p className="text-gray-300 leading-relaxed text-center">Content for this page is not available.</p>
                         )}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default LegalPage;