---
speaker: "Zhuoran Yang"
affiliation: "Yale University"
speakerUrl: "https://zhuoranyang.github.io"
title: "Reinforcement Learning Meets Bilevel Optimization: Learning Leader-Follower Games with Sample Efficiency"
date: "2024-04-05"
term: "Spring 2024"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30 - 2:30 pm"
location: "SEC 1.413"
format: "in-person"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/reinforcement-learning-meets-bilevel-optimization-learning-leader-follower-games-sample"
legacyEventId: "econcs-event-2024-04-05"
---

In this talk, I will introduce methods that modify the optimism principle for reinforcement learning in leader-follower games, especially when the follower's reward function is unknown. Such problems generally face statistical challenges due to the ill-posed nature of the best response function. I will discuss two cases that overcome these challenges. The first involves a fully rational follower with a separable reward function, where we use an algorithm combining optimism with pessimistic binary search to identify the follower's indifference curve. In the second case, for a boundedly rational follower defined by entropy regularization, we directly estimate the response model and establish a bonus function for estimation uncertainty. This approach leads to optimism-based online reinforcement learning algorithms that achieve sublinear regret upper bounds, effectively learning the leader's optimal policy in both scenarios.
