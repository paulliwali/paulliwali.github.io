---
source:
  - https://towardsdatascience.com/chasing-statistical-ghosts-in-experimentation-3f393323a1c1
author:
  - Colin McFarland
tags:
  - statistics
  - machine-learning
---
# 📰 Summary (use your own words)


# ✍️ Notes
First ghost - its either significant or noise
- p value tries to answer the question - "what is the likelihood that the observed differences due to the null hypothesis?"
	- There is no such thing as "the test is nearly significant" or "work towards significance"
	- There is only significant or uncertain

Second ghost - the fallacy of session based metrics
- If there are users creating multiple sessions, then it is difficult to assert the required assumption of all sessions are independent
- This happens when you are measuring a rate metric which is defined by something other than what you randomized on, for example:
	- click through rate (total clicks / total impression) will be skewed if you are randomizing on users

Third ghost - multiple comparisons
- The more comparisons you make the hgiher your chances of seeing a false positive
- The standard practice of 95% confidence level means that we expect a false positive rate of 5% on a **single metric**
	- So, as soon as you look at more than one metric you increase the chance
	- So for a AA test, you would expect an increase in at least one false positive in any metric with an increase in the metrics you are tracking
- This also applies when testing multiple different treatments and also **applies when you break down the results into segments**
- To correct for this
	- You can adjust the significance threshold with Bonferroni correction

Fourth ghost - Peeking
- For any test, there is a chance of false positives (seeing a significant result randomly when there isn't). So if we peeked **and took action to stop the test** we would inflate our results artificially
- The AB testing statistics are only valid when you make one comparison only - they are based on the assumption that you will only make an inference using a snapshot of data at one particular, predetermined, point in time - peeking invalidates that
- To avoid this
	- peeking safely by not actioning
	- Use sequential hypothesis testing which doesn't require a fixed sample size or predetermined run time
	- Bayesian methods to not come to the wrong conclusion - refer to [[Is Bayesian AB testing immune to peeking]]