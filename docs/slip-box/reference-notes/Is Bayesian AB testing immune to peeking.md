---
source:
  - http://varianceexplained.org/r/bayesian-ab-testing/
author:
  - David Robinson
tags:
  - "#statistics"
  - machine-learning
---
# 📰 Summary (use your own words)
The Bayesian AB testing approach does mitigate the problem of peeking but it *still increases the Type I error* which is not the promise that the Bayesian approach promises. Conversely, because the frequentist approach is promising a Type I error rate in the form of p-value testing, it is explicitly breaking that promise if we peeked **and** took action on the experiments. 

# ✍️ Notes
- We’ve concluded that **this advantage of Bayesian methods is overstated, or at least oversimplified.** Bayesian A/B testing is not “immune” to peeking and early-stopping. 
- Just like frequentist methods, peeking makes it more likely you’ll falsely stop a test. The Bayesian approach is, rather, _more careful than the frequentist approach about what promises it makes._
- Bayesian method is less concerned about the null hypothesis testing but rather **posterior expected loss: the average amount we would lose by switching from A to B**
	- Expected loss is the combination of how probably that B has a less click through rate, and if B is worse, how much worse it is on average 
	- If we peeked, we would still be increasing our Type I Error
	- However, Bayesian method doesn't make the promise of controlling for the Type I Error (unlike the frequentist approach)
- If you plotted the two curves of peeking and not-peeking against the expected loss of a perfect prior, you will find that both performance is below that line - but you would still experience an increase in Type I error
	- The goal set by the Bayesian approach was never violated
	- **Maybe the problem was that the goal of controlling for Type I error is misguided**
- However the downside of the Bayesian approach do exists
	- Doesn't concern about the expected gain, so null effects might be significant
	- 