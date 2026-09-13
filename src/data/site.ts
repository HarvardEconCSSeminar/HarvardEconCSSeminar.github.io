import settings from "./site.json";

export interface Organizer {
  name: string;
  role?: string;
  email?: string;
  url?: string;
}

export interface SiteSettings {
  draft: boolean;
  name: string;
  shortName: string;
  mission: string;
  canonicalUrl: string;
  timezone: string;
  defaultStartTime: string;
  defaultEndTime: string;
  fixedTimeLabel: string;
  defaultLocation: string;
  defaultMapUrl: string;
  mailingListUrl: string;
  contactEmail: string;
  organizers: Organizer[];
}

export const siteSettings: SiteSettings = settings;
