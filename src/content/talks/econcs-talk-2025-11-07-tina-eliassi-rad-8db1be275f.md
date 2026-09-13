---
speaker: "Tina Eliassi-Rad"
affiliation: "Northeastern University"
speakerUrl: "https://eliassi.org"
title: "The Trilemma of Truth in Large Language Models"
date: "2025-11-07"
term: "Fall 2025"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30pm - 2:30pm"
location: "SEC LL 2.221"
format: "in-person"
coauthors: "Germans Savcisens"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/trilemma-truth-large-language-models"
legacyEventId: "econcs-event-2025-11-07"
---

In our human-AI society, we often attribute human characteristics to large language models (LLMs) and claim that they "know" things. LLMs have an internal probabilistic knowledge base that represents information retained during training. How can we assess the veracity of this knowledge base? We examine two common methods for probing the veracity of LLMs and discover several assumptions that are flawed. To address these flawed assumptions, we introduce sAwMIL (short for Sparse Aware Multiple-Instance Learning), a probing method that utilizes the internal activations of LLMs to separate statements into true, false, and neither. sAwMIL is based on multiple-instance learning and conformal prediction. We evaluate sAwMIL on 5 validity criteria across 16 open-source LLMs, including both default and chat-based variants, as well as on 3 new datasets. We observe: (1) the veracity signal is often concentrated in the third quarter of an LLM's depth; (2) truth and falsehood signals are not always symmetric; (3) nonlinear probes may be required to capture veracity signals for some LLMs with reinforcement learning from human feedback or knowledge distillation; and (4) LLMs capture a third type of signal that is distinct from true and false. These findings provide a reliable method for verifying what LLMs "know" and how certain they are of their probabilistic internal knowledge. I will conclude the talk by outlining ongoing work on relevance and stability of knowledge in LLMs. This is joint work with Germans Savcisens.
