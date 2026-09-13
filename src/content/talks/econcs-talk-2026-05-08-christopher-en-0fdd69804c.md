---
speaker: "Christopher En"
affiliation: "Columbia University"
speakerUrl: "https://chris-en.com"
title: "Fair Online Resource Allocation"
date: "2026-05-08"
term: "Spring 2026"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30pm - 2:30pm"
location: "SEC 1.413"
format: "in-person"
legacyEventId: "econcs-event-2026-05-08"
---

We study the problem of fair online resource allocation, motivated by applications such as refugee resettlement and airline scheduling, where agents arrive sequentially and must be assigned to facilities with limited capacities. We introduce a model that maximizes the overall welfare subject to resource constraints and a Lipschitz fairness requirement, which ensures that similar agents arriving in the same batch receive similar expected outcomes. We first analyze the offline problem, proving that the value of the optimal fair allocation is at least an Ω(1/γ) fraction of the optimal unfair allocation, where γ is the fairness coefficient, thereby bounding the price of fairness. For the online setting, we propose an algorithm based on dual mirror descent that enforces fairness constraints within batches while estimating optimal dual variables. We prove that this algorithm achieves sublinear regret relative to the optimal offline fluid benchmark. Finally, we validate our theoretical results using real-world data from the Refugee Economies Programme, demonstrating the algorithm's performance and examining the trade-offs between welfare maximization and fairness enforcement.
