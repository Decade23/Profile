import type { NextApiRequest, NextApiResponse } from 'next';

const baseUrl = 'https://dedi.asia';
const currentDate = new Date().toISOString();

interface SitemapPage {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

const pages: SitemapPage[] = [
  { url: '', lastmod: currentDate, changefreq: 'daily', priority: 1.0 },
  { url: '/profile', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
  { url: '/contact', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
  { url: '/history', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy', lastmod: currentDate, changefreq: 'yearly', priority: 0.5 },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.status(200).send(sitemap);
}
