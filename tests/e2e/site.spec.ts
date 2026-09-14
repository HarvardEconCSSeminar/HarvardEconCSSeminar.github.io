import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage preserves the requested section order and keyboard entry point", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Harvard Econ CS Seminar" })).toBeVisible();
  await expect(page.getByText("Fridays, 1:00–2:00 PM · SEC 1.413", { exact: true })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary navigation" }).getByText("Calendar")).toHaveCount(0);
  const headings = await page.locator("main section h2").allTextContents();
  expect(headings).toEqual([
    "Next talk",
    "Upcoming schedule",
    "Recent talks",
    "Calendar and announcements",
    "Organizers and contact",
  ]);
  await expect(page.getByRole("heading", { level: 3, name: "Michelle Si" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Michelle Si personal website" })).toHaveAttribute(
    "href",
    "https://sites.google.com/g.harvard.edu/msi/",
  );
  await expect(page.getByRole("heading", { level: 3, name: "Shi Feng" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Shi Feng personal website" })).toHaveAttribute(
    "href",
    "https://fengshi.link/",
  );

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
});

test("archive exposes every imported past talk and permanent navigation", async ({ page }) => {
  await page.goto("/archive/");
  await expect(page.locator(".archive-list .talk-card:visible")).toHaveCount(135);
  await expect(page.getByText("Michelle Si", { exact: true }).first()).toBeVisible();
});

test("talk detail and individual calendar route are generated", async ({ page, request }) => {
  const path = "/talks/econcs-talk-2026-09-11-michelle-si-89e1689ac3/";
  await page.goto(path);
  await expect(page.getByRole("heading", { level: 2, name: "Michelle Si" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Add to calendar (.ics)" })).toHaveAttribute(
    "href",
    `${path}event.ics`,
  );

  const response = await request.get(`${path}event.ics`);
  expect(response.ok()).toBe(true);
  const calendar = await response.text();
  expect(calendar).toContain("BEGIN:VCALENDAR");
  expect(calendar).toContain("UID:econcs-talk-2026-09-11-michelle-si-89e1689ac3@harvard-econcs-seminar");
});

test("homepage has no serious accessibility violations or horizontal overflow", async ({ page }) => {
  await page.goto("/");
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const results = await new AxeBuilder({ page }).analyze();
  const serious = results.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""));
  expect(serious).toEqual([]);
});
