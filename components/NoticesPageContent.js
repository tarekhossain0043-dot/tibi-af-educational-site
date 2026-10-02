"use client";

import NoticeBoard from "@/components/NoticeBoard";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function NoticesPageContent() {
  const { notices, siteCopy } = useSiteContent();

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-[34px] sm:px-5 sm:py-[50px] sm:pb-[76px]">
      <header className="flex flex-col justify-between gap-6 border-b border-paper-line pb-7 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
            {siteCopy.noticesEyebrow}
          </span>
          <h1 className="mt-2 font-serif text-[1.6rem] font-extrabold text-ink sm:text-[2rem]">
            {siteCopy.noticesTitle}
          </h1>
          <p className="mt-1.5 text-[0.9rem] leading-[1.6] text-ink-soft">
            {siteCopy.noticesDescription}
          </p>
        </div>
        <div className="flex min-w-[140px] flex-col border-l border-paper-line pl-3 text-right sm:pl-5">
          <strong className="font-serif text-[1.35rem] leading-tight text-maroon sm:text-[1.65rem]">
            {notices.length.toLocaleString("bn-BD")}
          </strong>
          <span className="text-[0.76rem] text-ink-soft">
            {siteCopy.noticeCountLabel}
          </span>
        </div>
      </header>
      <NoticeBoard notices={notices} />
    </div>
  );
}
