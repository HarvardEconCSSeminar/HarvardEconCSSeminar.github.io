---
speaker: "John Horton"
affiliation: "MIT"
speakerUrl: "https://john-joseph-horton.com"
title: "Automated Social Science: A Structural Causal Model-Based Approach"
date: "2024-04-12"
term: "Spring 2024"
startTime: "13:30"
endTime: "14:30"
timeLabel: "1:30 - 2:30 pm"
location: "SEC 1.413"
format: "in-person"
links:
  - label: "Paper"
    url: "https://benjaminmanning.io/files/rs.pdf"
  - label: "Original event listing"
    url: "https://econcs.seas.harvard.edu/event/automated-social-science-structural-causal-model-based-approach"
legacyEventId: "econcs-event-2024-04-12"
---

We present an approach for automatically generating and testing, in silico, social scientific hypotheses. This automation is made possible by recent advances in large language models (LLM), but the key feature of the approach is the use of structural causal models. Structural causal models provide a language to state hypotheses, a blueprint for constructing LLM-based agents, an experimental design, and a plan for data analysis. The fitted structural causal model becomes an object available for prediction or the planning of follow-on experiments. We demonstrate the approach with several scenarios: a negotiation, a bail hearing, a job interview, and an auction. In each case, causal relationships are proposed and tested, finding evidence for some and not others. In the auction experiment, we show that the in silico simulation results closely match the predictions of auction theory, but elicited predictions of the clearing prices from an LLM are inaccurate. However, the LLM’s predictions are dramatically improved if the model can condition on the fitted structural causal model. When given a proposed structural causal model for each of the scenarios, the LLM is good at predicting the signs of estimated effects, but it cannot reliably predict the magnitudes of those estimates. This suggests that simulations of social interactions give the model insight not available purely through direct elicitation. In short, the LLM knows more than it can (immediately) tell.
