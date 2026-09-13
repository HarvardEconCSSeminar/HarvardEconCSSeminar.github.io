---
speaker: "Ben Schiffer"
affiliation: "PhD student at Harvard Statistics Department"
speakerUrl: "https://bschiffer1.github.io"
title: "Clone-Robust AI Alignment"
date: "2025-02-07"
term: "Spring 2025"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30pm - 2:30pm"
location: "SEC LL 2.221"
format: "in-person"
coauthors: "Ariel Procaccia and Shirley Zhang"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/spring-econcs-2025-seminars"
legacyEventId: "econcs-event-2025-02-07"
---

A key challenge in training Large Language Models (LLMs) is properly aligning them with human preferences. Reinforcement Learning with Human Feedback (RLHF) uses pairwise comparisons from human annotators to train reward functions and has emerged as a popular alignment method. However, input datasets in RLHF can be unbalanced due to adversarial manipulation or inadvertent repetition. Therefore, we want RLHF algorithms to perform well even when the set of alternatives is not uniformly distributed. Drawing on insights from social choice theory, we introduce robustness to approximate clones, a desirable property of RLHF algorithms which requires that adversarially adding near-duplicate alternatives does not significantly change the learned reward function. We first demonstrate that the standard RLHF algorithm based on regularized maximum likelihood estimation (MLE) fails to satisfy this property. We then propose the weighted MLE, a new RLHF algorithm that modifies the standard regularized MLE by weighting alternatives based on their similarity to other alternatives. This new algorithm guarantees robustness to approximate clones while preserving desirable theoretical properties. Joint work with Ariel Procaccia and Shirley Zhang.
