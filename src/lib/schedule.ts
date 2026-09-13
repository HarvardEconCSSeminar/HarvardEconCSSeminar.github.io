import type { DateTime } from "luxon";

export interface TimedItem {
  start: DateTime;
  end: DateTime;
  speaker: string;
}

export interface ScheduleSplit<T> {
  next?: T;
  upcoming: T[];
  past: T[];
}

export function sortByStart<T extends TimedItem>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => a.start.toMillis() - b.start.toMillis() || a.speaker.localeCompare(b.speaker),
  );
}

export function splitByEnd<T extends TimedItem>(items: T[], now: DateTime): ScheduleSplit<T> {
  const ordered = sortByStart(items);
  const active = ordered.filter((item) => item.end.toMillis() > now.toMillis());
  const past = ordered
    .filter((item) => item.end.toMillis() <= now.toMillis())
    .sort((a, b) => b.start.toMillis() - a.start.toMillis());

  return { next: active[0], upcoming: active.slice(1), past };
}
