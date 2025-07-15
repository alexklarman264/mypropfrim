// best offer page
export const offersData = [
    {
      firmName: "Alpha Capital",
      logo: "AC",
      rating: 4.4,
      reviews: 693,
      offers: [
        { discount: "15% OFF", extra: "+ FREE ACCOUNT", code: "MATCH", buyLink: "#", tooltip: "Get a free account of the same size if you reach the first payout on Power challenges." },
        { discount: "25% OFF", extra: "25% OFF ON ALPHA ONE ...", code: "PFM1", buyLink: "#" },
        { discount: "25% OFF", extra: "25% OFF ON ALPHA ONE ...", code: "PFM1", buyLink: "#" }
      ]
    },
    {
      firmName: "Funding Pips",
      logo: "FP",
      rating: 4.8,
      reviews: 1450,
      offers: [
        { discount: "5% OFF", extra: "", code: "TRUSTED", buyLink: "#" }
      ]
    },
    {
      firmName: "FXIFY",
      logo: "FX",
      rating: 4.5,
      reviews: 1343,
      offers: [
        { discount: "15% OFF", extra: "+ 90% PAYOUT", code: "FXIFY15", buyLink: "#", tooltip: "Enjoy an industry-leading 90% payout on all your profits." }
      ]
    },
     {
      firmName: "FTMO",
      logo: "FT",
      rating: 4.9,
      reviews: 50000,
      offers: [
        { discount: "10% OFF", extra: "EXCLUSIVE", code: "FTMO10", buyLink: "#" },
        { discount: "5% OFF", extra: "ON $200K ACCOUNT", code: "FTMO5", buyLink: "#" }
      ]
    },
    {
      firmName: "The5%ers",
      logo: "T5",
      rating: 4.7,
      reviews: 1153,
      offers: [
        { discount: "5% OFF", extra: "", code: "THE5", buyLink: "#" }
      ]
    }
];








//Best propfirm page
export const topFirmsData = [
  {
    firm: "Funding Pips",
    slug: "funding-pips",
    logo: "FP",
    rating: 4.8,
    reviews: 1450,
    highlights: [
      "Up to 95% Payout",
      "No Time Limit",
      "Fast Payouts (within 24 hrs)",
      "News Trading Allowed",
      "Best Spreads",
    ],
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "#",
    separator: {
      icon: "🔥",
      text: "Best Payout Split",
    },
  },
  {
    firm: "FTMO",
    slug: "ftmo",
    logo: "FT",
    rating: 4.9,
    reviews: 50000,
    highlights: [
      "Up to 90% Scaling Plan",
      "1-Step or 2-Step Challenges",
      "Free Trial Account",
      "Reputable & Trusted",
      "Excellent Support"
    ],
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "#",
    separator: {
      icon: "🏆",
      text: "Most Trusted Brand",
    },
  },
  {
    firm: "Alpha Capital",
    slug: "alpha-capital",
    logo: "AC",
    rating: 4.4,
    reviews: 693,
    highlights: [
      "No Daily Drawdown",
      "1-Step Challenge",
      "Payout in 24–48 hrs",
      "Crypto & Card Withdrawals",
      "Free Retry if Failed"
    ],
    cta: {
      text: "Get Funded Now",
      link: "#"
    },
    reviewLink: "#",
    separator: {
      icon: "🚀",
      text: "Fastest Growth",
    },
  }
];





//copmare frims page
export const allFirmsData = [
    {
        name: "Alpha Capital", slug: "alpha-capital", logo: "AC", rating: 4.4, reviews: 693, challengeCost: "$99", profitTarget: "10%", dailyDrawdown: "5%", maxDrawdown: "10%", payoutSplit: "90%", timeLimit: "30 Days", freeRetry: true, bonus: "15% OFF + Free Account", discountCode: "MATCH", cta: { buy: "#", review: "/reviews/alpha-capital" }
    },
    {
        name: "Funding Pips", slug: "funding-pips", logo: "FP", rating: 4.8, reviews: 1450, challengeCost: "$49", profitTarget: "8%", dailyDrawdown: "5%", maxDrawdown: "10%", payoutSplit: "95%", timeLimit: "No Limit", freeRetry: true, bonus: "5% Bonus on Payout", discountCode: "PIPS5", cta: { buy: "#", review: "/reviews/funding-pips" }
    },
    {
        name: "FTMO", slug: "ftmo", logo: "FT", rating: 4.9, reviews: 50000, challengeCost: "€155", profitTarget: "10%", dailyDrawdown: "5%", maxDrawdown: "10%", payoutSplit: "90%", timeLimit: "No Limit", freeRetry: false, bonus: "Free Trial Account", discountCode: "N/A", cta: { buy: "#", review: "/reviews/ftmo" }
    },
    {
        name: "The Funded Trader", slug: "the-funded-trader", logo: "TFT", rating: 4.7, reviews: 25000, challengeCost: "$129", profitTarget: "10%", dailyDrawdown: "6%", maxDrawdown: "12%", payoutSplit: "80%", timeLimit: "35 Days", freeRetry: true, bonus: "Scaling Plan up to $1.5M", discountCode: "TFT10", cta: { buy: "#", review: "/reviews/the-funded-trader" }
    },
    {
        name: "MyForexFunds", slug: "myforexfunds", logo: "MFF", rating: 4.8, reviews: 30000, challengeCost: "$84", profitTarget: "8%", dailyDrawdown: "5%", maxDrawdown: "12%", payoutSplit: "85%", timeLimit: "No Limit", freeRetry: true, bonus: "12% Bonus from Phase 2", discountCode: "MFF10", cta: { buy: "#", review: "/reviews/myforexfunds" }
    },
];






//easiet frims page
export const firmsData = [
  {
    name: "Alpha Capital", slug: "alpha-capital", logo: "AC", rating: 4.5, reviews: 850,
    features: ["1-Step Challenge", "No Daily Drawdown", "8% Profit Target", "Free Retry on Failure", "Crypto Payouts"],
    badge: "Beginner Friendly", discountCode: "MATCH15", discountLabel: "15% OFF + Free Retry", ctaLink: "#", reviewLink: "/reviews/alpha-capital"
  },
  {
    name: "AquaFunded", slug: "aquafunded", logo: "AF", rating: 4.7, reviews: 450,
    features: ["1-Step Challenge", "90% Payout Split", "No Time Limit", "Bi-Weekly Payouts", "Scaling up to $2M"],
    badge: "Fastest Funding", discountCode: "AQUA5", discountLabel: "5% OFF", ctaLink: "#", reviewLink: "/reviews/funding-pips"
  },
  {
    name: "Funding Pips", slug: "funding-pips", logo: "FP", rating: 4.8, reviews: 1450,
    features: ["No Time Limit", "Fast Payouts (24 hrs)", "News Trading Allowed", "Best Spreads", "5% Profit Target (Phase 2)"],
    badge: "No Time Limit", discountCode: "PIPS5", discountLabel: "5% OFF Your Challenge", ctaLink: "#", reviewLink: "/reviews/funding-pips"
  },
  {
    name: "Glow Node", slug: "glow-node", logo: "GN", rating: 4.6, reviews: 300,
    features: ["1-Step Challenge", "No Minimum Trading Days", "Unlimited Trading Period", "Up to 90% Payout", "EA & Bots Allowed"],
    badge: "1-Step Only", ctaLink: "#", reviewLink: "/reviews/ftmo"
  },
  {
    name: "PipFarm", slug: "pipfarm", logo: "PF", rating: 4.9, reviews: 150,
    features: ["Instant Funding", "No Challenge Required", "Up to 50% Payout", "Get Started in Minutes", "Weekly Payouts"],
    badge: "Instant Funding", discountCode: "FARM10", discountLabel: "10% BONUS on first payout", ctaLink: "#", reviewLink: "/reviews/alpha-capital"
  },
  {
    name: "Swift Funding", slug: "swift-funding", logo: "SF", rating: 4.5, reviews: 550,
    features: ["1-Step Challenge", "7-Day Payout Cycle", "No Daily Drawdown", "Competitive Spreads", "User-Friendly Dashboard"],
    badge: "No Daily Drawdown", ctaLink: "#", reviewLink: "/reviews/ftmo"
  }
];





//Review page
export const reviewFirmsData = {
    "alpha-capital": {
        slug: "alpha-capital",
        name: "Alpha Capital",
        logo: "AC",
        tag: "🥇 Editor’s Pick",
        rating: 4.4,
        reviews: 693,
        payout: "90%",
        challengeCost: "$99",
        profitTarget: "10%",
        drawdown: { daily: "5%", max: "10%" },
        steps: "1-Step Challenge",
        timeLimit: "Unlimited",
        pros: ["Up to 90% Payout", "Crypto payouts", "Fast support", "No daily drawdown"],
        cons: ["Strict trading rules", "No free retry on failure"],
        userReviews: [
            { name: "David R.", rating: 5, comment: "Loved the challenge. Got paid within 2 days! The no daily drawdown rule is a game changer." },
            { name: "Sara M.", rating: 4, comment: "Good experience but the rules were a bit strict for my trading style. Support was helpful though." }
        ],
        ctaLink: "#",
        recommendations: ["Fast payouts", "Free retries", "Crypto payouts", "Low challenge cost"],
        challenge: {
            type: "1-Step / 2-Step",
            minDays: "0 days",
            maxDailyDrawdown: "5%",
            maxOverallDrawdown: "10%",
            profitTarget: "8-10%",
            timeDuration: "Unlimited",
            refund: "Yes, on first payout"
        }
    },
    "funding-pips": {
        slug: "funding-pips",
        name: "Funding Pips",
        logo: "FP",
        tag: "🔥 Trending",
        rating: 4.8,
        reviews: 1450,
        payout: "95%",
        challengeCost: "$49",
        profitTarget: "8%",
        drawdown: { daily: "5%", max: "10%" },
        steps: "2-Step Challenge",
        timeLimit: "Unlimited",
        pros: ["Industry-leading 95% payout", "Very low challenge cost", "Fast payouts", "News trading allowed"],
        cons: ["Newer firm in the market", "Limited educational resources"],
        userReviews: [
            { name: "Mike T.", rating: 5, comment: "The best spreads I've seen. Payout was super fast. Highly recommend!" },
            { name: "Jessica L.", rating: 5, comment: "Can't beat the value. The challenge is fair and the support team is responsive." }
        ],
        ctaLink: "#",
        recommendations: ["Best spreads", "No time limit", "Fast payouts", "News trading allowed"],
        challenge: {
            type: "2-Step",
            minDays: "0 days",
            maxDailyDrawdown: "5%",
            maxOverallDrawdown: "10%",
            profitTarget: "8% (Phase 1), 5% (Phase 2)",
            timeDuration: "Unlimited",
            refund: "Yes, on first payout"
        }
    },
    "ftmo": {
        slug: "ftmo",
        name: "FTMO",
        logo: "FT",
        tag: "🏆 Most Trusted",
        rating: 4.9,
        reviews: 50000,
        payout: "90%",
        challengeCost: "€155",
        profitTarget: "10%",
        drawdown: { daily: "5%", max: "10%" },
        steps: "2-Step Challenge",
        timeLimit: "Unlimited",
        pros: ["Industry pioneer and highly trusted", "Excellent free trial", "Great educational content", "Scaling plan up to $2M"],
        cons: ["Higher challenge cost", "Stricter rules on some strategies"],
        userReviews: [
            { name: "John D.", rating: 5, comment: "FTMO is the gold standard. Professional, reliable, and their platform is top-notch." },
            { name: "Emily C.", rating: 4, comment: "A bit pricey but you get what you pay for. The support and community are worth it." }
        ],
        ctaLink: "#",
        recommendations: ["Reputable & Trusted", "Free Trial Account", "Excellent Support", "Great community"],
        challenge: {
            type: "2-Step",
            minDays: "4 days",
            maxDailyDrawdown: "5%",
            maxOverallDrawdown: "10%",
            profitTarget: "10% (Phase 1), 5% (Phase 2)",
            timeDuration: "Unlimited",
            refund: "Yes, with first payout"
        }
    }
};





//cheapest firm

export const cheapestFirms = [
        { rank: 1, name: "FTMO", logo: "FT", score: 4.8, originalPrice: 59, discountedPrice: 50.15, code: "TRUSTED10" },
        { rank: 2, name: "MyForexFunds", logo: "MF", score: 4.7, originalPrice: 69, discountedPrice: 55.20, code: "TRUSTED20" },
        { rank: 3, name: "The5%ers", logo: "T5", score: 4.6, originalPrice: 79, discountedPrice: 71.10, code: "TRUSTED10" },
        { rank: 4, name: "FundedNext", logo: "FN", score: 4.5, originalPrice: 89, discountedPrice: 66.75, code: "TRUSTED25" }
      ];





//hero section

export  const topFirms = [
        { name: ["Funding", "Pips"], type: "Instant Prop Firm", logo: "FP", score: 4.3, users: 1450, discount: "5% OFF" },
        { name: ["FXIFY"], type: "Instant Prop Firm", logo: "FX", score: 4.5, users: 1343, discount: "15% OFF" },
        { name: ["Nostro"], type: "Forex Prop Firm", logo: "N", score: 4.2, users: 1285, discount: "0% OFF" },
        { name: ["My Crypto", "Funding"], type: "Crypto Prop Firm", logo: "MCF", score: 4.7, users: 1182, discount: "20% OFF" },
        { name: ["The5ers"], type: "Forex Prop Firm", logo: "T5", score: 4.7, users: 1153, discount: "5% OFF" },
        { name: ["FTMO"], type: "Instant Prop Firm", logo: "FT", score: 4.8, users: 50000, discount: "15% OFF" },
        { name: ["E8 Markets"], type: "Forex Prop Firm", logo: "E8", score: 4.4, users: 20000, discount: "12% OFF" },
      ];