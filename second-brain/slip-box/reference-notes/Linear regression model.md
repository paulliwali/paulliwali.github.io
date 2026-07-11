**Try to predict a continuous target variable given a set of inputs** by making prediction on the weighted sum of input features and bias term (intercept) $$\hat{y} = \theta_0 + \theta_1 x_1 + ... + \theta_n x_n$$Vectorized form: $$\hat{y}=h_{\Theta}(X)=\Theta \cdot X = \Theta^{T}X$$
This is solved by:
- [[Normal Equation]] is a closed-form solution to minimize the cost function of a linear regression model.
- [[Gradient Descent]] to minimize the cost function 
- Least squares solution (L2 loss/MSE)
    - Assumes $Y$ is distributed normally, $X^T*X$ is invertible and the expected value of $\epsilon$ or residual is zero with constant variance
    - $\beta_1=\frac{SS_{xy}}{SS_{xx}}$
	    - $SS_{xy}$ is the sum of squared cross deviation
	    - $SS_{xx}$ is the sum of squared deviation
	- $\beta_0=y-\beta_1\times\bar{x}$
    - Related to a question in [[Data Science Practice Questions]]
- Weighted least squares
    - To combat heteroscedasticity in the errors
    - Determine the weights requires work

# Things to keep in mind
- Assumes linearity between independent variables and dependent variables, independence between data (so no time series or clustered data), homoscedasticity which means the residual is constant across different magnitude (standard error can be biased if this is violated), residuals are distributed normally
- [[Feature Transformation Techniques]]
	- To fix some of the problematic distributions which violates the assumptions
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
