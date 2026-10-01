"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO, navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between border-b-2 border-gold bg-ink px-3 py-[9px] sm:px-[18px]">
      <Link
        href="/"
        className="flex items-center gap-2 text-white no-underline sm:gap-3"
      >
        <img src={LOGO} alt="Logo" className="h-10 w-auto sm:h-[46px]" />
        <div className="flex flex-col leading-[1.2]">
          <span className="text-[0.77rem] font-extrabold tracking-[0.04em] sm:text-[0.95rem]">
            THE BRILLIANTS FOUNDATION
          </span>
          <span className="text-[0.6rem] tracking-[0.1em] text-gold-soft sm:text-[0.68rem]">
            BOGURA | ESTD-2002
          </span>
        </div>
      </Link>

      <button
        className="flex flex-col gap-[5px] border-0 bg-transparent p-1.5 min-[1120px]:hidden"
        type="button"
        aria-label="মেনু"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span
          className={`h-[2px] w-6 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span
          className={`h-[2px] w-6 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`h-[2px] w-6 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      <div
        className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col items-stretch gap-1 border-b-2 border-gold bg-ink px-4 pb-4 pt-2 min-[1120px]:static min-[1120px]:flex min-[1120px]:flex-row min-[1120px]:items-center min-[1120px]:gap-1 min-[1120px]:border-0 min-[1120px]:bg-transparent min-[1120px]:p-0`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={`rounded px-3 py-2 text-[0.88rem] font-semibold text-white no-underline transition-colors hover:bg-white/10 ${pathname === link.href ? "text-gold-soft shadow-[inset_0_-2px_0_#b8923a]" : ""}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/login"
          className={`rounded bg-gold px-3 py-2 text-[0.88rem] font-semibold text-ink no-underline transition-colors hover:bg-gold-soft ${pathname === "/login" ? "shadow-[inset_0_-2px_0_#16233d]" : ""}`}
          aria-current={pathname === "/login" ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          লগইন
        </Link>
      </div>
    </nav>
  );
}
