---
speaker: "Andreas Haupt"
affiliation: "MIT"
speakerUrl: "https://andyhaupt.com"
title: "Controlling Cooperation in Strategic Environments"
date: "2022-12-09"
term: "Fall 2022"
startTime: "13:00"
endTime: "14:00"
timeLabel: "1:00–2:00 PM ET"
location: "SEC 1.413 and Zoom"
format: "hybrid"
coauthors: "Alessandro Bonatti, Olivia Hartzell, and Dylan Hadfield-Menell"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/controlling-cooperation-strategic-environments"
legacyEventId: "econcs-event-2022-12-09"
---

In many strategic environments, a particular level of cooperation is desired: Cooperation between countries in climate action is considered desirable, while cooperation between sellers in a market is often considered collusion, and undesirable. This set of two projects asks how to control the level of cooperation between selfish reinforcement learning agents in the absence of a mediator concerting agents’ behavior. It limits its analysis to repeated games, while many of the ideas generalize to more general domains. A first project (joint work with Alessandro Bonatti) considers optimal cooperation. We first provide modeling of selfishness, and use the regret framework for this. Under adversarial (swap) no-regret, algorithms cannot cooperate, in that play approaches the set of correlated equilibria of the stage game. Under an adaptive (swap) no-regret notion we define, there are policy profiles that optimally cooperate in a wide class of games. The notion is selective in that the currently most-studied model for a colluding agent, tabular Q-learning, incurs adaptive regret. A second set of algorithms (joint work with Olivia Hartzell and Dylan Hadfield-Menell) considers limited cooperation. The main assumption is that repeated play of a Nash equilibrium leads to a continuation value that is constant in the current agent action. We propose the Lipschitz parameter of the continuation value function for each agent as a measure of cooperation. This notion can be audited without communicating the algorithm. It is also possible to adapt many policy gradient and online algorithms to learn policy profiles with Lipschitz continuous continuation values, using projected gradient descent. This leads to provable limits of cooperation. We accompany this by simulations in several economic domains.
