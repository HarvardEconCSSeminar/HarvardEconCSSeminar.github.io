import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { createCalendar } from "@/lib/calendar";
import { resolveTalk } from "@/lib/talks";

export const prerender = true;

export async function getStaticPaths() {
  const entries = await getCollection("talks");
  return entries.map((entry) => ({ params: { id: entry.id }, props: { entry } }));
}

export const GET: APIRoute = ({ props }) => {
  const entry = props.entry as CollectionEntry<"talks">;
  const talk = resolveTalk(entry);
  return new Response(createCalendar([talk]), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${talk.id}.ics"`,
    },
  });
};
