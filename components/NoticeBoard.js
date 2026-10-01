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
    <section className="notice-board-content" aria-label="সকল নোটিশ">
      <div className="notice-tools">
        <label className="notice-search">
          <i className="fas fa-magnifying-glass" aria-hidden="true" />
          <span className="visually-hidden">নোটিশ খুঁজুন</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="শিরোনাম দিয়ে খুঁজুন"
          />
        </label>
        <div className="notice-filters" aria-label="নোটিশের ধরন">
          {filters.map((filter) => (
            <button
              aria-pressed={activeFilter === filter.id}
              className={activeFilter === filter.id ? "active" : ""}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <p className="notice-results-count" aria-live="polite">
        {visibleNotices.length.toLocaleString("bn-BD")} টি নোটিশ দেখানো হচ্ছে
      </p>

      <div className="notices-list">
        {visibleNotices.map((notice) => (
          <article
            className="notice-card"
            id={`notice-${notice.id}`}
            key={notice.id}
          >
            <div className="notice-card-main">
              <div className="notice-card-meta">
                <span
                  className={`notice-badge ${notice.category === "Exam" ? "notice-badge-exam" : "notice-badge-general"}`}
                >
                  {notice.category === "Exam" ? "পরীক্ষা" : "সাধারণ"}
                </span>
                <time className="notice-date">
                  <i className="fas fa-calendar-days" aria-hidden="true" />
                  {notice.date}
                </time>
              </div>
              <h2 className="notice-title">{notice.title}</h2>
            </div>
            {notice.url && (
              <a
                className="notice-link"
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
          <div className="notice-no-results">
            <i className="fas fa-magnifying-glass" aria-hidden="true" />
            <h2>কোনো নোটিশ পাওয়া যায়নি</h2>
            <p>অন্য শব্দ দিয়ে খুঁজুন অথবা অন্য বিভাগ নির্বাচন করুন।</p>
          </div>
        )}
      </div>
    </section>
  );
}
