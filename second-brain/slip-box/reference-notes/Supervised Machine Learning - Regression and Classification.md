# Week 1: Introduction to Machine Learning

## Supervised Learning
- The most common types of algorithms being used today
	- learns from 'input' to 'output label'
	- use cases: spam filtering, speech recognition, machine translation, online advertising, self driving
- Gives the algorithm datasets to learn from labelled "correct answers"
	- *Regression modeling* is to predict a range of numbers
	- *Classification modeling* is to predict a limited set of class/category
## Unsupervised Learning
- Learns from unlabelled output data to find patterns or interesting properties
	- learns from 'input' only as there are no 'output label'
- Anomaly detection
- Clustering
- Dimensionality reduction

## [[Linear Regression Model]]
- Fitting a *straight line* to a dataset
	- produce a function that produces a y-hat (estimated y) 
	- formulated as a `wx+b` since it is a linear function
	- to train/adjust the unknown parameters/coefficients/weights of the function we need to construct a cost function
- Cost function is a way to quantitatively evaluate the goodness of fit of the function
	- $J(w, b) = rmse/mse$
	- Can be minimized with [[gradient descent]] to find the optimal parameters

# Week 2: Regression with multiple input variables
## Multiple Linear Regression
- Using multiple features to estimate one response variable
	- Different from multivariate regression which estimates multiple response variable
- Vectorization with `numpy` is used to speed up the algorithm of the dot product between weights and features
	- This is done by doing the operation *in parallel*
- Gradient descent works similarly but instead of taking the derivative of the cost function with respect to one feature's weight and updating one weight -> you update all the weights by taking partial derivatives of the cost function with each weight 
- Just a note that an alternative solution to the linear regression is the [[normal equation]] 
	- It only works for linear regression because it is a closed form solution to this
	- So it is not generalized solution (unlike gradient descent) and it could be slower if the features are much higher
## Gradient descent in practice
- To make gradient descent more efficient, one should feature scale with some [[Feature Scaling Techniques]]
	- This will make the cost function contour to be evenly spaced and not be susceptible to jumping 
# Week 3 

#machine-learning #course