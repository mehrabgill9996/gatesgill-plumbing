import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gatesgillplumbing.com";
  const routes = [
    "",
    "/about",
    "/quote",
    "/contact",
    "/faqs",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/quote" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/quote" ? 0.9 : 0.7,
  }));
}
