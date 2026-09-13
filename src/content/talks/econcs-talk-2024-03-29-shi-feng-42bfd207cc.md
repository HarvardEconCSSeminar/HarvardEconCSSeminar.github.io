---
speaker: "Shi Feng"
affiliation: "Harvard"
speakerUrl: "https://fengshi.link"
title: "Reveal Planning Capability of Autoregressive Learning in Large Language Models"
date: "2024-03-29"
term: "Spring 2024"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30 pm - 2:30 pm"
location: "SEC 1.413"
format: "in-person"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/reveal-planning-capability-autoregressive-learning-large-language-models-and-computing"
legacyEventId: "econcs-event-2024-03-29"
---

Search and planning are fundamental constructs of human intelligence, involved in almost every aspect of our daily lives, from completing tasks at work to organizing trips, to seeking mathematical proofs of theorems, and more. Studying the planning capabilities of large language models (LLMs) can help us understand the differences in the decision-making processes between humans and artificial intelligence. To do this, we first abstract planning as a path-finding problem in a network, analogous to real-world scenarios such as decision-making for multi-step tasks or proof planning for mathematical reasoning. We find that the transformer-based autoregressive model generally achieves high accuracy in the path-finding task. We discover that the model generates the next node on the path by learning and applying two matrices: the adjacency matrix and the reachability matrix, within its multi-layer perceptron (MLP). Our analysis shows that applying gradient descent to minimize the cross-entropy loss on the training data indeed leads to the construction of these two matrices. These findings shed light on how the internal mechanism of autoregressive learning achieves planning in networks, which may help us understand the general planning capability in other related domains.
