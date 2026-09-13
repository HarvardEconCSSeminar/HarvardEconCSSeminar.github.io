---
speaker: "Paul Gölz"
affiliation: "Cornell University"
speakerUrl: "https://paulgoelz.de"
title: "Distortion of AI alignment: Does preference optimization optimize for preferences?"
date: "2025-12-12"
term: "Fall 2025"
startTime: "13:30"
endTime: "15:00"
timeLabel: "1:30pm - 3:00pm"
location: "SEC LL 2.221"
format: "in-person"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/1-simple-statistically-robust-test-discrimination-2-distortion-ai-alignment-does-preference"
legacyEventId: "econcs-event-2025-12-12"
---

After pre-training, large language models are aligned with human preferences based on pairwise comparisons. State-of-the-art alignment methods (such as PPO-based RLHF and DPO) are built on the assumption of aligning with a single preference model, despite being deployed in settings where users have diverse preferences. As a result, it is not even clear that these alignment methods produce models that satisfy users on average — a minimal requirement for pluralistic alignment. Drawing on social choice theory and modeling users’ comparisons through individual Bradley-Terry (BT) models, we introduce an alignment method’s distortion: the worst-case ratio between the optimal achievable average utility, and the average utility of the learned policy. The notion of distortion helps draw sharp distinctions between alignment methods: Nash Learning from Human Feedback achieves the minimax optimal distortion of (1/2+o(1))·β (for the BT temperature β), robustly across utility distributions, distributions of comparison pairs, and permissible KL divergences from the reference policy. RLHF and DPO, by contrast, suffer ≥(1−o(1))·β distortion already without a KL constraint, and e^Ω(β) or even unbounded distortion in the full setting, depending on how comparison pairs are sampled.
