---
source:
  - https://www.evanmiller.org/how-not-to-run-an-ab-test.html
author:
  - Evan Miller
tags:
  - statistics
---
# 📰 Summary (use your own words)
- Frequentist approach to statistical tests significance can be prone to large sample size 

# ✍️ Notes
- Don't fall prey to "repeated significance testing errors"
- When a A/B test says there is a "95% of chance of beating the original" or "90% probability of statistical significance"
	- It is asking the question "what is the chance that we observe a difference like what we see in data randomly?"
	- And that is the significance threshold (0.05 or 0.01)
- However, this is precedent on a key decision -> **the sample size was fixed in advance**
	- Because might be tempted to take action *once we see significant results* and if that becomes insignificant later we wouldn't have known
- So the key is to determine a sample size *before the experiement*
	- One rule of thumb is $N=16*\frac{\sigma^2}{\delta^2}$ where $\delta$ is the minimum effect you want to observe
- For Bayesian A/B testing, this is less of a problem compared to the frequentist approach. But not completely fool-proof -> [[Is Bayesian AB testing immune to peeking?]]