---
speaker: "Yonatan Sompolinsky"
affiliation: "Harvard"
speakerUrl: "https://seas.harvard.edu/person/yonatan-sompolinsky"
title: "Competitive market design for transaction sequencing"
date: "2024-04-16"
term: "Spring 2024"
startTime: "13:00"
endTime: "14:00"
timeLabel: "1:00 pm - 2:00 pm"
location: "SEC 4.307"
format: "in-person"
coauthors: "Aviv Yaish"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/competitive-market-design-transaction-sequencing"
legacyEventId: "econcs-event-2024-04-16"
---

We tackle the problem of Miners Extracted Value (MEV), where a transaction sequencer extracts profit off users, by frontrunning pending transactions, sandwiching others, or carrying out any other form of ordering manipulations. Most transaction settlement services are designed such that, in each round, a single sequencer is granted full, unrestricted permission to sequence pending transactions. Accordingly, to undermine sequencer monopoly, we devise an auction that forces competition among sequencers, the proceedings of which are given as rebate to transaction issuers, compensating them for the value extracted at their expense. Our goal is to design an auction that will satisfy the property that, in equilibrium, the winning bid represents the value that the sequencer extracts from user transactions, and that the proceedings indeed flow to actual users. The core challenge in achieving this is the ease with which sequencers can disguise as users and issue "false item" transactions, and then assign high rebates to them, thereby deceiving the mechanism. Several standard auction designs fail to satisfy false-item-resistance, and a more involved approach is therefore needed.
