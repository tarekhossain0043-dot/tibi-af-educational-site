"use client";

import { useSiteContent } from "@/components/SiteContentProvider";
import { usePathname } from "next/navigation";

export default function Footer() {
  const { siteCopy } = useSiteContent();
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-ink px-4 py-7 text-center text-[0.85rem] leading-[1.8] text-white/80">
      <p>
        <strong className="text-white">{siteCopy.footerName}</strong>
      </p>
      <p>{siteCopy.footerCopyright}</p>
      <a
        href={siteCopy.footerUrl}
        className="font-bold text-[#e31937] no-underline transition-colors hover:text-white hover:underline"
      >
        {siteCopy.footerCredit}
      </a>
    </footer>
  );
}
