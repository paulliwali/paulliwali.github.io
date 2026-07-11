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

> Correlation does not imply causation, there is no correlation without causation

## Understanding Bias

How far are your results away from the truth. One of the causes for bias is not realizing there is a conditioning dependence. Even independent events can become conditionally dependent if the independent events causes a common effect. 

An example to illustrate this effect - if a company hires people who are either technically excellent or socially active. Then if you were to sample the employees of this company and **unconsciously conditioned on the fact that they are hired** which makes it such that if you know someone has great social skills then it makes it less likely they have great technical skill *even though the two are uncorrelated in the general population*. This is **selection bias**.

Bias due to common causes is called "confounding" factors. 

## When do you need causation and when is correlation enough

When can correlation give you the right answer that you want?

When you just need to understand which population can be observed to over-index for a trait, then selecting based on a correlated trait is okay. For example, to target people for selling pool toys it is okay to target those with high energy consumption since those two things are correlated.

When you want to intervene with one of the correlated variables (by setting it to something) to change the other, then you need causation. 

Because causation needs experiments while correlation can be found with observations, it is often faster to establish correlation. There is a special case when we get the speed of correlation and the power of causation -> when observation is equivalent to intervention -> **Correlation implies causation (and vice versa) whenever there is no bias.**

==This is more of an warning of the dangers of doing this, if you have to make a decision, then ask if there are any significant confounders, and if there is any significant selection bias.== 

## Primer on causality

To quantify causality in data analysis is the ultimate goal.

X -> Y is the way to describe causality in mathematics and it means that the joint distribution of X and Y can be simplified to: $P(X, Y) = P(Y|X)P(X)$

This can be built upon to create very interesting results but first let's build more intuition

Let's say X -> Y -> Z. Which could be a tangible example where X is the light switch, Y is the current in the wires and Z is the light bulb. If we 



The [[Bayesian Structured Time Series]] model uses the [Spike and slab](https://en.wikipedia.org/wiki/Spike-and-slab_regression) method to pick regressors
	- It uses two prior distribution for selecting a regressor and selecting the coefficient of the regressor
	- Then using a Markov chain to make posterior predictions to fit the time series