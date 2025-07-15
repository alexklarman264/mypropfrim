import React from 'react';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const InfoTooltip = ({ content }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="cursor-pointer">
            <Info className="w-4 h-4 text-gray-500 hover:text-blue-400 transition-colors" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[300px] bg-gray-800 border-blue-900/50 text-white p-2 rounded-lg shadow-xl">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};