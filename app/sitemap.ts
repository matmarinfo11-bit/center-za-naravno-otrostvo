import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://v0-naravnootrostvo-eu-hb.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
