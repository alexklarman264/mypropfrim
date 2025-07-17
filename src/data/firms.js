// ============================================================================
// CENTRALIZED FIRMS DATA - Single Source of Truth
// ============================================================================

export const firms = [
  {
    id: "plutus-tradebase",
    name: "Plutus TradeBase",
    slug: "plutus-tradebase",
    logo: "/firmlogos/plutustradebase.png",
    rating: 4.7,
    reviews: 286,
    
    basicInfo: {
      type: "Forex Prop Firm",
      tag: "💰 Best Value",
      challengeCost: "$99",
      profitTarget: "8%",
      payoutSplit: "80%",
      steps: "2-Step Challenge",
      timeLimit: "No Limit"
    },
    
    challenge: {
      type: "2-Step",
      minDays: "0 days",
      maxDailyDrawdown: "5%",
      maxOverallDrawdown: "10%",
      profitTarget: "8% / 5%",
      timeDuration: "No limit",
      refund: "Yes, on first payout"
    },
    
    drawdown: {
      daily: "5%",
      max: "10%"
    },
    
    offers: [
      { discount: "20% OFF", extra: "SIMPLE RULES", code: "FUNDME20", buyLink: "#", tooltip: "Simple rules with no complex restrictions" }
    ],
    
    features: ["Simple Rules", "No Complex Restrictions", "Fast Challenge Setup", "Clear Platform"],
    highlights: [
      "Solid platform with clear rules",
      "Fast challenge setup",
      "Simple rules, no complex restrictions",
      "Great value for money"
    ],
    
    pros: ["Simple rules with no complex restrictions", "Fast challenge setup", "Clear platform", "Good value for money"],
    cons: ["Lower payout split than competitors", "Founded in 2024 (newer firm)"],
    
    userReviews: [
      { name: "Tom R.", rating: 4, comment: "Simple rules make it easy to understand. Fast challenge setup is great." },
      { name: "Nina L.", rating: 4, comment: "Solid platform with clear rules. 20% OFF code is a nice bonus." }
    ],
    
    cta: {
      text: "Use Code & Start Challenge",
      link: "#"
    },
    buyLink: "https://dashboard.plutustradebase.com/challenges?affiliateId=Fundme",
    reviewLink: "/reviews/plutus-tradebase",
    
    pageData: {
      badge: "Simple Rules",
      discountCode: "FUNDME20",
      discountLabel: "20% OFF Simple Rules",
      separator: {
        icon: "💰",
        text: "Best Value"
      },
      recommendations: ["Simple rules", "Fast setup", "Clear platform", "Good value"],
      freeRetry: true,
      bonus: "20% OFF with Simple Rules",
      discount: "20% OFF",
      originalPrice: 99,
      discountedPrice: 79.20,
      code: "FUNDME20"
    }
  },

  {
    id: "blueberry-funded",
    name: "Blueberry Funded",
    slug: "blueberry-funded",
    logo: "/firmlogos/blueberry_funded.webp",
    rating: 4.4,
    reviews: 650,
    
    basicInfo: {
      type: "Forex Prop Firm",
      tag: "🧠 Beginner Friendly",
      challengeCost: "$99",
      profitTarget: "8%",
      payoutSplit: "80% → 90%",
      steps: "2-Step Challenge",
      timeLimit: "No Strict Time Pressure"
    },
    
    challenge: {
      type: "2-Step",
      minDays: "0 days",
      maxDailyDrawdown: "5%",
      maxOverallDrawdown: "10%",
      profitTarget: "8% / 5%",
      timeDuration: "No strict time pressure",
      refund: "Yes, on first payout"
    },
    
    drawdown: {
      daily: "5%",
      max: "10%"
    },
    
    offers: [
      { discount: "20% OFF", extra: "EASY TARGETS", code: "FUNDME20", buyLink: "#", tooltip: "8% / 5% targets with no strict time pressure" }
    ],
    
    features: ["8% / 5% Targets", "No Strict Time Pressure", "Simple Structure", "Generous Payouts"],
    highlights: [
      "Underrated firm with simple structure",
      "Generous payouts",
      "8% / 5% targets",
      "No strict time pressure"
    ],
    
    pros: ["8% / 5% targets are achievable", "No strict time pressure", "Simple structure", "Generous payouts"],
    cons: ["Lower recognition in market", "Smaller community"],
    
    userReviews: [
      { name: "Mike K.", rating: 5, comment: "8% / 5% targets are much more achievable. No time pressure makes it stress-free." },
      { name: "Anna S.", rating: 4, comment: "Underrated firm with simple structure. Generous payouts as promised." }
    ],
    
    cta: {
      text: "Use Code & Start Now",
      link: "#"
    },
    buyLink: "https://blueberryfunded.com/?utm_source=affiliate&ref=4487",
    reviewLink: "/reviews/blueberry-funded",
    
    pageData: {
      badge: "Beginner Friendly",
      discountCode: "FUNDME20",
      discountLabel: "20% OFF Easy Targets",
      separator: {
        icon: "🧠",
        text: "Easiest Targets"
      },
      recommendations: ["Easy targets", "No time pressure", "Simple structure", "Generous payouts"],
      freeRetry: true,
      bonus: "20% OFF with Easy Targets",
      discount: "20% OFF",
      originalPrice: 99,
      discountedPrice: 79.20,
      code: "FUNDME20"
    }
  },
  {
    id: "fxify",
    name: "FXIFY",
    slug: "fxify",
    logo: "/firmlogos/fxify.webp",
    rating: 4.5,
    reviews: 1343,
    
    basicInfo: {
      type: "Instant Prop Firm",
      tag: "🔥 Community Trusted",
      challengeCost: "$139",
      profitTarget: "8%",
      payoutSplit: "90%",
      steps: "1-Step Challenge",
      timeLimit: "No time limit"
    },
    
    challenge: {
      type: "1-Step",
      minDays: "5 days",
      maxDailyDrawdown: "4%",
      maxOverallDrawdown: "6%",
      profitTarget: "8% / 5%",
      timeDuration: "No time limit",
      refund: "Yes, 125% on first payout"
    },
    
    drawdown: {
      daily: "4%",
      max: "6%"
    },
    
    // No offers mentioned by client for FXIFY
    
    features: ["1-Step Challenge", "No Time Limit", "Fast Payouts", "Crypto Withdrawals", "Flexible Rules"],
    highlights: [
      "Up to 90% profit split",
      "Fast payouts & crypto withdrawal options",
      "Flexible trading rules & great scaling",
      "No time limit on challenge",
      "Featured by many trading influencers"
    ],
    
    pros: ["Up to 90% profit split", "Fast payouts & crypto withdrawal options", "Flexible trading rules", "Great scaling options"],
    cons: ["Higher challenge cost", "Founded in 2023 (newer firm)"],
    
    userReviews: [
      { name: "Mark S.", rating: 5, comment: "Exploding in popularity for good reason. High payouts and flexible withdrawals are amazing." },
      { name: "Lisa K.", rating: 4, comment: "Featured by many trading influencers. The scaling is excellent but challenge cost is a bit high." }
    ],
    
    cta: {
      text: "Start Trading with Fxify",
      link: "#"
    },
    buyLink: "https://trader.fxify.com/purchasechallenge?affiliateId=6436",
    reviewLink: "/reviews/fxify",
    
    pageData: {
      badge: "Community Trusted",
      discountCode: "N/A",
      discountLabel: "N/A",
      separator: {
        icon: "🔥",
        text: "Exploding in Popularity"
      },
      recommendations: ["High payouts", "Flexible withdrawals", "Great scaling", "No time limit"],
      freeRetry: true,
      bonus: "90% Payout + Crypto Withdrawals",
      discount: "N/A"
    }
  },

  {
    id: "ftmo",
    name: "FTMO",
    slug: "ftmo",
    logo: "/firmlogos/ftmo.webp",
    rating: 4.9,
    reviews: 24354,
    
    basicInfo: {
      type: "Instant Prop Firm",
      tag: "🏆 Most Trusted",
      challengeCost: "$155",
      profitTarget: "10%",
      payoutSplit: "80% → 90%",
      steps: "2-Step Challenge", 
      timeLimit: "30-day challenge, 60-day verification"
    },
    
    challenge: {
      type: "2-Step",
      minDays: "4 days",
      maxDailyDrawdown: "5%",
      maxOverallDrawdown: "10%",
      profitTarget: "10% (Phase 1), 5% (Phase 2)",
      timeDuration: "30-day challenge, 60-day verification",
      refund: "Yes, with first payout"
    },
    
    drawdown: {
      daily: "5%",
      max: "10%"
    },
    
    // No offers mentioned by client for FTMO
    
    features: ["2-Step Challenge", "Free Trial Account", "Reputable & Trusted", "Excellent Support"],
    highlights: [
      "Most trusted prop firm worldwide",
      "Solid platform, strong support, strict rules",
      "Perfect for consistent traders",
      "Oldest, most respected brand",
      "Transparent rules, strong payout history"
    ],
    
    pros: ["Industry pioneer and highly trusted", "4.8/5 on Trustpilot", "Great educational content", "Scaling plan up to $2M"],
    cons: ["Higher challenge cost", "Stricter rules on some strategies"],
    
    userReviews: [
      { name: "John D.", rating: 5, comment: "FTMO is the gold standard. Professional, reliable, and their platform is top-notch." },
      { name: "Emily C.", rating: 4, comment: "A bit pricey but you get what you pay for. The support and community are worth it." }
    ],
    
    cta: {
      text: "Join FTMO Now",
      link: "#"
    },
    buyLink: "https://trader.ftmo.com/?affiliates=cLugJeuAkEHpYfpxGEvx",
    reviewLink: "/reviews/ftmo",
    
    pageData: {
      separator: {
        icon: "🏆",
        text: "Most Trusted Brand"
      },
      recommendations: ["Reputable & Trusted", "Free Trial Account", "Excellent Support", "Great community"],
      freeRetry: false,
      bonus: "Free Trial Account",
      discountCode: "N/A",
      discount: "N/A"
    }
  },

  {
    id: "funding-traders",
    name: "Funding Traders",
    slug: "funding-traders",
    logo: "/firmlogos/fundingtraders.png",
    rating: 4.5,
    reviews: 2560,
    
    basicInfo: {
      type: "Forex Prop Firm",
      tag: "🚀 High Payout",
      challengeCost: "$109",
      profitTarget: "8%",
      payoutSplit: "95%",
      steps: "2-Step Challenge",
      timeLimit: "No Limit"
    },
    
    challenge: {
      type: "2-Step",
      minDays: "0 days",
      maxDailyDrawdown: "5%",
      maxOverallDrawdown: "8%",
      profitTarget: "8% / 5%",
      timeDuration: "No limit",
      refund: "Yes, on first payout"
    },
    
    drawdown: {
      daily: "5%",
      max: "8%"
    },
    
    // No offers mentioned by client for Funding Traders
    
    features: ["Weekend Trading Allowed", "News Trading Allowed", "Up to 95% Profit Share", "Aggressive Trading Friendly"],
    highlights: [
      "Up to 95% profit split",
      "News & weekend trading allowed",
      "Great challenge price",
      "Good for aggressive traders"
    ],
    
    pros: ["Industry-leading 95% payout", "Weekend/news trading allowed", "Great challenge price", "Perfect for aggressive traders"],
    cons: ["Founded in 2023 (newer firm)", "Limited educational resources"],
    
    userReviews: [
      { name: "Alex M.", rating: 5, comment: "95% profit split is unbeatable! Weekend trading is a huge plus for my strategy." },
      { name: "Sarah P.", rating: 4, comment: "Great for aggressive traders. News trading allowed makes it very flexible." }
    ],
    
    cta: {
      text: "Get Funded Today",
      link: "#"
    },
    buyLink: "https://app.fundingtraders.com/login?ref=zrd6899707",
    reviewLink: "/reviews/funding-traders",
    
    pageData: {
      badge: "Weekend Trading",
      discountCode: "N/A",
      discountLabel: "N/A",
      separator: {
        icon: "🚀",
        text: "Highest Payout Split"
      },
      recommendations: ["95% payout", "Weekend trading", "News trading", "Aggressive trading friendly"],
      freeRetry: true,
      bonus: "Weekend & News Trading Allowed",
      discount: "N/A"
    }
  },

  

  {
    id: "blue-guardian",
    name: "Blue Guardian",
    slug: "blue-guardian",
    logo: "/firmlogos/blue_guardian.webp",
    rating: 4.6,
    reviews: 1200,
    
    basicInfo: {
      type: "Forex Prop Firm",
      tag: "💼 Community Trusted",
      challengeCost: "$109",
      profitTarget: "8%",
      payoutSplit: "85%",
      steps: "2-Step Challenge",
      timeLimit: "35-day challenge"
    },
    
    challenge: {
      type: "2-Step",
      minDays: "0 days",
      maxDailyDrawdown: "5%",
      maxOverallDrawdown: "10%",
      profitTarget: "8% / 5%",
      timeDuration: "35-day challenge",
      refund: "Yes, on first payout"
    },
    
    drawdown: {
      daily: "5%",
      max: "10%"
    },
    
    // No offers mentioned by client for Blue Guardian
    
    features: ["Community Trusted", "Active Support", "Social Media Presence", "Discord Community"],
    highlights: [
      "Trusted by Discord/YouTube communities",
      "Very active on support & social media",
      "Strong community presence",
      "35-day challenge window"
    ],
    
    pros: ["Trusted by Discord/YouTube communities", "Very active support & social media", "Strong community", "Good challenge timeframe"],
    cons: ["Mid-range payout split", "Less established than major firms"],
    
    userReviews: [
      { name: "Jake W.", rating: 5, comment: "Trusted by Discord/YouTube communities. Very active support team." },
      { name: "Rachel T.", rating: 4, comment: "Very active on support & social media. Great community feel." }
    ],
    
    cta: {
      text: "Join Blue Guardian",
      link: "#"
    },
    buyLink: "https://checkout.blueguardian.com/ref/72705/",
    reviewLink: "/reviews/blue-guardian",
    
    pageData: {
      badge: "Community Trusted",
      discountCode: "N/A",
      discountLabel: "N/A",
      separator: {
        icon: "💼",
        text: "Community Choice"
      },
      recommendations: ["Community trusted", "Active support", "Social media presence", "Discord community"],
      freeRetry: true,
      bonus: "Community Trusted Choice",
      discount: "N/A"
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
      offers: firm.offers,
      buylink: firm.buyLink
    }));
};

// Best Prop Firms Page - Top 3 Editor's Picks
export const getTopFirmsData = () => {
  // Return the top 3 firms as specified by client
  const topFirms = ["fxify", "ftmo", "funding-traders"];
  return firms
    .filter(firm => topFirms.includes(firm.id))
    .sort((a, b) => topFirms.indexOf(a.id) - topFirms.indexOf(b.id))
    .map(firm => ({
      firm: firm.name,
      slug: firm.slug,
      logo: firm.logo,
      rating: firm.rating,
      reviews: firm.reviews,
      highlights: firm.highlights,
      cta: firm.cta,
      reviewLink: firm.reviewLink,
      separator: firm.pageData?.separator || { icon: "🔥", text: "Editor's Pick" },
      buylink: firm.buyLink

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
      cta: firm.cta,
      buylink: firm.buyLink,
      reviewLink: firm.reviewLink
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
      reviewLink: firm.reviewLink,
      buylink: firm.buyLink,

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
        challenge: firm.challenge,
        buylink: firm.buyLink

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

export const getHeroTopFirms = () => {
  return firms
    .slice(0, 7)
    .map(firm => ({
      name: firm.name.includes(" ") ? firm.name.split(" ") : [firm.name],
      slug: firm.slug,
      type: firm.basicInfo?.type || "Forex Prop Firm",
      logo: firm.logo,
      score: firm.rating,
      users: firm.reviews,
      discount: firm.pageData?.discount === "N/A" ? "View Details" : firm.pageData?.discount || "View Details",
      discountCode: firm.pageData?.discountCode || firm.discountCode || "N/A", // Add this line
      buyLink: firm.buyLink
    }));
};

// Most Trusted Firms Page
export const getMostTrustedFirms = () => {
  const trustedFirms = ["ftmo", "fxify", "blue-guardian"];
  return firms
    .filter(firm => trustedFirms.includes(firm.id))
    .sort((a, b) => trustedFirms.indexOf(a.id) - trustedFirms.indexOf(b.id))
    .map(firm => ({
      name: firm.name,
      slug: firm.slug,
      logo: firm.logo,
      rating: firm.rating,
      reviews: firm.reviews,
      highlights: firm.highlights,
      cta: firm.cta,
      reviewLink: firm.reviewLink,
      tag: firm.basicInfo?.tag
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