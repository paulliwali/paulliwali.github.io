**Law of large numbers**
- Ensures that empirical averages computed from large samples are good estimates of the population mean
**Central limit theorem**
- Enables the assumption of normally distributed data from a large sample even if the population is not normally distributed 

# Normal Distribution (Gaussian)
- A symmetrical bell shaped distribution where 68% of data fall within 1 standard deviation, 95% fall within 2 standard deviations and 99.7% fall within 3 standard deviations
- The PDF is given by $f(x|\mu, \sigma)=\frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
	- $e$ is the natural exponent ([[Euler's number]])
- A special case is the **standard normal** (also called z-distribution)
	- where the mean is 0 and standard deviation is 1, so is variance
	- denoted as $N(0, 1)$  
- z-score is a measure that describes a value's relative position to the mean of a group of values, or **how many standard deviation away from the mean it is**
	- $Z=\frac{x-\mu}{\sigma}$
- Key properties
	- a linear combination of normally distributed variables are also normally distributed 
	- **Central limit theorem**
	- transformation - non-normal distributions can be transformed to follow normal using log transform, square root or box-cox transformation -> [[Feature Transformation Techniques]]
- Applications
	- Many ML and statistical inference techniques assume the data follows a normal distribution
# Binomial Distributions
- A *discrete* probability distribution which models the number of successful outcome of independent Bernoulli trails, often used to model situations where there are exactly 2 outcomes 
	- The distribution gives the probability of having $k$ successes out of $N$ trails given a success probability of $p$ and failure of $q=1-p$
	- calculated by $P(X=k)=\binom{N}{k}(p^k)(1-p)^{(n-k)}=\binom{N}{k}(p^k)(q^{(n-k)})$
		- $\binom{N}{k}$ is the binomial coefficient representing the number of ways of choosing $k$ out of $N$ trails calculated by $\frac{N!}{k!(n-k)!}$
		- factorials are the product of all positive integers equal and less than the number
		- factorial simplifications
			- 15!/3! = 5!
- The properties of the distribution are: mean ($\mu=Np$), variance $(\sigma^2=np(1-p))$, and standard deviation ($\sigma=\sqrt{np(1-p)}$)

# Poisson Distribution
- A *discrete* probability distribution which models the number of times something will happen within a period
- Assumptions
	- The occurrence rate is a known constant ($\lambda$)
	- The events occur independently from each other
- Gives the probability of observing *exactly* $k$ events in interval
	- calculated by $P(X=k)=\frac{e^{-\lambda}\lambda^k}{k!}$
- Applications
	- Queueing theory to model the number of customers arriving
	- Epidemiology to model the number of rare diseases or occurrence in a population
	- Manufacturing to estimate the number of defects in a batch of products
- Relation to other distributions
	- The poisson distribution is a limiting case of the binomial distribution where $n$ is large and $p$ is small and $np=\lambda$ remains constant
	- The inter-event time follows an exponential distribution with parameter $\lambda$ 