
- Soft clustering model which gives the probability for a point to belong to a cluster
- A function that comprises of several Gaussians that is defined by
    - A mean $\mu$ for its center
    - A covariance $\Sigma$ for its width
    - A mixing probability $\pi$ for its size
- A condition they follow is that the sum of their mixing probability adds up to 1
- To fit these parameters we use Expectation - Maximization algorithm which finds the solutions to the maximum likelihood
#data-science