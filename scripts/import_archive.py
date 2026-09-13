#!/usr/bin/env python3
"""Convert the public Talks sheet into one Markdown file per seminar talk."""

from __future__ import annotations

import argparse
import html
import json
import re
from collections import Counter
from datetime import datetime
from pathlib import Path

import openpyxl


TIME_TOKEN = re.compile(r"(?<!\d)(\d{1,2})(?::(\d{2}))?\s*(am|pm)?", re.IGNORECASE)


def quoted(value: object) -> str:
    return json.dumps(str(value), ensure_ascii=False)


def to_minutes(hour: int, minute: int, meridiem: str | None) -> int:
    if meridiem:
        hour %= 12
        if meridiem.lower() == "pm":
            hour += 12
    return hour * 60 + minute


def time_range(raw: str) -> tuple[str, str]:
    searchable = re.sub(r"\([^)]*\)", "", raw).replace("–", "-").replace("—", "-")
    tokens = TIME_TOKEN.findall(searchable)
    if not tokens:
        raise ValueError(f"Could not parse time: {raw!r}")

    parsed = [(int(hour), int(minute or 0), meridiem.lower() or None) for hour, minute, meridiem in tokens[:2]]
    if len(parsed) == 1:
        start_minutes = to_minutes(*parsed[0])
        end_minutes = start_minutes + 60
    else:
        start_hour, start_minute, start_meridiem = parsed[0]
        end_hour, end_minute, end_meridiem = parsed[1]
        if not end_meridiem and start_meridiem:
            end_meridiem = start_meridiem
        end_minutes = to_minutes(end_hour, end_minute, end_meridiem)
        if start_meridiem:
            start_minutes = to_minutes(start_hour, start_minute, start_meridiem)
        elif end_meridiem:
            start_minutes = to_minutes(start_hour, start_minute, end_meridiem)
            if start_minutes >= end_minutes:
                opposite = "am" if end_meridiem == "pm" else "pm"
                start_minutes = to_minutes(start_hour, start_minute, opposite)
        else:
            start_minutes = to_minutes(start_hour, start_minute, None)
        if end_minutes <= start_minutes:
            end_minutes += 12 * 60

    start = f"{(start_minutes // 60) % 24:02d}:{start_minutes % 60:02d}"
    end = f"{(end_minutes // 60) % 24:02d}:{end_minutes % 60:02d}"
    return start, end


def normalized_date(value: object) -> str:
    if isinstance(value, datetime):
        return value.strftime("%Y-%m-%d")
    return datetime.fromisoformat(str(value)).strftime("%Y-%m-%d")


def markdown_record(row: dict[str, object]) -> str:
    start_time, end_time = time_range(str(row["Time"]))
    title = row.get("Title")
    abstract = str(row.get("Full Abstract") or "").strip()
    location = row.get("Location") or ("Online" if row.get("Format") == "virtual" else None)

    frontmatter = [
        "---",
        f"speaker: {quoted(row['Speaker'])}",
        f"affiliation: {quoted(row['Affiliation at Talk'])}",
        f"speakerUrl: {quoted(row['Speaker Website'])}",
    ]
    if title:
        frontmatter.append(f"title: {quoted(title)}")
    else:
        frontmatter.append("titleForthcoming: true")
    if not abstract:
        frontmatter.append("abstractForthcoming: true")
    frontmatter.extend(
        [
            f"date: {quoted(normalized_date(row['Date']))}",
            f"term: {quoted(row['Term'])}",
            f"startTime: {quoted(start_time)}",
            f"endTime: {quoted(end_time)}",
            f"timeLabel: {quoted(row['Time'])}",
        ]
    )
    if location:
        frontmatter.append(f"location: {quoted(location)}")
    frontmatter.append(f"format: {quoted(row['Format'])}")
    if row.get("Coauthors"):
        frontmatter.append(f"coauthors: {quoted(row['Coauthors'])}")

    links: list[tuple[str, str]] = []
    if row.get("Paper URL"):
        links.append(("Paper", str(row["Paper URL"])))
    if row.get("Legacy Event URL"):
        links.append(("Original event listing", str(row["Legacy Event URL"])))
    if links:
        frontmatter.append("links:")
        for label, url in links:
            frontmatter.append(f"  - label: {quoted(label)}")
            frontmatter.append(f"    url: {quoted(url)}")
    frontmatter.append(f"legacyEventId: {quoted(row['Event ID'])}")
    frontmatter.append("---")

    safe_abstract = html.escape(abstract, quote=False)
    if not safe_abstract:
        return "\n".join(frontmatter) + "\n"
    return "\n".join(frontmatter) + "\n\n" + safe_abstract + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("workbook", type=Path)
    parser.add_argument("--output", type=Path, default=Path("src/content/talks"))
    parser.add_argument(
        "--check",
        action="store_true",
        help="Compare generated records with the workbook without writing files.",
    )
    args = parser.parse_args()

    workbook = openpyxl.load_workbook(args.workbook, read_only=True, data_only=True)
    sheet = workbook["Talks"]
    headers = [cell.value for cell in next(sheet.iter_rows(min_row=1, max_row=1))]
    rows = [dict(zip(headers, (cell.value for cell in row))) for row in sheet.iter_rows(min_row=2)]

    talk_ids = [str(row["Talk ID"]) for row in rows]
    duplicates = [talk_id for talk_id, count in Counter(talk_ids).items() if count > 1]
    if duplicates:
        raise ValueError(f"Duplicate Talk ID values: {duplicates}")

    mismatches: list[str] = []
    if not args.check:
        args.output.mkdir(parents=True, exist_ok=True)
    for row in rows:
        talk_id = str(row["Talk ID"])
        destination = args.output / f"{talk_id}.md"
        record = markdown_record(row)
        if args.check:
            if not destination.exists() or destination.read_text(encoding="utf-8") != record:
                mismatches.append(talk_id)
        else:
            destination.write_text(record, encoding="utf-8")

    if mismatches:
        raise ValueError(f"Generated records differ from the workbook: {mismatches}")
    verb = "Verified" if args.check else "Imported"
    print(f"{verb} {len(rows)} talks from the public Talks sheet in {args.output}")


if __name__ == "__main__":
    main()
