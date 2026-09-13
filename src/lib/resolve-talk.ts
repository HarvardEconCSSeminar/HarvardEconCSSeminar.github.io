import type { DateTime } from "luxon";
import { siteSettings, type SiteSettings } from "@/data/site";
import { displayTime, inferAcademicTerm, localDateTime, validateTimeRange } from "@/lib/datetime";

export interface TalkSource {
  speaker: string;
  affiliation: string;
  speakerUrl?: string;
  title?: string;
  titleForthcoming?: boolean;
  abstractForthcoming?: boolean;
  date: string;
  term?: string;
  startTime?: string;
  endTime?: string;
  timeLabel?: string;
  location?: string;
  mapUrl?: string;
  format: "in-person" | "hybrid" | "virtual";
  coauthors?: string;
  links?: Array<{ label: string; url: string }>;
  photo?: string;
  draft?: boolean;
  legacyEventId?: string;
}

export interface Talk {
  id: string;
  speaker: string;
  affiliation: string;
  speakerUrl?: string;
  title?: string;
  titleForthcoming: boolean;
  abstract: string;
  abstractForthcoming: boolean;
  date: string;
  term: string;
  start: DateTime;
  end: DateTime;
  timeLabel: string;
  location: string;
  mapUrl?: string;
  format: "in-person" | "hybrid" | "virtual";
  coauthors?: string;
  links: Array<{ label: string; url: string }>;
  photo?: string;
  draft: boolean;
  legacyEventId?: string;
  path: string;
}

export function resolveTalkRecord(
  id: string,
  data: TalkSource,
  body: string,
  settings: SiteSettings = siteSettings,
): Talk {
  const startTime = data.startTime ?? settings.defaultStartTime;
  const endTime = data.endTime ?? settings.defaultEndTime;
  const start = localDateTime(data.date, startTime, settings.timezone);
  const end = localDateTime(data.date, endTime, settings.timezone);
  validateTimeRange(start, end, id);

  if (!data.title && !data.titleForthcoming) {
    throw new Error(`Add a title or set titleForthcoming: true in talk ${id}`);
  }
  const abstract = body.trim();
  if (!abstract && !data.abstractForthcoming) {
    throw new Error(`Add an abstract or set abstractForthcoming: true in talk ${id}`);
  }

  return {
    id,
    speaker: data.speaker,
    affiliation: data.affiliation,
    speakerUrl: data.speakerUrl,
    title: data.title,
    titleForthcoming: data.titleForthcoming ?? false,
    abstract,
    abstractForthcoming: data.abstractForthcoming ?? false,
    date: data.date,
    term: data.term ?? inferAcademicTerm(start),
    start,
    end,
    timeLabel: data.timeLabel ?? `${displayTime(start)}–${displayTime(end)} ${start.offsetNameShort}`,
    location: data.location ?? (data.format === "virtual" ? "Online" : settings.defaultLocation),
    mapUrl: data.mapUrl ?? settings.defaultMapUrl,
    format: data.format,
    coauthors: data.coauthors,
    links: data.links ?? [],
    photo: data.photo,
    draft: data.draft ?? false,
    legacyEventId: data.legacyEventId,
    path: `/talks/${id}/`,
  };
}
