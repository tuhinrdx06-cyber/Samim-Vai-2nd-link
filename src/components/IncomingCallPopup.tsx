import React, { useState, useEffect } from 'react';
import { Phone, PhoneOff, Video, MessageCircle, Sparkles, Volume2, ShieldCheck } from 'lucide-react';
import { CALLER_PROFILES, AD_LINK } from '../data/landingData';

interface IncomingCallPopupProps {
  onAdClick: (e?: React.MouseEvent) => void;
}

export const IncomingCallPopup: React.FC<IncomingCallPopupProps> = ({ onAdClick }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay: 2.5 seconds after page load
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Visible for 4.5 seconds, then hide
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      // Wait 10 seconds before showing the next profile
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % CALLER_PROFILES.length);
        setIsVisible(true);
      }, 10000);
    }, 4500);

    return () => clearTimeout(hideTimer);
  }, [isVisible, currentIdx]);

  if (!isVisible) return null;

  const currentProfile = CALLER_PROFILES[currentIdx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer transition-all duration-300"
      onClick={onAdClick}
    >
      {/* Container with zoom-in zoom-out keyframe animation */}
      <div
        className="animate-pulse-zoom relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black p-5 sm:p-6 border-2 border-rose-500 shadow-2xl shadow-rose-600/60 overflow-hidden text-center cursor-pointer"
        onClick={onAdClick}
      >
        {/* Background Glowing Ambient Light */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-rose-500/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl pointer-events-none" />

        {/* Incoming Call Header Alert */}
        <div className="flex items-center justify-center gap-2 mb-3 bg-red-950/80 border border-red-500/40 py-1.5 px-3 rounded-full text-xs font-bold text-red-300 shadow">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span className="tracking-wide">📞 নতুন ইনকামিং ভিডিও কল এসেছে!</span>
        </div>

        {/* Girl Profile Picture with Ripples */}
        <div className="relative my-3 mx-auto w-24 h-24 sm:w-28 sm:h-28">
          {/* Pulsing Ripple Rings */}
          <div className="absolute inset-0 rounded-full bg-rose-500 animate-ring-ripple pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-pink-500 animate-ring-ripple pointer-events-none" style={{ animationDelay: '0.6s' }}></div>

          {/* Avatar Image */}
          <img
            src={currentProfile.image}
            alt={currentProfile.name}
            className="relative w-full h-full object-cover rounded-full border-4 border-rose-500 shadow-xl shadow-rose-900/50"
          />

          {/* Online Green Badge */}
          <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center shadow">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
          </div>
        </div>

        {/* Profile Details */}
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center justify-center gap-1.5">
          <span>{currentProfile.name}</span>
          <ShieldCheck className="w-5 h-5 text-blue-400" />
        </h3>

        <p className="text-xs sm:text-sm font-semibold text-rose-300 mt-1 animate-pulse">
          {currentProfile.status}
        </p>

        <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
          📍 {currentProfile.location}
        </p>

        {/* Social Contact Icons Row */}
        <div className="my-4 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-4">
          {/* WhatsApp Logo */}
          <div className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg shadow-emerald-900/40 border border-emerald-400/40 group-hover:scale-110 transition-transform">
              {/* WhatsApp Icon SVG */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <span className="text-[10px] text-slate-300 font-bold">WhatsApp</span>
          </div>

          {/* Telegram Logo */}
          <div className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full bg-sky-600/90 text-white flex items-center justify-center shadow-lg shadow-sky-900/40 border border-sky-400/40 group-hover:scale-110 transition-transform">
              {/* Telegram Icon SVG */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.128.832.942z"/>
              </svg>
            </div>
            <span className="text-[10px] text-slate-300 font-bold">Telegram</span>
          </div>

          {/* Facebook Logo */}
          <div className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-900/40 border border-blue-400/40 group-hover:scale-110 transition-transform">
              {/* Facebook Icon SVG */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span className="text-[10px] text-slate-300 font-bold">Facebook</span>
          </div>
        </div>

        {/* Action Buttons: Accept / Decline */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button
            onClick={onAdClick}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold shadow-lg shadow-red-950/50 border border-red-400/30 active:scale-95 transition-transform"
          >
            <PhoneOff className="w-4 h-4" />
            <span>কেটে দিন</span>
          </button>

          <button
            onClick={onAdClick}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white py-3 px-4 rounded-2xl text-xs sm:text-sm font-black shadow-lg shadow-emerald-950/80 border border-emerald-300/40 animate-bounce active:scale-95 transition-transform"
          >
            <Video className="w-4 h-4 fill-white" />
            <span>কল রিসিভ করুন</span>
          </button>
        </div>

        {/* Small Notice */}
        <p className="text-[10px] text-slate-400 mt-3 font-medium">
          ক্লিক করে সুজিতা ও প্রিয়া সহ সবার সরাসরি HD প্রাইভেট লাইভ দেখুন
        </p>
      </div>
    </div>
  );
};
