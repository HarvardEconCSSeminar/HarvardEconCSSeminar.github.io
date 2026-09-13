import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");
const failures = [];

async function walk(directory) {
  const paths = [];
  for (const entry of await readdir(directory)) {
    const path = join(directory, entry);
    if ((await stat(path)).isDirectory()) paths.push(...(await walk(path)));
    else paths.push(path);
  }
  return paths;
}

function targetFor(url) {
  const path = decodeURIComponent(url.split(/[?#]/, 1)[0]);
  if (!path || path === "/") return join(output, "index.html");
  const relative = path.replace(/^\//, "");
  if (path.endsWith("/")) return join(output, relative, "index.html");
  return extname(relative) ? join(output, relative) : join(output, relative, "index.html");
}

const files = await walk(output);
const existing = new Set(files.map((file) => resolve(file)));
const htmlFiles = files.filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    const target = resolve(targetFor(url));
    if (!existing.has(target)) failures.push(`${file.replace(`${root}/`, "")}: ${url}`);
  }
}

const talkPages = htmlFiles.filter((file) => /\/talks\/[^/]+\/index\.html$/.test(file));
const individualCalendars = files.filter((file) => /\/talks\/[^/]+\/event\.ics$/.test(file));
if (talkPages.length !== individualCalendars.length) {
  failures.push(`Talk-page/calendar mismatch: ${talkPages.length} pages, ${individualCalendars.length} calendars.`);
}
if (!existing.has(join(output, "calendar.ics"))) failures.push("Missing master calendar.ics.");

if (failures.length) {
  console.error("Built-site link check failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML routes, ${talkPages.length} talk pages, and ${individualCalendars.length} individual calendars.`,
);
