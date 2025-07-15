import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
    const showComingSoon = () => {
        toast({
          title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
      };

  const socialLinks = [
    { icon: Facebook },
    { icon: Instagram },
    { icon: Twitter },
    { icon: Youtube },
    { icon: MessageCircle }
  ];

  const legalLinks = [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Cookies Policy", path: "/cookies-policy" },
      { name: "Terms & Conditions", path: "/terms-and-conditions" },
      { name: "Disclaimer", path: "/disclaimer" }
  ];
  const importantLinks = [
      // { name: "Payout Assurance", path: "#" },
      // { name: "Affiliate Program", path: "#" },
      { name: "How It Works", path: "/how-it-works" }
      // { name: "Trust Points", path: "#" },
      // { name: "PropTech", path: "#" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-lg font-semibold mb-4">Stay Updated</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4A6CF7] transition-colors"
                  onFocus={showComingSoon}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4A6CF7] transition-colors"
                  onFocus={showComingSoon}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4A6CF7] transition-colors"
                  onFocus={showComingSoon}
                />
                <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white" onClick={showComingSoon}>
                  Sign Up For The Newsletter
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <social.icon key={index} className="w-6 h-6 text-[#B0B0B0] hover:text-[#4A6CF7] cursor-pointer transition-colors" onClick={showComingSoon} />
              ))}
            </div>
          </div> */}

          <div className="space-y-4">
            <p className="text-lg font-semibold">Contact</p>
            <p className="text-[#B0B0B0] hover:text-[#4A6CF7] cursor-pointer transition-colors" onClick={showComingSoon}>
              support@mytrustedprop.com
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold">Legal</p>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link key={link.name} to={link.path} className="block text-[#B0B0B0] hover:text-[#4A6CF7] cursor-pointer transition-colors">{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold">Important Links</p>
            <div className="space-y-2">
              {importantLinks.map((link) => (
                link.path === "#" ?
                <p key={link.name} className="text-[#B0B0B0] hover:text-[#4A6CF7] cursor-pointer transition-colors" onClick={showComingSoon}>{link.name}</p>
                :
                <Link key={link.name} to={link.path} className="block text-[#B0B0B0] hover:text-[#4A6CF7] cursor-pointer transition-colors">{link.name}</Link>
              ))}
              {/* <p className="text-[#B0B0B0] font-semibold pt-2">My Trusted Prop</p> */}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-[#B0B0B0] leading-relaxed">
            <strong>Disclaimer:</strong> My Trusted Prop is not a financial advisor and does not provide investment advice. 
            All information on this website is for educational purposes only. Trading involves substantial risk and is not suitable for all investors. 
            Past performance does not guarantee future results. This company is registered in the UAE and operates under UAE jurisdiction.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-4 text-sm text-[#B0B0B0]">
            <Link to="/terms-of-service" className="hover:text-[#4A6CF7] cursor-pointer transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:text-[#4A6CF7] cursor-pointer transition-colors">Privacy Policy</Link>
            {/* <span>|</span>
            <span className="hover:text-[#4A6CF7] cursor-pointer transition-colors" onClick={showComingSoon}>Sitemap</span> */}
          </div>
          <p className="text-sm text-white">© 2025 My Trusted Prop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;