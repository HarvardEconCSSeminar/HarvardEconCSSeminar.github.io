---
speaker: "André Cruz"
affiliation: "PhD student at MPI and visiting Rediet Abebe at Harvard"
speakerUrl: "https://andrefcruz.github.io"
title: "Evaluating language models as risk scorers"
date: "2025-02-07"
term: "Spring 2025"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30pm - 2:30pm"
location: "SEC LL 2.221"
format: "in-person"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/spring-econcs-2025-seminars"
legacyEventId: "econcs-event-2025-02-07"
---

Current LLM benchmarks predominantly focus on accuracy in realizable (factual) tasks. Such benchmarks necessarily fail to evaluate LLMs’ ability to quantify ground-truth outcome uncertainty. In this work, we leverage US Census data to evaluate LLMs’ ability to generate meaningful real-world distributions. We introduce folktexts, a python package to standardize the evaluation of uncertainty, calibration, and fairness of LLMs on real-world tabular data tasks. We find that predictive risk scores produced by state-of-the-art LLMs have high predictive signal but are wildly miscalibrated. Our evaluation reveals a general inability of instruction-tuned LLMs to express data uncertainty in multiple-choice Q&amp;A, exhibiting strong over-confidence bias across a variety of benchmark tasks. These differences in ability to quantify data uncertainty cannot be revealed in realizable settings, and highlight a blind-spot in the current evaluation ecosystem that folktexts covers.
