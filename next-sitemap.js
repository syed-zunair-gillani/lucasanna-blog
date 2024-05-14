const { createClient } = require("@sanity/client");
const fs = require("fs");
// import {createClient} from '@sanity/client'

const config = {
  projectId: "ordduge7",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
};

const SITE_URL = "https://www.hitecheagle.com";

const sanityClient = createClient(config);

async function generateSitemap() {
  const query = `*[ _type == "blog" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`;
  const documents = await sanityClient.fetch(query);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>https://www.hitecheagle.com/</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>https://www.hitecheagle.com/blog</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>0.80</priority>
      </url>
      <url>
          <loc>https://www.hitecheagle.com/privacy-policy</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>0.80</priority>
      </url>
      <url>
          <loc>https://www.hitecheagle.com/contact-us</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>0.80</priority>
      </url>
       <url>
          <loc>https://www.hitecheagle.com/about-us</loc>
          <lastmod>2023-06-12T19:00:11+00:00</lastmod>
          <priority>0.80</priority>
      </url>
      <url>
          <loc>https://www.hitecheagle.com/write-for-us</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>0.80</priority>
      </url>
      ${documents
        .map(
          (item) => `
        <url>
          <loc>${SITE_URL}/blog/${item.slug}</loc>
          <lastmod>${item._updatedAt}</lastmod>
          <priority>0.80</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
