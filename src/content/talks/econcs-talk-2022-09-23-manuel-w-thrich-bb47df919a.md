---
speaker: "Manuel Wüthrich"
affiliation: "Harvard"
speakerUrl: "https://imprs.is.mpg.de/person/mwuthrich"
title: "Representation with Incomplete Votes"
date: "2022-09-23"
term: "Fall 2022"
startTime: "13:30"
endTime: "13:55"
timeLabel: "1:30–1:55 PM ET"
location: "SEC 1.413 and Zoom"
format: "hybrid"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/designing-convex-surrogates-discrete-prediction-tasks-embeddings"
legacyEventId: "econcs-event-2022-09-23"
---

Platforms for online civic participation rely on methods for condensing thousands of comments into a relevant handful based on whether participants agree or disagree with them. We argue that these methods should guarantee fair representation of the participants, as their outcomes may affect the health of the conversation and inform impactful downstream decisions. To that end, we draw on the literature on approval-based committee elections. Our setting is novel in that the approval votes are incomplete since participants will typically not vote on all comments. We prove that this complication renders non-adaptive algorithms impractical in terms of the amount of information they must gather. Therefore, we develop an adaptive algorithm that uses information more efficiently by presenting incoming participants with statements that appear promising based on votes by previous participants. We prove that this method satisfies commonly used notions of fair representation, even when participants only vote on a small fraction of comments. Finally, an empirical evaluation on real data shows that the proposed algorithm provides representative outcomes in practice.
