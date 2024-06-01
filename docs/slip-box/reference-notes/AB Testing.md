# Why
To quantify the impact from a change
# How:
1. Choose the metrics to evaluate. Also can select *invariant metrics* to sanity check 
2. Power test - choose significance level, statistical power to find the appropriate sample size -> how long to run the experiment
3. Create the control and treatment groups ensuring there are no cofounding factors that could also affect the metrics
4. (Optional) Run an A/A test to ensure the control and treatments are properly selected and there are no interference (See section below of other ways of detecting interference)
5. Run the experiment
6. Analyze the results by calculating the significant effect size and make a decision that trades-off business cost with the observed effect size 
## Gotchas:
- Feature timing could have a big impact 
- Watch out for interference and unintended effects
- Watch out of user resisting change
- What out for multiple metrics because they can be significant by chance and you should correct for it
- Use one OEC (overall evaluation criterion) to balance short term and long term goals
# How do you detect interference?
References
https://www.linkedin.com/blog/engineering/ab-testing-experimentation/detecting-interference-an-a-b-test-of-a-b-tests

At LinkedIn, they cluster the graph into 10,000 clusters. The graph comprises all active members as nodes and their connection as edges. Then split the clusters into two experiments

a. individual level experiment, where members are randomly sorted into treatment or control groups
b. cluster based experiment, where the whole community is in treatment or control groups

The intuition is that if there is no network effect, then both of the these experiment should yield the same estimated effect

Then devised a statistical test to determine if the effect is significant or not.