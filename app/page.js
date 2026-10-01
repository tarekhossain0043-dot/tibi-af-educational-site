import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Leaders from "@/components/Leaders";
import { notices, importantDates, stats, gallery, registrationOpen } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* নোটিশ বোর্ড */}
      <section className="notice-section" id="notice-board">
        <div className="container" style={{ position: "relative" }}>
          <Reveal className="notice-head">
            <div>
              <span className="eyebrow">নোটিশ বোর্ড</span>
              <h2>সর্বশেষ ঘোষণা</h2>
            </div>
            <Link href="/notices" className="notice-more">সব নোটিশ <i className="fas fa-arrow-right"></i></Link>
          </Reveal>
          <Reveal className="ledger">
            {notices.length === 0 && <div className="notice-empty">এখন কোনো নোটিশ নেই।</div>}
            {notices.map((n) => (
              <Link key={n.id} className="ledger-row" href={`/notices#notice-${n.id}`}>
                <div className="ledger-date"><span className="d">{n.date}</span></div>
                <span className="ledger-title">{n.title}</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* সেবাসমূহ */}
      <section className="section-padding container">
        <Reveal className="section-header centered">
          <span className="eyebrow" style={{ justifyContent: "center" }}>বৃত্তি পরীক্ষা ২০২৬</span>
          <h2>প্রয়োজনীয় সেবাসমূহ</h2>
          <p className="lede">আবেদন থেকে ফলাফল — পুরো প্রক্রিয়ার প্রতিটি ধাপ এক জায়গায়।</p>
        </Reveal>
        <Reveal className="actions-grid">
          <Link href="/apply" className="action-tile">
            <div className="action-icon"><i className="fas fa-pen-to-square"></i></div>
            <span>রেজিস্ট্রেশন করুন</span><small>নতুন আবেদন জমা দিন</small>
          </Link>
          <Link href="/download-admit" className="action-tile">
            <div className="action-icon"><i className="fas fa-id-card"></i></div>
            <span>এডমিট কার্ড</span><small>ডাউনলোড ও প্রিন্ট করুন</small>
          </Link>
          <Link href="/result-search" className="action-tile">
            <div className="action-icon"><i className="fas fa-award"></i></div>
            <span>ফলাফল</span><small>রোল দিয়ে যাচাই করুন</small>
          </Link>
          <Link href="/notices" className="action-tile">
            <div className="action-icon"><i className="fas fa-bullhorn"></i></div>
            <span>নোটিশ ও নিয়মাবলী</span><small>সব ঘোষণা দেখুন</small>
          </Link>
        </Reveal>
      </section>

      {/* গুরুত্বপূর্ণ তারিখ */}
      <section id="dates" className="section-padding container">
        <Reveal className="section-header">
          <span className="eyebrow">সময়সূচী</span>
          <h2>গুরুত্বপূর্ণ তারিখসমূহ</h2>
        </Reveal>
        <Reveal className="dates-ledger">
          {importantDates.map((d, i) => (
            <div key={i} className={`dr ${d.highlight ? "highlight" : ""}`}>
              <div className="dr-date"><span className="d">{d.day}</span><span className="m">{d.month}</span></div>
              <div className="dr-body"><h4>{d.title}</h4><p>{d.desc}</p></div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* আমাদের যাত্রা */}
      <section className="section-padding" style={{ background: "var(--card)", borderTop: "1px solid var(--paper-line)", borderBottom: "1px solid var(--paper-line)" }}>
        <div className="container impact-row">
          <Reveal className="impact-img">
            <img src="https://i.ibb.co.com/Y7z60VHd/IMG-7695.jpg" alt="TBF" />
          </Reveal>
          <Reveal className="impact-content">
            <span className="eyebrow">আমাদের অভিযাত্রা</span>
            <h2 style={{ marginTop: 8 }}>আমাদের গৌরবময় যাত্রা</h2>
            <p>দুই দশকেরও বেশি সময় ধরে দ্যা ব্রিলিয়ান্টস ফাউন্ডেশন মেধা বিকাশ, শিক্ষার উৎকর্ষতা এবং ভবিষ্যৎ নেতৃত্ব তৈরিতে নিরলসভাবে কাজ করে যাচ্ছে। প্রতি বছর হাজারো শিক্ষার্থীর অংশগ্রহণে আমাদের বৃত্তি পরীক্ষা আজ একটি বিশ্বস্ত ও সম্মানজনক প্ল্যাটফর্মে পরিণত হয়েছে।</p>
            <div className="stats-box">
              {stats.map((s, i) => (
                <div key={i} className="stat-item"><h3>{s.value}</h3><p>{s.label}</p></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* গ্যালারি */}
      <section className="section-padding container">
        <Reveal className="section-header centered">
          <span className="eyebrow" style={{ justifyContent: "center" }}>স্মৃতিচারণ</span>
          <h2>কার্যক্রমের স্থিরচিত্র</h2>
        </Reveal>
        <Reveal className="gallery-grid">
          {gallery.map((src, i) => (
            <div key={i} className="gallery-item"><img src={src} alt="Gallery" /></div>
          ))}
        </Reveal>
      </section>

      {/* পরিচালনা পর্ষদ */}
      <section className="section-padding container" style={{ borderTop: "1px solid var(--paper-line)" }}>
        <Reveal className="section-header centered">
          <span className="eyebrow" style={{ justifyContent: "center" }}>নেতৃত্ব</span>
          <h2>পরিচালনা পর্ষদ</h2>
          <p className="lede" style={{ margin: "6px auto 0" }}>টিবিএফ-এর অগ্রযাত্রায় যারা নেতৃত্ব দিচ্ছেন</p>
        </Reveal>
        <Leaders />
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <div>
            <h3>আজই আপনার ভবিষ্যৎ গড়ার যাত্রা শুরু করুন</h3>
            <p>রোল ও মোবাইল নম্বর দিয়ে ফলাফল যাচাই করুন অথবা নতুন আবেদন জমা দিন।</p>
          </div>
          <div className="cta-strip-btns">
            {registrationOpen && <Link href="/apply" className="btn btn-gold">আবেদন করুন</Link>}
            <Link href="/result-search" className="btn btn-outline-light">ফলাফল দেখুন</Link>
          </div>
        </div>
      </section>
    </>
  );
}
