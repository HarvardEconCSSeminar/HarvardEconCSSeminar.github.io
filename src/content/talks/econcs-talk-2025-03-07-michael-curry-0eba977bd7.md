---
speaker: "Michael Curry"
affiliation: "Assistant Professor at The University of Illinois, Chicago"
speakerUrl: "https://currymj.github.io"
title: "Truthful aggregation of llms with an application to online advertising"
date: "2025-03-07"
term: "Spring 2025"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30pm - 2:30pm"
location: "SEC LL 2.221"
format: "in-person"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/truthful-aggregation-llms-application-online-advertising"
legacyEventId: "econcs-event-2025-03-07"
---

The next frontier of online advertising is revenue generation from LLM-generated content. We consider a setting where advertisers aim to influence the responses of an LLM to align with their interests, while platforms seek to maximize advertiser value and ensure user satisfaction. The challenge is that advertisers' preferences generally conflict with those of the user, and advertisers may misreport their preferences. To address this, we introduce MOSAIC, an auction mechanism that ensures that truthful reporting is a dominant strategy for advertisers and that aligns the utility of each advertiser with their contribution to social welfare. Importantly, the mechanism operates without LLM fine-tuning or access to model weights and provably converges to the output of the optimally fine-tuned LLM as computational resources increase. Additionally, it can incorporate contextual information about advertisers, which significantly improves social welfare. Through experiments with a publicly available LLM, we show that MOSAIC leads to high advertiser value and platform revenue with low computational overhead. While our motivating application is online advertising, our mechanism can be applied in any setting with monetary transfers, making it a general-purpose solution for truthfully aggregating the preferences of self-interested agents over LLM-generated replies.
