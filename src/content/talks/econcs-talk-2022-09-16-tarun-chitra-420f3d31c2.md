---
speaker: "Tarun Chitra"
affiliation: "Gauntlet"
speakerUrl: "https://tarunchitra.com"
title: "Towards a Theory of Maximal Extractable Value I: Constant Function Market Makers"
date: "2022-09-16"
term: "Fall 2022"
startTime: "13:00"
endTime: "14:00"
timeLabel: "1:00–2:00 PM ET (talk starts sharply at 1:05 PM)"
location: "Online"
format: "virtual"
links:
  - label: "Paper"
    url: "https://arxiv.org/abs/2207.11835"
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/towards-theory-maximal-extractable-value-i-constant-function-market-makers"
legacyEventId: "econcs-event-2022-09-16"
---

Maximal Extractable Value (MEV) represents excess value captured by miners (or validators) from users in a cryptocurrency network. This excess value often comes from reordering users transactions to maximize fees or inserting new transactions that allow a miner to front-run users’ transactions. The most common type of MEV involves what is known as a sandwich attack against a user trading on a popular class of automated market makers known as CFMMs. In this first paper of a series on MEV, we analyze game theoretic properties of MEV in CFMMs that we call reordering and routing MEV. In the case of reordering, we show conditions when the maximum price impact caused by the reordering of sandwich attacks in a sequence of trades relative to the average price impact is O(logn) in the number of user trades. In the case of routing, we present examples where the existence of MEV both degrades and counterintuitively improves the quality of routing. We construct an analogue of the price of anarchy for this setting and demonstrate that if the impact of a sandwich attack is localized in a suitable sense, then the price of anarchy is constant. Combined, our results provide improvements that both MEV searchers and CFMM designers can utilize for estimating costs and profits of MEV.
