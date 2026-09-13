import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const settings = JSON.parse(await readFile(resolve(root, "src/data/site.json"), "utf8"));
const errors = [];
const placeholderPattern = /\b(draft|forthcoming|to be confirmed|replace with)\b/i;
const clockPattern = /^([01]\d|2[0-3]):[0-5]\d$/;

function requireText(key, label) {
  const value = settings[key];
  if (typeof value !== "string" || !value.trim()) errors.push(`${label} is required.`);
  else if (placeholderPattern.test(value)) errors.push(`${label} still contains draft copy.`);
}

function requireUrl(key, label) {
  const value = settings[key];
  if (!value) return errors.push(`${label} is required.`);
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error();
  } catch {
    errors.push(`${label} must be a valid HTTP(S) URL.`);
  }
}

if (settings.draft !== false) errors.push("Set draft to false only after all launch details are approved.");
requireText("mission", "Mission");
requireText("fixedTimeLabel", "Fixed time label");
requireText("defaultLocation", "Default location");
requireUrl("canonicalUrl", "Canonical site URL");
requireUrl("mailingListUrl", "Mailing-list URL");

if (!clockPattern.test(settings.defaultStartTime ?? "")) errors.push("Default start time must use HH:MM.");
if (!clockPattern.test(settings.defaultEndTime ?? "")) errors.push("Default end time must use HH:MM.");
if (
  clockPattern.test(settings.defaultStartTime ?? "") &&
  clockPattern.test(settings.defaultEndTime ?? "") &&
  settings.defaultEndTime <= settings.defaultStartTime
) {
  errors.push("Default end time must be after default start time.");
}

if (typeof settings.contactEmail !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(settings.contactEmail)) {
  errors.push("A valid shared contact email is required.");
}
if (!Array.isArray(settings.organizers) || settings.organizers.length === 0) {
  errors.push("At least one organizer is required.");
} else {
  settings.organizers.forEach((organizer, index) => {
    if (typeof organizer.name !== "string" || !organizer.name.trim()) {
      errors.push(`Organizer ${index + 1} needs a name.`);
    }
  });
}

const talksDirectory = resolve(root, "src/content/talks");
const talkFiles = (await readdir(talksDirectory)).filter(
  (name) => name.endsWith(".md") && !name.startsWith("_"),
);
if (talkFiles.length === 0) errors.push("At least one real talk file is required.");
for (const filename of talkFiles) {
  const source = await readFile(resolve(talksDirectory, filename), "utf8");
  const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] ?? "";
  if (/^draft:\s*true\s*$/m.test(frontmatter)) {
    errors.push(`${filename} is still marked draft.`);
  }
}

if (errors.length) {
  console.error("Launch validation failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Launch validation passed for ${talkFiles.length} talk files.`);
