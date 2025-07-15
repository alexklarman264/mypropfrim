// ============================================================================
// CENTRALIZED FIRMS DATA - Single Source of Truth
// ============================================================================

export const firms = [
  {
    id: "alpha-capital",
    name: "Alpha Capital",
    slug: "alpha-capital",
    logo: "AC",
    rating: 4.4,
    reviews: 693,
    
    // Basic Info
    basicInfo: {
      type: "Forex Prop Firm",
      tag: "🥇 Editor's Pick",
      challengeCost: "$99",
      profitTarget: "10%",
      payoutSplit: "90%",
      steps: "1-Step Challenge",
      timeLimit: "Unlimited"
    },
    
    // Challenge Details
    challenge: {
      type: "1-Step / 2-Step",
      minDays: "0 days",
      maxDailyDrawdown: "5%",
      maxOverallDrawdown: "10%",
      profitTarget: "8-10%",
      timeDuration: "Unlimited",
      refund: "Yes, on first payout"
    },
    
    // Drawdown
    drawdown: {
      daily: "5%",
      max: "10%"
    },
    
    // Offers & Discounts
    offers: [
      { discount: "15% OFF", extra: "+ FREE ACCOUNT", code: "MATCH", buyLink: "#", tooltip: "Get a free account of the same size if you reach the first payout on Power challenges." },
      { discount: "25% OFF", extra: "25% OFF ON ALPHA ONE ...", code: "PFM1", buyLink: "#" },
      { discount: "25% OFF", extra: "25% OFF ON ALPHA ONE ...", code: "PFM1", buyLink: "#" }
    ],
    
    // Features & Highlights
    features: ["1-Step Challenge", "No Daily Drawdown", "8% Profit Target", "Free Retry on Failure", "Crypto Payouts"],
    highlights: [
      "No Daily Drawdown",
      "1-Step Challenge", 
      "Payout in 24–48 hrs",
      "Crypto & Card Withdrawals",
      "Free Retry if Failed"
    ],
    
    // Pros & Cons
    pros: ["Up to 90% Payout", "Crypto payouts", "Fast support", "No daily drawdown"],
    cons: ["Strict trading rules", "No free retry on failure"],
    
    // User Reviews
    userReviews: [
      { name: "David R.", rating: 5, comment: "Loved the challenge. Got paid within 2 days! The no daily drawdown rule is a game changer." },
      { name: "Sara M.", rating: 4, comment: "Good experience but the rules were a bit strict for my trading style. Support was helpful though." }
    ],
    
    // CTAs & Links
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "/reviews/alpha-capital",
    
    // Page-specific data
    pageData: {
      badge: "Beginner Friendly",
      discountCode: "MATCH15",
      discountLabel: "15% OFF + Free Retry",
      separator: {
        icon: "🚀",
        text: "Fastest Growth"
      },
      recommendations: ["Fast payouts", "Free retries", "Crypto payouts", "Low challenge cost"],
      freeRetry: true,
      bonus: "15% OFF + Free Account"
    }
  },

  {
    id: "funding-pips",
    name: "Funding Pips",
    slug: "funding-pips", 
    logo: "FP",
    rating: 4.8,
    reviews: 1450,
    
    basicInfo: {
      type: "Instant Prop Firm",
      tag: "🔥 Trending",
      challengeCost: "$49",
      profitTarget: "8%",
      payoutSplit: "95%",
      steps: "2-Step Challenge",
      timeLimit: "No Limit"
    },
    
    challenge: {
      type: "2-Step",
      minDays: "0 days",
      maxDailyDrawdown: "5%",
      maxOverallDrawdown: "10%",
      profitTarget: "8% (Phase 1), 5% (Phase 2)",
      timeDuration: "Unlimited",
      refund: "Yes, on first payout"
    },
    
    drawdown: {
      daily: "5%",
      max: "10%"
    },
    
    offers: [
      { discount: "5% OFF", extra: "", code: "TRUSTED", buyLink: "#" }
    ],
    
    features: ["No Time Limit", "Fast Payouts (24 hrs)", "News Trading Allowed", "Best Spreads", "5% Profit Target (Phase 2)"],
    highlights: [
      "Up to 95% Payout",
      "No Time Limit", 
      "Fast Payouts (within 24 hrs)",
      "News Trading Allowed",
      "Best Spreads"
    ],
    
    pros: ["Industry-leading 95% payout", "Very low challenge cost", "Fast payouts", "News trading allowed"],
    cons: ["Newer firm in the market", "Limited educational resources"],
    
    userReviews: [
      { name: "Mike T.", rating: 5, comment: "The best spreads I've seen. Payout was super fast. Highly recommend!" },
      { name: "Jessica L.", rating: 5, comment: "Can't beat the value. The challenge is fair and the support team is responsive." }
    ],
    
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "/reviews/funding-pips",
    
    pageData: {
      badge: "No Time Limit",
      discountCode: "PIPS5",
      discountLabel: "5% OFF Your Challenge",
      separator: {
        icon: "🔥",
        text: "Best Payout Split"
      },
      recommendations: ["Best spreads", "No time limit", "Fast payouts", "News trading allowed"],
      freeRetry: true,
      bonus: "5% Bonus on Payout"
    }
  },

  {
    id: "ftmo",
    name: "FTMO",
    slug: "ftmo",
    logo: "FT",
    rating: 4.9,
    reviews: 50000,
    
    basicInfo: {
      type: "Instant Prop Firm",
      tag: "🏆 Most Trusted",
      challengeCost: "€155",
      profitTarget: "10%",
      payoutSplit: "90%",
      steps: "2-Step Challenge", 
      timeLimit: "No Limit"
    },
    
    challenge: {
      type: "2-Step",
      minDays: "4 days",
      maxDailyDrawdown: "5%",
      maxOverallDrawdown: "10%",
      profitTarget: "10% (Phase 1), 5% (Phase 2)",
      timeDuration: "Unlimited",
      refund: "Yes, with first payout"
    },
    
    drawdown: {
      daily: "5%",
      max: "10%"
    },
    
    offers: [
      { discount: "10% OFF", extra: "EXCLUSIVE", code: "FTMO10", buyLink: "#" },
      { discount: "5% OFF", extra: "ON $200K ACCOUNT", code: "FTMO5", buyLink: "#" }
    ],
    
    features: ["1-Step or 2-Step Challenges", "Free Trial Account", "Reputable & Trusted", "Excellent Support"],
    highlights: [
      "Up to 90% Scaling Plan",
      "1-Step or 2-Step Challenges",
      "Free Trial Account", 
      "Reputable & Trusted",
      "Excellent Support"
    ],
    
    pros: ["Industry pioneer and highly trusted", "Excellent free trial", "Great educational content", "Scaling plan up to $2M"],
    cons: ["Higher challenge cost", "Stricter rules on some strategies"],
    
    userReviews: [
      { name: "John D.", rating: 5, comment: "FTMO is the gold standard. Professional, reliable, and their platform is top-notch." },
      { name: "Emily C.", rating: 4, comment: "A bit pricey but you get what you pay for. The support and community are worth it." }
    ],
    
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "/reviews/ftmo",
    
    pageData: {
      separator: {
        icon: "🏆",
        text: "Most Trusted Brand"
      },
      recommendations: ["Reputable & Trusted", "Free Trial Account", "Excellent Support", "Great community"],
      freeRetry: false,
      bonus: "Free Trial Account",
      discountCode: "N/A"
    }
  },

  {
    id: "fxify",
    name: "FXIFY",
    slug: "fxify",
    logo: "FX",
    rating: 4.5,
    reviews: 1343,
    
    basicInfo: {
      type: "Instant Prop Firm",
      challengeCost: "$99",
      profitTarget: "10%",
      payoutSplit: "90%",
      steps: "1-Step Challenge",
      timeLimit: "No Limit"
    },
    
    offers: [
      { discount: "15% OFF", extra: "+ 90% PAYOUT", code: "FXIFY15", buyLink: "#", tooltip: "Enjoy an industry-leading 90% payout on all your profits." }
    ],
    
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    
    pageData: {
      discount: "15% OFF"
    }
  },

  {
    id: "the5ers",
    name: "The5%ers",
    slug: "the5ers",
    logo: "T5",
    rating: 4.7,
    reviews: 1153,
    
    basicInfo: {
      type: "Forex Prop Firm",
      challengeCost: "$79",
      profitTarget: "10%",
      payoutSplit: "90%",
      steps: "2-Step Challenge",
      timeLimit: "No Limit"
    },
    
    offers: [
      { discount: "5% OFF", extra: "", code: "THE5", buyLink: "#" }
    ],
    
    cta: {
      text: "Get Funded Now", 
      link: "#"
    },
    
    pageData: {
      discount: "5% OFF",
      originalPrice: 79,
      discountedPrice: 71.10,
      code: "TRUSTED10"
    }
  },

  {
    id: "the-funded-trader",
    name: "The Funded Trader",
    slug: "the-funded-trader",
    logo: "TFT",
    rating: 4.7,
    reviews: 25000,
    
    basicInfo: {
      challengeCost: "$129",
      profitTarget: "10%",
      payoutSplit: "80%",
      steps: "2-Step Challenge",
      timeLimit: "35 Days"
    },
    
    drawdown: {
      daily: "6%",
      max: "12%"
    },
    
    cta: {
      buy: "#",
      review: "/reviews/the-funded-trader"
    },
    
    pageData: {
      freeRetry: true,
      bonus: "Scaling Plan up to $1.5M",
      discountCode: "TFT10"
    }
  },

  {
    id: "myforexfunds",
    name: "MyForexFunds",
    slug: "myforexfunds",
    logo: "MFF",
    rating: 4.8,
    reviews: 30000,
    
    basicInfo: {
      challengeCost: "$84",
      profitTarget: "8%",
      payoutSplit: "85%",
      steps: "2-Step Challenge",
      timeLimit: "No Limit"
    },
    
    drawdown: {
      daily: "5%",
      max: "12%"
    },
    
    cta: {
      buy: "#",
      review: "/reviews/myforexfunds"
    },
    
    pageData: {
      freeRetry: true,
      bonus: "12% Bonus from Phase 2",
      discountCode: "MFF10",
      originalPrice: 69,
      discountedPrice: 55.20,
      code: "TRUSTED20"
    }
  },

  {
    id: "aquafunded",
    name: "AquaFunded",
    slug: "aquafunded",
    logo: "AF",
    rating: 4.7,
    reviews: 450,
    
    features: ["1-Step Challenge", "90% Payout Split", "No Time Limit", "Bi-Weekly Payouts", "Scaling up to $2M"],
    
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "/reviews/funding-pips",
    
    pageData: {
      badge: "Fastest Funding",
      discountCode: "AQUA5",
      discountLabel: "5% OFF"
    }
  },

  {
    id: "glow-node",
    name: "Glow Node",
    slug: "glow-node",
    logo: "GN",
    rating: 4.6,
    reviews: 300,
    
    features: ["1-Step Challenge", "No Minimum Trading Days", "Unlimited Trading Period", "Up to 90% Payout", "EA & Bots Allowed"],
    
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "/reviews/ftmo",
    
    pageData: {
      badge: "1-Step Only"
    }
  },

  {
    id: "pipfarm",
    name: "PipFarm",
    slug: "pipfarm",
    logo: "PF",
    rating: 4.9,
    reviews: 150,
    
    features: ["Instant Funding", "No Challenge Required", "Up to 50% Payout", "Get Started in Minutes", "Weekly Payouts"],
    
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "/reviews/alpha-capital",
    
    pageData: {
      badge: "Instant Funding",
      discountCode: "FARM10",
      discountLabel: "10% BONUS on first payout"
    }
  },

  {
    id: "swift-funding",
    name: "Swift Funding",
    slug: "swift-funding",
    logo: "SF",
    rating: 4.5,
    reviews: 550,
    
    features: ["1-Step Challenge", "7-Day Payout Cycle", "No Daily Drawdown", "Competitive Spreads", "User-Friendly Dashboard"],
    
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "/reviews/ftmo",
    
    pageData: {
      badge: "No Daily Drawdown"
    }
  },

  {
    id: "nostro",
    name: "Nostro",
    slug: "nostro",
    logo: "N",
    rating: 4.2,
    reviews: 1285,
    
    basicInfo: {
      type: "Forex Prop Firm"
    },
    
    pageData: {
      discount: "0% OFF"
    }
  },

  {
    id: "my-crypto-funding",
    name: "My Crypto Funding",
    slug: "my-crypto-funding",
    logo: "MCF",
    rating: 4.7,
    reviews: 1182,
    
    basicInfo: {
      type: "Crypto Prop Firm"
    },
    
    pageData: {
      discount: "20% OFF"
    }
  },

  {
    id: "e8-markets",
    name: "E8 Markets",
    slug: "e8-markets",
    logo: "E8",
    rating: 4.4,
    reviews: 20000,
    
    basicInfo: {
      type: "Forex Prop Firm"
    },
    
    pageData: {
      discount: "12% OFF"
    }
  },

  {
    id: "fundednext",
    name: "FundedNext",
    slug: "fundednext",
    logo: "FN",
    rating: 4.5,
    reviews: 1000,
    
    basicInfo: {
      challengeCost: "$89",
      profitTarget: "10%",
      payoutSplit: "90%",
      steps: "2-Step Challenge",
      timeLimit: "No Limit"
    },
    
    pageData: {
      originalPrice: 89,
      discountedPrice: 66.75,
      code: "TRUSTED25"
    }
  }
];

// ============================================================================
// PAGE-SPECIFIC SELECTOR FUNCTIONS
// ============================================================================

// Best Offers Page
export const getOffersData = () => {
  return firms
    .filter(firm => firm.offers && firm.offers.length > 0)
    .map(firm => ({
      firmName: firm.name,
      logo: firm.logo,
      rating: firm.rating,
      reviews: firm.reviews,
      offers: firm.offers
    }));
};

// Best Prop Firms Page
export const getTopFirmsData = () => {
  return firms
    .filter(firm => firm.highlights && firm.pageData?.separator)
    .map(firm => ({
      firm: firm.name,
      slug: firm.slug,
      logo: firm.logo,
      rating: firm.rating,
      reviews: firm.reviews,
      highlights: firm.highlights,
      cta: firm.cta,
      reviewLink: firm.reviewLink,
      separator: firm.pageData.separator
    }));
};

// Compare Firms Page
export const getAllFirmsData = () => {
  return firms
    .filter(firm => firm.basicInfo?.challengeCost && firm.drawdown)
    .map(firm => ({
      name: firm.name,
      slug: firm.slug,
      logo: firm.logo,
      rating: firm.rating,
      reviews: firm.reviews,
      challengeCost: firm.basicInfo.challengeCost,
      profitTarget: firm.basicInfo.profitTarget,
      dailyDrawdown: firm.drawdown.daily,
      maxDrawdown: firm.drawdown.max,
      payoutSplit: firm.basicInfo.payoutSplit,
      timeLimit: firm.basicInfo.timeLimit,
      freeRetry: firm.pageData?.freeRetry,
      bonus: firm.pageData?.bonus,
      discountCode: firm.pageData?.discountCode,
      cta: firm.cta
    }));
};

// Easiest Firms Page
export const getEasiestFirmsData = () => {
  return firms
    .filter(firm => firm.features && firm.pageData?.badge)
    .map(firm => ({
      name: firm.name,
      slug: firm.slug,
      logo: firm.logo,
      rating: firm.rating,
      reviews: firm.reviews,
      features: firm.features,
      badge: firm.pageData.badge,
      discountCode: firm.pageData.discountCode,
      discountLabel: firm.pageData.discountLabel,
      ctaLink: firm.cta?.link || "#",
      reviewLink: firm.reviewLink
    }));
};

// Review Page
export const getReviewFirmsData = () => {
  const reviewData = {};
  
  firms
    .filter(firm => firm.userReviews && firm.pros && firm.cons)
    .forEach(firm => {
      reviewData[firm.slug] = {
        slug: firm.slug,
        name: firm.name,
        logo: firm.logo,
        tag: firm.basicInfo?.tag,
        rating: firm.rating,
        reviews: firm.reviews,
        payout: firm.basicInfo?.payoutSplit,
        challengeCost: firm.basicInfo?.challengeCost,
        profitTarget: firm.basicInfo?.profitTarget,
        drawdown: firm.drawdown,
        steps: firm.basicInfo?.steps,
        timeLimit: firm.basicInfo?.timeLimit,
        pros: firm.pros,
        cons: firm.cons,
        userReviews: firm.userReviews,
        ctaLink: firm.cta?.link || "#",
        recommendations: firm.pageData?.recommendations,
        challenge: firm.challenge
      };
    });
  
  return reviewData;
};

// Cheapest Firms Page
export const getCheapestFirms = () => {
  return firms
    .filter(firm => firm.pageData?.originalPrice && firm.pageData?.discountedPrice)
    .map((firm, index) => ({
      rank: index + 1,
      name: firm.name,
      logo: firm.logo,
      score: firm.rating,
      originalPrice: firm.pageData.originalPrice,
      discountedPrice: firm.pageData.discountedPrice,
      code: firm.pageData.code
    }))
    .sort((a, b) => a.discountedPrice - b.discountedPrice);
};

// Hero Section
export const getHeroTopFirms = () => {
  return firms
    .filter(firm => firm.pageData?.discount !== undefined)
    .map(firm => ({
      name: firm.name.includes(" ") ? firm.name.split(" ") : [firm.name],
      type: firm.basicInfo?.type || "Forex Prop Firm",
      logo: firm.logo,
      score: firm.rating,
      users: firm.reviews,
      discount: firm.pageData.discount
    }));
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Get firm by ID
export const getFirmById = (id) => {
  return firms.find(firm => firm.id === id);
};

// Get firm by slug
export const getFirmBySlug = (slug) => {
  return firms.find(firm => firm.slug === slug);
};

// Get firms by rating range
export const getFirmsByRating = (minRating = 0, maxRating = 5) => {
  return firms.filter(firm => firm.rating >= minRating && firm.rating <= maxRating);
};

// Get firms with specific features
export const getFirmsByFeature = (feature) => {
  return firms.filter(firm => 
    firm.features?.includes(feature) || 
    firm.highlights?.includes(feature)
  );
};

// Get firms with offers
export const getFirmsWithOffers = () => {
  return firms.filter(firm => firm.offers && firm.offers.length > 0);
};