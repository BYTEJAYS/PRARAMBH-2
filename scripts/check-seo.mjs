import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const origin = "https://www.prarambhgroups.in";
const buildDirectory = ".next/server/app";

async function pagePaths(directory = "app", parts = []) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    if (entry.isDirectory()) paths.push(...await pagePaths(join(directory, entry.name), [...parts, entry.name]));
    if (entry.name === "page.tsx") paths.push(parts.length ? `/${parts.join("/")}` : "/");
  }
  return paths;
}

function tags(html, tagName) {
  return [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, "g"))].map((match) => {
    const attributes = [...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)];
    return Object.fromEntries(attributes.map(([, key, value]) => [key, value]));
  });
}

const paths = await pagePaths();
const titles = new Set();
const indexableUrls = new Set();
for (const path of paths) {
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  const html = await readFile(join(buildDirectory, file), "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title, `${path}: missing title`);
  assert.ok(!titles.has(title), `${path}: duplicate title`);
  titles.add(title);
  const meta = tags(html, "meta");
  const links = tags(html, "link");
  const stylesheets = links.filter((item) => item.rel === "stylesheet");
  assert.ok(stylesheets.length, `${path}: missing stylesheet`);
  const css = (await Promise.all(stylesheets.map((item) => readFile(join(".next", new URL(item.href, origin).pathname.replace(/^\/_next\//, "")), "utf8")))).join("\n");
  for (const selector of [".parallax-media", ".home-search-heading", ".breadcrumbs"]) {
    assert.ok(css.includes(selector), `${path}: stale stylesheet missing ${selector}`);
  }
  assert.ok(meta.some((item) => item.name === "description" && item.content.length >= 70), `${path}: missing meaningful description`);
  const canonical = links.filter((item) => item.rel === "canonical");
  assert.equal(canonical.length, 1, `${path}: expected one canonical URL`);
  const canonicalUrl = new URL(canonical[0].href).href;
  assert.equal(canonicalUrl, new URL(path, origin).href, `${path}: incorrect canonical domain or path`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path}: expected one main heading`);
  assert.ok(meta.some((item) => item.property === "og:title"), `${path}: missing sharing title`);
  assert.ok(meta.some((item) => item.property === "og:image"), `${path}: missing sharing image`);
  assert.ok(meta.some((item) => item.name === "twitter:card" && item.content === "summary_large_image"), `${path}: missing sharing card`);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(([, body]) => JSON.parse(body));
  assert.ok(schemas.some((item) => item["@type"] === "Organization"), `${path}: missing business schema`);
  if (path === "/") {
    assert.ok(schemas.some((item) => item["@type"] === "WebSite"), "Home: missing website identity");
    for (const projectPath of paths.filter((item) => item.startsWith("/projects/"))) {
      assert.ok(tags(html, "a").some((item) => item.href === projectPath), `Home: missing crawlable link to ${projectPath}`);
    }
  } else {
    const breadcrumb = schemas.find((item) => item["@type"] === "BreadcrumbList");
    assert.ok(breadcrumb?.itemListElement.length >= 2, `${path}: missing breadcrumbs`);
    assert.equal(new URL(breadcrumb.itemListElement.at(-1).item).href, canonicalUrl, `${path}: breadcrumb destination mismatch`);
  }
  const noindex = meta.some((item) => item.name === "robots" && item.content.includes("noindex"));
  if (path === "/team") assert.ok(noindex, "Team placeholders must stay out of search results");
  else assert.ok(!noindex, `${path}: published page unexpectedly prevents indexing`);
  if (!noindex) indexableUrls.add(canonicalUrl);
}

const sitemap = await readFile(join(buildDirectory, "sitemap.xml.body"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
assert.equal(sitemapUrls.length, new Set(sitemapUrls).size, "Duplicate sitemap URLs");
assert.deepEqual(new Set(sitemapUrls), indexableUrls, "Sitemap must contain every indexable page and exclude placeholders");
const robots = await readFile(join(buildDirectory, "robots.txt.body"), "utf8");
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`), "robots.txt sitemap mismatch");
const notFound = await readFile(join(buildDirectory, "_not-found.html"), "utf8");
assert.ok(tags(notFound, "meta").some((item) => item.name === "robots" && item.content.includes("noindex")), "Missing pages must stay out of search results");
const image = await readFile(join(buildDirectory, "opengraph-image.body"));
assert.equal(image.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", "Sharing image must be a PNG");
assert.equal(image.readUInt32BE(16), 1200, "Sharing image width");
assert.equal(image.readUInt32BE(20), 630, "Sharing image height");
console.log(`SEO checks passed: ${paths.length} pages, ${indexableUrls.size} indexable URLs, valid canonical links, structured data, sitemap and sharing image.`);
