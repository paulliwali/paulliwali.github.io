- Metadata
    - Source: https://github.com/ageron/handson-ml
    - #learning #machine-learning #data-science #books
# Preface
- The wave of machine learning is started in 2006 when Geoffrey Hinton published a paper on the practicality of training a deep neural network with "Deep Learning"
- Will learn to use [[Scikit-Learn]], [[TensorFlow]], [[Keras]]
- Roadmap of the book
	- Part I - The Fundamentals of Machine Learning (focused on [[Scikit-Learn]])
		- What ML is
		- **Steps to a typical ML project**
		- Cost function and how to optimize it
		- Data wrangling
		- Feature selection and engineering
		- (Hyper)parameter tuning, model selection via cross-validation
		- Challenges of ML
		- Common/Traditional ML algorithms
		- Reducing dimensionality
		- Unsupervised ML algorithms
	- Part II - Neural networks and deep learning (focused on [[TensorFlow]] and [[Keras]])
		- What neural nets are
		- Build and train NN with [[TensorFlow]] and [[Keras]]
		- Important NN architectures
		- Techniques for training deep NN
		- RL to build a bot
		- Loading and preprocessing big data
		- Training and deploying [[TensorFlow]] at scale
# Chapter 1. The Machine Learning Landscape
- Machine learning is to improve the ability of doing a certain task with experience, measured by a performance metric
- Main types of ML
	- Whether they are trained under human supervision (supervised vs unsupervised)
	- Whether they can learn incrementally on the fly (online vs batch learning)
	- Whether they work by comparing data points or detecting patterns in the data (instance based or model based)
- The segmentation for human supervision are
	- Supervised learning
		- Training data includes labels, which are the ground truths
		- These are good for classification problems (spam vs ham) or regression problems (price of house given a set of features)
	- Unsupervised learning
		- Training data __does not__ have labels
		- These are good for detecting patterns like clustering problems (k means) or anomaly detection or dimensionality reduction or association rule learning problems
		- Dimensionality reduction is an important technique in ML, that simplify the data without losing information - several features can merge into one because they are related (feature extraction)
		- Association rule learning is to learn relationships between attributes from data
			- Supermarket putting two items in the same isle to promote sales
	- Semisupervised learning
		- Labelling all the data is expensive, so you can combine labelled and unlabelled data together to partially labelled data
	- Reinforcement learning
		- An agent observes the environment and makes an action, which the system rewards or penalizes
		- Using this feedback, the agent develops a strategy (policy) to maximize rewards over time
- Learning from training data can be done all at once or incrementally
	- Batch learning
		- Learn from all the data and use the model in application
		- Good when data is not continuous
	- Online learning
		- Learn data as small batches
		- Good when resources are limited and data is constantly streaming in
		- Beware of learning from bad data, close monitoring is required. Also optimizing learning rate to carry inertia or react to new data requires thought
		- ==out-of-core== learning is to artificially break large data sets into small batches and trained with this method
- How well the model generalize the training into application
	- Instance-based learning
		- Makes predictions by comparing them with examples in the data
	- Model-based learning
		- Makes predictions with a model
- Main Challenges of ML
	- Bad data
		- Michele Banko and Eric Brill (Microsoft) published a [paper](https://dl.acm.org/doi/10.3115/1073012.1073017) in 2001 that showed that if given enough data the simple models perform just as well as complex ones
		- Small datasets have **sampling noise** and **sampling bias**
			- An famous example of sampling bias was during the 1936 US election, Literary Digest conduct a very large survey on the voter's preference for Landon and Roosevelt
				- The sampling method was flawed because the sampling population was mostly wealthier who favoured Landon (Republican)
				- Less than 25% of the original population answered, introducing ==nonresponse bias==
		- Cleaning up training data by removing outliers and incomplete data may help with training
		- Using irrelevant features
	- Bad algorithm
		- Overfitting on training data and coming to a general conclusion that is not true about the population
		- NN will be able to detect subtle relationships in data, but any noise or bias may cause it to capture these relationships incorrectly
		- Under-fitting on training data will also lead to false conclusions about the population
- Testing and validation
	- Using a test sample to evaluate the performance of the algorithm by looking at the generalized or out-of-sample error rate
		- If training error is low but out-of-sample error is high, then the model has overfitted the data
	- It is also common to tune hyperparameters to reduce this out-of-sample error but now you have just adapted the model to the testing data
		- ==So it is common to have another hold-out set for validation==
		- However, since there may not be enough data to do all three tasks - a technique called "cross-validation" is used to shuffle training/test/validation sets so the hyperparameters can be tuned and then the final set of hyperparameters is used on the training set and validated on the validation set
	- #til2021 No Free Lunch Theorem
		- David Wolpert in a famous paper (1996) showed that if you make no assumptions about the data, there is no reason to choose one model over another
		- There is no way to know ahead of time that one model will work better than another
		- Thus, to practically build models you have to make some assumptions
# Chapter 2: End to End Machine Learning Project
- To measure the performance of a model common metrics are RMSE and MAE, **which measures the distance between prediction and actual**
	- Root mean squared error (RMSE)
		- $$\sqrt{\frac{1}{m} \sum{\hat{y} - y}}$$
		- Standard metric, but is prone to outliers
	- Mean absolute error (MAE)
		- $$\frac{1}{m}\sum{|\hat{y} - y|}$$
- Data preparation: Splitting training, test and validation set is critical to not overtrain the model
	- Naively splitting doesn't work because every time you split you may end up with different splits and that doesn't give reproducible results and the algorithm will see the entire dataset if it is continuously trained
	- Sampling bias might be introduced if the distribution of the respondents is not representative of the general population, so **stratified sampling** is used to overcome this
- Data exploration: correlation coefficients, matrix
	- `corr()` simply calculates the __linear correlation__ between various features
	- Ranges from -1 and 1 which denotes negative correlation and positive correlation
	- A value close to 0 means no linear correlation, ==which doesn't rule out other correlations==
	- ![pearson's correlation figure](https://en.wikipedia.org/wiki/File:Correlation_examples2.svg)
	- **The goal here is to identify data quirks to remove/clean before feeding into the training**
- Feature engineering: cleaning, transforming, combining attributes
	- Feature cleaning involves removing empty values from the dataset
		- There are three options for missing features: remove the data entry, remove the feature, or set values to median, mean or zero
		- **It is important to do this only for the training set**
			- For mean/median calculation, they should be computed on the training set but also applied to the test set when testing the accuracy
		- `sklearn.impute.SimpleImputer` takes care of imputing missing values
	- Feature generation involves combining features into more useful ones such as normalizing certain features with another to give more context
	- Feature transformation involves changing features into different forms that is suitable for ML
		- Convert text categories into numbers
			- `sklearn.preprocessing.OrdinalEncoder` which turns text into ranked list, but ML will assume two close by values are similar
			- `sklearn.preprocessing.OneHotEncoder` which turns text in to dummy attributes and doesn't imply close by values matter
		- If one-hot encoding is resulting in a large number of input features and slowing down ML performance, ==you can replace categorical input with useful numerical features==
			- i.e. Country code can be proxied with GDP or population
			- i.e. Ocean proximity can actually be distance in meters
			- ==Or you can replace each category with a learnable low dimensional vector called an embedding==
	- Feature scaling shifts the values in a feature for ML
		- **Usually, ML doesn't perform well on datasets with features in various scales**.
		- Min-max scaling (aka **normalization**) changes values such that it is between two values, most commonly 0 and 1
		- Standardization scaling changes the values such that the mean is 0 and distribution has a unit variance
- [[Scikit-Learn]] - Core API design principles
- Select and Train a Model
	- Linear regression model
		- A good baseline model to compare others too
		- Might underfitting the data
		- Main ways to fix under-fitting is selecting a more powerful model, to feed the training algorithm with better features, or to reduce the constraints on the model.
	- Decision Tree Regressor
		- A powerful model that is capable of finding nonlinear relationships in data
		- Easy to overfit, so use cross-validation to evaluate the models
	- Random Forest Regressor
		- Training many decision trees on random subsets of the feature, then averaging out their predictions
		- A kind of **ensemble learning** which is building a model on top of many other models
	- Others to try are Support Vector Machines or even Neural Networks
	- At this stage, one should aim to shortlist a few high potential models
		- To save their hyperparameters and trained parameters we can use `pickle` or `joblib` from sklearn
- Fine Tune Your Model
	- Once you have a shortlist of models, we need to fine tune each one though grid search, randomized search, ensemble methods
	- Grid Search
		- Programmatically search through all the hyperparameter combinations using `GridSerachCV`
		- When you don't have a good sense of the grid to search with, a good approach is consecutive powers of 10
		- Once the grid search is done, find the best combination of parameters by `grid_serach.best_params_` and see if they are the upper limit of the grid you setup
			- Try searching again if they are the maximum values in the grid
	- Randomized Search
		- Grid search is a good option when the space is limited, but if the search space is large then we can use `RandomizedSearchCV` instead
		- It can search for more combinations with less cost
	- Ensemble Methods
		- Combining models that perform the best since a group of model will often perform better than the best individual model
		- Analyze the best model by inspecting their feature importance and dropping the ones that is less important
- Evaluate Final Model on Test Set
	- Prepare the reserved test data set the same way and fit it through the estimator
	- Be sure to only `transform()` and not `fit_transform()`
	- Also generalize the error in production with a confidence interval to get a sense of the variations in the error
	- Performance will usually be slightly worse on test set than on training set, but not always
- Launch, Monitor and Maintain Your Model/System
	- Plugging the production input data into the system and writing tests
	- Write monitoring code to check your system's live performance at regular intervals and trigger alerts when it drops
		- Models tend to 'rot' as data evolves over time (or drift)
	- Evaluating your system's performance will require sampling the system's prediction and evaluating them
	- Evaluate the systems input data quality
	- Retrain the model on a regular basis using fresh data
# Chapter 3: Classification
- MNIST dataset is the "Hello World" of ML, a dataset of handwritten digits
- Scikit-Learn provides this dataset as part of the library `fetch_openml('mnist_784', version=1)`
	- Datasets from Scikit-Learn generally have a similar dictionary structure that includes `DESCR` key describing the dataset, `data` key containing an array with one row per instance and one column per feature, `target` key containing an array with the labels
- Binary Classifier
	- ==Able to identify one thing by distinguishing between that thing and not-that-thing==
	- Scikit's Stochastic Gradient Descent (SGD) classifier is a good place to start
		- It can handle large datasets efficiently
		- Also suited for online training because it deals with one instance at a time
		- It relies on randomness and shuffled data so it is not suited for any time-series analysts
- Evaluating Classifiers
	- A trickier subject compared to evaluating regressors
	- Cross-validation
		- Similar to how we evaluated the regression model
		- But can be problematic on __skewed datasets__
	- Confusion matrix
		- A better way to examine a classifier
		- **Precision** is the measure of how many true positives were predicted out of all the predicted positives
			- $$Precision = \frac{TP}{TP + FP}$$
		- **Recall** is the measure of how many true positives were predicted out of all the actual positives
			- $$Recall = \frac{TP}{TP + FN}$$
		- **F1 Score** is the combined metric of precision and recall. This will favor model that balances both metrics however that may not always be true
		- Precision/Recall Tradeoff
			- When you increase precision, you will decrease recall
			- This is because a classifier like SGDClassifier has a decision function that determines the threshold of where to assign the positive and negative instances
			- To determine what the ideal threshold for the decision function, we can plot the **precision recall curve**
		- ROC Curve
			- The receiver operating characteristic curve is another way to tune the classifier
			- It plots the `true-positive rate (recall)` against `false-positive rate`
				- False-positive rate is `1 - specificity (true-negative rate)`
			- Thus, it plots sensitivity (recall) against 1 - specificity
			- Usually it is plotted against a diagonal which represents a random classifier and **good classifiers will be as far away from the diagonal as possible**
			- The area under the curve (AUC) is another metric to quantify the performance, a perfect classifier will have an AUC of 1.0 and random classifier will have an AUC of 0.5
		- ==Use PR curve when positive class is rare and you care about false positives, and ROC curve when negative class is rare==
	- Error analysis
		- After going through the machine learning checklist you arrive at the fine tuned model, you want to understand what kind of error it is producing
		- Use the confusion matrix
- Multi-class Classifier
	- Distinguishes between many classes
	- These can be native multi-class classifiers like RandomForestClassifier or naive Bayes classifier, or multiple binary classifiers can be combined to do this like Support Vector Machine classifier or Vector Classifier
	- One-versus-all (OvA) strategy
		- Train n binary classifiers for each of the n classes
		- Pick the classifier that gives the highest score
	- One-versus-one (OvO) strategy
		- Train $$n \times \frac{n-1}{2}$$ binary classifiers for each pair of classes
		- The benefit of this strategy is that you only need to train on data with the two classes
		- The disadvantage is that it scales non-linearly as the number of classes increases
	- OvO is preferred with classifiers that are more efficient on smaller datasets (SVM)while OvA is preferred most other binary classifiers
		- Scikit-learn will automatically optimize the strategy for the classifier
- Multilabel Classifier
	- Provide multiple outputs for an input
	- Evaluating this classifier can be measuring F1 score for each individual label then compute the average score
- Multioutput Classifier
	- Generalizes the multi-class classification where each label can be multi-class
	- A example would be a system that removes noise from images which means it outputs multiple labels with various values for each label
# Chapter 4: Training Models
- Understanding how the models work under the hood
- [[Linear Regression Model]]
	- There are two ways to train linear regression models
	- A closed-form [[Normal Equation]] to compute parameters that best fit the model to the training set and **iterative optimization approach [[Gradient Descent]] that gradually tweaks the parameters to minimize the cost function over the training set**
- [[Polynomial regression model]]
	- More complex as it can fit non-linear dataset and since it has more parameters than linear regression it is prone to __overfitting__ the training set
	- To overcome this, we will detect this using [[learning curves]] and reduce the risk of overfitting with [[Regularization Techniques]]
- Machine learning model's errors can be expressed as the sum of three different errors
	- ==Bias==: from wrong assumptions
	- ==Variance==: from excessive sensitivity to small variations in the data, likely from high degrees of freedom
	- ==Irreducible errors==: from noise in the data itself, fixed by cleaning
	- There is a tradeoff between these three error sources, increasing a model's complexity will increase variance and reduce bias and vice versa
- Logistic regression model
	- To estimate probability that an instance belongs to a particular class
	- Works by computing the weighted sum of the features (+ bias term) and apply the __logistic__  to the result
		- A **sigmoid function** that produces a number between 0 and 1
		- $$\sigma(t) = \frac{1}{1+exp(-t)}$$
		- logit is the inverse of the logistic
	- To train a logistic model we have to use gradient descent because there is no close form equation
	- Can also be regularized to prevent overfitting
- Softmax regression model
	- Also known as **multinomial logistic regression**, which supports multiple classes
	- Applies a normalized exponential equation (softmax) to the score of each class
		- The score is computed like a linear regression
		- Softmax equation: $$\hat{p}=\frac{exp(s_k(x))}{\sum_{j=1}^{K}=exp(s_j(x))}$$
			- Where $K$ is the number of classes, $s(x)$ is the vector of the scores for each class, $\hat{p}$ is the estimated probability that the instance $x$ belongs to $k$
# Chapter 5: Support Vector Machines
- SVM is capable of linear and nonlinear classification, regression and outlier detection
	- One of the most popular ML models
- Linear SVM Classification
	- Fitting the largest possible gap between two classes with a __straight line__
	- The __support__ comes from the instances located on the edge of this gap
		- Adding more instances outside will not affect the decision boundary
	- ==Very sensitive to scale, so always be sure to feature scale the dataset for linear SVM classification==
- Soft Margin Classification
	- A more flexible model that allows for instances that end up in the boundary or on the wrong side
- Nonlinear SVM Classification
	- When a dataset is not linearly separable on one feature, you can introduce more features to result in a linearly separable dataset
	- There are a few ways to add more features
		- Polynomial Kernel
			- ==A way to add many polynomial features without actually adding them so the feature set does not explode==
		- Adding Similarity Features
			- Measures how much each instance resembles a particular **landmark**
			- Similarity can be measured with the **Gaussian Radial Bias Function (RBF)**
			- And when the features are transformed to the similarity values, the instances become linearly separable
- SVM Regression
	- Instead of fitting a gap __between__ the instances, you fit the __gap__ to cross the most instances
# Chapter 6: Decision Trees
- Can perform both classification and regression modeling
- Building blocks of Chapter 7: Random Forests
- To make a prediction with decision tree you go through nodes and you move down the tree's nodes until you reach the final node that gives the prediction
- Classification and Regression Tree (CART) Algorithm
	- Splits the training set using a single feature `k` and threshold `t_k` by searching for the pair that produces the purest set
	- It recursively splits the subsets until it reaches the maximize depth
	- It is a greedy search
- Decision trees are prone to over-fitting because it is *nonparametric*
	- The number of parameters is not determined prior to training
	- Needs to be regularized to avoid overfitting
- Instabilities with decision tree
	- loves orthogonal decision boundaries, which creates overfitting
# Chapter 7: Ensemble Learning and Random Forests
- Ensemble learning is equivalent to the "wisdom of the crowd" where you take a group of predictors and their aggregated answer
- An ensemble of decision trees is a random forest
	- Each tree is trained on a subset of data and they are aggregated together to make the prediction
- ## Voting Classifiers
	- The final prediction is made based on the most voted result from the predictors
	- Surprisingly can make a strong learner from a group of weak learners
- Ensemble methods work best with diversity
	- One way is to diversify the training algorithms, the more varied they are the better
	- Another way is to use the same algorithm but train on different subset of data - this is called "bagging"
- ## Bagging and Pasting
	- Short for "bootstrap aggregating"
	- When it is done without replacement then its called pasting
	- Out-of-bag instances are the ones sampled by bagging, however there are some instances that will never be sampled which can be used for evaluations
- ## Random Forests
	- Ensemble of decision trees, usually trained via the bagging method
	- Has ways to introduce randomness to create more tree diversity
	- Feature importance is easily computed with random forests
- ## Boosting
	- Any ensemble method that combines several weak learners to a strong learner
	- General idea is to train predictors sequentially, each trying to correct its predecessor
	- AdaBoost
		- Focusing on the training instances that the predecessor under-fitted
		- Resulting in new predictors more focused on harder cases
	- Gradient Boosting
		- Unlike AdaBoost, instead of adjusting the instance weights at every iteration, this method fits to the residual error made by the previous predictor
	- Stacking
		- Instead of using trivial functions (hard voting) to aggregate the predictions, why don't we train a model to perform this aggregation
		- There is a final predictor after the layer of predictors called blender (or meta learner) that takes it all to make the last prediction
# Chapter 8: Dimensionality Reduction
- Curse of dimensionality is when the problem has too many features
	- High dimensional datasets are also very sparse
	- Which leads to overfitting (a problem we always try to avoid)
	* **Projection**
		* problems in the real-world often don't have evenly spaced out features
		* most features are static, many are correlated
		* this means that features can be reduced to a lower subspace
			* **watch out for data in a swiss roll shape that would just be squashed**
	* **Manifold Learning**
		* Something that is d dim but rolled in the d+1 dim
		* These algorithms works by learning the manifold on which it lies
	* Principal component analysis
		* Identifies the hyperplane the data lies on and then projects onto it
			* Does this by picking the axis that minimizes the mean squared distance between the original data and its projection
			* And then picks the second axis which is orthogonal
			* And so on
		* Gives explained variance ratio of every principle component
		* The number of dimension one decides to keep is usually determined by how much of the data variance you want to keep
# Chapter 9: Unsupervised Learning Techniques
* A relatively less developed area of ML
* Clustering
	* K-Means
		* Finds the center of blobs and the boundary of these blobs
		* It can sometimes fall into local-optimal
		* Techniques to overcome this include put the approximate centroid's location, or run it several times and pick the best performing one, choose centroids far away from easy other
		* Choosing the best number of cluster can be done empirically with the rule of elbows on a chart between the number of clusters and inertia
		* Or precisely with silhouette score
			* mean of silhouette coefficient for all clusters
			* calculated by $\frac{(b-a)}{max(a, b)}$
			* where $a$ is the mean distance to all other distances in the same cluster (mean intra-cluster distance)
			* and $b$ is the mean nearest cluster distance
			* it can value from -1 to 1 and -1 means you are risking mis-clustering and 0 then it is close to a cluster boundary and 1 is good
		* downsides of k-means is that it doesn't deal well with non-spherical data which means that we should always scale the input features to ensure this
		* can be used as a preprocessing step for supervised, unsupervised learning
	* DBSCAN
		* The algorithm is as follows
			* identify the instance's $\epsilon$ neighborhood by taking each instance and count how many instances are located within a small distance
			* if it has some number of samples it is considered a core instance
			* all instances in the neighborhood of a core instance belong to the same cluster
* Anomaly Detection
	* Gaussian Mixtures
		* Can also do density estimation, and clustering
		* A probabilistic model that assumes that the instances were generated from a mixture of several Gaussian distributions
* ==Given a statistical model with some parameters $\theta$, the world "probability" describes how plausible a future outcome $x$ is, while the world "likelihood" is used to describe how plausible a set of parameter values $\theta$ are, after the outcome $x$ is known==
* Density Estimation
# Chapter 10: Introduction to Artificial Neural Networks with Keras
* ANNs are the core of Deep Learning
* The **artificial neuron** first proposed by Warren McCulloch and Walter Pitts has one ore more binary inputs and one binary output
	* The artificial neuron activates its output when more than a certain number of inputs are active
* The **perceptron** was invented by Frank Rosenblatt in 1957 and it is a single layer of slightly modified artificial neuron called **threshold logic unit (TLU)**
	* The TLU has a threshold function and takes numerical inputs and outputs numerical output
	* The numerical inputs are associated with a weight and the threshold logic unit computes the total sum and applies a step function to see if the sum activates the output
	* It is connected to all the inputs (when all the neurons in a layer is connected to all the neurons in the previous layer it is called a **dense layer**)
	* The input neurons form the **input layer**
	* The TLUs form the **output layer**
	* This is trained with Hebb's rule - "cells that fire together, wire together"
	* Very similar to stochastic gradient descent as the weights are trained based on the residuals of the outputs
* Multiple-layer perceptron (MLP) was invented to tackle XOR problem
	* There is one ore more layer of TLUs between the input and output layer which is called the **hidden layer**
		* This advanced artificial neural networks to **deep neural networks**
	* To train MLP, a groundbreaking paper in 1987 proposed the method **backpropagation training**
	* It consists of a forward pass which saves the intermediate results of each layer (including the hidden ones)
	* Then measures the output error
	* Then computes how much each layer contributed to the error through chain rule which is called the backwards pass
	* Then using gradient descent to tweak all the connection weights using the error gradient computed
	* For the backpropagation training to work, the step function in the MLP neurons are changed to logistic function to get the error gradient
		* It can also work with other activation functions
	* It is also important to initialize the weights of the neurons randomly
* Regression MLP
	* Changing the output neuron to use something other than an activation function to get a numerical output
	* Use ReLU or softplus to get positive only numerical outputs
* Classification MLP
	* Softmax can be used as the output function
# Chapter 11: Training Deep Neural Networks
- Deeper neural networks with 10+ hidden layers are used to train image recognition
- The increased layers, neurons and connectors introduces new problems
	- Vanishing gradient problem (exploding gradient problem) which makes the lower layers hard to train
	- Requires large amounts of training data
	- Long training times
	- Risk of overfitting
- Vanishing gradient problem
	- Logistic activation function makes the gradient saturate as the values approach the two extremes
