---
speaker: "Haichuan Wang"
affiliation: "Harvard University"
speakerUrl: "https://haichuan23.github.io"
title: "Reward Shaping for Inference-Time Alignment: A Stackelberg Game Perspective"
date: "2026-02-27"
term: "Spring 2026"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30pm - 2:30pm"
location: "SEC 1.413"
format: "in-person"
legacyEventId: "econcs-event-2026-02-27"
---

Existing alignment methods directly use the reward model learned from user preference data to optimize an LLM policy, subject to KL regularization with respect to the base policy. This practice is suboptimal for maximizing user's utility because the KL regularization may cause the LLM to inherit the bias in the base policy that conflicts with user preferences. While amplifying rewards for preferred outputs can mitigate this bias, it also increases the risk of reward hacking. This tradeoff motivates the problem of optimally designing reward models under KL regularization. We formalize this reward model optimization problem as a Stackelberg game, and show that a simple reward shaping scheme can effectively approximate the optimal reward model. We empirically evaluate our method in inference-time alignment settings and demonstrate that it integrates seamlessly into existing alignment methods with minimal overhead. Our method consistently improves average reward and achieves win–tie rates exceeding 66% against all baselines, averaged across evaluation settings. Our model extends the classical principal-agent problem to a KL-regularized agent.
