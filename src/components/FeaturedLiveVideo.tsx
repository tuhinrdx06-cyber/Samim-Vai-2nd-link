import React, { useState, useEffect } from 'react';
import { Play, Eye, Radio, Heart, Flame, Volume2, Share2, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MAIN_FEATURED_LIVE, LIVE_CHAT_MESSAGES, AD_LINK } from '../data/landingData';

interface FeaturedLiveVideoProps {
  onAdClick: (e?: React.MouseEvent) => void;
}

export const FeaturedLiveVideo: React.FC<FeaturedLiveVideoProps> = ({ onAdClick }) => {
  const [liveWatchers, setLiveWatchers] = useState(18420);
  const [likeCount, setLikeCount] = useState(45890);
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  useEffect(() => {
    const watcherInterval = setInterval(() => {
      setLiveWatchers((prev) => prev + Math.floor(Math.random() * 15) - 7);
      setLikeCount((prev) => prev + Math.floor(Math.random() * 5));
    }, 2500);

    const chatInterval = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % LIVE_CHAT_MESSAGES.length);
    }, 3500);

    return () => {
      clearInterval(watcherInterval);
      clearInterval(chatInterval);
    };
  }, []);

  return (
    <section className="mb-8" onClick={onAdClick}>
      {/* Top Section Header */}
      <div className="flex items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600"></span>
          </span>
          <h2 className="text-lg sm:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-400 to-yellow-300 tracking-tight">
            🔴 এই মুহূর্তে সরাসরি লাইভ চলছে
          </h2>
        </div>
        <span className="text-xs bg-red-950/80 border border-red-600/50 text-red-300 font-bold px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
          <Radio className="w-3.5 h-3.5 text-red-500" />
          <span>এইচডি কোয়ালিটি</span>
        </span>
      </div>

      {/* Featured Main Video Player Container */}
      <div className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-rose-500/50 bg-slate-900 shadow-2xl shadow-rose-950/50 transition-all hover:border-rose-400 hover:shadow-rose-500/20">
        {/* Main Image Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={MAIN_FEATURED_LIVE.image}
            alt={MAIN_FEATURED_LIVE.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
            loading="eager"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/40 pointer-events-none" />

          {/* Top Player Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
            {/* Live Indicator */}
            <div className="flex items-center gap-2 bg-red-600/90 text-white text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm border border-red-400/30">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
              <span>লাইভ চলছে</span>
            </div>

            {/* Watching Now Counter */}
            <div className="flex items-center gap-1.5 bg-slate-900/80 text-yellow-300 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg border border-yellow-500/30 shadow-lg backdrop-blur-sm">
              <Eye className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span>{liveWatchers.toLocaleString()} জন দেখছেন</span>
            </div>
          </div>

          {/* Center Big Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="relative flex items-center justify-center">
              {/* Outer Pulsing Rings */}
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-rose-500/40 animate-ping opacity-75"></div>
              <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-pink-600/60 animate-pulse"></div>

              {/* Play Button Box */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-600 via-pink-600 to-red-500 text-white flex items-center justify-center shadow-2xl shadow-rose-600/80 group-hover:scale-110 transition-transform border-2 border-white/80">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1.5 drop-shadow-md" />
              </div>
            </div>
          </div>

          {/* Bottom Video Controls Mock Bar */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-slate-200">
            <div className="bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 rounded-md flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-rose-400 animate-bounce" />
              <span className="font-semibold text-rose-300 text-[11px] sm:text-xs">
                শব্দ শুনতে এবং প্লে করতে ভিডিওর উপর ক্লিক করুন
              </span>
            </div>

            <div className="bg-rose-600/90 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow">
              4K Ultra HD
            </div>
          </div>
        </div>

        {/* Video Info Section Below Player */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div>
              <h1 className="text-base sm:text-xl font-bold text-white leading-snug hover:text-rose-400 transition-colors">
                {MAIN_FEATURED_LIVE.title}
              </h1>
              <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400">
                <span className="font-semibold text-rose-300 flex items-center gap-1">
                  {MAIN_FEATURED_LIVE.uploader}
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">ভেরিফাইড স্ট্রিমার</span>
                <span>•</span>
                <span>ভিডিও কোড: #BD8842</span>
              </div>
            </div>

            {/* Interactive Stats Buttons */}
            <div className="flex items-center gap-2 pt-2 sm:pt-0">
              <button className="flex items-center gap-1.5 bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/50 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                <span>{likeCount.toLocaleString()}</span>
              </button>

              <button className="flex items-center gap-1.5 bg-purple-950/60 hover:bg-purple-900/80 text-purple-300 border border-purple-800/50 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">
                <Flame className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>হট স্ট্রিম</span>
              </button>

              <button className="flex items-center gap-1.5 bg-blue-950/60 hover:bg-blue-900/80 text-blue-300 border border-blue-800/50 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">
                <Share2 className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline">শেয়ার</span>
              </button>
            </div>
          </div>

          {/* Live Chat / Comments Ticker Mock Box */}
          <div className="bg-slate-950/80 rounded-xl p-2.5 border border-slate-800/80 flex items-center justify-between text-xs gap-2">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <MessageCircle className="w-4 h-4 text-pink-400 shrink-0 animate-bounce" />
              <span className="font-bold text-pink-300 shrink-0">
                {LIVE_CHAT_MESSAGES[activeMessageIndex].user}:
              </span>
              <span className="text-slate-200 truncate">
                {LIVE_CHAT_MESSAGES[activeMessageIndex].comment}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 shrink-0 font-mono">
              {LIVE_CHAT_MESSAGES[activeMessageIndex].time}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
