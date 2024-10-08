- Median
	- the point where 50% of the data is above and below it
	- tradeoffs with mean is that it does not capture any skew in the data and is not affected by outliers
- Mean 
	- the expected value of the data
	- $\mu=\frac{1}{N}\Sigma(X_i)$
- Variance 
	- the spread of data
	- calculated like MSE but against the mean
	- $\sigma^2=\frac{1}{N}\Sigma(X_i - \mu)^2$
- Standard Deviation ($\sigma$ or $s$ for sample standard deviation)
	- the measure of spread in the data in the same unit as data
	- calculated like RMSE but against the mean
	- if calculating for the sample, correct with Bessel's correction (n-1) instead of N
	- $\sigma=\sqrt{\frac{1}{N}\Sigma(X_i - \mu)^2}$
- Standard Error 
	- measures the variability of an estimate from the true population parameter
	- **quantifies the uncertainty in the estimate of a population parameter**
	- formula varies depending the statistic, but a common one is for the mean
	- $SE=\frac{\sigma}{N}$
		- This is in the same units as the estimate so it is easy to interpret
		- **Confidence Intervals**: When constructing confidence intervals, the standard error is added to and subtracted from the sample statistic. Having both in the same units ensures that the resulting interval is meaningful and interpretable
- Sigma 
	- A normal distribution has ~68% of the data within 1 standard deviation from the mean 
- Percentile
	- divides the data into 100 parts, and the $nth$ percentile correspond to the the value which $n\%$ of the data falls below
	- the find this, you first find the position by: $P=n/100 \times (N+1)$ then locate the value corresponding to P
- Quartile
	- percentile at 25th, 50th (median), 75th 
	- to find this, first locate the median and then just take the median again of the lower half and upper half
- Skew
	- describes the asymmetry of the distribution, indicates if the data is more spread out on one side of the mean than the other
		- positive skew means the right tail is longer or fatter than the left, most of data is to the left of the mean, mean is greater than the mean
		- zero skew means the distribution is symmetrical
	- $Skewness=\frac{n}{(n-1)(n-2)}\Sigma(\frac{X_i-\bar{X}}{\sigma})^3$
- Kurtosis
	- describes the tail of the distribution, how different it differs from a normal distribution
		- positive (leptokurtic) kurtosis mean it is sharper than normal 
		- negative (platykurtic) kurtosis means it is flatter than normal 