"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Leaders from "@/components/Leaders";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function Home() {
  const {
    notices,
    importantDates,
    stats,
    gallery,
    registrationOpen,
    siteCopy,
    serviceCards,
  } = useSiteContent();

  return (
    <>
      <Hero />

      {/* নোটিশ বোর্ড */}
      <section
        className="relative overflow-hidden border-y border-paper-line bg-[#f2ecdf] py-10 sm:py-[54px]"
        id="notice-board"
      >
        <div className="relative mx-auto w-full max-w-[1140px] px-4">
          <Reveal className="mb-[18px] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
                {siteCopy.noticesEyebrow}
              </span>
              <h2 className="mt-1.5 font-serif text-[1.3rem] font-extrabold text-ink">
                {siteCopy.noticesTitle}
              </h2>
            </div>
            <Link
              href="/notices"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-[0.82rem] font-bold text-maroon no-underline hover:text-ink"
            >
              সব নোটিশ <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="overflow-hidden rounded-md border border-paper-line bg-white">
            {notices.length === 0 && (
              <div className="px-[18px] py-[22px] text-center text-[0.85rem] text-ink-soft">
                এখন কোনো নোটিশ নেই।
              </div>
            )}
            {notices.map((n) => (
              <Link
                key={n.id}
                className="flex items-center gap-3 border-b border-paper-line px-3 py-3.5 no-underline transition last:border-b-0 hover:bg-[#fbf7ee] sm:gap-4 sm:px-[18px]"
                href={`/notices#notice-${n.id}`}
              >
                <div className="min-w-[44px] shrink-0 border-r border-paper-line pr-[9px] text-center sm:min-w-[52px] sm:pr-[14px]">
                  <span className="text-[0.8rem] font-extrabold leading-tight tabular-nums text-maroon sm:text-[0.85rem]">
                    {n.date}
                  </span>
                </div>
                <span className="flex-1 text-[0.8rem] font-semibold leading-[1.4] text-ink sm:text-[0.9rem]">
                  {n.title}
                </span>
                <i
                  className="fas fa-arrow-right shrink-0 text-[0.8rem] text-maroon"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* সেবাসমূহ */}
      <section className="mx-auto w-full max-w-[1140px] px-4 py-[38px] sm:py-14">
        <Reveal className="mb-7 text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
            {siteCopy.servicesEyebrow}
          </span>
          <h2 className="mt-2 font-serif text-[1.55rem] font-extrabold text-ink">
            {siteCopy.servicesTitle}
          </h2>
          <p className="mx-auto mt-1.5 max-w-[520px] text-[0.88rem] text-ink-soft">
            {siteCopy.servicesDescription}
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {serviceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative overflow-hidden rounded-lg border border-paper-line bg-white px-4 py-6 text-center text-ink no-underline transition hover:-translate-y-1 hover:border-transparent hover:shadow-[0_14px_28px_rgba(22,35,61,0.1)] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-gold before:transition-transform hover:before:scale-x-100"
            >
              <div className="mx-auto mb-3.5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-maroon text-xl text-white">
                <i className={`fas ${card.icon}`} aria-hidden="true" />
              </div>
              <span className="block text-[0.82rem] font-bold sm:text-[0.88rem]">
                {card.title}
              </span>
              <small className="mt-1 block text-[0.68rem] font-medium text-ink-soft sm:text-[0.72rem]">
                {card.description}
              </small>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* গুরুত্বপূর্ণ তারিখ */}
      <section
        id="dates"
        className="mx-auto w-full max-w-[1140px] px-4 py-[38px] sm:py-14"
      >
        <Reveal className="mb-7">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
            {siteCopy.datesEyebrow}
          </span>
          <h2 className="mt-2 font-serif text-[1.55rem] font-extrabold text-ink">
            {siteCopy.datesTitle}
          </h2>
        </Reveal>
        <Reveal className="overflow-hidden rounded-lg border border-paper-line bg-white">
          {importantDates.map((d, i) => (
            <div
              key={i}
              className={`flex items-center gap-[18px] border-b border-paper-line px-4 py-4 last:border-b-0 sm:px-5 ${d.highlight ? "bg-[#fbf1e0]" : ""}`}
            >
              <div
                className={`flex h-[58px] w-[58px] shrink-0 flex-col items-center justify-center rounded-full border-[1.5px] ${d.highlight ? "border-gold bg-gold text-ink" : "border-maroon text-maroon"}`}
              >
                <span className="text-[1.05rem] font-extrabold leading-none">
                  {d.day}
                </span>
                <span className="mt-0.5 text-[0.55rem] uppercase">
                  {d.month}
                </span>
              </div>
              <div>
                <h4 className="mb-1 font-serif text-[0.98rem] text-ink">
                  {d.title}
                </h4>
                <p className="text-[0.83rem] leading-[1.4] text-ink-soft">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* আমাদের যাত্রা */}
      <section className="border-y border-paper-line bg-white py-[38px] sm:py-14">
        <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-8 px-4 lg:flex-row lg:items-center">
          <Reveal className="relative min-w-0 flex-1">
            <img
              className="block w-full rounded-lg object-cover"
              src={siteCopy.journeyImage}
              alt="TBF"
            />
          </Reveal>
          <Reveal className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
              {siteCopy.journeyEyebrow}
            </span>
            <h2 className="mb-3.5 mt-2 font-serif text-2xl font-extrabold text-ink">
              {siteCopy.journeyTitle}
            </h2>
            <p className="text-[0.92rem] leading-[1.7] text-ink-soft">
              {siteCopy.journeyDescription}
            </p>
            <div className="mt-6 grid grid-cols-2 border-t border-paper-line">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`border-r border-paper-line pt-4 ${i % 2 ? "border-r-0 pl-4" : ""}`}
                >
                  <h3 className="mb-0.5 font-serif text-[1.15rem] text-maroon">
                    {s.value}
                  </h3>
                  <p className="text-[0.78rem] font-semibold text-ink">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* গ্যালারি */}
      <section className="mx-auto w-full max-w-[1140px] px-4 py-[38px] sm:py-14">
        <Reveal className="mb-7 text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
            {siteCopy.galleryEyebrow}
          </span>
          <h2 className="mt-2 font-serif text-[1.55rem] font-extrabold text-ink">
            {siteCopy.galleryTitle}
          </h2>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-2.5 lg:flex lg:h-[380px]">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="h-[140px] overflow-hidden rounded-md lg:h-full lg:flex-1 lg:transition-[flex] lg:duration-500 lg:hover:flex-[2.4]"
            >
              <img
                className="block h-full w-full object-cover"
                src={src}
                alt="Gallery"
              />
            </div>
          ))}
        </Reveal>
      </section>

      {/* পরিচালনা পর্ষদ */}
      <section className="mx-auto w-full max-w-[1140px] border-t border-paper-line px-4 py-[38px] sm:py-14">
        <Reveal className="mb-7 text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
            {siteCopy.leadersEyebrow}
          </span>
          <h2 className="mt-2 font-serif text-[1.55rem] font-extrabold text-ink">
            {siteCopy.leadersTitle}
          </h2>
          <p className="mx-auto mt-1.5 max-w-[520px] text-[0.88rem] text-ink-soft">
            {siteCopy.leadersDescription}
          </p>
        </Reveal>
        <Leaders />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-[46px] before:absolute before:-right-[60px] before:-top-[60px] before:h-[220px] before:w-[220px] before:rounded-full before:border before:border-gold-soft/15 before:content-['']">
        <div className="relative mx-auto flex w-full max-w-[1140px] flex-col items-center justify-between gap-[22px] px-4 text-center md:flex-row md:text-left">
          <div>
            <h3 className="mb-1.5 font-serif text-xl text-white">
              {siteCopy.ctaTitle}
            </h3>
            <p className="text-[0.88rem] text-white/60">
              {siteCopy.ctaDescription}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {registrationOpen && (
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3 text-[0.9rem] font-bold text-ink no-underline transition hover:-translate-y-0.5 hover:bg-gold-soft"
              >
                {siteCopy.heroApplyLabel}
              </Link>
            )}
            <Link
              href="/result-search"
              className="inline-flex items-center gap-2 rounded border border-white/45 px-6 py-3 text-[0.9rem] font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              {siteCopy.resultButtonLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
