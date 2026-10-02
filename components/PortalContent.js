"use client";

import PortalForm from "@/components/PortalForm";
import PortalPage from "@/components/PortalPage";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function PortalContent({ pageKey }) {
  const { portalPages } = useSiteContent();
  const page = portalPages[pageKey];

  if (!page) return null;

  return (
    <PortalPage
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      asideTitle={page.asideTitle}
      asideText={page.asideText}
      tips={page.tips}
    >
      <PortalForm submitLabel={page.submitLabel} fields={page.fields} />
    </PortalPage>
  );
}
