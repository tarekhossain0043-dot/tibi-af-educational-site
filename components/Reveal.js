"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && setVisible(true)),
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
