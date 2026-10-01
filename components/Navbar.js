"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO, navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav>
      <Link href="/" className="logo-container">
        <img src={LOGO} alt="Logo" className="logo-img" />
        <div className="logo-text">
          <span className="main-title">THE BRILLIANTS FOUNDATION</span>
          <span className="sub-title">BOGURA | ESTD-2002</span>
        </div>
      </Link>

      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        type="button"
        aria-label="মেনু"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={pathname === link.href ? "nav-active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/login"
          className={`nav-login ${pathname === "/login" ? "nav-active" : ""}`}
          aria-current={pathname === "/login" ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          লগইন
        </Link>
      </div>
    </nav>
  );
}
