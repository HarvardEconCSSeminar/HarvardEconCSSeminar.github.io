import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";
import { createCalendar } from "@/lib/calendar";
import type { Talk } from "@/lib/talks";

const talk: Talk = {
  id: "stable-slug",
  speaker: "Ada, Example",
  affiliation: "Example University",
  title: "Markets; computation",
  titleForthcoming: false,
  abstract: `Line one, with punctuation; and a slash \\
Line two.`,
  abstractForthcoming: false,
  date: "2026-03-13",
  term: "Spring 2026",
  start: DateTime.fromISO("2026-03-13T12:00", { zone: "America/New_York" }),
  end: DateTime.fromISO("2026-03-13T13:00", { zone: "America/New_York" }),
  timeLabel: "12–1 PM EDT",
  location: "Room 1, 2nd floor; Cambridge",
  format: "in-person",
  links: [],
  draft: false,
  path: "/talks/stable-slug/",
};

describe("calendar generation", () => {
  const calendar = createCalendar([talk], DateTime.fromISO("2026-01-01T00:00:00Z"));

  it("converts Eastern event time to UTC across daylight saving time", () => {
    expect(calendar).toContain("DTSTART:20260313T160000Z");
    expect(calendar).toContain("DTEND:20260313T170000Z");
  });

  it("uses a domain-independent stable UID and canonical page URL", () => {
    expect(calendar).toContain("UID:stable-slug@harvard-econcs-seminar");
    expect(calendar).toContain("URL:https://harvardeconcsseminar.github.io/talks/stable-slug/");
  });

  it("escapes ICS punctuation, backslashes, and newlines", () => {
    expect(calendar).toContain("SUMMARY:Ada\\, Example: Markets\\; computation");
    expect(calendar).toContain("LOCATION:Room 1\\, 2nd floor\\; Cambridge");
    expect(calendar).toContain("Line one\\, with punctuation\\; and a slash");
    expect(calendar).toContain("slash \\\\");
    expect(calendar).toContain("\\nLine two.");
  });

  it("uses CRLF and folds every content line to 75 octets or fewer", () => {
    expect(calendar.endsWith("\r\n")).toBe(true);
    for (const line of calendar.split("\r\n")) {
      expect(new TextEncoder().encode(line).length).toBeLessThanOrEqual(75);
    }
  });
});
