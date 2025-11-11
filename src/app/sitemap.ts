import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://portfolio-jhimwel-prago.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/resume"].map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "/resume" ? "monthly" : "weekly",
    priority: route === "/resume" ? 0.7 : 1,
  }));

  return routes;
}


