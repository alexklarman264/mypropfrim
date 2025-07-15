import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedSection from '@/components/sections/FeaturedSection';
import TrustpilotReviews from '@/components/sections/TrustpilotReviews';
import PlatformFeatures from '@/components/sections/PlatformFeatures';
import TrustStats from '@/components/sections/TrustStats';
import FaqSection from '@/components/sections/FaqSection';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Find the Best Prop Trading Firms in 2025 | My Trusted Prop</title>
        <meta name="description" content="Compare and find the most trusted prop trading firms. Verified reviews, best offers, and exclusive discounts. Join 300K+ monthly visitors finding their perfect prop firm." />
      </Helmet>
      <HeroSection />
      <FeaturedSection />
      <TrustpilotReviews />
      <PlatformFeatures />
      <TrustStats />
      <FaqSection />
    </>
  );
}

export default HomePage;