---
source:
  - https://medium.com/causal-data-science/causal-data-science-721ed63a4027
author:
  - foobar
tags:
  - data-science
  - statistics
---
# 📰 Summary (use your own words)


# ✍️ Notes
What *does* imply causation? The gold standard is a double-blind controlled trail (or the [[AB Testing]] equivalent) but if we can't perform such experiment what do we do?

## What is causality?

Correlation does not imply causation, but more importantly **there is no correlation without causation**. When there is a common cause between two things, they are likely correlated. This means **you need to control for common causes if you are trying to estimate a causal effect of one of the things**


The [[Bayesian Structured Time Series]] model uses the [Spike and slab](https://en.wikipedia.org/wiki/Spike-and-slab_regression) method to pick regressors
	- It uses two prior distribution for selecting a regressor and selecting the coefficient of the regressor
	- Then using a Markov chain to make posterior predictions to fit the time series