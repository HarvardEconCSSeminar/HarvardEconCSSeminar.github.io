import { getCollection, type CollectionEntry } from "astro:content";
import { DateTime } from "luxon";
import { siteSettings } from "@/data/site";
import { resolveTalkRecord, type Talk } from "@/lib/resolve-talk";
import { sortByStart, splitByEnd } from "@/lib/schedule";

export type { Talk } from "@/lib/resolve-talk";

export type TalkEntry = CollectionEntry<"talks">;

export interface TalkSplit {
  next?: Talk;
  upcoming: Talk[];
  past: Talk[];
}

export function resolveTalk(entry: TalkEntry): Talk {
  return resolveTalkRecord(entry.id, entry.data, entry.body ?? "", siteSettings);
}

export function sortTalks(talks: Talk[]): Talk[] {
  return sortByStart(talks);
}

export function splitTalks(talks: Talk[], now = DateTime.now()): TalkSplit {
  return splitByEnd(talks, now);
}

export async function getAllTalks(): Promise<Talk[]> {
  const entries = await getCollection("talks");
  const seen = new Set<string>();
  const talks = entries.map((entry) => {
    if (seen.has(entry.id)) throw new Error(`Duplicate talk slug: ${entry.id}`);
    seen.add(entry.id);
    return resolveTalk(entry);
  });
  return sortTalks(talks);
}

export function formatLongDate(talk: Talk): string {
  return talk.start.toFormat("cccc, LLLL d, yyyy");
}

export function talkTitle(talk: Talk): string {
  return talk.title ?? "Talk title forthcoming";
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteSettings.canonicalUrl).toString();
}
