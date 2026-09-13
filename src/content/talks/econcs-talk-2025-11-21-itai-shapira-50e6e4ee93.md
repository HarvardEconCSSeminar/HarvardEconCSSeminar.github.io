---
speaker: "Itai Shapira"
affiliation: "Harvard University"
speakerUrl: "https://itai-shapira.com"
title: "Distribution over rewards for pluralistic AI alignment"
date: "2025-11-21"
term: "Fall 2025"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30pm - 2:30pm"
location: "SEC LL 2.221"
format: "in-person"
links:
  - label: "Paper"
    url: "https://arxiv.org/abs/2506.06298"
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/1-distribution-over-rewards-pluralistic-ai-alignment-2-data-reliability-scoring"
legacyEventId: "econcs-event-2025-11-21"
---

Current alignment pipelines based on human feedback, typically learn a single scalar reward that reflects a presumed universal notion of desirable behavior. Yet human preferences often diverge across users, contexts, and cultures, so disagreement in the feedback collapses into a majority signal, minority perspectives are discounted, and downstream policy optimization amplifies this preference collapse. This talk treats reward learning explicitly as preference aggregation and shows that broad classes of loss based reward learning rules, including Bradley–Terry style objectives, cannot satisfy basic social choice axioms once rewards are constrained to a parametric family, revealing that the resulting single reward is often a mis-specified objective. Motivated by this impossibility, we propose reflecting diverse human preferences through a distribution over multiple reward functions, each inducing a distinct aligned policy. The central criterion is pairwise calibration: for every pair of candidate responses, the fraction of reward functions preferring one response matches the fraction of annotators with that preference. Our results show that even a small outlier free ensemble can accurately represent diverse preference distributions while remaining practical to train and deploy.
