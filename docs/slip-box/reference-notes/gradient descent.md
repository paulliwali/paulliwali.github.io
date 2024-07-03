Gradient descent is a generic optimization algorithm that can be used to find optimal solutions to lots of problems by computing the cost function and find the local gradient (slope) to go in until it reaches minima where gradient is 0
- An important parameter of the gradient descent is [[learning rate]] which determines the size of the step it takes
- Small steps may take a very long time and get stuck in local optima
- Large steps may be too erratic and never find the optima 
# Procedure
1. Start with an initial guess of parameters
2. Keep changing parameters such that the cost is reduced
	1. By finding the "steepest" direction from its current location
	2. Then taking a "step"
3. Repeat this until the slope is flat

## Implementation
$$w = w-\alpha\frac{d}{dw}J(w,b)$$
$$b=b-\alpha\frac{d}{db}J(w,b)$$

- where $\alpha$ is the learning rate
- and $\frac{d}{dw}$ term is the derivative term of the cost function
- you update the parameters **simultaneously** until you hit convergence
	- when the derivatives are 0 where GD hits a local minimum
### Ways of descent
- Batch Gradient Descent
    - Take the partial derivatives of all the features and compute a gradient vector to iterate over
    - Uses the whole training set for each step, thus very slow for large training sets
- Stochastic Gradient Descent
    - Picks random instances of in the training set at every step
    - This means it is faster but the more random nature means it could get close but not to the global optima 
    - It also means it can jump out of local optima easier
    - By using a [[learning schedule]], you can slowly reduce the learning rate and help the stochastic gradient descent to settle at the global optima
- Mini-batch Gradient Descent
    - Instead of computing the full data set (Batch) or single instance (Stochastic), mini-batch computes the gradient on a random set of instances
    - This method does well with GPUs
# Applications
For linear regression models, the cost function of squared error is a continuous [[convex function]] which means it only has a global minimum
- So GD is guaranteed to approach optimal
- **When using GD, you should ensure all features have a similar scale or it will take much longer to converge**
