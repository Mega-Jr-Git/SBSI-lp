import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const rawSiteOrigin = process.env.SITE_ORIGIN?.trim();

if (!rawSiteOrigin) {
  process.exit(0);
}

let siteOrigin;

try {
  siteOrigin = new URL(rawSiteOrigin);
} catch {
  throw new Error("SITE_ORIGIN must be an absolute HTTP(S) URL.");
}

if (
  !/^https?:$/.test(siteOrigin.protocol) ||
  !siteOrigin.hostname ||
  siteOrigin.username ||
  siteOrigin.password
) {
  throw new Error("SITE_ORIGIN must be an absolute HTTP(S) URL.");
}

siteOrigin.search = "";
siteOrigin.hash = "";
if (!siteOrigin.pathname.endsWith("/")) {
  siteOrigin.pathname += "/";
}

const normalizedOrigin = siteOrigin.href;
const sitemapPaths = [
  "chamadas/chamada-pesquisa",
  "chamadas/chamada-minicursos",
];
const escapeXml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[character],
  );

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${normalizedOrigin}sitemap.xml\n`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
  normalizedOrigin,
  ...sitemapPaths.map((path) => new URL(path, normalizedOrigin).href),
]
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await Promise.all([
  writeFile(resolve("dist", "robots.txt"), robots, "utf8"),
  writeFile(resolve("dist", "sitemap.xml"), sitemap, "utf8"),
]);
