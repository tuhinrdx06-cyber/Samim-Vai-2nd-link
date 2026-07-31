import React, { useState, useEffect } from 'react';
import { Play, Flame, Radio, Search, MessageSquare, PhoneCall, ShieldAlert, Sparkles } from 'lucide-react';
import { AD_LINK } from '../data/landingData';

interface HeaderProps {
  onAdClick: (e?: React.MouseEvent) => void;
}

export const Header: React.FC<HeaderProps> = ({ onAdClick }) => {
  const [onlineCount, setOnlineCount] = useState(3845);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 7) - 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-rose-900/40 shadow-xl" onClick={onAdClick}>
      {/* Top Warning / Promo Banner */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 px-3 py-1 text-center text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer shadow-inner">
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-ping"></span>
        <span className="tracking-wide">🔥 ১০০০% ফ্রি এইচডি ভিডিও কলে সরাসরি কথা বলুন! যেকোনো জায়গায় ক্লিক করে প্রবেশ করুন</span>
        <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Logo & Live Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 px-3 rounded-xl border border-rose-500/30 hover:border-rose-500/60 transition-all cursor-pointer group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/30 group-hover:scale-105 transition-transform">
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-300 to-yellow-200">
                  DesiLive BD
                </span>
                <span className="bg-red-600 text-[10px] font-black text-white px-1.5 py-0.5 rounded-md flex items-center gap-1 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-live-dot"></span>
                  LIVE
                </span>
              </div>
              <p className="text-[10px] text-rose-300/80 font-medium hidden sm:block">
                বাংলাদেশের নাম্বার #১ ফ্রি ভিডিও প্ল্যাটফর্ম
              </p>
            </div>
          </div>
        </div>

        {/* Live Active Counter */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/60 px-3 py-1.5 rounded-full text-xs text-slate-300">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>অনলাইনে আছেন:</span>
            <span className="font-bold text-emerald-400">{onlineCount.toLocaleString()} জন</span>
          </div>

          {/* Quick Action Badges */}
          <a
            href={AD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onAdClick}
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-5-0 hover:to-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
            <span>সরাসরি কল</span>
          </a>

          <a
            href={AD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onAdClick}
            className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-purple-900/30 transition-all hover:scale-105 active:scale-95"
          >
            <Flame className="w-3.5 h-3.5 text-yellow-300" />
            <span className="hidden sm:inline">হট ভিডিও</span>
          </a>
        </div>
      </div>
    </header>
  );
};
