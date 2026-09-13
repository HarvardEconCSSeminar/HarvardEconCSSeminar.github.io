---
speaker: "Shuran Zheng"
affiliation: "Tsinghua University"
speakerUrl: "https://sites.google.com/view/shuran-zheng"
title: "Explaining Data Mixing Scaling Laws"
date: "2026-02-13"
term: "Spring 2026"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30pm - 2:30pm"
location: "SEC 1.413"
format: "in-person"
legacyEventId: "econcs-event-2026-02-13"
---

Recent research has established empirical scaling laws to predict model performance on multi-domain data mixtures. However, a theoretical understanding of these model loss behaviors remains absent. In this work, we propose a unified framework to explain the underlying mechanics of data mixing. Our approach extends theoretical perspectives originally developed for standard neural scaling laws (e.g., Kaplan and Chinchilla) to the multi-domain setting. Based on the distributional assumption that domains overlap on fundamental skills while diverging on specialized skills, we identify two key factors that decide the domain loss of models trained on different data mixtures: Capacity Competition, where the allocation of finite model capacity couples domain losses globally, and Noise Reduction, where optimal weights shift toward harder-to-learn domains to minimize variance. Experiments demonstrate that our framework fits the loss landscape with lower Mean Relative Error than existing empirical baselines and accurately predicts optimal training mixtures. Crucially, our model achieves these results using significantly fewer parameters.
