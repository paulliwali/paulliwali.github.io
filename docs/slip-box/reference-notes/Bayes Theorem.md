Used to update the conditional probability, which is the probability of an event occurring given that another event has happened, with new information.

Conditional probability is calculated as the joint probability of A and B over probability of B.

$$P(A|B)=\frac{P(A\cap B)}{P(B)}$$Bayes' Theorem is the following, which is just the joint probability rule for dependent events. 
$$P(A|B)=\frac{P(B|A)P(A)}{P(B)}$$

An example. If the probability of testing for a disease is 99% accurate, meaning if you have the disease you would be tested positive 99% of the time, and if you don't have the disease you would be tested negative 99% of the time. And 1% of the population has the disease, what is the chance of having the disease if you were tested positive. 

Find $P(disease|positive)$, so applying Bayes' theorem $\frac{P(positive|disease)P(disease)}{P(positive)}$ and the $P(positive)$ is the probability of getting a positive test result when you either have a TP or FP which is $P(positive|disease)P(disease)+P(positive|no disease)P(no disease) = 0.99*0.01+0.01*0.99=0.0198$.
Thus $P(disease|positive)=0.99*0.01/0.0198=0.5$ So there is a 50% chance of having the disease if tested positive.

[[Bayes Theorem, the geometry of changing beliefs]]