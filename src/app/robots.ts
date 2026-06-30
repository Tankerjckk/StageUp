import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://stageup.pl/sitemap.xml",
    host: "https://stageup.pl",
  };
}