import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export const CopyCodeButton = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        toast({
            title: "Copied to clipboard!",
            description: `Code "${code}" is ready to use.`,
        });
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Button
            onClick={handleCopy}
            variant="outline"
            className="border-dashed border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white"
        >
            {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
            {code}
        </Button>
    );
};