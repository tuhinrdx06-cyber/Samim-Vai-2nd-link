import React, { useState, useEffect } from 'react';
import { MessageSquare, PhoneCall, X, Sparkles, BellRing } from 'lucide-react';
import { TOP_NOTIFICATIONS, LiveNotification, AD_LINK } from '../data/landingData';

interface TopNotificationsProps {
  onAdClick: (e?: React.MouseEvent) => void;
}

export const TopNotifications: React.FC<TopNotificationsProps> = ({ onAdClick }) => {
  const [activeNotifIndex, setActiveNotifIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 1.5 seconds
    const firstTimer = setTimeout(() => {
      setActiveNotifIndex(0);
      setVisible(true);
    }, 1500);

    return () => clearTimeout(firstTimer);
  }, []);

  useEffect(() => {
    if (activeNotifIndex === null || !visible) return;

    // Display for 5 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);

      // Wait 3.5 seconds before popping up the next notification
      setTimeout(() => {
        setActiveNotifIndex((prev) => (prev !== null ? (prev + 1) % TOP_NOTIFICATIONS.length : 0));
        setVisible(true);
      }, 3500);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [activeNotifIndex, visible]);

  if (activeNotifIndex === null || !visible) return null;

  const notif: LiveNotification = TOP_NOTIFICATIONS[activeNotifIndex];

  return (
    <div
      className="fixed top-12 right-2 sm:right-4 left-2 sm:left-auto sm:max-w-md z-50 animate-notification-slide cursor-pointer"
      onClick={onAdClick}
    >
      <div className="bg-slate-900/95 border-2 border-pink-500/80 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-rose-950/80 backdrop-blur-md flex items-center gap-3 relative overflow-hidden group hover:border-pink-400 transition-all">
        {/* Glow Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 animate-pulse" />

        {/* Avatar Image */}
        <div className="relative shrink-0">
          <img
            src={notif.callerImage}
            alt={notif.callerName}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-pink-400 shadow-md"
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full animate-ping"></span>
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm text-white truncate">
                {notif.callerName}
              </span>
              <span className="text-[10px] bg-rose-950 text-rose-300 font-bold px-1.5 py-0.5 rounded border border-rose-800">
                নতুন মেসেজ
              </span>
            </div>
            <span className="text-[10px] text-slate-400">{notif.timeAgo}</span>
          </div>

          <p className="text-xs font-semibold text-pink-200 line-clamp-2 leading-tight">
            {notif.message}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
              <PhoneCall className="w-3 h-3 animate-bounce" />
              <span>সরাসরি কল করতে ক্লিক করুন</span>
            </span>
          </div>
        </div>

        {/* Bell Icon Visual */}
        <div className="shrink-0 p-1 bg-rose-950/80 rounded-full text-pink-400 border border-rose-800">
          <BellRing className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
