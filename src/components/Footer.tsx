import React from 'react';
import { PhoneCall, ShieldCheck, Heart, Sparkles, Video, MessageCircle } from 'lucide-react';
import { AD_LINK } from '../data/landingData';

interface FooterProps {
  onAdClick: (e?: React.MouseEvent) => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdClick }) => {
  return (
    <footer className="mt-12 bg-slate-950 border-t border-slate-800 pt-8 pb-24 sm:pb-12 px-4 text-slate-400 text-xs text-center" onClick={onAdClick}>
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-rose-400 font-extrabold text-base sm:text-lg">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span>DesiLive BD - ২৪/৭ সেরা এইচডি দেশি ভিডিও ও প্রাইভেট লাইভ চ্যাট</span>
        </div>

        <p className="text-slate-400 max-w-xl mx-auto text-xs leading-relaxed">
          বাংলাদেশের সবচেয়ে জনপ্রিয় ভিডিও মার্কেটিং ও সরাসরি লাইভ কল প্ল্যাটফর্ম। সুজিতা, প্রিয়া, সবিতা ও কবিতার সাথে হাই-স্পিড ভিডিও কলে যোগ দিন।
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-slate-300 font-medium">
          <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>১০০% নিরাপদ ও গোপনীয়</span>
          </span>
          <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <Video className="w-3.5 h-3.5 text-emerald-400" />
            <span>৪K আল্ট্রা এইচডি স্ট্রিম</span>
          </span>
          <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>ফ্রি জয়েনিং</span>
          </span>
        </div>

        <div className="pt-4 border-t border-slate-900 text-[11px] text-slate-500">
          © {new Date().getFullYear()} DesiLive BD. সর্বস্বত্ব সংরক্ষিত। সকল কনটেন্ট প্রমোশনাল ও মার্কেটিং উদ্দেশ্যে পরিবেশিত।
        </div>
      </div>

      {/* Floating Bottom Sticky Bar for Mobile Users */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-t-2 border-rose-500/80 p-2.5 sm:px-6 shadow-2xl backdrop-blur-md flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-emerald-500 block animate-ping absolute"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 block"></span>
          </div>
          <div>
            <span className="font-extrabold text-white text-xs sm:text-sm block leading-none">
              সুজিতা বাউদি এখন লাইভে আছেন!
            </span>
            <span className="text-[10px] text-rose-300 font-semibold">
              ফ্রি ভিডিও কলে কথা বলুন 🔥
            </span>
          </div>
        </div>

        <a
          href={AD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onAdClick}
          className="flex items-center gap-1.5 bg-gradient-to-r from-rose-600 via-pink-600 to-red-500 hover:from-rose-500 hover:to-red-400 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-black shadow-lg shadow-rose-950/80 animate-pulse active:scale-95 transition-transform"
        >
          <PhoneCall className="w-4 h-4 fill-white" />
          <span>এখনই কল করুন</span>
        </a>
      </div>
    </footer>
  );
};
