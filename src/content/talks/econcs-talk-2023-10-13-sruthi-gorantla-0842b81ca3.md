---
speaker: "Sruthi Gorantla"
affiliation: "Indian Institute of Science, Bangalore"
speakerUrl: "https://sites.google.com/view/sruthigorantla/home"
title: "Ex-Post Group Fairness and Individual Fairness in Ranking"
date: "2023-10-13"
term: "Fall 2023"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30-2:30 PM ET"
location: "SEC 1.413"
format: "in-person"
coauthors: "Eshaan Bhansali, Amit Deshpande, Anand Louis, and Anay Mehrotra"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/ex-post-group-fairness-and-individual-fairness-ranking"
legacyEventId: "econcs-event-2023-10-13"
---

Fair ranking tasks, which ask to rank a set of items to maximize utility subject to satisfying group-fairness constraints, have gained significant interest in algorithmic fairness, information retrieval, and machine learning literature. Recent works identify uncertainty in the utilities of items as a primary cause of unfairness and propose randomized rankings that achieve ex-ante fairer exposure and better robustness than deterministic rankings. However, this still may not guarantee representation fairness to the groups ex-post. In this talk, we will first discuss algorithms to sample a random group-fair ranking from the distribution that satisfies a set of natural axioms for randomized group-fair rankings. Our problem formulation works even when there is implicit bias, incomplete relevance information, or only an ordinal ranking is available instead of relevance scores or utility values. Next, we will look at its application to efficiently train stochastic learning-to-rank algorithms via in-processing for ex-post fairness. Finally, we will discuss an efficient algorithm that samples rankings from an individually fair distribution while ensuring ex-post group fairness.
