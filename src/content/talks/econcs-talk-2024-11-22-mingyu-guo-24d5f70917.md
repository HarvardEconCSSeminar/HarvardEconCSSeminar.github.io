---
speaker: "Mingyu Guo"
affiliation: "University of Adelaide"
speakerUrl: "https://mingyuguo.github.io"
title: "Worst-Case VCG Redistribution Mechanism Design Based on the Lottery Ticket Hypothesis"
date: "2024-11-22"
term: "Fall 2024"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30 pm - 2:30 pm"
location: "SEC 1.413"
format: "in-person"
links:
  - label: "Paper"
    url: "https://arxiv.org/abs/2305.11011"
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/worst-case-vcg-redistribution-mechanism-design-based-lottery-ticket-hypothesis"
legacyEventId: "econcs-event-2024-11-22"
---

We study worst-case VCG redistribution mechanism design for the public project problem. We use a multilayer perceptron (MLP) with ReLU activation to model the payment function and use mixed integer programming (MIP) to solve for the worst-case type profiles that maximally violate the mechanism design constraints. We collect these worst-case type profiles and use them as training samples to train toward better worst-case mechanisms. In practice, we require a tiny network structure for the above approach to scale. The Lottery Ticket Hypothesis states that a large network is likely to contain a "winning ticket" -- a much smaller subnetwork that "won the initialization lottery", which makes its training particularly effective. Motivated by this hypothesis, we train a large network and prune it into a tiny subnetwork. We run MIP-based worst-case training on the drawn subnetwork and evaluate the resulting mechanism's worst-case performance. If the subnetwork does not achieve good worst-case performance, then we record the type profiles that cause the current draw to be bad. To draw again, we restore the large network to its initial weights and prune using recorded type profiles from earlier draws, therefore avoiding drawing the same ticket twice. We expect to eventually encounter a tiny subnetwork that leads to effective training for our worst-case mechanism design task. Lastly, a by-product of multiple ticket draws is an ensemble of mechanisms with different worst cases, which improves the worst-case performance further. Using our approach, we find previously unknown optimal mechanisms for up to 5 agents. Our results confirm the tightness of existing theoretical upper bounds. For up to 20 agents, we derive significantly improved worst-case mechanisms, surpassing a long list of existing manual results.
