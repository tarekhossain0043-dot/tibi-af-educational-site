"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { leaders } from "@/lib/data";

export default function Leaders() {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="leader-grid">
      {leaders.map((l) => (
        <Reveal key={l.id} className="leader-card">
          <div onClick={() => l.speech && setOpenId(openId === l.id ? null : l.id)}>
            <div className="leader-img-box">
              <img
                src={l.img}
                alt={l.name}
                onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=TBF&background=16233D&color=B8923A"; }}
              />
            </div>
            <h3>{l.name}</h3>
            <span>{l.role}</span>
            {l.speech && <div className="speech-trigger"><i className="fas fa-quote-left"></i> বাণী দেখুন</div>}
            {l.speech && openId === l.id && <div className="speech-text" style={{ display: "block" }}>{l.speech}</div>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
