---
speaker: "Jeff Jiang"
affiliation: "Harvard University"
speakerUrl: "https://yanchenjiang.github.io"
title: "GemNet: Menu-Based, Strategy-Proof Multi-Bidder Auctions Through Deep Learning"
date: "2024-11-08"
term: "Fall 2024"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30 pm - 2:30 pm"
location: "SEC 1.413"
format: "in-person"
coauthors: "Tonghan Wang and David C. Parkes"
links:
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/gemnet-menu-based-strategy-proof-multi-bidder-auctions-through-deep-learning"
legacyEventId: "econcs-event-2024-11-08"
---

Automated mechanism design (AMD) uses computational methods for mechanism design. Differentiable economics is a form of AMD that uses deep learning to learn mechanism designs and has enabled strong progress in AMD in recent years. Nevertheless, a major open problem has been to learn multi-bidder, general, and fully strategy-proof (SP) auctions. We introduce GEneral Menu-based NETwork (GemNet), which significantly extends the menu-based approach of the single-bidder RochetNet (Dütting et al., 2024) to the multi-bidder setting. The challenge in achieving SP is to learn bidder-independent menus that are feasible, so that the optimal menu choices for each bidder do not over-allocate items when taken together (we call this menu compatibility). GemNet penalizes the failure of menu compatibility during training, and transforms learned menus after training through price changes, by considering a set of discretized bidder values and reasoning about Lipschitz smoothness to guarantee menu compatibility on the entire value space. This approach is general, leaving trained menus that already satisfy menu compatibility undisturbed and reducing to RochetNet for a single bidder. Mixed-integer linear programs are used for menu transforms, and through a number of optimizations enabled by deep learning, including adaptive grids and methods to skip menu elements, we scale to large auction design problems. GemNet learns auctions with better revenue than affine maximization methods, achieves exact SP whereas previous general multi-bidder methods are approximately SP, and offers greatly enhanced interpretability.
