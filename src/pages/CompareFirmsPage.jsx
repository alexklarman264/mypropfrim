import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, XCircle, Copy, ExternalLink, RefreshCw, Trash2, ChevronsUpDown, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { getAllFirmsData } from '@/data/firms';

const defaultFirms = ["funding-pips", "ftmo", "alpha-capital"];

const features = [
    { key: 'logo', label: 'Firm' },
    { key: 'rating', label: 'Rating' },
    { key: 'challengeCost', label: 'Challenge Cost' },
    { key: 'profitTarget', label: 'Profit Target' },
    { key: 'dailyDrawdown', label: 'Daily Drawdown' },
    { key: 'maxDrawdown', label: 'Max Drawdown' },
    { key: 'payoutSplit', label: 'Payout Split' },
    { key: 'timeLimit', label: 'Time Limit' },
    { key: 'freeRetry', label: 'Free Retry' },
    { key: 'bonus', label: 'Bonus Offer' },
    { key: 'discountCode', label: 'Discount Code' },
    { key: 'cta', label: 'Actions' },
];

const FirmSelector = ({ selectedFirms, setSelectedFirms, allFirmsData }) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (slug) => {
        if (selectedFirms.includes(slug)) {
            setSelectedFirms(selectedFirms.filter(s => s !== slug));
        } else if (selectedFirms.length < 5) {
            setSelectedFirms([...selectedFirms, slug]);
        } else {
            toast({
                title: "Limit Reached",
                description: "You can compare up to 5 firms at a time.",
                variant: "destructive",
            });
        }
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-full md:w-[300px] justify-between bg-gray-800 border-gray-700 hover:bg-gray-700">
                    Select firms to compare...
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full md:w-[300px] p-0 bg-gray-900 border-gray-700">
                <Command>
                    <CommandInput placeholder="Search firms..." />
                    <CommandList>
                        <CommandEmpty>No firm found.</CommandEmpty>
                        <CommandGroup>
                            {allFirmsData.map((firm) => (
                                <CommandItem
                                    key={firm.slug}
                                    value={firm.name}
                                    onSelect={() => handleSelect(firm.slug)}
                                    className="cursor-pointer"
                                >
                                    <CheckCircle
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedFirms.includes(firm.slug) ? "opacity-100 text-green-500" : "opacity-0"
                                        )}
                                    />
                                    {firm.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

const CompareFirmsPage = () => {
    // Get all firms data from centralized source
    const allFirmsData = getAllFirmsData();

    const [selectedFirms, setSelectedFirms] = useState(() => {
        try {
            const saved = localStorage.getItem('comparedFirms');
            return saved ? JSON.parse(saved) : defaultFirms;
        } catch (error) {
            return defaultFirms;
        }
    });

    useEffect(() => {
        localStorage.setItem('comparedFirms', JSON.stringify(selectedFirms));
    }, [selectedFirms]);

    const firmsToCompare = allFirmsData.filter(firm => selectedFirms.includes(firm.slug));

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast({ title: "Copied!", description: `${text} copied to clipboard.` });
    };

    const renderCell = (firm, featureKey) => {
        const value = firm[featureKey];
        switch (featureKey) {
            case 'logo':
                return (
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center font-bold text-2xl mb-2">{firm.logo}</div>
                        <span className="font-bold text-lg">{firm.name}</span>
                    </div>
                );
            case 'rating':
                return (
                    <div className="flex items-center justify-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{firm.rating}</span>
                        <span className="text-sm text-gray-400">({firm.reviews})</span>
                    </div>
                );
            case 'freeRetry':
                return value ? <CheckCircle className="w-6 h-6 text-green-500 mx-auto" /> : <XCircle className="w-6 h-6 text-red-500 mx-auto" />;
            case 'discountCode':
                return (
                    <div className="flex items-center justify-center gap-2">
                        <Badge variant="secondary">{value}</Badge>
                        {value !== 'N/A' && <Copy className="w-4 h-4 cursor-pointer hover:text-blue-400" onClick={() => copyToClipboard(value)} />}
                    </div>
                );
            case 'cta':
                return (
                    <div className="flex flex-col items-center gap-2">
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => window.open(value.buy, '_blank')}>
                            Buy Now <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                        <Link to={value.review}>
                            <Button size="sm" variant="outline" className="w-full border-gray-600 hover:bg-gray-800">Read Review</Button>
                        </Link>
                    </div>
                );
            default:
                return <span className="font-medium">{value}</span>;
        }
    };

    return (
        <>
            <Helmet>
                <title>Compare Top Prop Trading Firms | My Trusted Prop</title>
                <meta name="description" content="Quickly compare payout splits, challenge rules, costs, bonuses, and more across leading prop firms." />
            </Helmet>
            <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl lg:text-5xl font-extrabold">
                            <span role="img" aria-label="scales">⚖️</span> Compare Top Prop Trading Firms
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                            Quickly compare payout splits, challenge rules, costs, bonuses, and more. Choose up to 5 firms to compare side-by-side.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-[#101827] rounded-lg border border-blue-900/20"
                    >
                        <FirmSelector 
                            selectedFirms={selectedFirms} 
                            setSelectedFirms={setSelectedFirms} 
                            allFirmsData={allFirmsData} 
                        />
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => setSelectedFirms(defaultFirms)} className="border-gray-600 hover:bg-gray-800">
                                <RefreshCw className="w-4 h-4 mr-2" /> Reset
                            </Button>
                            <Button variant="destructive" onClick={() => setSelectedFirms([])}>
                                <Trash2 className="w-4 h-4 mr-2" /> Clear All
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="overflow-x-auto scrollbar-hide"
                    >
                        <div className="min-w-max">
                            <div
                                className="grid gap-px bg-gray-700"
                                style={{
                                    gridTemplateColumns: `minmax(90px, 0.6fr) repeat(${firmsToCompare.length}, minmax(200px, 1fr))`,
                                }}
                            >
                                <div className="bg-[#101827] p-4 sticky left-0 z-10"></div>
                                {firmsToCompare.map(firm => (
                                    <div key={firm.slug} className="bg-[#101827] p-4 text-center">
                                        {renderCell(firm, 'logo')}
                                    </div>
                                ))}

                                {features.slice(1).map(feature => (
                                    <React.Fragment key={feature.key}>
                                        <div className="bg-[#101827] p-4 flex items-center text-sm font-bold sticky left-0 z-10">
                                            {feature.label}
                                        </div>
                                        {firmsToCompare.map(firm => (
                                            <div key={firm.slug} className="bg-[#0A0A0A] p-4 text-center  flex items-center justify-center">
                                                {renderCell(firm, feature.key)}
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        {firmsToCompare.length === 0 && (
                            <div className="text-center py-20 bg-[#101827] rounded-b-lg">
                                <Scale className="w-16 h-16 mx-auto text-gray-500 mb-4" />
                                <h3 className="text-xl font-semibold">Select firms to start comparing</h3>
                                <p className="text-gray-400">Use the dropdown above to add firms to the table.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default CompareFirmsPage;