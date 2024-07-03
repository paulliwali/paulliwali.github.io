# Regression related
- R squared
	- percentage of variability of dependent variable (y) that can be explained by the independent variable (x), so it ranges from 0 to 1
	- calculated by $1 - (SSR / SST)$ where $SSR=\Sigma(y_i-y)^2$ and $SST=\Sigma(x-\bar{x})^2$
# Continuous variable
- Adjusted R squared
	- adjusts the R squared metric by the number of features, since adding more features will increase R squared arbitrarily
	- calculated by $1-(\frac{(1-R^2)(n-1)}{n-k-1})$
- Mean squared error (MSE)
	- often used by the model as the cost function and gives weight to larger errors
- Root mean squared error (RMSE)
	- a more intuitive version of mean squared error because of the units 
- Mean absolute error (MAE)
	- very intuitive to understand 
- Mean absolute percent error (MAPE)
	- gives context to the mean absolute error 

# Classification
- Accuracy: the TP and TN ratio over all prediction
- Precision
	- of all the predicted positives how many were observed positives
	- TP / (TP + FP)
- Recall
	- of all the observed positives how many did the model predict correctly
	- TP / (TP + FN)
- F1
	- harmonic mean between precision and recall
	- 2 * precision * recall / (precision + recall)
- ROC curve
	- plots the TP rate vs FP rate over different coefficients and the model with the bigger area is used 
