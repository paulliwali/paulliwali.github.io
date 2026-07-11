* Metadata
	* #machine-learning #data-science 
* Rule 1 of [[Google 43 rules of machine learning]] is "Don't be afraid to launch a product without machine learning"
	- Because the amount of data required for a good machine learning algo
- So if ML gives you 100% improvement, a heuristic will often give you 50%
- Also it is good to start off without ML to get familiar with the problem and underlying data
- Things to start with
	- Correlations with scatter plots (if data is numerical), box plots (if data is categorical)
	- Recommendations based on previous period ([Alibaba's swing algorithm](https://eugeneyan.com/writing/real-time-recommendations/#industry-examples-of-real-time-recommendations))
	- Classification based on regex
	- Spam identification with review timing, similarity
	- Outlier identification with interquartile range
	- Forecasting with moving average
- Heuristics can also help with labelling data when starting from scratch (weak supervision)
> When you have a problem, build two solutions - a deep Bayesian transformer running on multi-cloud Kubernetes and a SQL query built on a stack of egregiously oversimplifying assumptions. Put one on your resume, the other in production. Everyone goes home happy.