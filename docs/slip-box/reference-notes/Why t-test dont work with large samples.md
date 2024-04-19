---
tags:
  - statistics
"source:": https://stats.stackexchange.com/questions/105858/large-sample-size-for-t-test
---
- Usually, the goal of statistical tests is to show with high degree of confidence that an empirically estimated statistic is *similar* to a theoretically derived statistic
	- The null hypothesis (the two statistics are similar) and alternative hypothesis (the two statistics are not) are presented to represent this where:
	- $H_{null}: |\hat{\mu}-\mu| <=\Delta, H_{alt}: |\hat{\mu} - \mu| > \Delta$
	- The $p_{value}$ from the test is what is the likelihood that we can observe an value larger than the test-statistic under the static distribution from chance
		- It is used to reject the null hypothesis, if $p_{value} < \alpha$ 
		- We establish a critical value $\alpha$ that is the threshold for which we can evaluate the $p_{value}$ with 
		- ==The critical value should be established with the context of sample size==
- As the sample size $N$ increases, the standard error gets smaller and the test statistic gets larger and $p_{value}$ gets smaller
	- Then, the $\alpha$ needed to reject the null hypothesis needs to decrease because *any differences no matter how small* will be "significantly" different than the theoretical value
	- At some point the critical value $\alpha$ needs to be incredibly small for huge samples 
- A way to evaluate large samples is to calculate the confidence intervals and see if that embraces the theoretically derived statistic
- [[t-test]] is used to to measure the mean, [[z-test]] is to measure the mean when there is a large sample and the distribution is normal