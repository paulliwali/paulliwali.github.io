---
tags:
  - cheatsheet
---
Inspired by this https://python-data-science.readthedocs.io/en/latest/_images/architecture.png
1. Exploratory Data Analysis
2. Data Preparation
    - Outlier Removal
    - Feature Engineering
    - Sample Balancing or Imputation of NAN values
    - PCA
    - [[Scaling Techniques]] to bring features into the same space for model convergence
    - [[Split training and testing]] to avoid overfitting of the model the training data
3. Model Selection
	- [[Supervised Learning]]
		- [[Linear regression model]]
	- Unsupervised Learning
	- Semi-supervised Learning
	- Reinforcement Learning
4. Model Fit
	- Hyperparameter tuning
5. Model Evaluation
	- Commonly used to evaluate regression type models
        - Error metrics
        - Coefficient of determination (R squared)
    - Bias-variance tradeoff
	    - high variance can lead to low MSE but not necessarily a good model
6. Model Scoring
	- Score on unseen data
7. Serialization
8. Application