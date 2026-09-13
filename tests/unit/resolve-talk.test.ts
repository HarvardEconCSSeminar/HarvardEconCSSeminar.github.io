import { describe, expect, it } from "vitest";
import { siteSettings } from "@/data/site";
import { resolveTalkRecord, type TalkSource } from "@/lib/resolve-talk";

const base: TalkSource = {
  speaker: "Jane Doe",
  affiliation: "Example University",
  title: "An example talk",
  date: "2026-10-02",
  format: "in-person",
};

describe("talk defaults and overrides", () => {
  it("inherits the seminar time, location, and inferred academic term", () => {
    const talk = resolveTalkRecord("jane-doe", base, "An abstract.");
    expect(talk.start.toFormat("HH:mm")).toBe(siteSettings.defaultStartTime);
    expect(talk.end.toFormat("HH:mm")).toBe(siteSettings.defaultEndTime);
    expect(talk.location).toBe(siteSettings.defaultLocation);
    expect(talk.term).toBe("Fall 2026");
  });

  it("honors talk-specific time, location, map, and term overrides", () => {
    const talk = resolveTalkRecord(
      "special-talk",
      {
        ...base,
        startTime: "14:30",
        endTime: "16:00",
        location: "Special room",
        mapUrl: "https://maps.example.com/room",
        term: "Special series 2026",
      },
      "An abstract.",
    );
    expect(talk.start.toFormat("HH:mm")).toBe("14:30");
    expect(talk.end.toFormat("HH:mm")).toBe("16:00");
    expect(talk.location).toBe("Special room");
    expect(talk.mapUrl).toBe("https://maps.example.com/room");
    expect(talk.term).toBe("Special series 2026");
  });

  it("uses Online as the location for a virtual talk without an override", () => {
    const talk = resolveTalkRecord("virtual-talk", { ...base, format: "virtual" }, "An abstract.");
    expect(talk.location).toBe("Online");
  });

  it("requires explicit forthcoming states for missing title or abstract", () => {
    expect(() => resolveTalkRecord("no-title", { ...base, title: undefined }, "An abstract.")).toThrow(
      /titleForthcoming/,
    );
    expect(() => resolveTalkRecord("no-abstract", base, "")).toThrow(/abstractForthcoming/);
  });
});
