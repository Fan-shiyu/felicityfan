import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_SITE_DESCRIPTION,
  getAbsoluteUrl,
} from "@/lib/site";

interface SeoProps {
  title: string;
  description?: string;
  /** Set false for generic pages where the title already includes branding */
  appendSiteName?: boolean;
}

export function Seo({
  title,
  description = DEFAULT_SITE_DESCRIPTION,
  appendSiteName = true,
}: SeoProps) {
  const location = useLocation();
  const path = `${location.pathname}${location.search}`;
  const fullTitle =
    appendSiteName && title !== "Felicity Fan"
      ? `${title} · Felicity Fan`
      : title;
  const canonical = getAbsoluteUrl(path);
  const imageUrl = getAbsoluteUrl("/og-image.png");

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
