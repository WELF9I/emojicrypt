import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://emoji-crypt.vercel.app"

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-09-02"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2025-09-02"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/emoji-steganography-use-cases`,
      lastModified: new Date("2025-09-02"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2025-09-02"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2025-09-02"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2025-09-02"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
