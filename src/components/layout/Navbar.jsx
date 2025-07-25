import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Best Offers', path: '/best-offers' },
    { name: 'Best Prop Firms', path: '/best-prop-firms' },
    { name: 'Compare Prop Firms', path: '/compare-prop-firms' },
    { name: 'Easiest Prop Firms to Pass', path: '/easiest-prop-firms' },
  ];

  const activeLinkStyle = {
    color: '#3B82F6',
  };

  const mobileNavVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
        duration: 0.3,
      },
    },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-3">
                {/* Geometric Icon */}
                <div className="relative w-8 h-8 lg:w-9 lg:h-9">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 transform rotate-45 group-hover:rotate-[50deg] transition-transform duration-300"></div>
                    <div className="absolute inset-1 rounded-md bg-gray-900 transform rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-blue-400 group-hover:bg-blue-300 transition-colors duration-300"></div>
                    </div>
                </div>

                {/* Clean Typography */}
                <div className="flex items-center space-x-1">
                    <span className="text-lg lg:text-xl xl:text-2xl font-light text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        My
                    </span>
                    <span className="text-lg lg:text-xl xl:text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        Trusted
                    </span>
                    <span className="text-lg lg:text-xl xl:text-2xl font-medium text-white group-hover:text-blue-50 transition-colors duration-300">
                        Prop
                    </span>
                </div>
            </div>
        </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                  className="relative text-sm font-medium text-white hover:text-[#3B82F6] transition-colors duration-300 group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3B82F6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </NavLink>
              ))}
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-white rounded-md focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 bg-[#0A0A0A] lg:hidden"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between h-20 px-4 sm:px-6">
                 <Link to="/" className="flex-shrink-0">
                    <span className="text-xl lg:text-2xl tracking-wider uppercase text-white">
                        <span className="font-light">My</span>{' '}
                        <span className="font-bold">Trusted</span>{' '}
                        <span className="font-semibold">Prop</span>
                    </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white rounded-md focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex-grow flex flex-col items-center justify-center space-y-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                    className="text-2xl font-medium text-white hover:text-[#3B82F6] transition-colors"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;