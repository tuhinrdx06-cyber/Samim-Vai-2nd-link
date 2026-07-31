export const AD_LINK = 'https://awfullylurkgradually.com/cx3hewh6q?key=4b21322bedb3ad71867e8425713cf548';

export interface VideoThumbnail {
  id: string;
  title: string;
  image: string;
  duration: string;
  views: string;
  uploader: string;
  isLive?: boolean;
  likeCount?: string;
  uploadedTime?: string;
}

export interface CallerProfile {
  id: string;
  name: string;
  image: string;
  secondaryImage?: string;
  status: string;
  location: string;
  hasWhatsapp: boolean;
  hasTelegram: boolean;
  hasFacebook: boolean;
}

export interface LiveNotification {
  id: string;
  callerName: string;
  callerImage: string;
  message: string;
  timeAgo: string;
}

export const MAIN_FEATURED_LIVE: VideoThumbnail = {
  id: 'featured-live',
  title: '🔴 সরাসরি এইচডি লাইভ স্ট্রিম - অনলাইনে ৩,৪২০ জন দেখছেন! এখনই যোগ দিন',
  image: 'https://i.postimg.cc/jd0f2rLK/image.png',
  duration: 'LIVE',
  views: '18.4K Live',
  uploader: 'Sujita Bowdi Live Official',
  isLive: true,
  likeCount: '45.8K',
  uploadedTime: 'এখনই লাইভ',
};

export const THUMBNAILS_LIST: VideoThumbnail[] = [
  {
    id: 'thumb-1',
    title: 'নাম্বার ওয়ান গুলুমুলু🥵',
    image: 'https://i.postimg.cc/jd0f2rLK/image.png',
    duration: '6:54',
    views: '4.7M',
    uploader: 'Sujita Bowdi',
    likeCount: '234K',
    uploadedTime: '২ দিন আগে',
  },
  {
    id: 'thumb-2',
    title: 'ওয়াও পুরাই অস্থির মাল',
    image: 'https://i.postimg.cc/HkPsJQBk/image.png',
    duration: '7:54',
    views: '5.2M',
    uploader: 'Priya Sorma',
    likeCount: '312K',
    uploadedTime: '১ দিন আগে',
  },
  {
    id: 'thumb-3',
    title: 'আরোহী মিমের ভাইরাল ভিডিও',
    image: 'https://i.postimg.cc/445G76x0/image.png',
    duration: '5:45',
    views: '879k',
    uploader: 'Sabita Bhavi',
    likeCount: '89K',
    uploadedTime: '৩ দিন আগে',
  },
  {
    id: 'thumb-4',
    title: 'কচি মালের ডাব 🤪',
    image: 'https://i.postimg.cc/QM1GX5z2/image.png',
    duration: '5:45',
    views: '8.2M',
    uploader: 'Kobita Vhabi',
    likeCount: '540K',
    uploadedTime: '৫ ঘণ্টা আগে',
  },
];

export const CALLER_PROFILES: CallerProfile[] = [
  {
    id: 'caller-1',
    name: 'Sujita Bowdi',
    image: 'https://i.postimg.cc/1zmZN7bR/image.png',
    secondaryImage: 'https://i.postimg.cc/3x0zBm3G/image.png',
    status: 'অনলাইন (ফ্রি আছি)',
    location: 'Dhaka, Bangladesh',
    hasWhatsapp: true,
    hasTelegram: true,
    hasFacebook: true,
  },
  {
    id: 'caller-2',
    name: 'Priya Sorma',
    image: 'https://i.postimg.cc/vTxNgCM6/image.png',
    status: 'ইনকামিং এইচডি ভিডিও কল...',
    location: 'Kolkata, WB',
    hasWhatsapp: true,
    hasTelegram: true,
    hasFacebook: true,
  },
  {
    id: 'caller-3',
    name: 'Sabita Bhavi',
    image: 'https://i.postimg.cc/L4ZSZbxR/image.png',
    status: 'সরাসরি প্রাইভেট কল!',
    location: 'Chittagong, BD',
    hasWhatsapp: true,
    hasTelegram: true,
    hasFacebook: true,
  },
  {
    id: 'caller-4',
    name: 'Kobita Vhabi',
    image: 'https://i.postimg.cc/C5b9r92D/image.png',
    status: 'ভিডিও কলে কথা বলুন...',
    location: 'Sylhet, BD',
    hasWhatsapp: true,
    hasTelegram: true,
    hasFacebook: true,
  },
];

export const TOP_NOTIFICATIONS: LiveNotification[] = [
  {
    id: 'notif-1',
    callerName: 'Sujita Bowdi',
    callerImage: 'https://i.postimg.cc/1zmZN7bR/image.png',
    message: 'আমি এখন একদম ফ্রি রয়েছি! আমাকে এখনই কল করুন 💋',
    timeAgo: 'এখনই',
  },
  {
    id: 'notif-2',
    callerName: 'Priya Sorma',
    callerImage: 'https://i.postimg.cc/vTxNgCM6/image.png',
    message: 'হেই সোনা! নতুন ভাইরাল ভিডিও আপলোড করেছি, দেখবে? 🔥',
    timeAgo: '১ মিনিট আগে',
  },
  {
    id: 'notif-3',
    callerName: 'Sabita Bhavi',
    callerImage: 'https://i.postimg.cc/L4ZSZbxR/image.png',
    message: 'হোয়াটসঅ্যাপে একটা মেসেজ দাও, প্রাইভেট লাইভে আসবো! 🙈',
    timeAgo: '২ মিনিট আগে',
  },
  {
    id: 'notif-4',
    callerName: 'Kobita Vhabi',
    callerImage: 'https://i.postimg.cc/C5b9r92D/image.png',
    message: 'আজ রাতে স্পেশাল লাইভ হবে, লিংকে ক্লিক করে জয়েন করো 📞',
    timeAgo: '৩ মিনিট আগে',
  },
  {
    id: 'notif-5',
    callerName: 'Sujita Bowdi',
    callerImage: 'https://i.postimg.cc/3x0zBm3G/image.png',
    message: 'লাইভে আসছি সোনা, মিস কোরো না কিন্তু! 😉',
    timeAgo: 'এখনই',
  },
];

export const LIVE_CHAT_MESSAGES = [
  { user: 'রাহুল আহমেদ', comment: 'উফ কী হট লাইভ! 🔥🔥', time: '১ সে' },
  { user: 'Shakib_7', comment: 'নম্বরটা দেন প্লিজ 📞', time: '২ সে' },
  { user: 'Anik_Roy', comment: 'ফুল এইচডি কোয়ালিটি! অস্থির!', time: '৩ সে' },
  { user: 'সুজন চৌধুরী', comment: 'হোয়াটসঅ্যাপে নক দিছি ভাবী❤️', time: '৪ সে' },
  { user: 'Imran_BD', comment: 'প্লে হচ্ছে না কেন? ক্লিকে কী ভিডিও আসবে?', time: '৫ সে' },
];
