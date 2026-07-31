import React from 'react';
import { Play, Eye, Clock, Flame, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { THUMBNAILS_LIST, AD_LINK } from '../data/landingData';

interface VideoGridProps {
  onAdClick: (e?: React.MouseEvent) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ onAdClick }) => {
  return (
    <section className="mb-10" onClick={onAdClick}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-orange-500 fill-orange-500 animate-bounce" />
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            🔥 সবচেয়ে জনপ্রিয় ভাইৰাল ভিডিও কালেকশন
          </h2>
        </div>
        <span className="text-xs text-rose-400 font-bold bg-rose-950/60 border border-rose-800/40 px-3 py-1 rounded-full flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>এইচডি ভিডিও (৪ টি)</span>
        </span>
      </div>

      {/* Grid Layout for Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {THUMBNAILS_LIST.map((item, idx) => (
          <div
            key={item.id}
            className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-rose-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-rose-900/20 cursor-pointer flex flex-col justify-between"
          >
            {/* Thumbnail Image Wrapper */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 filter brightness-95"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

              {/* Top Right Trending Badge */}
              <div className="absolute top-2.5 right-2.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                <span>#0{idx + 1} ট্রেনিং</span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-white/80">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                </div>
              </div>

              {/* Video Time Badge (Bottom Right) */}
              <div className="absolute bottom-2.5 right-2.5 bg-slate-950/90 border border-slate-700/80 text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-lg backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5 text-rose-400" />
                <span>{item.duration}</span>
              </div>

              {/* View Count Badge (Bottom Left) */}
              <div className="absolute bottom-2.5 left-2.5 bg-slate-950/90 border border-slate-700/80 text-yellow-300 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-lg backdrop-blur-sm">
                <Eye className="w-3.5 h-3.5 text-yellow-400" />
                <span>{item.views} ভিউস</span>
              </div>
            </div>

            {/* Content Details Below Image */}
            <div className="p-3.5 sm:p-4 bg-slate-900 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-rose-300 flex items-center gap-1">
                      {item.uploader}
                      <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    </span>
                  </div>

                  <span className="text-slate-500">{item.uploadedTime}</span>
                </div>
              </div>

              {/* Action Prompt */}
              <div className="mt-3 pt-2.5 flex items-center justify-between bg-slate-950/60 rounded-xl px-3 py-2 border border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>প্লে করতে কিক করুন</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-rose-400 font-bold">
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                  <span>{item.likeCount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
