import { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://www.accessacpa.com/", // Replace with your actual domain
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 5000, // Limits URLs per sitemap file
  changefreq: "daily", // Suggests how often content updates
  priority: 0.7, // Default page priority for SEO
  exclude: ["/admin", "/dashboard"], // Prevents indexing for admin routes
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard"], // Disallow private areas
      },
    ],
  },
};

export default config;
