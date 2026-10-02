"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_SITE_CONTENT } from "@/lib/data";
import { getSupabaseClient } from "@/lib/supabase";

const SiteContentContext = createContext(DEFAULT_SITE_CONTENT);
const SiteContentActionsContext = createContext(null);

function mergeContent(content) {
  return {
    ...DEFAULT_SITE_CONTENT,
    ...content,
    siteCopy: { ...DEFAULT_SITE_CONTENT.siteCopy, ...content?.siteCopy },
  };
}

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(DEFAULT_SITE_CONTENT);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    let active = true;
    const loadContent = async () => {
      const { data } = await supabase
        .from("site_content")
        .select("content")
        .eq("id", "main")
        .maybeSingle();

      if (active && data?.content) setContent(mergeContent(data.content));
    };

    loadContent();
    const channel = supabase
      .channel("public-site-content")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "site_content",
          filter: "id=eq.main",
        },
        (payload) => {
          if (payload.new?.content)
            setContent(mergeContent(payload.new.content));
        },
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <SiteContentContext.Provider value={content}>
      <SiteContentActionsContext.Provider value={setContent}>
        {children}
      </SiteContentActionsContext.Provider>
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}

export function useSiteContentState() {
  return {
    content: useSiteContent(),
    setContent: useContext(SiteContentActionsContext),
  };
}
