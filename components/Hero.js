"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides, registrationOpen } from "@/lib/data";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-container" id="hero">
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="eyebrow reveal active">
            বগুড়ার শিক্ষা ও মেধা বিকাশে · ২০০২ থেকে
          </span>
          <h1 className="reveal active">
            মেধার স্বীকৃতি,
            <br />
            <span>উজ্জ্বল আগামীর পথে</span>
          </h1>
          <p className="reveal active">
            দ্যা ব্রিলিয়্যান্টস্ ফাউন্ডেশন বৃত্তি পরীক্ষার মাধ্যমে
            শিক্ষার্থীদের মেধা, মনন ও সম্ভাবনাকে এগিয়ে নিতে কাজ করছে।
          </p>
          <div className="hero-btns reveal active">
            {registrationOpen && (
              <Link href="/apply" className="btn btn-gold">
                বৃত্তির জন্য আবেদন{" "}
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            )}
            <a href="#dates" className="btn btn-outline-light">
              পরীক্ষার সময়সূচি
            </a>
          </div>
          <div className="hero-proof reveal active">
            <span>
              <i className="fas fa-award" aria-hidden="true" /> বৃত্তি পরীক্ষা
              ২০২৬
            </span>
            <span>
              <i className="fas fa-location-dot" aria-hidden="true" /> বগুড়া,
              বাংলাদেশ
            </span>
          </div>
        </div>
      </div>

      {registrationOpen && (
        <div className="hero-stamp" aria-hidden="true">
          <svg className="hero-stamp-ring" viewBox="0 0 120 120">
            <defs>
              <path
                id="stampCirclePath"
                d="M 60,14.5 a 45.5,45.5 0 1,1 0,91 a 45.5,45.5 0 1,1 0,-91"
              />
            </defs>
            <g className="hero-stamp-rotating">
              <circle cx="60" cy="60" r="52" strokeWidth="1" />
              <circle cx="60" cy="60" r="44" strokeWidth="1" />
              <text>
                <textPath
                  href="#stampCirclePath"
                  startOffset="50%"
                  textAnchor="middle"
                  textLength="270"
                  lengthAdjust="spacingAndGlyphs"
                >
                  টিবিএফ স্কলারশিপ ২০২৬ * টিবিএফ স্কলারশিপ ২০২৬ *
                </textPath>
              </text>
            </g>
          </svg>
          <div className="hero-stamp-center">
            <i className="fas fa-check-circle"></i>
            আবেদন
            <br />
            চলছে
          </div>
        </div>
      )}

      <a
        href="#notice-board"
        className="scroll-cue"
        aria-label="নিচে স্ক্রল করুন"
      >
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
}
