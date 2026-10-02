// Flask/Jinja এর dynamic ডাটা এখন এখানে। পরে Flask API থেকে fetch করে এটা replace করতে পারবেন।
export const registrationOpen = true;

export const heroSlides = [
  "https://i.ibb.co.com/RpTJSM3M/IMG-7604.jpg",
  "https://i.ibb.co.com/v4MMQWmd/IMG-7720-1.jpg",
];

export const notices = [
  {
    id: 1,
    date: "Sep 29, 2026",
    category: "Exam",
    title: "২০২৬ সালের বৃত্তি পরীক্ষার সিলেবাস",
    url: "https://drive.google.com/file/d/14vp_18ECw9GaqYeZnd-m3h27M3cig6vS/view?usp=drive_link",
  },
  {
    id: 2,
    date: "Aug 30, 2026",
    category: "General",
    title: "সংবর্ধনা অনুষ্ঠান-২০২৬ এর ছবি",
    url: "https://drive.google.com/drive/folders/1Wsh1zqTRdmqK_A2ZCaHNqoWW0Te7eZMl?usp=drive_link",
  },
  {
    id: 3,
    date: "Aug 30, 2026",
    category: "Exam",
    title: "বৃত্তি পরীক্ষা-২০২৬ অনলাইন রেজিস্ট্রেশনের নিয়মাবলী",
    url: "https://drive.google.com/file/d/1R7ciBwqVireY0SfSfAeeWGEAsvjiWz1l/view?usp=drive_link",
  },
  {
    id: 4,
    date: "Aug 30, 2026",
    category: "Exam",
    title: "বৃত্তি পরীক্ষা-২০২৬",
    url: "https://drive.google.com/file/d/15z4JMc9KKj_7yGPJDnWXATwZD0_mlr-3/view?usp=drive_link",
  },
  {
    id: 5,
    date: "Aug 29, 2026",
    category: "General",
    title: "সংবর্ধনা অনুষ্ঠান",
    url: "https://drive.google.com/file/d/1hQiJdNYr1YtbfM6dQ2sVWnG-WYXN0x6l/view?usp=drivesdk",
  },
];

export const importantDates = [
  {
    day: "২৮",
    month: "আগস্ট",
    title: "সংবর্ধনা অনুষ্ঠান",
    desc: "বৃত্তি প্রদান ও সংবর্ধনা অনুষ্ঠান-২০২৬",
    highlight: false,
  },
];

export const stats = [
  { value: "৫,০০০+ শিক্ষার্থী", label: "প্রতি বছরের প্রাণবন্ত অংশগ্রহণ" },
  {
    value: "ঐতিহ্য ও নির্ভরতার যাত্রা",
    label: "দুই দশকের ধারাবাহিক সফল আয়োজন",
  },
];

export const gallery = [
  "https://i.ibb.co.com/hRKzk4m1/IMG-7481.jpg",
  "https://i.ibb.co.com/qMLwkGft/IMG-7817.jpg",
  "https://i.ibb.co.com/5XhSJDj6/IMG-7797.jpg",
  "https://i.ibb.co.com/ycYrHY0T/IMG-7777.jpg",
  "https://i.ibb.co.com/hJsqn0F0/IMG-7478.jpg",
  "https://i.ibb.co.com/RpTJSM3M/IMG-7604.jpg",
];

export const leaders = [
  {
    id: 1,
    name: "শাহরিয়ার হাসান বিপ্লব",
    role: "মহাপরিচালক",
    img: "https://i.ibb.co/XZp5bhy7/543cea99dfa5.jpg",
    speech:
      "“মানবিক মূল্যবোধ ও মমত্ববোধ জাগ্রত করাই শিক্ষার মৌলিক উদ্দেশ্য। মানবসেবার উপযোগী, চারিত্রিক মাধুর্য ও নৈতিক আদর্শে বলীয়ান এক তরুণ প্রজন্ম গড়ে উঠতে হবে। বর্তমান শিক্ষাব্যবস্থা কেবল জীবিকা অর্জনের প্রতি আগ্রহ সৃষ্টি করছে; সমাজ ও রাষ্ট্রের জন্য যোগ্য ও আদর্শ নাগরিক তৈরির পরিবর্তে প্রতিযোগিতামুখী জনশক্তি তৈরিতে বেশি গুরুত্ব দিচ্ছে। তাই শিক্ষাঙ্গনে সুস্থ প্রতিযোগিতা ও নতুন চিন্তার ধারা প্রতিষ্ঠার লক্ষ্যে গৃহীত কর্মসূচি নিয়ে প্রতিষ্ঠিত — The Brilliants Foundation, Bogura”",
  },
  {
    id: 2,
    name: "তৌফিকুল ইসলাম তাকি",
    role: "পরিচালক",
    img: "https://i.ibb.co/pB4TD0vF/b00329412374.png",
    speech: "",
  },
];

export const navLinks = [
  { href: "/notices", label: "নোটিশ" },
  { href: "/apply", label: "আবেদন" },
  { href: "/download-admit", label: "প্রবেশপত্র ডাউনলোড" },
  { href: "/result-search", label: "ফলাফল" },
  { href: "/payment-check", label: "পেমেন্ট যাচাই" },
  { href: "/contact", label: "যোগাযোগ" },
];

export const serviceCards = [
  {
    href: "/apply",
    icon: "fa-pen-to-square",
    title: "রেজিস্ট্রেশন করুন",
    description: "নতুন আবেদন জমা দিন",
  },
  {
    href: "/download-admit",
    icon: "fa-id-card",
    title: "এডমিট কার্ড",
    description: "ডাউনলোড ও প্রিন্ট করুন",
  },
  {
    href: "/result-search",
    icon: "fa-award",
    title: "ফলাফল",
    description: "রোল দিয়ে যাচাই করুন",
  },
  {
    href: "/notices",
    icon: "fa-bullhorn",
    title: "নোটিশ ও নিয়মাবলী",
    description: "সব ঘোষণা দেখুন",
  },
];

export const LOGO =
  "https://i.postimg.cc/SsLDX6WZ/Screenshot-2026-01-20-020601-removebg-preview.png";

export const siteCopy = {
  brandName: "THE BRILLIANTS FOUNDATION",
  brandSubtitle: "BOGURA | ESTD-2002",
  heroBadge: "বৃত্তি পরীক্ষা ২০২৬",
  heroLocation: "বগুড়া, বাংলাদেশ",
  heroApplyLabel: "বৃত্তির জন্য আবেদন",
  heroDatesLabel: "পরীক্ষার সময়সূচি",
  resultButtonLabel: "ফলাফল দেখুন",
  heroEyebrow: "বগুড়ার শিক্ষা ও মেধা বিকাশে · ২০০২ থেকে",
  heroTitle: "মেধার স্বীকৃতি,",
  heroTitleAccent: "উজ্জ্বল আগামীর পথে",
  heroDescription:
    "দ্যা ব্রিলিয়্যান্টস্ ফাউন্ডেশন বৃত্তি পরীক্ষার মাধ্যমে শিক্ষার্থীদের মেধা, মনন ও সম্ভাবনাকে এগিয়ে নিতে কাজ করছে।",
  journeyImage: "https://i.ibb.co.com/Y7z60VHd/IMG-7695.jpg",
  journeyEyebrow: "আমাদের অভিযাত্রা",
  journeyTitle: "আমাদের গৌরবময় যাত্রা",
  journeyDescription:
    "দুই দশকেরও বেশি সময় ধরে দ্যা ব্রিলিয়ান্টস ফাউন্ডেশন মেধা বিকাশ, শিক্ষার উৎকর্ষতা এবং ভবিষ্যৎ নেতৃত্ব তৈরিতে নিরলসভাবে কাজ করে যাচ্ছে। প্রতি বছর হাজারো শিক্ষার্থীর অংশগ্রহণে আমাদের বৃত্তি পরীক্ষা আজ একটি বিশ্বস্ত ও সম্মানজনক প্ল্যাটফর্মে পরিণত হয়েছে।",
  noticesEyebrow: "নোটিশ বোর্ড",
  noticesTitle: "সর্বশেষ ঘোষণা",
  noticesDescription:
    "বৃত্তি পরীক্ষা ও ফাউন্ডেশনের কার্যক্রমের নির্ভরযোগ্য আপডেট এখানে দেখুন।",
  noticeCountLabel: "টি প্রকাশিত নোটিশ",
  servicesEyebrow: "বৃত্তি পরীক্ষা ২০২৬",
  servicesTitle: "প্রয়োজনীয় সেবাসমূহ",
  servicesDescription:
    "আবেদন থেকে ফলাফল — পুরো প্রক্রিয়ার প্রতিটি ধাপ এক জায়গায়।",
  datesEyebrow: "সময়সূচী",
  datesTitle: "গুরুত্বপূর্ণ তারিখসমূহ",
  galleryEyebrow: "স্মৃতিচারণ",
  galleryTitle: "কার্যক্রমের স্থিরচিত্র",
  leadersEyebrow: "নেতৃত্ব",
  leadersTitle: "পরিচালনা পর্ষদ",
  leadersDescription: "টিবিএফ-এর অগ্রযাত্রায় যারা নেতৃত্ব দিচ্ছেন",
  ctaTitle: "আজই আপনার ভবিষ্যৎ গড়ার যাত্রা শুরু করুন",
  ctaDescription:
    "রোল ও মোবাইল নম্বর দিয়ে ফলাফল যাচাই করুন অথবা নতুন আবেদন জমা দিন।",
  footerName: "দ্যা ব্রিলিয়্যান্টস্ ফাউন্ডেশন, বগুড়া",
  footerCopyright: "© ২০২৬ ভর্তি পোর্টাল। সর্বস্বত্ব সংরক্ষিত।",
  footerCredit: "Made By Tarek",
  footerUrl: "https://www.facebook.com/profile.php?id=61579860299121",
  portalFormHeading: "প্রয়োজনীয় তথ্য দিন",
  portalFormHelper: "তারকা (*) চিহ্নিত ঘরগুলো পূরণ করা আবশ্যক",
  portalPrivacyNote: "আপনার তথ্য এই ডেমো পেজে কোথাও পাঠানো হচ্ছে না।",
  portalDemoMessage:
    "ফর্মটি প্রস্তুত, তবে অনলাইন সার্ভারের সঙ্গে সংযুক্ত না থাকায় তথ্য জমা বা যাচাই করা হয়নি।",
};

export const portalPages = {
  apply: {
    eyebrow: "বৃত্তি পরীক্ষা ২০২৬",
    title: "শিক্ষার্থী আবেদন",
    description:
      "পরীক্ষায় অংশ নিতে শিক্ষার্থীর তথ্য পূরণ করুন। আবেদন জমা দেওয়ার আগে তথ্যগুলো ভালোভাবে মিলিয়ে নিন।",
    asideTitle: "আবেদনের আগে",
    asideText:
      "সঠিক তথ্য দিলে পরবর্তী ধাপে প্রবেশপত্র ও ফলাফল খুঁজে পেতে সুবিধা হবে।",
    tips: [
      "শিক্ষার্থীর নাম স্কুলের রেকর্ড অনুযায়ী লিখুন",
      "সচল অভিভাবকের মোবাইল নম্বর দিন",
      "সাবমিটের আগে সব তথ্য যাচাই করুন",
    ],
    submitLabel: "আবেদন চালিয়ে যান",
    fields: [
      {
        name: "studentName",
        label: "শিক্ষার্থীর পূর্ণ নাম",
        placeholder: "বাংলায় নাম লিখুন",
        autoComplete: "name",
      },
      {
        name: "guardianName",
        label: "অভিভাবকের নাম",
        placeholder: "অভিভাবকের পূর্ণ নাম",
      },
      {
        name: "phone",
        label: "অভিভাবকের মোবাইল",
        type: "tel",
        placeholder: "01XXXXXXXXX",
        autoComplete: "tel",
      },
      {
        name: "school",
        label: "শিক্ষাপ্রতিষ্ঠানের নাম",
        placeholder: "স্কুলের নাম",
        wide: true,
      },
      {
        name: "class",
        label: "বর্তমান শ্রেণি",
        type: "select",
        options: ["৫ম", "৬ষ্ঠ", "৭ম", "৮ম", "৯ম", "১০ম"].map((value) => ({
          value,
          label: value,
        })),
      },
      { name: "district", label: "জেলা", placeholder: "জেলার নাম" },
      {
        name: "consent",
        label: "প্রদত্ত তথ্য সঠিক বলে নিশ্চিত করছি",
        type: "checkbox",
        wide: true,
      },
    ],
  },
  admit: {
    eyebrow: "পরীক্ষার্থীদের জন্য",
    title: "প্রবেশপত্র ডাউনলোড",
    description:
      "নিবন্ধিত পরীক্ষার্থীর তথ্য দিয়ে প্রবেশপত্র খোঁজার ফর্মটি পূরণ করুন।",
    asideTitle: "প্রবেশপত্র সম্পর্কে",
    asideText:
      "প্রবেশপত্রে পরীক্ষার রোল, কেন্দ্র ও সময়সূচির তথ্য থাকে। পরীক্ষার দিন এটি সঙ্গে রাখুন।",
    tips: [
      "আবেদনের সময় ব্যবহৃত মোবাইল নম্বর দিন",
      "রোল নম্বরটি আবেদন কপি থেকে মিলিয়ে নিন",
      "সমস্যা হলে নোটিশ বোর্ডে আপডেট দেখুন",
    ],
    submitLabel: "প্রবেশপত্র খুঁজুন",
    fields: [
      {
        name: "roll",
        label: "আবেদন / রোল নম্বর",
        placeholder: "যেমন: TBF-2026-0001",
      },
      {
        name: "phone",
        label: "অভিভাবকের মোবাইল নম্বর",
        type: "tel",
        placeholder: "01XXXXXXXXX",
        autoComplete: "tel",
      },
    ],
  },
  result: {
    eyebrow: "বৃত্তি পরীক্ষা ২০২৬",
    title: "পরীক্ষার ফলাফল",
    description:
      "আপনার পরীক্ষার ফলাফল খুঁজতে আবেদন/রোল নম্বর ও নিবন্ধিত মোবাইল নম্বর দিন।",
    asideTitle: "ফলাফল খুঁজে পাচ্ছেন না?",
    asideText:
      "তথ্য দেওয়ার সময় আবেদনপত্রের সঙ্গে মিলিয়ে লিখুন। ফলাফল প্রকাশের সময় নোটিশ বোর্ডে জানানো হবে।",
    tips: [
      "রোল নম্বরের অক্ষর ও সংখ্যা ঠিক রাখুন",
      "আবেদনে দেওয়া মোবাইল নম্বর ব্যবহার করুন",
      "প্রকাশের তারিখ জানতে নোটিশ দেখুন",
    ],
    submitLabel: "ফলাফল খুঁজুন",
    fields: [
      {
        name: "roll",
        label: "আবেদন / রোল নম্বর",
        placeholder: "আপনার রোল নম্বর",
      },
      {
        name: "phone",
        label: "মোবাইল নম্বর",
        type: "tel",
        placeholder: "01XXXXXXXXX",
        autoComplete: "tel",
      },
    ],
  },
  payment: {
    eyebrow: "আবেদন সহায়তা",
    title: "পেমেন্ট যাচাই",
    description:
      "পেমেন্ট সম্পন্ন করার পর ট্রানজ্যাকশন আইডি ও আবেদনকারীর মোবাইল নম্বর দিয়ে যাচাই করুন।",
    asideTitle: "ট্রানজ্যাকশন আইডি কোথায় পাবেন?",
    asideText:
      "মোবাইল ব্যাংকিং পেমেন্টের সফল বার্তা বা অ্যাপের transaction history-তে আইডিটি থাকে।",
    tips: [
      "সম্পূর্ণ ট্রানজ্যাকশন আইডি লিখুন",
      "যে নম্বর থেকে পেমেন্ট করেছেন সেটি দিন",
      "একই পেমেন্ট বারবার করবেন না",
    ],
    submitLabel: "পেমেন্ট যাচাই করুন",
    fields: [
      {
        name: "transactionId",
        label: "ট্রানজ্যাকশন আইডি",
        placeholder: "Transaction ID",
      },
      {
        name: "phone",
        label: "পেমেন্টের মোবাইল নম্বর",
        type: "tel",
        placeholder: "01XXXXXXXXX",
        autoComplete: "tel",
      },
    ],
  },
  contact: {
    eyebrow: "আমরা পাশে আছি",
    title: "যোগাযোগ করুন",
    description:
      "আবেদন, প্রবেশপত্র বা পরীক্ষাসংক্রান্ত প্রশ্ন থাকলে নিচে আপনার বার্তা লিখুন।",
    asideTitle: "দ্রুত সহায়তা",
    asideText:
      "সাধারণ প্রশ্নের উত্তর নোটিশ বোর্ডে থাকতে পারে। আগে সাম্প্রতিক ঘোষণাগুলো দেখে নিন।",
    tips: [
      "প্রশ্নটি সংক্ষেপে ও পরিষ্কারভাবে লিখুন",
      "প্রয়োজনে আবেদন নম্বর উল্লেখ করুন",
      "ব্যক্তিগত পাসওয়ার্ড বা PIN দেবেন না",
    ],
    submitLabel: "বার্তা তৈরি করুন",
    fields: [
      {
        name: "name",
        label: "আপনার নাম",
        placeholder: "পূর্ণ নাম",
        autoComplete: "name",
      },
      {
        name: "phone",
        label: "মোবাইল নম্বর",
        type: "tel",
        placeholder: "01XXXXXXXXX",
        autoComplete: "tel",
      },
      {
        name: "email",
        label: "ইমেইল (ঐচ্ছিক)",
        type: "email",
        placeholder: "name@example.com",
        required: false,
      },
      {
        name: "topic",
        label: "বিষয়",
        type: "select",
        options: ["আবেদন", "প্রবেশপত্র", "ফলাফল", "পেমেন্ট", "অন্যান্য"].map(
          (value) => ({ value, label: value }),
        ),
      },
      {
        name: "message",
        label: "আপনার বার্তা",
        type: "textarea",
        placeholder: "আপনার প্রশ্ন বা সমস্যাটি লিখুন",
        wide: true,
      },
    ],
  },
  login: {
    eyebrow: "অ্যাডমিন অ্যাক্সেস",
    title: "অ্যাডমিন লগইন",
    description:
      "প্রতিষ্ঠানের অনুমোদিত প্রশাসনিক অ্যাকাউন্ট দিয়ে প্রবেশ করুন.",
    asideTitle: "নিরাপদ অ্যাক্সেস",
    asideText:
      "লগইন তথ্য কেবল অনুমোদিত অ্যাডমিন ব্যবহারকারীর জন্য। অন্য কারও সঙ্গে পাসওয়ার্ড শেয়ার করবেন না।",
    tips: [
      "শুধু প্রতিষ্ঠানের অনুমোদিত অ্যাকাউন্ট ব্যবহার করুন",
      "পাবলিক ডিভাইসে লগইন তথ্য সংরক্ষণ করবেন না",
      "লগইন সেবা এখনো সার্ভারের সঙ্গে যুক্ত নয়",
    ],
    submitLabel: "লগইন",
    fields: [
      {
        name: "username",
        label: "ইউজারনেম",
        placeholder: "আপনার ইউজারনেম",
        autoComplete: "username",
      },
      {
        name: "password",
        label: "পাসওয়ার্ড",
        type: "password",
        placeholder: "আপনার পাসওয়ার্ড",
        autoComplete: "current-password",
      },
    ],
  },
};

export const DEFAULT_SITE_CONTENT = {
  registrationOpen,
  heroSlides,
  notices,
  importantDates,
  stats,
  gallery,
  leaders,
  navLinks,
  serviceCards,
  LOGO,
  siteCopy,
  portalPages,
};
