---
speaker: "Shirley Zhang"
affiliation: "Harvard"
speakerUrl: "https://shirleykzhang.github.io"
title: "Honor Among Bandits: No-Regret Learning for Online Fair Division"
date: "2024-10-04"
term: "Fall 2024"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30 pm - 2:30 pm"
location: "SEC 1.413"
format: "in-person"
coauthors: "Ben Schiffer and Ariel Procaccia"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/relative-value-prediction-honor-among-bandits-no-regret-learning-online-fair-division"
legacyEventId: "econcs-event-2024-10-04"
---

We consider the problem of online fair division of indivisible goods to players when there are a finite number of types of goods and player values are drawn from distributions with unknown means. Our goal is to maximize social welfare subject to allocating the goods fairly in expectation. When a player’s value for an item is unknown at the time of allocation, we show that this problem reduces to a variant of (stochastic) multi-armed bandits, where there exists an arm for each player’s value for each type of good. At each time step, we choose a distribution over arms which determines how the next item is allocated. We consider two sets of fairness constraints for this problem: envy-freeness in expectation and proportionality in expectation. Our main result is the design of an explore-then-commit algorithm that achieves O˜(T^2/3) regret while maintaining either fairness constraint. This result relies on unique properties fundamental to fair-division constraints that allow faster rates of learning, despite the restricted action space. We also prove a lower bound of Ω˜(T^2/3) regret for our setting, showing that our results are tight. Joint work with Ben Schiffer and Ariel Procaccia.
