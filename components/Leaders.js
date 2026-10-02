"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function Leaders() {
  const [openId, setOpenId] = useState(null);
  const { leaders } = useSiteContent();
  return (
    <div className="mt-9 grid grid-cols-1 gap-[22px] sm:grid-cols-2">
      {leaders.map((l) => (
        <Reveal
          key={l.id}
          className="self-start rounded-lg border border-paper-line bg-white p-7 text-center transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_30px_rgba(22,35,61,0.1)]"
        >
          <div>
            <div className="mx-auto mb-4 h-[108px] w-[108px] rounded-full border-[1.5px] border-gold p-1">
              <img
                className="h-full w-full rounded-full object-cover"
                src={l.img}
                alt={l.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=TBF&background=16233D&color=B8923A";
                }}
              />
            </div>
            <h3 className="mb-1 font-serif text-[1.15rem] text-ink">
              {l.name}
            </h3>
            <span className="mb-3.5 block text-[0.78rem] font-bold text-maroon">
              {l.role}
            </span>
          </div>
          {l.speech && (
            <button
              className="inline-flex items-center gap-1.5 border-0 bg-transparent text-[0.78rem] text-ink-soft hover:text-maroon"
              onClick={() => setOpenId(openId === l.id ? null : l.id)}
              type="button"
              aria-expanded={openId === l.id}
            >
              <i className="fas fa-quote-left" aria-hidden="true" /> বাণী দেখুন
            </button>
          )}
          {l.speech && openId === l.id && (
            <p className="mt-3.5 border-t border-paper-line pt-3.5 text-left text-[0.88rem] leading-[1.65] text-ink-soft animate-fade-in">
              {l.speech}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}
