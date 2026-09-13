---
speaker: "Justin Payan"
affiliation: "University of Massachusetts Amherst"
speakerUrl: "https://justinpayan.github.io"
title: "Into the Unknown: Assigning Reviewers to Papers with Uncertain Affinities"
date: "2023-02-03"
term: "Spring 2023"
startTime: "13:00"
endTime: "14:00"
timeLabel: "1:00-2:00 PM ET"
location: "SEC 1.413"
format: "hybrid"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/unknown-assigning-reviewers-papers-uncertain-affinities"
legacyEventId: "econcs-event-2023-02-03"
---

Peer review cannot work unless qualified and interested reviewers are assigned to every paper. Nearly all automated reviewer assignment approaches estimate real-valued affinity scores for each paper-reviewer pair that serve as proxies for the predicted quality of a future review; conferences then assign reviewers to maximize the utilitarian welfare of the assignment. This procedure does not account for noise in affinity score computation --- reviewers can only bid on a small number of papers, and textual similarity models are inherently probabilistic estimators. In this talk, we will explore the case when paper-reviewer affinity scores are estimated using a probabilistic model. Using these probabilistic estimates, we bound the scores with high probability and maximize the worst-case utilitarian welfare for a reviewer allocation. We will discuss multiple ways to estimate probabilistic affinity scores, and how to robustly maximize welfare in these models. Our general approach can be used to integrate a large variety of probabilistic reviewer-paper affinity models into reviewer assignment, opening the door to a much more robust peer review process.
