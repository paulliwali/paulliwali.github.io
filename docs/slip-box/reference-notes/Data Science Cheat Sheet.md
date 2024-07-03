---
tags:
  - cheatsheet
  - data-science
  - machine-learning
---
> Inspired by this https://python-data-science.readthedocs.io/en/latest/_images/architecture.png

# MLOps flow
- Structure: DESIGN + MODEL DEVELOPMENT + OPERATIONS
- Design: requirements engineering, use case prioritization, data availability check
- Model development: data engineering, model engineering, testing and validation
- Operations: model deployment, CI/CD pipelines, monitoring and alerting

# Model Design
1. Exploratory Data Analysis
	- [[Descriptive Statistics]]
	- [[Distributions]]
	- Boxplots - gives descriptions of the data with min/max, IQR and median
		- Gives the 25th percentile to 75th percentile range which is the inter-quantile-range (IQR)
		- Also gives the min and max which is defined as Q1 - 1.5 * IQR or Q3 + 1.5 * IQR 
		- Outliers are outside of the min and max range
	- [[Correlations]]
1. Data Preparation
	1. Feature Preprocessing 
	    - Fill missing values or remove the column entirely if too many values are missing
		    - Impute with mean or median, interpolation with linear or other methods
	    - Remove outliers to ensure robustness of sensitive models 
		    - As identified in box plots
		- Encode features from string into integer
			- sine/cosine transformation to maintain cyclic relationships
	1. [[Split training and testing]] to avoid overfitting of the model the training data and avoid data leakage
	1. [[Feature Transformation Techniques]] to bring the distribution of the feature into a more normal like distribution
	1. [[Feature Scaling Techniques]] to bring features into the same space for model convergence
    1. [[Feature Engineering]] to create powerful features that is more informative for the model
    1. [[Class balancing]] to help models predict rare occurrences 
1. Model Selection
	- [[Supervised Learning]]
		- Regression
			- [[Linear Regression Model]]
			- Polynomial regression model
			- [[Quantile Regression]]
			- [[Tree Regressors]]
		- Classification
			- [[KNN]]
			- [[Naive Bayes]]
			- [[Support Vector Machines]]
			- [[Logistic Regression]]
			- [[Decision Trees]]
			- [[Tree Ensembles]]
	- Unsupervised Learning
		- [[Kernel Regression]]
		- [[k-means]]
		- [[Gaussian Mixture Models]]
		- [[DBSCAN]]
	- Semi-supervised Learning
	- Reinforcement Learning
	- [[Recommendation Systems]]
1. Model Fit
	- Loss Functions
		- L1 loss function (sum of the absolute errors) 
		- L2 loss function (sum of the squared errors)
		- Pinball loss function
	- Hyperparameter tuning result in change in model performance and combined with cross-validation techniques we can find the best set of hyperparameters
		- Grid Search
		- Random Search
		- Bayesian Optimization
1. Model Evaluation
	- Commonly used [[Error metrics]] to evaluate regression type models
    - Bias-variance tradeoff
	    - The best predictive model is one that has good generalization ability which is able to predict accurately to new and previously unseen data
	    - high bias can lead to okay performance but too general -> under-fit
	    - high variance can lead to low errors with existing data but not necessarily with new data -> overfit
	- [[Regularization Techniques]]
		- L1 regularization (LASSO) which reduces the coefficient values
		- L2 regularization (RIDGE) which penalizes higher powers
	- Model fit vs complexity
		- AIC
		- BIC
	- SHAPLY
1. Model Score
	- Score on unseen data as the true evaluation of the model
2. Serialization
	- Pickling of the entire process of fitted data preparation and fitted model parameters 

# Inference testing
- Using sample data to make conclusions about a population parameter
- [[Frequentist Inference Testing]]
- [[Bayesian Inference Testing]]

# Causal Inference
- Establishing cause-and-effect relationships. It aims to determine whether a change in one variable (the cause or treatment) leads to a change in another variable (the effect or outcome)
- [[AB Testing]]
- Difference in difference
	- Fit a regression to the two groups to the observed metric and the coefficient estimated is the difference

# Mathematics
- [[Bayes Theorem]]
- [[Linear Algebra]]