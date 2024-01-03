---
tags:
  - "#statistics"
  - machine-learning
"source:": https://machinelearningmastery.com/k-fold-cross-validation/
---
- A way to evaluate model's design on limited data set
	- Sometimes it can also be used to tune hyper-parameters
- General procedure
	1. Shuffle the training data
	2. Take training data and split into `k` groups
		> `k` is usually chosen to be around 10 and 5 as it is shown in practice to be good between bias-variance
	3. For each unique group: use the unique group as testing data and the rest of the groups as training data the model. Retain the evaluation metric
	4. Summarize the "skill" of the model using the evaluation metrics
- ==Important to avoid data leakage by preparing the data within the loop (i.e. standardization within the loop's training data and not on the broader dataset)==
- Variations of the k-fold are:
	- Leave one out cross-validation where one observation is held out
	- Stratified is where the folds are governed by some criteria of the data
	- Repeated is where the k-fold process is repeated and the data is shuffled prior to each repeat
	- Nested is where the k-fold is done within each fold and this is typically used for fine tune of the hyperparameters