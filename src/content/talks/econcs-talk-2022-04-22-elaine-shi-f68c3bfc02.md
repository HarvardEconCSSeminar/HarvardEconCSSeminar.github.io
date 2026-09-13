---
speaker: "Elaine Shi"
affiliation: "Carnegie Mellon University"
speakerUrl: "https://elaineshi.com"
title: "Foundations of Transaction Fee Mechanism Design"
date: "2022-04-22"
term: "Spring 2022"
startTime: "13:00"
endTime: "14:30"
timeLabel: "1:00–2:30 PM EDT"
location: "Online"
format: "virtual"
coauthors: "Hao Chung"
links:
  - label: "Paper"
    url: "https://arxiv.org/abs/2111.03151"
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/foundations-transaction-fee-mechanism-design"
legacyEventId: "econcs-event-2022-04-22"
---

Space in a blockchain is a scarce resource. Cryptocurrencies today use auctions to decide which transactions get confirmed in the block. Intriguingly, classical auctions fail in such a decentralized environment, since even the auctioneer can be a strategic player. For example, the second-price auction is a golden standard in classical mechanism design. It fails, however, in the blockchain environment since the miner can easily inject a bid that is epsilon smaller than the k-th price where k is the block size. Moreover, the miner and users can also collude through the smart contract mechanisms available in modern cryptocurrencies. I will talk about a new foundation for mechanism design in a decentralized environment. I will prove an impossibility result which rules out the existence of a dream transaction fee mechanism that incentivizes honest behavior for the user, the miner, and a miner-user coalition at the same time. I will then argue why the prior modeling choices are too draconian, and how we can overcome this lower bound by capturing hidden costs pertaining to certain deviations.
