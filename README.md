# Harvard EconCS Seminar website

Static Astro site for the Harvard EconCS Seminar. Each talk has one Markdown source record that generates its permanent detail page, archive/homepage placement, the site calendar feed, and an individual `.ics` file.

The site is intentionally in **draft mode**. Deployment will fail until the current mission, meeting details, subscription links, shared contact, organizers, and at least one real talk have been approved.

## Everyday editing

### Seminar-wide details

Edit [`src/data/site.json`](src/data/site.json). It contains the mission, recurring Eastern time, default location and map, mailing-list URL, organizers, shared contact, timezone, and canonical URL. Talk-specific time/location values override these defaults.

### Add or update a talk

1. Copy [`src/content/talks/_template.md`](src/content/talks/_template.md).
2. Rename the copy to a permanent, lowercase slug such as `2026-10-02-jane-doe.md`. Never rename it after publication: the filename is the permanent URL and calendar UID.
3. Fill in the frontmatter and abstract. Keep `draft: true` until the record is approved, then remove the field or set it to `false`.
4. Open a pull request. The validation workflow checks launch readiness, schema, times, URLs, generated routes, calendar files, responsive behavior, and accessibility. Keep a draft on its branch until it is ready to merge.

Required fields are speaker, affiliation, date, and either a title or `titleForthcoming: true`. Put the abstract in the Markdown body or set `abstractForthcoming: true`. Optional fields include time/location overrides, speaker homepage, a permitted local photo, map, coauthors, and labeled links for papers, slides, video, or code.

Classification is automatic: a talk remains upcoming while it is in progress and moves to the archive at its configured end time. The browser repeats this classification at page load, so the site remains current even if a daily GitHub rebuild is paused.

## Local development

Requires Node 24 and pnpm 11.

```sh
pnpm install
pnpm dev
```

Run the full non-browser validation:

```sh
pnpm test
pnpm build
```

After building, run Chromium accessibility and responsive tests:

```sh
pnpm exec playwright install chromium
pnpm test:e2e
```

`pnpm validate:launch` is stricter than normal content validation. It blocks publication when any launch setting is missing or any talk remains marked as a draft.

## Imported archive

The 2022–2026 archive was imported from the workbook supplied by the seminar. Exactly 135 rows from the public `Talks` sheet became 135 Markdown records. Paired talks on the same date remain distinct talks with separate pages and calendar events.

The workbook itself is not committed because it also contains internal audit and exclusion sheets. To reproduce a future import locally (with `openpyxl` installed):

```sh
python3 scripts/import_archive.py /path/to/Harvard_EconCS_Seminar_Database_2022-2026.xlsx
```

Review the diff after importing. The generated Markdown files, not the workbook, are the site’s long-term public content source.

Use `--check` to compare the current generated records with a workbook without changing any files.

## Deployment

- `.github/workflows/validate.yml` runs on pull requests and changes to `main`.
- `.github/workflows/deploy.yml` runs on validated changes to `main`, manually, and once daily in `America/New_York`.
- The deployment workflow runs the launch guard before uploading anything to GitHub Pages.
- The master feed is `/calendar.ics`; each talk’s calendar file is `/talks/<slug>/event.ics`.

See [`GOVERNANCE.md`](GOVERNANCE.md) for organization ownership and annual handoff, and [`CUSTOM_DOMAIN.md`](CUSTOM_DOMAIN.md) for the future SEAS domain procedure.
