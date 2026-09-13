import { DateTime } from "luxon";

export function localDateTime(date: string, time: string, timezone: string): DateTime {
  return DateTime.fromISO(`${date}T${time}`, { zone: timezone });
}

export function validateTimeRange(start: DateTime, end: DateTime, id: string): void {
  if (!start.isValid || !end.isValid) {
    throw new Error(`Invalid date or time in talk ${id}`);
  }
  if (end.toMillis() <= start.toMillis()) {
    throw new Error(`End time must be after start time in talk ${id}`);
  }
}

export function displayTime(dateTime: DateTime): string {
  return dateTime.toFormat(dateTime.minute === 0 ? "h a" : "h:mm a");
}

export function inferAcademicTerm(dateTime: DateTime): string {
  return `${dateTime.month <= 6 ? "Spring" : "Fall"} ${dateTime.year}`;
}
