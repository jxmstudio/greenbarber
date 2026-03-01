/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://greenbarbertas.com.au',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
};

