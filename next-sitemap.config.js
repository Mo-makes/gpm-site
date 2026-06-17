/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://globalpainmd.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: ["/api/*", "/check-in", "/check-in/complete"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0 };
    }
    // Contact gets high priority
    if (path === "/contact") {
      return { loc: path, changefreq: "monthly", priority: 0.9 };
    }
    // Condition and procedure pages
    if (path.startsWith("/conditions/") || path.startsWith("/procedures/")) {
      return { loc: path, changefreq: "monthly", priority: 0.8 };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },
};
