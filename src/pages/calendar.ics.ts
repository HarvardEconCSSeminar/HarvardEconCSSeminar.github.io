import type { APIRoute } from "astro";
import { createCalendar } from "@/lib/calendar";
import { getAllTalks } from "@/lib/talks";

export const prerender = true;

export const GET: APIRoute = async () => {
  const talks = await getAllTalks();
  return new Response(createCalendar(talks), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="harvard-econcs-seminar.ics"',
    },
  });
};
