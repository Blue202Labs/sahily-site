import { MetadataRoute } from "next";

const BASE_URL = "sahilyapp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: BASE_URL + "/contact",
      lastModified: new Date(),
    },
    {
      url: BASE_URL + "/about-us",
      lastModified: new Date(),
    },
  ];
}
