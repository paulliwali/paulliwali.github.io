Making an inference about a population based on a sample of data drawn from that population
# Hypothesis Testing
- Using sample data to evaluate a hypothesis about a **population parameter**
- Steps
	1. Formulate a null ($H_0$) and alternative ($H_1$) hypothesis where the null hypothesis says there is no difference or no effect
	2. Select a significance level ($\alpha$) which is the risk we are willing to reject null hypothesis when it might be true. In other words if we selected 5% we are saying that we accept a 5% chance that we are saying there *is an effect when there isn't* -> **type I error or false positive** 
		1. This gives a standardized statistic value to compare the test statistic against
	3. Calculate the test statistic from the appropriate test which gives the standardized value
		- t-test for mean difference of smaller samples ($n<30$)
			- one-sample t-test, independent two-sample t-test, paired sample t-test
			- one sample - $$\frac{x-\mu}{s/\sqrt{n}}$$
			- two sample - $$\frac{x_1-x_2}{\sqrt{s_p^2/n_1 + s_p^2/n_2}}$$
		- z-test for larger samples ($n>=30$)
			- $$\frac{x-\mu}{\sigma/\sqrt{n}}$$
		- ANOVA for difference in mean of multiple groups
		- Chi-squared test of independence for association between two categorical variables
			- $$X^2=\Sigma{(O-E)^2/E}$$
		- Chi-squared goodness of fit test for checking if observed frequency match expected frequency for a categorical variable
		- many more...
	4. Determine the p-value from the test result which is the *probability of obtaining the same test result at least as extreme as the observed result, assuming null hypothesis is true*
	5. Reject or accept the null hypothesis
		- If p-value is less than our accepted significance level, then it means we have strong evidence to reject the null hypothesis
# Confidence Interval
In this frequentist approach, we can derive a range of values from the sample data that we believe to contain the true population statistic with some level of confidence. 

Calculated by $\bar{X}\pm Z_{\alpha/2}(\frac{\sigma}{\sqrt(N)})$ taking the sample mean and adding/subtracting the normalized standard deviation multiplied by the critical value from standard normal distribution at the corresponding level of confidence

> There is a single value for the parameter and we are getting observed data about the parameter which gives us variance. We can provide the mean estimate of the parameter and a range in which if we repeat this experiment many times we are confident that 95% of the time the value falls within this interval 

# Prediction Interval
Associated with the variance of future values and gives the range which the forecasted value can fall 

# Criticism and drawbacks
- **p-Hacking**: Researchers may engage in p-hacking or data dredging, manipulating data or conducting multiple tests until they obtain a statistically significant p-value, which can lead to false positives
- **Fixed Thresholds**: The use of fixed significance levels (e.g., 0.05) is arbitrary and can lead to the binary decision-making of "reject" or "fail to reject" the null hypothesis without considering the context or the practical significance of the results.
- **No Direct Probability**: Frequentist methods do not provide the probability that a hypothesis is true or false. Instead, they provide a long-run frequency of observing data given a hypothesis, which can be less intuitive for decision-making.
- **Sample Size Sensitivity**: The results of frequentist tests can be highly sensitive to sample size. Large sample sizes can lead to statistically significant results even for trivial effects, while small sample sizes may fail to detect meaningful effects.
- **Focus on Null Hypothesis**: Frequentist testing often focuses on rejecting a null hypothesis rather than estimating the effect size or the practical importance of the findings.
- **Inflated Type I Error Rate**: Conducting multiple hypothesis tests increases the chance of obtaining false positive results (Type I errors) unless adjustments (like Bonferroni correction) are made.

See [[Bayesian Inference Testing]]