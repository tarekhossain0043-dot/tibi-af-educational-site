"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const categories = [
  "সর্বশেষ",
  "জাতীয়",
  "শিক্ষা",
  "বগুড়া",
  "প্রযুক্তি",
  "খেলাধুলা",
];

const articles = [
  {
    id: 1,
    category: "জাতীয়",
    title: "নতুন শিক্ষাবর্ষে শিক্ষার্থীদের জন্য আসছে যুগোপযোগী শিক্ষাক্রম",
    summary:
      "শিক্ষার্থীদের দক্ষতা ও সৃজনশীলতা বাড়াতে নতুন শিক্ষাবর্ষের পাঠ্যক্রমে যুক্ত হচ্ছে হাতে-কলমে শেখার নানা বিষয়।",
    author: "নিজস্ব প্রতিবেদক",
    date: "১৫ অক্টোবর ২০২৬",
    time: "সকাল ১০:৩০",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "শ্রেণিকক্ষে পড়াশোনা করছে শিক্ষার্থীরা",
    readTime: "৪ মিনিট",
    body: [
      "শিক্ষার্থীদের বাস্তবমুখী দক্ষতা, সৃজনশীল চিন্তা ও প্রযুক্তি-জ্ঞান বাড়াতে নতুন শিক্ষাবর্ষের পাঠ্যক্রমে বেশ কিছু পরিবর্তন আনার উদ্যোগ নেওয়া হয়েছে। শিক্ষা সংশ্লিষ্টরা বলছেন, মুখস্থনির্ভরতার বদলে হাতে-কলমে শেখার ওপর জোর দেওয়া হবে।",
      "নতুন পরিকল্পনায় শ্রেণিকক্ষের পাঠের পাশাপাশি দলীয় কাজ, প্রকল্প এবং নিয়মিত মূল্যায়নের সুযোগ থাকবে। শিক্ষক ও অভিভাবকদের মতামত নিয়ে ধাপে ধাপে এ কার্যক্রম বাস্তবায়নের কথা জানিয়েছে সংশ্লিষ্ট কর্তৃপক্ষ।",
      "শিক্ষার্থীদের জন্য পাঠ্যবই ও সহায়ক উপকরণ সহজলভ্য করার প্রস্তুতিও চলছে। চূড়ান্ত নির্দেশনা প্রকাশ হলে শিক্ষাপ্রতিষ্ঠানগুলোকে বিস্তারিত জানানো হবে।",
    ],
  },
  {
    id: 2,
    category: "বগুড়া",
    title: "বগুড়ায় শিক্ষার্থীদের অংশগ্রহণে বিজ্ঞান ও উদ্ভাবন মেলা",
    summary:
      "স্থানীয় শিক্ষাপ্রতিষ্ঠানের শিক্ষার্থীরা পরিবেশবান্ধব প্রযুক্তি ও দৈনন্দিন সমস্যার উদ্ভাবনী সমাধান তুলে ধরেছে।",
    author: "বগুড়া প্রতিনিধি",
    date: "১৫ অক্টোবর ২০২৬",
    time: "সকাল ৯:১৫",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "বিজ্ঞান গবেষণাগারে শিক্ষার্থীদের কাজ",
    readTime: "৩ মিনিট",
    body: [
      "বগুড়ায় দিনব্যাপী বিজ্ঞান ও উদ্ভাবন মেলায় বিভিন্ন শিক্ষাপ্রতিষ্ঠানের শিক্ষার্থীরা তাদের তৈরি প্রকল্প প্রদর্শন করেছে। সৌরশক্তি, বর্জ্য ব্যবস্থাপনা ও সহজ প্রযুক্তির ব্যবহার ছিল প্রকল্পগুলোর প্রধান বিষয়।",
      "আয়োজকেরা জানান, শিক্ষার্থীদের মধ্যে অনুসন্ধিৎসা ও দলগতভাবে কাজ করার আগ্রহ বাড়াতেই এ আয়োজন। মেলায় অংশ নেওয়া শিক্ষার্থীদের কাজ দর্শনার্থীদের প্রশংসা পেয়েছে।",
    ],
  },
  {
    id: 3,
    category: "শিক্ষা",
    title: "পরীক্ষার প্রস্তুতিতে পরিকল্পিত পড়াশোনার বিকল্প নেই",
    summary:
      "শিক্ষকদের পরামর্শ—নিয়মিত অনুশীলন, পর্যাপ্ত বিশ্রাম ও সময় ভাগ করে পড়লে পরীক্ষার চাপ অনেকটাই কমে।",
    author: "শিক্ষা ডেস্ক",
    date: "১৪ অক্টোবর ২০২৬",
    time: "বিকেল ৪:২০",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    imageAlt: "পড়ার টেবিলে বই ও নোট",
    readTime: "৫ মিনিট",
    body: [
      "পরীক্ষার আগে শেষ মুহূর্তে অতিরিক্ত পড়ার চেয়ে নিয়মিত ও পরিকল্পিত অনুশীলন বেশি কার্যকর। শিক্ষকেরা প্রতিদিনের পড়া প্রতিদিন শেষ করা এবং কঠিন বিষয়গুলো ছোট ছোট ভাগে অনুশীলনের পরামর্শ দিয়েছেন।",
      "পড়াশোনার পাশাপাশি পর্যাপ্ত ঘুম, বিরতি এবং স্বাস্থ্যকর খাবার মনোযোগ ধরে রাখতে সাহায্য করে। নিজের অগ্রগতি যাচাই করতে নির্দিষ্ট সময় পরপর অনুশীলনী পরীক্ষাও দেওয়া যেতে পারে।",
    ],
  },
  {
    id: 4,
    category: "প্রযুক্তি",
    title: "শিক্ষায় প্রযুক্তির ব্যবহার বাড়াতে নতুন প্রশিক্ষণ কর্মসূচি",
    summary:
      "ডিজিটাল উপকরণ কার্যকরভাবে ব্যবহার ও নিরাপদ অনলাইন পরিবেশ তৈরিতে শিক্ষকদের প্রশিক্ষণ দেওয়া হবে।",
    author: "প্রযুক্তি ডেস্ক",
    date: "১৪ অক্টোবর ২০২৬",
    time: "দুপুর ১:৪০",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "ল্যাপটপে অনলাইন শিক্ষার উপকরণ",
    readTime: "৪ মিনিট",
    body: [
      "শ্রেণিকক্ষে প্রযুক্তির ইতিবাচক ব্যবহার বাড়াতে শিক্ষকদের জন্য নতুন প্রশিক্ষণ কর্মসূচির পরিকল্পনা করা হয়েছে। এতে ডিজিটাল পাঠ তৈরি, অনলাইন নিরাপত্তা এবং শিক্ষার্থীদের অংশগ্রহণ বাড়ানোর কৌশল শেখানো হবে।",
      "প্রশিক্ষণটি ধাপে ধাপে বিভিন্ন অঞ্চলে আয়োজন করা হবে। প্রশিক্ষণ শেষে শিক্ষকেরা নিজেদের প্রতিষ্ঠানে সহকর্মীদের সঙ্গে শেখা বিষয়গুলো ভাগ করে নেবেন।",
    ],
  },
  {
    id: 5,
    category: "খেলাধুলা",
    title: "স্কুল পর্যায়ের ক্রীড়া প্রতিযোগিতায় বাড়ছে শিক্ষার্থীদের আগ্রহ",
    summary:
      "পড়াশোনার পাশাপাশি খেলাধুলা ও দলগত কার্যক্রমে অংশ নেওয়ার সুযোগ তৈরি করছে বিভিন্ন শিক্ষাপ্রতিষ্ঠান।",
    author: "ক্রীড়া ডেস্ক",
    date: "১৩ অক্টোবর ২০২৬",
    time: "সন্ধ্যা ৬:০০",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80",
    imageAlt: "মাঠে খেলাধুলায় ব্যস্ত শিক্ষার্থীরা",
    readTime: "৩ মিনিট",
    body: [
      "স্কুল পর্যায়ে নিয়মিত ক্রীড়া আয়োজন শিক্ষার্থীদের মধ্যে নতুন উদ্দীপনা তৈরি করেছে। ফুটবল, দৌড় ও দলীয় খেলায় অংশ নিয়ে তারা শৃঙ্খলা, সহযোগিতা ও নেতৃত্বের চর্চা করছে।",
      "শিক্ষকেরা জানান, খেলাধুলা শারীরিক সুস্থতার পাশাপাশি শিক্ষার্থীদের মানসিক বিকাশেও ইতিবাচক ভূমিকা রাখে।",
    ],
  },
  {
    id: 6,
    category: "জাতীয়",
    title: "পাঠাভ্যাস গড়তে স্কুলে চালু হচ্ছে সাপ্তাহিক বইপড়া ঘণ্টা",
    summary:
      "পাঠ্যবইয়ের বাইরে গল্প, বিজ্ঞান ও জীবনী পড়ার জন্য শিক্ষার্থীরা পাবে নির্দিষ্ট সময় ও বই বেছে নেওয়ার সুযোগ।",
    author: "নিজস্ব প্রতিবেদক",
    date: "১২ অক্টোবর ২০২৬",
    time: "সকাল ১১:১০",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    imageAlt: "বইয়ে সাজানো একটি পাঠাগার",
    readTime: "৪ মিনিট",
    body: [
      "শিক্ষার্থীদের বই পড়ার অভ্যাস গড়ে তুলতে কয়েকটি শিক্ষাপ্রতিষ্ঠানে সাপ্তাহিক বইপড়া ঘণ্টা চালুর উদ্যোগ নেওয়া হয়েছে। এ সময় শিক্ষার্থীরা নিজেদের পছন্দের বই পড়তে পারবে।",
      "শিক্ষকেরা মনে করেন, পাঠ্যবইয়ের বাইরের বই শিক্ষার্থীদের কল্পনাশক্তি, ভাষাজ্ঞান ও নতুন বিষয় জানার আগ্রহ বাড়ায়। উদ্যোগটি সফল হলে আরও প্রতিষ্ঠানে ছড়িয়ে দেওয়া হবে।",
    ],
  },
];

const trendingStories = [
  "বৃত্তি পরীক্ষার প্রস্তুতি: শিক্ষার্থীরা যেভাবে এগোবে",
  "শিক্ষাপ্রতিষ্ঠানে পরিচ্ছন্নতা ও স্বাস্থ্যসচেতনতার নতুন উদ্যোগ",
  "বগুড়ার তরুণদের হাতে তৈরি হচ্ছে পরিবেশবান্ধব উদ্ভাবন",
];

function AdCard({ compact = false, onClick }) {
  return (
    <aside
      className={`relative overflow-hidden rounded-xl border border-paper-line bg-[#f3ead8] ${compact ? "p-4" : "p-5 sm:p-6"}`}
      aria-label="নমুনা বিজ্ঞাপন"
    >
      <span className="absolute right-3 top-3 rounded bg-white/70 px-2 py-0.5 text-[0.62rem] font-semibold text-ink-soft">
        বিজ্ঞাপন
      </span>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-white">
          <i className="fas fa-book-open" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-maroon">
            পাঠশালা অনলাইন
          </p>
          <h3 className="mt-1 font-serif text-[1rem] font-bold leading-snug text-ink">
            শেখার আনন্দ হোক প্রতিদিন
          </h3>
          <p className="mt-1 text-[0.78rem] leading-relaxed text-ink-soft">
            নতুন ব্যাচ ও শিক্ষাসহায়ক উপকরণ সম্পর্কে জানুন।
          </p>
          <button
            className="mt-3 inline-flex items-center gap-2 rounded bg-ink px-3 py-2 text-[0.76rem] font-bold text-white transition hover:bg-maroon"
            onClick={onClick}
            type="button"
          >
            বিস্তারিত <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
}

function AutoNewsPopup({ visible }) {
  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-5 right-4 z-[150] transition-all duration-300 sm:right-6 ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
      role="status"
      aria-hidden={!visible}
    >
      <Link
        className="pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-xl border border-paper-line bg-white p-3 text-ink no-underline shadow-[0_12px_35px_rgba(22,35,61,0.2)] sm:max-w-[320px] sm:p-4"
        href="/news"
        tabIndex={visible ? 0 : -1}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-white">
          <i className="fas fa-newspaper" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[0.68rem] font-bold text-maroon">
            সংবাদ সকাল
          </span>
          <span className="mt-0.5 block text-[0.8rem] font-bold">
            সর্বশেষ খবর পড়ুন
          </span>
        </span>
        <i
          className="fas fa-arrow-right ml-1 text-sm text-maroon"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

function NewsArticleDetail({
  article,
  onSave,
  onShare,
  saved,
  toast,
  setToast,
  autoPopup,
}) {
  const relatedArticles = articles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-ink">
      <header className="border-b border-paper-line bg-white">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link className="flex items-center gap-3 no-underline" href="/news">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-maroon text-lg text-white">
              <i className="fas fa-newspaper" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-xl font-black leading-none text-ink">
                সংবাদ সকাল
              </span>
              <span className="mt-1 block text-[0.68rem] text-ink-soft">
                সত্যের খোঁজে, মানুষের পাশে
              </span>
            </span>
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-paper-line px-3 py-2 text-[0.76rem] font-bold text-ink no-underline transition hover:border-maroon hover:text-maroon sm:px-4"
            href="/news"
          >
            <i className="fas fa-arrow-left" aria-hidden="true" />
            সব খবর
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1000px] px-4 py-6 sm:px-6 sm:py-9">
        <nav
          aria-label="Breadcrumb"
          className="mb-5 text-[0.75rem] text-ink-soft"
        >
          <Link
            className="text-maroon no-underline hover:underline"
            href="/news"
          >
            সংবাদ
          </Link>
          <i
            className="fas fa-chevron-right mx-2 text-[0.6rem]"
            aria-hidden="true"
          />
          <span>{article.category}</span>
        </nav>

        <article className="overflow-hidden rounded-xl border border-paper-line bg-white">
          <img
            alt={article.imageAlt}
            className="max-h-[520px] w-full bg-[#f3ead8] object-cover"
            src={article.image}
          />
          <div className="mx-auto max-w-[790px] px-5 py-6 sm:px-10 sm:py-9">
            <span className="rounded bg-[#f5eee0] px-2.5 py-1 text-[0.7rem] font-bold text-maroon">
              {article.category}
            </span>
            <h1 className="mt-4 font-serif text-[1.65rem] font-extrabold leading-snug sm:text-[2.35rem]">
              {article.title}
            </h1>
            <p className="mt-4 border-l-[3px] border-gold pl-4 text-[0.96rem] font-medium leading-relaxed text-ink-soft sm:text-[1.05rem]">
              {article.summary}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-paper-line py-3 text-[0.76rem] text-ink-soft">
              <span>
                <i
                  className="far fa-user mr-1.5 text-maroon"
                  aria-hidden="true"
                />
                {article.author}
              </span>
              <time>
                <i
                  className="far fa-calendar mr-1.5 text-maroon"
                  aria-hidden="true"
                />
                {article.date}
              </time>
              <span>
                <i
                  className="far fa-clock mr-1.5 text-maroon"
                  aria-hidden="true"
                />
                {article.time}
              </span>
              <span className="sm:ml-auto">পড়তে {article.readTime}</span>
            </div>
            <div className="my-6 flex flex-wrap gap-2">
              <button
                className={`inline-flex items-center gap-2 rounded border px-3.5 py-2 text-[0.78rem] font-bold transition ${saved ? "border-maroon bg-maroon text-white" : "border-paper-line text-ink hover:border-maroon hover:text-maroon"}`}
                onClick={() => onSave(article)}
                type="button"
              >
                <i className="fas fa-bookmark" aria-hidden="true" />
                {saved ? "সংরক্ষিত" : "খবর সংরক্ষণ করুন"}
              </button>
              <button
                className="inline-flex items-center gap-2 rounded border border-paper-line px-3.5 py-2 text-[0.78rem] font-bold text-ink transition hover:border-maroon hover:text-maroon"
                onClick={() => onShare(article)}
                type="button"
              >
                <i className="fas fa-share-nodes" aria-hidden="true" />
                শেয়ার করুন
              </button>
            </div>
            <div className="space-y-5 text-[0.95rem] leading-[1.95] text-ink-soft sm:text-[1rem]">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 border-t border-paper-line pt-4 text-[0.76rem] text-ink-soft">
              <i
                className="fas fa-pen-nib mr-2 text-maroon"
                aria-hidden="true"
              />
              প্রতিবেদক: {article.author}
            </div>
          </div>
        </article>

        <section className="mt-8" aria-label="আরও খবর">
          <div className="mb-4 flex items-center justify-between border-b border-paper-line pb-3">
            <h2 className="font-serif text-xl font-extrabold">আরও খবর পড়ুন</h2>
            <Link
              className="text-[0.78rem] font-bold text-maroon no-underline hover:text-ink"
              href="/news"
            >
              সব খবর{" "}
              <i className="fas fa-arrow-right ml-1" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link
                className="rounded-lg border border-paper-line bg-white p-4 text-ink no-underline transition hover:border-gold hover:shadow-sm"
                href={`/news/${related.id}`}
                key={related.id}
              >
                <span className="text-[0.68rem] font-bold text-maroon">
                  {related.category}
                </span>
                <span className="mt-2 block font-serif text-[0.95rem] font-bold leading-snug">
                  {related.title}
                </span>
                <span className="mt-3 block text-[0.72rem] text-ink-soft">
                  {related.date}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-paper-line bg-white">
        <div className="mx-auto flex max-w-[1000px] flex-wrap justify-between gap-2 px-4 py-5 text-[0.72rem] text-ink-soft sm:px-6">
          <span>© ২০২৬ সংবাদ সকাল · এটি নমুনা সংবাদ পোর্টাল</span>
          <Link
            className="font-semibold text-maroon no-underline hover:text-ink"
            href="/"
          >
            মূল ওয়েবসাইটে ফিরুন
          </Link>
        </div>
      </footer>

      {toast && (
        <div
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-[250] flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-lg bg-ink px-4 py-3 text-[0.82rem] font-semibold text-white shadow-xl"
          role="status"
        >
          <i className="fas fa-circle-info text-gold-soft" aria-hidden="true" />
          {toast}
          <button
            aria-label="বার্তা বন্ধ করুন"
            className="ml-2 text-white/70 hover:text-white"
            onClick={() => setToast("")}
            type="button"
          >
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
        </div>
      )}
      <AutoNewsPopup visible={autoPopup} />
    </div>
  );
}

export default function NewsPortal() {
  const params = useParams();
  const [activeCategory, setActiveCategory] = useState("সর্বশেষ");
  const [search, setSearch] = useState("");
  const [savedIds, setSavedIds] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");
  const [today, setToday] = useState("");
  const [autoPopup, setAutoPopup] = useState(false);

  useEffect(() => {
    setToday(
      new Intl.DateTimeFormat("bn-BD", {
        timeZone: "Asia/Dhaka",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date()),
    );
  }, []);

  useEffect(() => {
    let showTimer;
    let hideTimer;

    function schedulePopup(delay) {
      showTimer = window.setTimeout(() => {
        setAutoPopup(true);
        hideTimer = window.setTimeout(() => {
          setAutoPopup(false);
          schedulePopup(3500);
        }, 2000);
      }, delay);
    }

    schedulePopup(5000);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    try {
      const storedIds = window.localStorage.getItem("tbf-news-saved");
      if (storedIds) {
        const parsedIds = JSON.parse(storedIds);
        if (Array.isArray(parsedIds)) setSavedIds(parsedIds);
      }
    } catch {
      setToast("ব্রাউজারে বুকমার্ক সংরক্ষণ করা যায়নি।");
    }
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timeoutId = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("bn-BD");
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "সর্বশেষ" || article.category === activeCategory;
      const matchesSaved = !showSaved || savedIds.includes(article.id);
      const searchableText =
        `${article.title} ${article.summary} ${article.category} ${article.author}`.toLocaleLowerCase(
          "bn-BD",
        );
      return matchesCategory && matchesSaved && searchableText.includes(query);
    });
  }, [activeCategory, savedIds, search, showSaved]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const featuredArticle = articles[0];

  function toggleSaved(article) {
    const isSaved = savedIds.includes(article.id);
    const nextSavedIds = isSaved
      ? savedIds.filter((id) => id !== article.id)
      : [...savedIds, article.id];
    setSavedIds(nextSavedIds);
    try {
      window.localStorage.setItem(
        "tbf-news-saved",
        JSON.stringify(nextSavedIds),
      );
      setToast(
        isSaved
          ? "সংরক্ষিত খবর থেকে সরানো হয়েছে।"
          : "খবরটি সংরক্ষণ করা হয়েছে।",
      );
    } catch {
      setToast("বুকমার্ক সংরক্ষণ করা যায়নি। আবার চেষ্টা করুন।");
    }
  }

  async function shareArticle(article) {
    const url = `${window.location.origin}/news/${article.id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: article.title, url });
        setToast("খবরটি শেয়ার করা হয়েছে।");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setToast("খবরের লিংক কপি করা হয়েছে।");
      } else {
        setToast("এই ব্রাউজারে শেয়ার সুবিধা নেই।");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        setToast("খবরটি শেয়ার করা যায়নি। আবার চেষ্টা করুন।");
      }
    }
  }

  function subscribe(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setToast("সঠিক ইমেইল ঠিকানা লিখুন।");
      return;
    }
    setToast("এটি ডেমো সাবস্ক্রিপশন—এখনো কোনো ইমেইল পাঠানো হয়নি।");
    setEmail("");
  }

  function changeCategory(category) {
    setActiveCategory(category);
    setShowSaved(false);
    setVisibleCount(4);
  }

  if (params?.id) {
    const article = articles.find(
      (item) => String(item.id) === String(params.id),
    );
    if (!article) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#fbfaf7] px-4 text-center text-ink">
          <i
            className="far fa-newspaper text-4xl text-gold"
            aria-hidden="true"
          />
          <h1 className="mt-4 font-serif text-2xl font-extrabold">
            খবরটি পাওয়া যায়নি
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            এই সংবাদটি হয়তো সরিয়ে ফেলা হয়েছে।
          </p>
          <Link
            className="mt-5 rounded bg-maroon px-4 py-2.5 text-sm font-bold text-white no-underline"
            href="/news"
          >
            সব খবরে ফিরে যান
          </Link>
        </main>
      );
    }
    return (
      <NewsArticleDetail
        article={article}
        onSave={toggleSaved}
        onShare={shareArticle}
        saved={savedIds.includes(article.id)}
        toast={toast}
        setToast={setToast}
        autoPopup={autoPopup}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-ink">
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-[0.72rem] sm:px-6">
          <p className="flex items-center gap-2">
            <i className="far fa-calendar" aria-hidden="true" />
            {today}
          </p>
          <p className="hidden items-center gap-2 sm:flex">
            <i
              className="fas fa-location-dot text-gold-soft"
              aria-hidden="true"
            />
            বগুড়া, বাংলাদেশ
          </p>
        </div>
      </div>

      <header className="border-b border-paper-line bg-white">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-5 px-4 py-5 sm:flex-row sm:items-center sm:px-6 sm:py-7">
          <a href="/news" className="flex items-center gap-3 no-underline">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-maroon text-xl text-white">
              <i className="fas fa-newspaper" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-[1.65rem] font-black leading-none text-ink sm:text-[1.9rem]">
                সংবাদ সকাল
              </span>
              <span className="mt-1 block text-[0.72rem] font-medium tracking-wide text-ink-soft">
                সত্যের খোঁজে, মানুষের পাশে
              </span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-paper-line px-4 py-2 text-[0.78rem] font-bold text-ink no-underline transition hover:border-maroon hover:text-maroon sm:inline-flex"
              href="/"
            >
              <i className="fas fa-arrow-left mr-2" aria-hidden="true" />
              মূল সাইট
            </a>
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-paper-line bg-[#fbfaf7] px-4 sm:w-[260px] sm:flex-none">
              <i
                className="fas fa-magnifying-glass text-[0.8rem] text-ink-soft"
                aria-hidden="true"
              />
              <span className="sr-only">খবর খুঁজুন</span>
              <input
                className="h-10 w-full min-w-0 bg-transparent text-[0.82rem] outline-none placeholder:text-ink-soft/70"
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setVisibleCount(4);
                }}
                placeholder="খবর খুঁজুন..."
              />
            </label>
            <button
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-[0.78rem] font-bold transition sm:px-4 ${showSaved ? "border-maroon bg-maroon text-white" : "border-paper-line text-ink hover:border-maroon hover:text-maroon"}`}
              onClick={() => {
                setShowSaved(!showSaved);
                setVisibleCount(4);
              }}
              type="button"
            >
              <i className="fas fa-bookmark" aria-hidden="true" />
              <span className="hidden sm:inline">সংরক্ষিত</span>
              <span>{savedIds.length.toLocaleString("bn-BD")}</span>
            </button>
          </div>
        </div>
      </header>

      <nav
        className="border-b border-paper-line bg-white"
        aria-label="সংবাদ বিভাগ"
      >
        <div className="mx-auto flex max-w-[1180px] gap-1 overflow-x-auto px-4 sm:px-6">
          {categories.map((category) => (
            <button
              aria-pressed={activeCategory === category && !showSaved}
              className={`shrink-0 border-b-2 px-3 py-3 text-[0.8rem] font-semibold transition ${activeCategory === category && !showSaved ? "border-maroon text-maroon" : "border-transparent text-ink-soft hover:text-maroon"}`}
              key={category}
              onClick={() => changeCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <div className="bg-maroon text-white">
        <div className="mx-auto flex max-w-[1180px] items-center gap-3 overflow-hidden px-4 py-2.5 sm:px-6">
          <span className="shrink-0 rounded bg-gold px-2.5 py-1 text-[0.68rem] font-extrabold text-ink">
            ব্রেকিং
          </span>
          <p className="truncate text-[0.8rem] font-medium">
            শিক্ষার্থীদের জন্য নতুন শিক্ষাক্রমে হাতে-কলমে শেখায় গুরুত্ব দিচ্ছে
            শিক্ষা সংশ্লিষ্টরা
          </p>
          <i
            className="fas fa-bolt ml-auto hidden text-gold-soft sm:block"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-4 pb-12 pt-7 sm:px-6 sm:pt-9">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-maroon">
              আজকের খবর
            </p>
            <h1 className="mt-1 font-serif text-[1.55rem] font-extrabold sm:text-[1.85rem]">
              দিনের গুরুত্বপূর্ণ সংবাদ
            </h1>
          </div>
          <span className="text-[0.75rem] text-ink-soft">
            {articles.length.toLocaleString("bn-BD")} টি নমুনা সংবাদ
          </span>
        </div>

        <AdCard
          onClick={() =>
            setToast(
              "এটি একটি নমুনা বিজ্ঞাপন—বিজ্ঞাপনদাতার সাইট যুক্ত করা হয়নি।",
            )
          }
        />

        <section
          className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]"
          aria-label="প্রধান সংবাদ"
        >
          <article className="group relative overflow-hidden rounded-xl bg-ink">
            <Link
              aria-label={`${featuredArticle.title} পড়ুন`}
              className="absolute inset-0"
              href={`/news/${featuredArticle.id}`}
              tabIndex={-1}
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                className="h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-[1.02]"
              />
            </Link>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5" />
            <div className="pointer-events-none relative z-10 flex min-h-[340px] flex-col justify-end p-5 text-white sm:min-h-[420px] sm:p-8">
              <span className="mb-3 w-fit rounded bg-gold px-2.5 py-1 text-[0.7rem] font-bold text-ink">
                প্রধান সংবাদ · {featuredArticle.category}
              </span>
              <h2 className="pointer-events-auto max-w-[700px] font-serif text-[1.55rem] font-extrabold leading-snug sm:text-[2.15rem]">
                <Link
                  className="text-white no-underline hover:text-gold-soft"
                  href={`/news/${featuredArticle.id}`}
                >
                  {featuredArticle.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-[650px] text-[0.85rem] leading-relaxed text-white/85 sm:text-[0.95rem]">
                {featuredArticle.summary}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.72rem] text-white/80">
                <span>
                  <i className="far fa-user mr-1.5" aria-hidden="true" />
                  {featuredArticle.author}
                </span>
                <span>
                  <i className="far fa-clock mr-1.5" aria-hidden="true" />
                  {featuredArticle.time}
                </span>
                <Link
                  className="pointer-events-auto ml-auto inline-flex items-center gap-2 rounded bg-white px-3.5 py-2 font-bold text-ink no-underline transition hover:bg-gold"
                  href={`/news/${featuredArticle.id}`}
                >
                  পুরো খবর পড়ুন{" "}
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <aside className="flex flex-col gap-5">
            <section className="rounded-xl border border-paper-line bg-white p-5">
              <div className="mb-4 flex items-center justify-between border-b border-paper-line pb-3">
                <h2 className="font-serif text-[1.05rem] font-extrabold">
                  জনপ্রিয় খবর
                </h2>
                <i
                  className="fas fa-chart-line text-maroon"
                  aria-hidden="true"
                />
              </div>
              <ol className="space-y-4">
                {trendingStories.map((story, index) => (
                  <li className="flex gap-3" key={story}>
                    <span className="font-serif text-[1.45rem] font-black leading-none text-gold">
                      {(index + 1).toLocaleString("bn-BD")}
                    </span>
                    <p className="text-[0.82rem] font-semibold leading-relaxed text-ink">
                      {story}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
            <AdCard
              compact
              onClick={() =>
                setToast(
                  "এটি একটি নমুনা বিজ্ঞাপন—বিজ্ঞাপনদাতার সাইট যুক্ত করা হয়নি।",
                )
              }
            />
          </aside>
        </section>

        <div className="mt-10 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section aria-label="সর্বশেষ খবর">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2 border-b border-paper-line pb-3">
              <div>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-maroon">
                  {showSaved ? "আপনার তালিকা" : "নিউজ ডেস্ক"}
                </span>
                <h2 className="mt-1 font-serif text-[1.3rem] font-extrabold">
                  {showSaved
                    ? "সংরক্ষিত খবর"
                    : activeCategory === "সর্বশেষ"
                      ? "সর্বশেষ সংবাদ"
                      : `${activeCategory} সংবাদ`}
                </h2>
              </div>
              <span className="text-[0.73rem] text-ink-soft" aria-live="polite">
                {filteredArticles.length.toLocaleString("bn-BD")} টি খবর
              </span>
            </div>

            {displayedArticles.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {displayedArticles.map((article) => (
                  <article
                    className="overflow-hidden rounded-xl border border-paper-line bg-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(22,35,61,0.09)]"
                    id={`article-${article.id}`}
                    key={article.id}
                  >
                    <Link
                      className="block w-full overflow-hidden"
                      href={`/news/${article.id}`}
                      aria-label={`${article.title} পড়ুন`}
                    >
                      <img
                        alt={article.imageAlt}
                        className="h-[190px] w-full object-cover transition duration-300 hover:scale-[1.02]"
                        loading="lazy"
                        src={article.image}
                      />
                    </Link>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded bg-[#f5eee0] px-2 py-1 text-[0.65rem] font-bold text-maroon">
                          {article.category}
                        </span>
                        <time className="text-[0.67rem] text-ink-soft">
                          {article.date}
                        </time>
                      </div>
                      <Link
                        className="mt-3 block text-left font-serif text-[1.03rem] font-bold leading-snug text-ink no-underline hover:text-maroon"
                        href={`/news/${article.id}`}
                      >
                        {article.title}
                      </Link>
                      <p className="mt-2 line-clamp-2 text-[0.78rem] leading-relaxed text-ink-soft">
                        {article.summary}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-paper-line pt-3">
                        <Link
                          className="text-[0.75rem] font-bold text-maroon no-underline hover:text-ink"
                          href={`/news/${article.id}`}
                        >
                          বিস্তারিত{" "}
                          <i
                            className="fas fa-arrow-right ml-1"
                            aria-hidden="true"
                          />
                        </Link>
                        <div className="flex gap-1">
                          <button
                            aria-label={
                              savedIds.includes(article.id)
                                ? "সংরক্ষণ থেকে সরান"
                                : "খবর সংরক্ষণ করুন"
                            }
                            className={`flex h-8 w-8 items-center justify-center rounded-full transition ${savedIds.includes(article.id) ? "bg-maroon text-white" : "text-ink-soft hover:bg-[#f5eee0] hover:text-maroon"}`}
                            onClick={() => toggleSaved(article)}
                            type="button"
                          >
                            <i className="fas fa-bookmark" aria-hidden="true" />
                          </button>
                          <button
                            aria-label="খবর শেয়ার করুন"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition hover:bg-[#f5eee0] hover:text-maroon"
                            onClick={() => shareArticle(article)}
                            type="button"
                          >
                            <i
                              className="fas fa-share-nodes"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-paper-line bg-white px-5 py-12 text-center">
                <i
                  className="far fa-newspaper text-3xl text-gold"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-serif text-lg font-bold">
                  কোনো খবর পাওয়া যায়নি
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  {showSaved
                    ? "খবর সংরক্ষণ করলে এখানে দেখতে পাবেন।"
                    : "অন্য শব্দ দিয়ে খুঁজুন বা অন্য বিভাগ নির্বাচন করুন।"}
                </p>
              </div>
            )}
            {filteredArticles.length > visibleCount && (
              <button
                className="mt-5 w-full rounded-lg border border-paper-line bg-white py-3 text-[0.82rem] font-bold text-ink transition hover:border-maroon hover:text-maroon"
                onClick={() => setVisibleCount((count) => count + 4)}
                type="button"
              >
                আরও খবর দেখুন
              </button>
            )}
          </section>

          <aside className="space-y-5">
            <section className="rounded-xl bg-ink p-5 text-white">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold-soft">
                নিউজলেটার
              </span>
              <h2 className="mt-2 font-serif text-[1.2rem] font-bold">
                দিনের খবর থাকুক হাতের মুঠোয়
              </h2>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-white/75">
                নতুন খবরের আপডেট পেতে ইমেইল দিয়ে সাবস্ক্রাইব করুন।
              </p>
              <form className="mt-4 space-y-2" onSubmit={subscribe}>
                <label className="sr-only" htmlFor="newsletter-email">
                  ইমেইল ঠিকানা
                </label>
                <input
                  className="h-10 w-full rounded-md border border-white/20 bg-white px-3 text-[0.8rem] text-ink outline-none placeholder:text-ink-soft focus:border-gold"
                  id="newsletter-email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="আপনার ইমেইল"
                  type="email"
                  value={email}
                />
                <button
                  className="w-full rounded-md bg-gold py-2.5 text-[0.8rem] font-bold text-ink transition hover:bg-gold-soft"
                  type="submit"
                >
                  সাবস্ক্রাইব করুন
                </button>
              </form>
              <p className="mt-2 text-[0.65rem] text-white/55">
                ডেমো ফর্ম: সাবস্ক্রিপশনের তথ্য সংরক্ষণ করা হয় না।
              </p>
            </section>
            <AdCard
              compact
              onClick={() =>
                setToast(
                  "এটি একটি নমুনা বিজ্ঞাপন—বিজ্ঞাপনদাতার সাইট যুক্ত করা হয়নি।",
                )
              }
            />
          </aside>
        </div>
      </div>

      <footer className="border-t border-paper-line bg-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-2 px-4 py-5 text-[0.72rem] text-ink-soft sm:px-6">
          <span>© ২০২৬ সংবাদ সকাল · এটি নমুনা সংবাদ পোর্টাল</span>
          <a
            className="font-semibold text-maroon no-underline hover:text-ink"
            href="/"
          >
            মূল ওয়েবসাইটে ফিরুন
          </a>
        </div>
      </footer>

      {toast && (
        <div
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-[250] flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-lg bg-ink px-4 py-3 text-[0.82rem] font-semibold text-white shadow-xl"
          role="status"
        >
          <i className="fas fa-circle-info text-gold-soft" aria-hidden="true" />
          {toast}
          <button
            aria-label="বার্তা বন্ধ করুন"
            className="ml-2 text-white/70 hover:text-white"
            onClick={() => setToast("")}
            type="button"
          >
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
        </div>
      )}
      <AutoNewsPopup visible={autoPopup} />
    </div>
  );
}
