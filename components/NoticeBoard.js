"use client";

import { useState } from "react";

const filters = [
  { id: "all", label: "সব নোটিশ" },
  { id: "Exam", label: "পরীক্ষা" },
  { id: "General", label: "সাধারণ" },
];

export default function NoticeBoard({ notices }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLocaleLowerCase("bn-BD");
  const visibleNotices = notices.filter((notice) => {
    const matchesCategory =
      activeFilter === "all" || notice.category === activeFilter;
    const matchesSearch = `${notice.title} ${notice.date} ${notice.category}`
      .toLocaleLowerCase("bn-BD")
      .includes(normalizedSearch);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="pt-6" aria-label="সকল নোটিশ">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <label className="flex min-w-0 items-center gap-2.5 rounded border border-paper-line bg-white px-[13px] text-ink-soft transition focus-within:border-gold focus-within:ring-[3px] focus-within:ring-gold/15 sm:min-w-[330px]">
          <i className="fas fa-magnifying-glass" aria-hidden="true" />
          <span className="sr-only">নোটিশ খুঁজুন</span>
          <input
            className="h-[42px] w-full min-w-0 border-0 bg-transparent text-[0.84rem] text-ink outline-none placeholder:text-ink-soft/70"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="শিরোনাম দিয়ে খুঁজুন"
          />
        </label>
        <div
          className="grid grid-cols-3 gap-1 rounded bg-[#eee7d9] p-1 sm:flex"
          aria-label="নোটিশের ধরন"
        >
          {filters.map((filter) => (
            <button
              aria-pressed={activeFilter === filter.id}
              className={`rounded-[3px] px-2 py-2 text-[0.78rem] font-semibold transition sm:px-[13px] ${activeFilter === filter.id ? "bg-white text-maroon shadow-sm" : "text-ink-soft hover:bg-white/60"}`}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <p
        className="my-5 mb-2.5 text-[0.78rem] text-ink-soft"
        aria-live="polite"
      >
        {visibleNotices.length.toLocaleString("bn-BD")} টি নোটিশ দেখানো হচ্ছে
      </p>

      <div className="space-y-2.5">
        {visibleNotices.map((notice) => (
          <article
            className="flex flex-col items-start justify-between gap-4 rounded border border-paper-line bg-white p-[17px] transition hover:-translate-y-px hover:border-gold hover:shadow-[0_8px_22px_rgba(22,35,61,0.08)] sm:p-5 md:flex-row md:items-center md:gap-5 md:px-[22px]"
            id={`notice-${notice.id}`}
            key={notice.id}
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3.5">
                <span
                  className={`inline-block rounded-[3px] border px-2.5 py-1 text-[0.68rem] font-bold uppercase ${notice.category === "Exam" ? "border-gold-soft bg-[#fbf1e0] text-maroon" : "border-[#a9c9cc] bg-[#eaf4f4] text-[#236477]"}`}
                >
                  {notice.category === "Exam" ? "পরীক্ষা" : "সাধারণ"}
                </span>
                <time className="flex items-center gap-2 text-[0.82rem] font-semibold text-ink-soft">
                  <i
                    className="fas fa-calendar-days text-maroon"
                    aria-hidden="true"
                  />
                  {notice.date}
                </time>
              </div>
              <h2 className="mt-2.5 font-serif text-[1.05rem] font-bold leading-[1.5] text-ink sm:text-[1.18rem]">
                {notice.title}
              </h2>
            </div>
            {notice.url && (
              <a
                className="inline-flex shrink-0 items-center gap-2 rounded bg-maroon px-3.5 py-[9px] text-[0.82rem] font-bold text-white no-underline transition hover:-translate-y-px hover:bg-ink"
                href={notice.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${notice.title} - লিঙ্ক খুলুন`}
              >
                <span>বিস্তারিত দেখুন</span>
                <i
                  className="fas fa-arrow-up-right-from-square"
                  aria-hidden="true"
                />
              </a>
            )}
          </article>
        ))}
        {visibleNotices.length === 0 && (
          <div className="rounded border border-dashed border-paper-line bg-white px-5 py-12 text-center text-ink-soft">
            <i
              className="fas fa-magnifying-glass mb-3 block text-2xl text-gold"
              aria-hidden="true"
            />
            <h2 className="font-serif text-[1.1rem] text-ink">
              কোনো নোটিশ পাওয়া যায়নি
            </h2>
            <p className="mt-1 text-[0.84rem]">
              অন্য শব্দ দিয়ে খুঁজুন অথবা অন্য বিভাগ নির্বাচন করুন।
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
