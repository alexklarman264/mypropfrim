import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import BestOffersPage from '@/pages/BestOffersPage';
import BestPropFirmsPage from '@/pages/BestPropFirmsPage';
import ReviewPage from '@/pages/ReviewPage';
import CompareFirmsPage from '@/pages/CompareFirmsPage';
import EasiestFirmsPage from '@/pages/EasiestFirmsPage';
import PlaceholderPage from '@/pages/PlaceholderPage';
import LegalPage from '@/pages/LegalPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Layout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="best-offers" element={<BestOffersPage />} />
          <Route path="best-prop-firms" element={<BestPropFirmsPage />} />
          <Route path="reviews/:slug" element={<ReviewPage />} />
          <Route path="compare-prop-firms" element={<CompareFirmsPage />} />
          <Route path="easiest-prop-firms" element={<EasiestFirmsPage />} />
          <Route path="privacy-policy" element={<LegalPage page="privacy" />} />
          <Route path="cookies-policy" element={<LegalPage page="cookies" />} />
          <Route path="terms-and-conditions" element={<LegalPage page="terms" />} />
          <Route path="disclaimer" element={<LegalPage page="disclaimer" />} />
          <Route path="terms-of-service" element={<LegalPage page="tos" />} />
          <Route path="how-it-works" element={<LegalPage page="howitworks" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;