import React, { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const InfoTooltip = ({ content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tooltipRef.current && 
        triggerRef.current && 
        !tooltipRef.current.contains(event.target) && 
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const toggleTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        ref={triggerRef}
        onClick={toggleTooltip}
        className={cn(
          "inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 active:from-blue-600 active:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95",
          className
        )}
        type="button"
        aria-label="More information"
      >
        <Info className="w-3 h-3 text-white drop-shadow-sm" />
      </button>

      {isOpen && (
        <>
          {/* Mobile tooltip - appears below, right-aligned */}
          <div
            ref={tooltipRef}
            className="absolute top-full right-0 mt-2 z-50 w-48 p-3 text-sm text-white bg-gray-900 border border-gray-700 rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 block sm:hidden"
            role="tooltip"
          >
            <div className="relative">
              {content}
              {/* Arrow pointing up for mobile */}
              <div className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900"></div>
            </div>
          </div>

          {/* Desktop tooltip - appears above, centered */}
          <div
            ref={tooltipRef}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 w-64 p-3 text-sm text-white bg-gray-900 border border-gray-700 rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 hidden sm:block"
            role="tooltip"
          >
            <div className="relative">
              {content}
              {/* Arrow pointing down for desktop */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { InfoTooltip };