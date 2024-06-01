---
tags:
  - cheatsheet
  - data-science
---
> Inspired by this https://python-data-science.readthedocs.io/en/latest/_images/architecture.png

MLOps flow: DESIGN + MODEL DEVELOPMENT + OPERATIONS
- Design: requirements engineering, use case prioritization, data availability check
- Model development: data engineering, model engineering, testing and validation
- Operations: model deployment, CI/CD pipelines, monitoring and alerting

1. Exploratory Data Analysis
	- [[Distributions]]
	- Boxplots
		- Gives the p25 to p75 range which is the IQR
		- Also gives the min and max which is defined as Q1 - 1.5 * IQR or Q3 + 1.5 * IQR 
	- Correlations
1. Data Preparation
	1. Feature Preprocessing 
	    - Fill missing values or remove the column entirely if too many values are missing
		    - Impute with mean or median, interpolation with linear or other methods
	    - Remove outliers to ensure robustness of sensitive models 
		    - As identified in box plots
		- Encode features from string into integer
			- sine/cosine transformation to maintain cyclic relationships
	1. [[Split training and testing]] to avoid overfitting of the model the training data and avoid data leakage
	1. [[Feature Scaling Techniques]] to bring features into the same space for model convergence
    1. [[Feature Engineering]] to create powerful features that is more informative for the model
    1. [[Class balancing]] to help models predict rare occurrences 
1. Model Selection
	- [[Supervised Learning]]
		- Regression
			- [[Linear regression model]]
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
	- [[AB Testing]]
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
	- Commonly used to evaluate regression type models
        - [[Error metrics]]
    - Bias-variance tradeoff
	    - The best predictive model is one that has good generalization ability which is able to predict accurately to new and previously unseen data
	    - high bias can lead to okay performance but too general -> underfit
	    - high variance can lead to low errors with existing data but not necessarily with new data -> overfit
	- [[Regularization Techniques]]
		- L1 regularization (LASSO) which reduces the coefficient values
		- L2 regularization (RIDGE) which penalizes higher powers
1. Model Score
	- Score on unseen data as the true evaluation of the model
1. Serialization
	- Pickling of the entire process of fitted data preparation and fitted model parameters 