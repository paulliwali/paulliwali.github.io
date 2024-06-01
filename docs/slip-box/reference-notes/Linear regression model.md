**Try to predict a continuous target variable given a set of inputs** by making prediction on the weighted sum of input features and bias term (intercept) $$\hat{y} = \theta_0 + \theta_1 x_1 + ... + \theta_n x_n$$Vectorized form: $$\hat{y}=h_{\Theta}(X)=\Theta \cdot X = \Theta^{T}X$$
This is solved by:
- [[Normal Equation]] is a closed-form solution to minimize the cost function of a linear regression model.
- Least squares solution (L2 loss)
    - Assumes the target variable is a linear combination of feature variables
    - Assumes Y is distributed normally, X^T*X is invertible and the expected value of epsilon is zero with constant variance
- Weighted least squares
    - To combat heteroscedasticity in the errors
    - Determine the weights requires work

Things to keep in mind
- [[Feature Scaling Techniques]]
	- To change all the features to the same scale
	- Critical for convergence and regularization to work
- Overfitting
    - [[Regularization Techniques]] which adds a penalty term to the loss function that penalize the parameters of the model
- Underfitting
    - [[Kernel Regression]]
        - A density function to map input variables to a higher dimension
    - [[Support Vector Machines]]
        - Support vectors are the margins around decision boundaries
