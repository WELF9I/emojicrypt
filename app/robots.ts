import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/", "/private/"],
    },
    sitemap: "https://emojicrypt.vercel.app/sitemap.xml",
    host: "https://emojicrypt.vercel.app",
  }
}
