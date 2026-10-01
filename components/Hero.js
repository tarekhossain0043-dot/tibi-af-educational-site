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
    <section
      className="relative isolate h-[76vh] min-h-[500px] max-h-[760px] overflow-hidden bg-ink sm:min-h-[510px]"
      id="hero"
    >
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(18,27,43,0.82)_0%,rgba(22,35,61,0.55)_48%,rgba(22,35,61,0.78)_100%)]" />
      <div className="relative z-[5] mx-auto flex h-full w-full max-w-[1140px] flex-col justify-center px-6 text-white">
        <div className="max-w-[620px] animate-hero-arrive">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-gold-soft before:inline-block before:h-px before:w-[18px] before:bg-gold-soft sm:text-[0.82rem]">
            বগুড়ার শিক্ষা ও মেধা বিকাশে · ২০০২ থেকে
          </span>
          <h1 className="my-3.5 max-w-[670px] font-serif text-[1.9rem] font-black leading-[1.3] sm:text-[3.25rem]">
            মেধার স্বীকৃতি,
            <br />
            <span className="text-gold-soft">উজ্জ্বল আগামীর পথে</span>
          </h1>
          <p className="mb-6 max-w-[480px] text-[0.88rem] leading-[1.6] text-white/85 sm:text-[0.97rem]">
            দ্যা ব্রিলিয়্যান্টস্ ফাউন্ডেশন বৃত্তি পরীক্ষার মাধ্যমে
            শিক্ষার্থীদের মেধা, মনন ও সম্ভাবনাকে এগিয়ে নিতে কাজ করছে।
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {registrationOpen && (
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded border border-transparent bg-gold px-[18px] py-[11px] text-[0.85rem] font-bold text-ink no-underline transition hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_10px_22px_rgba(184,146,58,0.3)] sm:px-6 sm:py-3 sm:text-[0.9rem]"
              >
                বৃত্তির জন্য আবেদন{" "}
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            )}
            <a
              href="#dates"
              className="inline-flex items-center gap-2 rounded border border-white/45 px-[18px] py-[11px] text-[0.85rem] font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/10 sm:px-6 sm:py-3 sm:text-[0.9rem]"
            >
              পরীক্ষার সময়সূচি
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-[18px] gap-y-2 text-[0.74rem] text-white/80 sm:mt-7 sm:text-[0.8rem]">
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-award" aria-hidden="true" /> বৃত্তি পরীক্ষা
              ২০২৬
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-location-dot" aria-hidden="true" /> বগুড়া,
              বাংলাদেশ
            </span>
          </div>
        </div>
      </div>

      {registrationOpen && (
        <div
          className="absolute bottom-4 right-4 z-[6] hidden h-[118px] w-[118px] md:bottom-[clamp(16px,4vw,56px)] md:right-[clamp(16px,4vw,64px)] md:block"
          aria-hidden="true"
        >
          <svg className="h-full w-full" viewBox="0 0 120 120">
            <defs>
              <path
                id="stampCirclePath"
                d="M 60,14.5 a 45.5,45.5 0 1,1 0,91 a 45.5,45.5 0 1,1 0,-91"
              />
            </defs>
            <g className="origin-center animate-stamp-spin motion-reduce:animate-none">
              <circle
                className="fill-none stroke-gold-soft/60"
                cx="60"
                cy="60"
                r="52"
                strokeWidth="1"
              />
              <circle
                className="fill-none stroke-gold-soft/60"
                cx="60"
                cy="60"
                r="44"
                strokeWidth="1"
              />
              <text className="fill-gold-soft font-sans text-[5.5px] font-bold tracking-normal">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[0.72rem] font-extrabold leading-[1.3] text-white">
            <i className="fas fa-check-circle mb-1 text-[1.1rem] text-gold-soft"></i>
            আবেদন
            <br />
            চলছে
          </div>
        </div>
      )}

      <a
        href="#notice-board"
        className="absolute bottom-3 left-1/2 z-[6] flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/45 bg-white/5 text-[0.95rem] text-white no-underline animate-scroll-bounce hover:bg-white/15 motion-reduce:animate-none sm:bottom-4 sm:h-10 sm:w-10"
        aria-label="নিচে স্ক্রল করুন"
      >
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
}
