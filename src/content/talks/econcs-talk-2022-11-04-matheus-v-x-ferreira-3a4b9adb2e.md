---
speaker: "Matheus V. X. Ferreira"
affiliation: "Harvard"
speakerUrl: "https://matheusvxf.github.io"
title: "Credible Decentralized Exchange Design via Verifiable Sequencing Rules"
date: "2022-11-04"
term: "Fall 2022"
startTime: "13:05"
endTime: "13:30"
timeLabel: "1:05–1:30 PM ET"
location: "SEC 1.413 and Zoom"
format: "hybrid"
links:
  - label: "Paper"
    url: "https://arxiv.org/pdf/2209.15569.pdf"
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/credible-decentralized-exchange-design-verifiable-sequencing-rules"
legacyEventId: "econcs-event-2022-11-04"
---

Trading on decentralized exchanges has been one of the primary use cases for permissionless blockchains with daily trading volume exceeding billions of U.S. dollars. In the status quo, users broadcast transactions and miners are responsible for composing a block of transactions and picking an execution ordering—the order in which transactions execute in the exchange. Due to the lack of a regulatory framework, it is common to observe miners exploiting their privileged position by front-running transactions and obtaining risk-free profits. Indeed, the Flashbots service institutionalized this exploit, with miners auctioning the right to front-run transactions. In this work, we propose to modify the interaction between miners and users and initiate the study of verifiable sequencing rules. As in the status quo, miners can determine the content of a block; however, they commit to respecting a sequencing rule that constrains the execution ordering and is verifiable (there is a polynomial time algorithm that can verify if the execution ordering satisfies such constraints). Thus in the event a miner deviates from the sequencing rule, anyone can generate a proof of non-compliance. We ask if there are sequencing rules that limit price manipulation from miners in a two-token liquidity pool exchange. Our first result is an impossibility theorem: for any sequencing rule, there is an instance of user transactions where the miner can obtain non-zero risk-free profits. In light of this impossibility result, our main result is a verifiable sequencing rule that provides execution price guarantees for users. In particular, for any user transaction A, it ensures that either (1) the execution price of A is at least as good as if A was the only transaction in the block, or (2) the execution price of A is worse than this ‘standalone’ price and the miner does not gain (or lose) when including A in the block. Our framework does not require parameter tuning, which is likely to improve user experience. In particular, the exchange does not need to charge trading fees, and users do not need to report a limit price or split a high volume transaction into smaller ones as a countermeasure against predatory trading strategies.
