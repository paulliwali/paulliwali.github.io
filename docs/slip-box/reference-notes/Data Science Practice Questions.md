# Analytical Execution
Focuses on setting product goals, selecting the corresponding success metrics, measuring the impact of product changes and diagnosing metric drops
- Keep in mind:
	- Success metrics - activation rate, retention rate, revenue growth, usage, engagement, average revenue per customer, customer lifetime value
	- Guardrail metrics - bounce rate, churn rate, error rate, support requests, abort rate, rate of single use over power use
	- Impressions -> click through rate -> conversion rate -> average sale per order
	- Market size -> target audience -> switch rate -> retention rate -> growth rate

Q: A user advocacy group raises concerns about the accessibility of Meta's platform for individuals with disabilities. How would you assess accessibility metrics and define success criteria to ensure inclusivity in product design and development
1. Context
	- Meta's commitment to inclusive and democratizing the user voice means that accessibility is an utmost goal
1. Action
	- Conduct an accessibility audit to understand where the baseline is
	- User testing with targeted audience
	- Consult with accessibility experts
	- Implement accessibility features
1. Problem
	- Success metrics: accessibility standard compliance (minimum), user satisfaction, issue resolution rate (90% of issues resolved within 30 days), user engagement in the target audience segment
2. Execution
	- First understand the meta platform's baseline performance with audit and user testing
	- Measure the metrics on the platform with data analytics
	- Consult experts and market research to identify gaps in the current platform
		- If the gaps are required, implement them
		- If the gaps are recommended, choose and implement important ones with AB tests
1. Results
	- Monitor the user testing feedbacks
	- Monitor KPIs from the AB tests

## Market Analysis
Q: Meta is trying to launch social shopping, similar to TikTok Shop. Without building a beta-test of the feature, how would you opportunity size the revenue impact from this feature?
A:
- Market analysis
	- Understand the market size and growth of e-commerce
	- Demographic segment that Meta would be targetting within this market to obtain some discount factors
- Competitor benchmarking
	- Research tiktok shop's revenue and growth, compare against other competitors
- User behavior analysis
	- How current users engage with ads, social content or other commerce related features to *estimate the purchase intent*
- Revenue modeling 
	- User base -> adoption rate -> conversion rate -> average order value -> frequency of order and then growth rate on top of this

Q: Imagine Meta is planning to launch a new video feature aimed at young adults. How would you assess the product-market fit and define success metrics to ensure resonance with the target audience?
A: 
- Assessing product market fit
	- Market research with surveys (cover questions like preferred video length, content types, platform used), focus groups (gain qualitative insights), competitor investigation
	- Develop user segments to understand how they can be addressed
	- Investigate how young people are interacting with video contents on Meta platform already but be aware of the WWII plane problem
	- Beta test and get feedback from users
- Defining success metrics
	- Engagement metrics: DAU, average time spent per user per session, average sessions per day, video views, interaction rates per session
	- Adoption metrics: user growth rate, feature usage frequency
	- Satisfaction metrics: Net promoter score to understand how likely they will recommend this feature, user feedback score
	- Retention metrics: percentage of users that return to use this within 30 days, churn rate
	- Content metrics: diversity of contents, quality rating of content
	- Market positioning metrics: what is the market share of the video feature
- Launch strategy
	- initial launch to gather feedback and make pivots
	- continuous improvements using feedback and metrics and optimize things with AB tests
	- market and outreach

## Success Criteria
Q: How would you measure the success of a product
- You have a google app and you make a change. How do you test if a metric has increased or not?
- How do you detect viruses or inappropriate content on YouTube?
- How would you compare if upgrading the android system produces more searches?

Q: How do you deal with cannibalization of another product
- If there is cannibalization, it must mean this product is filling a void that the customers want. If it doesn't compete in objective with the other product then it just might mean this is what the customer want and if we don't create it, a competitor will.

Q: What if someone comes to you and says revenue metrics is bad and here is a better product but goes against your goal metrics?
- We should vertically align on the goal metric for the product, at Tesla a lot of our metrics are iterated over and over to reflect business and engineering needs. So that one number can clearly track the progress of the program for everyone. We can incorporate the suggested KPIs with revenue aspects. 

Q: Imagine you launched a feature to grow engagement of Facebook Groups. The DAU of groups goes up by 2% but the average time-spent on Groups goes down by 3%. How would you determine if you should ship this feature?
## Feature change
Q: How would you set up an experiment to understand feature change?

Q: What KPIs would you use to measure the success of newsfeed

Q: Friends acceptance rate decreased 15% after a new notification system is launched - how would you investigate?

## Problem identification
Q: Meta's mobile app is experiencing high bounce rates and low session durations. How would you identify usability issues and define success metric to optimize the user experience and increase engagement
A:
1. Context
	- This means that the app is not engaging for the users to stay and interact with others, we want to root cause the reason and define metrics to monitor this 
1. Action
	- Undertake the following actions to understand the problem: user behavior analysis (user journey data to identify common drop off points and pages with high exit rates, segment users by demographic, device types, and user behaviors to understand if this effect is localized), usability testing (identify pain-points and gather qualitative feedbacks, use heatmaps and session recordings to analyze the user behavior to see if there are any confusing or frustrating elements), survey and feedback (implement in app surveys and analyze app reviews to see if there are new issues), competitor benchmarking, gap analysis
1. Problem 
	- Identify the issue and hypothesis the issue in the interview
	- Identify metric to track: bounce rate (the percent of sessions that exit the app after viewing only one screen, a negative KPI), retention rate (the percentage of users that return to the app after 30 days of first use, positive KPI), session duration, user engagement metrics (number of engagement per session), user satisfaction
	- Metric goals: improve bounce rate by 20%, improve retention rate by 20%
1. Execution
	- Data analysis to identify the current metrics defined as well as root causing potential issues, CTR on different elements, exit screen
	- Usability testing
	- Survey implementation on the problematic elements to confirm the issue
	- Identify how the problematic elements compare with other competing apps or best practices
	- Setup AB test to implement the "better" element
1. Results
	1. After AB testing, review the results and see if the effect size is aligned with the goal

Q: Imagine that Facebook is building a product around high schools, starting with about 300 million users who have filled out a field with the name of their current high school. How would you find out how much of this data is real?
A: using the CAPER framework
1. Clarify
	- what is "real" should we be checking for wether the high school itself is real or whether that person has plausibly went to that high school
1. Assume
	- Give assumptions like if the high school name is too common or too rare that it is probably a mistake
	- If the name has non-words it is probably a mistake
	- If the name has profanities it is probably a mistake
1. Plan
	- Make a list of actionable steps that I could take
	- Approach the problem that values precision or recall
	- List out some possible mechanisms or tests to do this
1. Execute
	- Go in detail with each plan, drawing out distributions, the data and what we would do exactly
	- Eliminating the outlier school names by frequency
	- Eliminating the outlier school names by friend graphs
1. Review
	- Conclude the study

# Analytical Reasoning
Focus on explaining the approach, justifying the decision, provide clear and logical solutions to the challenges

Q: Meta DS team is analyzing user engagement metrics for a new feature rollout on its social media platform. However the data shows a significant drop in engagement rates shortly after the feature launch. How would you investigate the cause of the drop in user engagement, prioritize potential factors contributing to the decline, and propose a data-driven strategy to address the issue?
- **Hypothesis 1:** The new feature has usability issues that are discouraging users from engaging.
- **Hypothesis 2:** The feature changes the user experience in a way that disrupts established user habits.
- **Hypothesis 3:** There are technical issues (e.g., bugs, slow load times) associated with the new feature.
- **Hypothesis 4:** The new feature does not align with user expectations or needs.

Q: Meta's ad team is exploring ways to optimize ad targeting to increase revenue and improve ad relevance for users. However, ad click-through rates are lower than expected, indicating potential issues with targeting accuracy. How would you analyze user demographic and behavioral data to assess the effectiveness of ad targeting algorithms, and what strategies would you propose to improve targeting accuracy and ad performance?
- Meta's product team is considering introducing a new feature that allows users to customize their profile settings. However, there are concerns about potential privacy risks and benefits of implementing the new feature, and what analytical methods would you use to assess user privacy preferences and mitigate privacy concerns

- Meta's DS team is investigating the impact of algorithmic bias on content recommendations in its new feed. Users have reported instances of bias in recommended content, leading to concerns about fairness and diversity. How would you quantify and measure algorithmic bias in content recommendations, and what analytical techniques would you use to identify biased patterns and mitigate the impact of bias on user experience and content diversity?

Q: How would you evaluate the impact for teenagers when their parents join Facebook?
1. Define objective and scope
	- Identify what causal effect does the presence of parents have on the teenager's behavior and engagement on the platform 
	- Focus on engagement metrics, use of privacy settings, and changes in content interactions
1. Data collection
	- User segmented data collection - define teenager group and identify parents through data
	- Define key metrics - time spent, number of sessions per user, frequency of posts, interactions all per day. Content interactions, DM, public posts. DAU and repeated sign on within 30 days
1. Hypothesis testing
	- Define a pre and post period for the teenage cohort where there are enough data before and after
	- Use statistical tests to evaluate if there are significant changes in the measures assuming that hypothesis null is there is no change and alternative hypothesis is that there is a reduction
	- Have counter factual with a control group to make sure a similar group didn't also change
1. Qualitative analysis
	- Surveys and interviews and Social listening
	- It might be biased, but it can capture platform shift
1. Recommendations
	- Given the outcome and if we see that the causal effect is negative with respect to our goal as a platform we can discuss next steps of feature adjustments to help parents use the platform without negatively impacting their children's experience

Q: How would you decide to launch or not if engagement within a specific cohort decreased while the rest increased
- Clarify and understand what is the cohort and what is the engagement metrics. Determine if the decrease *is statistically significant* and if this is a new phenomenon. Then once that is confirmed, I would try to root cause the reason through user feedback, user behavior of the feature, AB test to isolate the impact from the feature. If these analysis revealed that this feature is causal of the decreased engagement we need a decision framework to decide if this is a blocker to the wide release of the feature. The framework should evaluate the weighted impact of the cohort with the rest of the user base, cost benefit analysis and if there are mitigation strategies we can undertake. 

Q: Discuss why Meta would want to build this product, how would you set goals for this product and how do you measure success? (product rationale)
- Everything we build should be aligned with the overall mission. I believe the mission at Meta is to hearken to the promise of the internet which is to connect people from all edges of the world. So the goal of the product should be "enabling the live exchange of communication between people". We should measure this in a few ways - one is regarding reach or coverage and one is regarding meaningful engagement. For both of these KPIs, I also see two sides one from the audience and one from the creator side. Maybe I would track the MAU from the creator side and the MAU (with significant threshold) from the audience side. 

Q: How would you prioritize features for a new product
-  User survey, user feedback, user behavior analysis, market research, alignment with strategic goals and mission. Also using techniques like [[MoSCoW prioritization]], impact vs effort analysis. Prioritize high impact features that align with product's core value proposition

# Data Science

## Generic

Q: What is your EDA process?
- When conducting EDA, I first ensure I understand the data's structure and coverage. I then calculate descriptive statistics like mean, median, standard deviation, and quartiles to get a sense of the data's central tendency and variability. Next, I create visualizations like histograms, box plots, and scatter plots to understand the data's distribution, identify potential outliers, and explore relationships between variables. I also perform data quality checks, such as checking for duplicates and missing values, to ensure the data is reliable. My EDA process is flexible and adapts to the specific dataset and problem I'm trying to solve

Q: How do you handle missing data?
- Handling missing values depends on the specific context and application, and there's no one-size-fits-all solution. If a feature has a lot of missing values, it might be best to exclude it from the analysis to avoid biasing the model. And for sparse missing values, using the mean or nearest neighbor imputation can be effective, depending on the context. Interpolation is a great technique for time series data, where the missing values can be estimated based on the patterns and trends in the data. If the data is missing at random then imputing might be appropriate but if its not at random then more sophisticated methods or throw out might be needed.

Q: Describe regularization and why it is important
- It prevents overfitting by penalizing the size of the coefficients or the number of coefficients. Lasso reduces all coefficients and Ridge tries to penalize the higher power ones to reduce their effects.

Q: What are ensemble methods and why might they be useful?
- They aggregate weak models together to create a stronger model. They tend to generalize better than the individual models

Q: What is ordinal data
- Data that are categories but have inherent ranking to it, label encoding is useful here. Other type is nominal data, which doesn't have ranking and using one-hot encoding or binary encoding works. One would use binary encoding if the nominal data has high-cardinality since it is more compact than one-hot encoding.

Q: What is target encoding
- To encode the categorical feature with the mean value of another target feature. 

Q: Name some common feature types
- Categorical (nominal and ordinal), numerical (continuous, discrete), binary, free text, time series (timestamps, datetime), geospatial (zip code, lat/long), derived 

Q: What is the difference between normalize and standardize
- Normalize makes the feature between 0 and 1, standardize makes the feature to have 0 mean and 1 standard deviation

## Time series ad revenue

Q: What is the daily revenue generated by this product in the last 30 days in US?
```python
import pandas as pd 

df["ds"] = pd.to_datetime(df["ds"])
df_agg = df.groupby(["country_code", "ds"])[["revenue_local"]].sum()

display(
	df_agg.loc[(df_agg["country_code"] == "US") & (df_agg["ds"] > (pd.to_datetime('now').date() - pd.TimeDelta(days=30)))]
)
```

Q: What is the daily revenue generated every day globally

```python 
import pandas as pd 

df_daily_fx_rates["ds"] = pd.to_datetime(df_daily_fx_rates["ds"])

df_with_currency = df.merge(df_country_currency_mapping[["country_code", "currency_code"]], how="left", on=["country_code"])
df_with_fx_rate = df_with_currency.merge(df_fx_rate.loc[df_fx_rate["destination_currency"] == "CAD"], how="left", left_on=["ds", "currency_code"], right_on=["ds", "source_currency"])
df_with_currency["revenue_cad"] = df_with_currency["revenue_local"] * df_with_currency["fx_rate"]

df_agg = df_with_currency.groupby(["country_code", "ds"])[["revenue_cad"]].sum()

```

Q: When do we reach 1M USD?
```python
df_with_currency.groupby("ds")[["revenue_cad"]].sum().reset_index()
df_with_currency["cumsum_revenue_cad"] = df_with_currency["revenue_cad"].cumsum()

min_date = df_with_currency.loc[df_with_currency["cumsum_revenue_cad"] >= 1000000, "ds"].min()
```

Q: Assume a linear YoY growth rate, can you provide a forecasted daily revenue?
A: One can select different ranges to compute the growth rate, should discuss some thoughts about choosing the range and the trade-offs. Using the full year is probably the safest, but won't capture any new trends that may have influenced the growth permanently.
## Fill NAN

Q: Fill NAN with the mean of the previous n values

```python 
data = {
	'user_id': [1, 1, 1, 2, 2, 2], 
	'date': ['2022-01-01', '2022-01-02', '2022-01-04', '2022-01-01', '2022-01-02', '2022-01-03'], 
	'likes': [10, 20, np.nan, 5, 10, np.nan]
}
df = pd.DataFrame(data)

# Impute missing values using SMA
imputed_df = impute_missing_values(df, window_size=2, column_name='likes')
```

A: The `imput_missing_values` function can use `groupby` then `apply..lambda` with a `fillna` and `rolling` chain. Remember to add a window size value because it includes the current value

```python
def impute_missing_values(df, window_size, column_name):
	df_imputed = df.groupby('user_id')[column_name].apply(
	  lambda x: x.fillna(x.rolling(window=window_size+1, min_periods=1).mean())
	)

	# do some merge to get other columns

	return df_imputed
```

Q: Impute missing values using median for numerical columns and mode for categorical columns
A: 
```python
def impute_missing(df):
	for colname in df.columns:
		if df[colname].dtype == "O": # categorical 
			df[colname].fillna(df[colname].mode().iloc[0], inplace=True)
		elif pd.api.types.is_numeric_dtype(df[colname]): # numeric
			df[colname].fillna(df[colname].mean().iloc[0], inplace=True)
		else:
			print("Not filling as column is neither categorical or numeric")
	return df
```

## Feature processing

Q: Can you convert categorical features into numeric
A:
```python
# Sample data
data = {'color': ['red', 'blue', 'green', 'red', 'blue', 'green']}
df = pd.DataFrame(data)

# Map to a single feature using dictionary
color_map = {"red": 0, "blue": 1, "green": 2}
df["color_mapped"] = df["color"].map(color_map)

# Map to multiple columns using pandas built-in get_dummies
pd.get_dummies(df["color"])
```

Q: Can you filter for outliers
A: 
```python
data = [10, 12, 14, 15, 18, 20, 22, 24, 100, 200]

def detect_outliers(data):
  df = pd.DataFrame(data, columns=["value"])
  q1 = df['value'].quantile(0.25)
  q3 = df['value'].quantile(0.75)
  iqr = q3 - q1
  lower_bound = q1 - (1.5 * iqr)
  upper_bound = q3 + (1.5 * iqr)

  outliers = df.loc[(df["value"] < lower_bound) | (df['value'] > upper_bound)]

  return outliers

print(detect_outliers(data))
```

## Regression

Q: Can you create a simple linear regressionz
A: The minimization of OLS becomes coef_1 = SS_xy / SS_xx and coef_2 = y - coef_1 * x, where SS_xy is the sum of squared cross deviation and SS_xx is the sum of squared deviation
```python
mean_x = np.mean(X)
mean_y = np.mean(y)
n = len(y)

SS_xy = np.sum(y*X) - (n * mean_x * mean_y)
SS_xx = np.sum(X**2) - (n * mean_x ** 2)

b_1 = SS_xy / SS_xx
b_0 = mean_y - b_1 * mean_x
```

## Classification
Q: How would you improve a classification that suffers from low precision

## Hypotheis Testing
Q: When you have time series data by month, how will you find significant differences between this month and previous month?

## ML Theory
- See: [[Apple]] for ML theory questions
## AB Testing

- Get familiar with longitudinal user behavior and randomized controlled trial
- How do you determine the duration of an AB test?
	- Depending on the statistical significance and power and effect size, you can back calculate the sample size needed. 
	- Business cycle and seasonality that can naturally create effects you are testing for
	- User purchasing cycle with holidays and new sign ups
- Explain how you would setup a randomized controlled trail to evaluate the effectiveness of a new privacy feature on Meta's messaging platform
	- 
- Describe a methodological approach you would use to assess the usability of a new UI design for Meta's VR applications
- What data sources would you leverage to evaluate the effectiveness of Meta's education initiatives
- How would you recruit participants for interviews or focus groups, and what strategies would you use to ensure diverse perspectives are represented?
- Can you explain how you would analyze the data to identify patterns and insights regarding ad targeting effectiveness?

# Programming

Q: How to transpose a list of lists
A: First ensure all lists are the same length, then use `zip` to iterate multiple elements

```python
[list(row) for row in zip(*master_list)]
```

Q: Why is a hashmap efficient
A: Because it is index and the lookup doesn't grow with the size and is constant time

Q: given a list of numbers, count the frequency
A: Use `Counter` or iterate through and update to a `dict` with `get('key', 0)`

Q: Implement MSE
A:
```python 
def mse(y_true, y_pred):
	error = y_pred - y_true
	squared_error = error ** 2
	mse = sum(squared_error) / len(squared_error)
	return mse
```

Q: Implement a min-max scaler
A:
```python 
def min_max_scaler(x_values):
	min_x = min(x_values)
	max_x = max(x_values)

	scaled_x = (x_values - min_x) / (max_x - min_x)
	return scaled_x
```

Q: implement cosine similarity calculation
A: consine similarity is comparing how close two vectors are against each other, basically calculating the degree between the two vectors. Calculated by dividing the dot product between the vectors and the product of the magnitude of the two vectors. The magnitude is calculate by the Pythagorean Theorem

```python

```

