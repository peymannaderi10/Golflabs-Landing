function ensureProtocol(url: string): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `http://${url}`;
}

export const APP_URL = ensureProtocol(
  process.env.NEXT_PUBLIC_APP_URL || "https://app.golflabs.us"
);
