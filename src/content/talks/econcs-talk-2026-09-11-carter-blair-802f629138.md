---
speaker: "Carter Blair"
affiliation: "Harvard University"
speakerUrl: "https://cartgr.github.io"
title: "Embeddings for Preferences, Not Semantics"
date: "2026-09-11"
term: "Fall 2026"
startTime: "13:00"
endTime: "14:00"
timeLabel: "1pm - 2pm"
location: "SEC 1.413"
format: "in-person"
coauthors: "Milind Tambe and Ariel Procaccia"
links:
  - label: "Paper"
    url: "https://procaccia.info/wp-content/uploads/2026/05/embeddings.pdf"
legacyEventId: "econcs-event-2026-09-11"
---

Modern AI is opening the door to collective decision-making in which participants express their views as free-form text rather than voting on a fixed set of candidates. A natural idea is to embed these opinions in a vector space so that the substantial literature on facility location problems and fair clustering can be brought to bear. But standard text embeddings measure semantic similarity, whereas distances in facility location problems and fair clustering require what we call preferential similarity: a participant’s agreement with a piece of text should be inversely related to their distance from it. Off-the-shelf embeddings inherit a coarse preference signal through a correlation between semantic and preferential similarity, but fail to capture preferences when the correlation breaks. We formalize this as an invariance problem: text embedding models encode both a preference-relevant signal (stance and values) and semantic nuisance (style and wording), and the two are observationally correlated, so a geometry that relies on nuisance can appear preference-correct even when it is not. We show that synthetic training data designed to break this correlation provably shifts the optimal scorer away from nuisance-dominated cosine and significantly improves preference prediction across 11 online deliberation datasets. This is joint work with Milind Tambe and Ariel Procaccia.
