/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://frcrce.ac.in', // Change this to your deployed domain
  generateRobotsTxt: true, // Generates a robots.txt file
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'], // Exclude API routes
  transform: async (config, path) => {
    return {
      loc: path, // The URL of the page
      lastmod: new Date().toISOString(), // Last modified date
      changefreq: 'monthly',
      priority: 0.8,
    };
  },
};

export default config;
