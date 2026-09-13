---
speaker: "Sid Srinivasan"
affiliation: "Harvard"
speakerUrl: "https://sidsrinivasan.github.io"
title: "Self-Resolving Prediction Markets for Unverifiable Outcomes"
date: "2024-09-20"
term: "Fall 2024"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30 pm - 2:30 pm"
location: "SEC 1.413"
format: "in-person"
links:
  - label: "Paper"
    url: "https://arxiv.org/abs/2306.04305"
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/self-resolving-prediction-markets-unverifiable-outcomes"
legacyEventId: "econcs-event-2024-09-20"
---

Prediction markets elicit and aggregate beliefs by paying agents based on how close their predictions are to a verifiable future outcome. However, outcomes of many important questions are difficult to verify or unverifiable, in that the ground truth may be hard or impossible to access. Examples include questions about causal effects where it is infeasible or unethical to run randomized trials; crowdsourcing and content moderation tasks where it is prohibitively expensive to verify ground truth; and questions asked over long time horizons, where the delay until the realization of the outcome skews agents’ incentives to report their true beliefs. We present a novel and unintuitive result showing that it is possible to run an ε−incentive compatible prediction market to elicit and efficiently aggregate information from a pool of agents without observing the outcome by paying agents the negative cross-entropy between their prediction and that of a carefully chosen reference agent. Our key insight is that a reference agent with access to more information can serve as a reasonable proxy for the ground truth. We use this insight to propose self-resolving prediction markets that terminate with some probability after every report and pay all but a few agents based on the final prediction. We show that it is an ε−Perfect Bayesian Equilibrium for all agents to report truthfully in our mechanism and to believe that all other agents report truthfully. Although primarily of interest for unverifiable outcomes, this design is also applicable for verifiable outcomes. The talk will also cover some open questions and ongoing work.
