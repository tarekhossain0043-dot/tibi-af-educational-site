"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import updateFeniResponsiveCss from "./responsiveStyles";

export default function UpdateFeniFrame({
  src = "/update-feni-source.html?v=20261016-4",
  title = "Update Feni সংবাদ পোর্টাল",
  postRouteBase = "/update-feni/details",
}) {
  const observerRef = useRef(null);
  const router = useRouter();

  const resizeFrame = useCallback((event) => {
    const frame = event.currentTarget;
    const frameDocument = frame.contentDocument;
    if (!frameDocument) return;

    observerRef.current?.disconnect();

    const responsiveStyles = frameDocument.createElement("style");
    responsiveStyles.textContent = updateFeniResponsiveCss;
    frameDocument.head.appendChild(responsiveStyles);

    const handlePostLink = (clickEvent) => {
      if (
        clickEvent.defaultPrevented ||
        clickEvent.button !== 0 ||
        clickEvent.metaKey ||
        clickEvent.ctrlKey ||
        clickEvent.shiftKey ||
        clickEvent.altKey
      ) {
        return;
      }

      const link = clickEvent.target.closest("a[href]");
      if (!link || (link.target && link.target !== "_self")) return;

      const url = new URL(link.href);
      const postMatch = url.pathname.match(/^\/details\/(\d+)\/?$/);
      if (url.hostname !== "updatefeni.com" || !postMatch) return;

      clickEvent.preventDefault();
      router.push(`${postRouteBase}/${postMatch[1]}`);
    };

    frameDocument.addEventListener("click", handlePostLink, true);

    const updateHeight = () => {
      frame.style.height = `${Math.max(
        frameDocument.documentElement.scrollHeight,
        frameDocument.body?.scrollHeight ?? 0,
        window.innerHeight,
      )}px`;
    };

    updateHeight();

    if (typeof ResizeObserver !== "undefined") {
      observerRef.current = new ResizeObserver(updateHeight);
      observerRef.current.observe(frameDocument.documentElement);
      if (frameDocument.body) observerRef.current.observe(frameDocument.body);
    }
  }, [postRouteBase, router]);

  useEffect(
    () => () => {
      observerRef.current?.disconnect();
    },
    [],
  );

  return (
    <iframe
      className="block h-screen w-full border-0"
      onLoad={resizeFrame}
      src={src}
      title={title}
    />
  );
}
