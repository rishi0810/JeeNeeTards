import React from 'react';

function Sitemap() {
  return (
    <div>
      {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jeeneetardsv1.vercel.app/</loc>
    <lastmod>2025-04-13</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jeeneetardsv1.vercel.app/jee</loc>
    <lastmod>2025-04-13</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jeeneetardsv1.vercel.app/neet</loc>
    <lastmod>2025-04-13</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jeeneetardsv1.vercel.app/ai</loc>
    <lastmod>2025-04-13</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jeeneetardsv1.vercel.app/courses</loc>
    <lastmod>2025-04-13</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`}
    </div>
  );
}

export default Sitemap; 