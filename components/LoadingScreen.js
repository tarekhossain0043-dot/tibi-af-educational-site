"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = Date.now();
    let hideTimeout;
    let fallbackTimeout;

    const hideAfterMinimum = () => {
      window.clearTimeout(fallbackTimeout);
      hideTimeout = window.setTimeout(
        () => setVisible(false),
        Math.max(0, 500 - (Date.now() - startedAt)),
      );
    };

    if (document.readyState === "complete") {
      hideAfterMinimum();
    } else {
      window.addEventListener("load", hideAfterMinimum, { once: true });
      fallbackTimeout = window.setTimeout(() => setVisible(false), 8000);
    }

    return () => {
      window.removeEventListener("load", hideAfterMinimum);
      window.clearTimeout(hideTimeout);
      window.clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-label="সাইট লোড হচ্ছে"
      className="fixed inset-0 z-[1000] flex min-h-screen items-center justify-center bg-ink text-center text-white"
      role="status"
    >
      <div className="flex flex-col items-center px-6">
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-gold/40">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold border-r-gold-soft motion-reduce:animate-none" />
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 font-serif text-xl font-extrabold tracking-wider text-gold-soft">
            TBF
          </div>
        </div>
        <p className="text-lg font-bold">দ্যা ব্রিলিয়্যান্টস্ ফাউন্ডেশন</p>
        <p className="mt-2 text-sm text-white/70">সাইট লোড হচ্ছে...</p>
        <div className="mt-5 h-1 w-32 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gold motion-reduce:animate-none" />
        </div>
      </div>
    </div>
  );
}
