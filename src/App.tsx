import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { FeaturedLiveVideo } from './components/FeaturedLiveVideo';
import { VideoGrid } from './components/VideoGrid';
import { IncomingCallPopup } from './components/IncomingCallPopup';
import { TopNotifications } from './components/TopNotifications';
import { Footer } from './components/Footer';
import { AD_LINK } from './data/landingData';

export default function App() {
  const handleAdRedirect = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    window.open(AD_LINK, '_blank');
  };

  useEffect(() => {
    // Global fallback click listener across the entire document
    const handleDocumentClick = (e: MouseEvent) => {
      // Prevent infinite loop if already clicking an explicit link
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href') === AD_LINK) {
        return;
      }
      window.open(AD_LINK, '_blank');
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-rose-500 selection:text-white relative cursor-pointer"
      onClick={handleAdRedirect}
    >
      {/* Top Floating Pop-up Notifications */}
      <TopNotifications onAdClick={handleAdRedirect} />

      {/* Main Header */}
      <Header onAdClick={handleAdRedirect} />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex-1 w-full">
        {/* Top Live Featured Thumbnail Stream */}
        <FeaturedLiveVideo onAdClick={handleAdRedirect} />

        {/* 4 Video Thumbnails Grid */}
        <VideoGrid onAdClick={handleAdRedirect} />
      </main>

      {/* Incoming Calling Card Modal (Appears 2-3s after entry, cycles every 10s, auto stays 4-5s) */}
      <IncomingCallPopup onAdClick={handleAdRedirect} />

      {/* Footer & Mobile Sticky Action Bar */}
      <Footer onAdClick={handleAdRedirect} />
    </div>
  );
}
