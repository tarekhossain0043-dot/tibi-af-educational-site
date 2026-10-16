import updateFeniResponsiveCss from "../../../../update-feni/responsiveStyles";

export async function GET(_request, { params }) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) {
    return new Response("Not found", { status: 404 });
  }

  const upstream = await fetch(`https://updatefeni.com/details/${id}`, {
    cache: "no-store",
  });

  if (!upstream.ok) {
    return new Response("Unable to load this Update Feni article.", {
      status: upstream.status,
    });
  }

  const source = await upstream.text();
  const headTag = source.match(/<head\b[^>]*>/i)?.[0];
  if (!headTag) {
    return new Response("Update Feni returned an invalid article page.", {
      status: 502,
    });
  }

  const baseTag = '<base href="https://updatefeni.com/">';
  let html = /<base\b[^>]*>/i.test(source)
    ? source.replace(/<base\b[^>]*>/i, baseTag)
    : source.replace(headTag, `${headTag}${baseTag}`);
  const responsiveStyles = `<style>${updateFeniResponsiveCss}</style>`;
  html = html.replace(/<\/head\s*>/i, `${responsiveStyles}</head>`);
  html = html.replace(
    /(<div class="footer-app-social">\s*)<p\b[^>]*>[^<]*(?:©|Copyright)[^<]*<\/p>/i,
    "$1",
  );
  html = html.replace(
    /(<div class="footer-bottom">[\s\S]*?<p\b[^>]*>)[^<]*(?:©|Copyright)[^<]*(<\/p>)/i,
    "$1Copyright © 2026 Tarek$2",
  );

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
