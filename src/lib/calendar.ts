import { DateTime } from "luxon";
import type { Talk } from "@/lib/talks";
import { siteSettings } from "@/data/site";

function escapeIcs(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function foldLine(line: string): string {
  const chunks: string[] = [];
  let current = "";
  let limit = 75;
  for (const character of line) {
    const candidate = current + character;
    if (new TextEncoder().encode(candidate).length > limit) {
      chunks.push(current);
      current = character;
      limit = 74;
    } else {
      current = candidate;
    }
  }
  chunks.push(current);
  return chunks.join("\r\n ");
}

function utcStamp(dateTime: DateTime): string {
  return dateTime.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'");
}

function eventLines(talk: Talk, generatedAt: DateTime): string[] {
  const pageUrl = new URL(talk.path, siteSettings.canonicalUrl).toString();
  const title = talk.title ?? "Talk title forthcoming";
  const details = [
    talk.abstract || "Abstract forthcoming.",
    talk.coauthors ? `Coauthors: ${talk.coauthors}` : "",
    pageUrl,
  ]
    .filter(Boolean)
    .join("\n\n");

  return [
    "BEGIN:VEVENT",
    `UID:${escapeIcs(talk.id)}@harvard-econcs-seminar`,
    `DTSTAMP:${utcStamp(generatedAt)}`,
    `DTSTART:${utcStamp(talk.start)}`,
    `DTEND:${utcStamp(talk.end)}`,
    `SUMMARY:${escapeIcs(`${talk.speaker}: ${title}`)}`,
    `DESCRIPTION:${escapeIcs(details)}`,
    `LOCATION:${escapeIcs(talk.location)}`,
    `URL:${escapeIcs(pageUrl)}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
  ];
}

export function createCalendar(talks: Talk[], generatedAt: DateTime = DateTime.utc()): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Harvard Econ CS Seminar//Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escapeIcs(siteSettings.name)}`,
    `X-WR-TIMEZONE:${escapeIcs(siteSettings.timezone)}`,
    ...talks.flatMap((talk) => eventLines(talk, generatedAt)),
    "END:VCALENDAR",
  ];
  return `${lines.map(foldLine).join("\r\n")}\r\n`;
}
