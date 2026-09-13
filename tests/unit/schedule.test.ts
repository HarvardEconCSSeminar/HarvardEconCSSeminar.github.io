import { DateTime } from "luxon";
import { describe, expect, it } from "vitest";
import { localDateTime, validateTimeRange } from "@/lib/datetime";
import { splitByEnd, sortByStart, type TimedItem } from "@/lib/schedule";

const zone = "America/New_York";

function item(speaker: string, date: string, start: string, end: string): TimedItem {
  return {
    speaker,
    start: localDateTime(date, start, zone),
    end: localDateTime(date, end, zone),
  };
}

describe("schedule classification", () => {
  const first = item("Alpha", "2026-10-02", "12:00", "13:00");
  const second = item("Beta", "2026-10-09", "12:00", "13:00");

  it("features the earliest talk before it starts", () => {
    const split = splitByEnd([second, first], DateTime.fromISO("2026-10-02T11:59", { zone }));
    expect(split.next?.speaker).toBe("Alpha");
    expect(split.upcoming.map((talk) => talk.speaker)).toEqual(["Beta"]);
    expect(split.past).toEqual([]);
  });

  it("keeps an in-progress talk featured", () => {
    const split = splitByEnd([first, second], DateTime.fromISO("2026-10-02T12:30", { zone }));
    expect(split.next?.speaker).toBe("Alpha");
  });

  it("archives a talk exactly at its end time", () => {
    const split = splitByEnd([first, second], DateTime.fromISO("2026-10-02T13:00", { zone }));
    expect(split.next?.speaker).toBe("Beta");
    expect(split.past.map((talk) => talk.speaker)).toEqual(["Alpha"]);
  });

  it("handles the no-upcoming-talk state", () => {
    const split = splitByEnd([first], DateTime.fromISO("2026-10-03T00:00", { zone }));
    expect(split.next).toBeUndefined();
    expect(split.upcoming).toEqual([]);
    expect(split.past).toHaveLength(1);
  });

  it("sorts same-time talks consistently by speaker", () => {
    const bravo = item("Bravo", "2026-10-02", "12:00", "13:00");
    expect(sortByStart([bravo, first]).map((talk) => talk.speaker)).toEqual(["Alpha", "Bravo"]);
  });
});

describe("Eastern time handling", () => {
  it("uses EST before the spring DST transition and EDT after it", () => {
    expect(localDateTime("2026-03-06", "12:00", zone).offset).toBe(-300);
    expect(localDateTime("2026-03-13", "12:00", zone).offset).toBe(-240);
  });

  it("rejects invalid and reversed time ranges", () => {
    const start = localDateTime("2026-10-02", "13:00", zone);
    const end = localDateTime("2026-10-02", "12:00", zone);
    expect(() => validateTimeRange(start, end, "bad-talk")).toThrow(/after start time/);
    expect(() => validateTimeRange(localDateTime("not-a-date", "12:00", zone), end, "bad-date")).toThrow(
      /Invalid date or time/,
    );
  });
});
