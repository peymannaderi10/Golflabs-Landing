import type { MetadataRoute } from "next";
import { SEO_TOWNS } from "@/lib/seo-towns";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://golflabs.us";

  const townPages: MetadataRoute.Sitemap = SEO_TOWNS.map((town) => ({
    url: `${baseUrl}/${town.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: town.tier === 1 ? 0.7 : 0.6,
  }));

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/getting-started`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // SEO content pages
    {
      url: `${baseUrl}/golf-simulator-prices-nj`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uneekor-golf-simulator-nj`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Town landing pages
    ...townPages,

    // Policy pages
    {
      url: `${baseUrl}/policy/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/policy/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/policy/waiver`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
