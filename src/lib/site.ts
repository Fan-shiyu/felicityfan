/**
 * Production site origin without trailing slash.
 * Set VITE_SITE_URL when crawlers or previews need a stable absolute URL before client JS runs.
 */
export function getSiteOrigin(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  const env = import.meta.env.VITE_SITE_URL;
  if (typeof env === "string" && env.trim()) {
    return env.replace(/\/$/, "");
  }
  return "";
}

export function getAbsoluteUrl(path: string): string {
  const origin = getSiteOrigin();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return origin ? `${origin}${normalized}` : normalized;
}

export const DEFAULT_SITE_DESCRIPTION =
  "Felicity Fan — AI & Data Consultant. Portfolio, company cases, and side projects.";
