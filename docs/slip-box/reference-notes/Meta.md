# About

==Giving people the power to build community and bring the world closer together==

- Product currently empower 3 billion people
- Give people a voice
- Build connection and community
- Serve everyone, making the service accessible to everyone
- Keep people safe and protect privacy
- Promote economic opportunity
## Notes from founder letter 2021
- Internet was giving people the power to connect and that was true when Facebook was founded
- As we move from text to sound to video, the next platform of connecting people will be more immersive -> *metaverse*
	- The feeling of **presence** will be critical for all products
- This won't be done by just one company but collectively with creators and developers and it is meta's job to enable and accelerate this development
> We don't build service to make money; we make money to build better service
- Challenges from each chapter of development is unique - privacy and safety are at the forefront of this chapter
	- Also needs to conform to rules and regulations while remaining accessible to people
	- Apps are free, ads model give business the best price, commerce tools are at cost or modest fees
- Meta means to go beyond - to build beyond Facebook for the next chapter of the company
## Why work at Meta?
- Be part of a team that focus on building services to connect people instead of building products for people to connect to
- Be part of a team that can impacts billions of people, work on connecting people from far and wide, the power of the "internet"
- I want to be impactful and work with talented people to continue to learn skills
# Data Science Screening Guide
- Programming
	- Develop solutions to complex data problems using programming and scripting languages
	- Should be comfortable with data manipulation such as filtering, missing data, merging
	- Discuss coding decisions and tradeoffs
	- Don't use "magic" function that would trivially solve the problem
- Research Design
	- Identify and design appropriate scientific testing and analysis between relevant variables that answer strategic questions 
	- How to design a test to prove or disprove something
	- What are the biases in the methodology that we should correct for
- Determining Goals and Success Metrics
	- Identify metrics that reflect operational success
	- How do you measure the impact or value of something, counter-measures 
	- Be very specific in defining this
- Data Analysis
	- Leverage methods from descriptive statistics to measurement models to answer hypothesis based questions 
	- How to set up a hypothesis to lead to action
	- Lay out the steps to go from data to action 
# Full Loop Interview Guide
- Technical skills
	- Assess the performance of programming, communication, data analysis and determining goal & success metrics
	- Identify metrics that reflect operational success and inform business decisions
	- Use models and descriptive stats to answer exploratory or hypothesis based questions
- Analytical Execution (case study oriented)
	- Problem has to do more at the data level, there is some issue
		- "You are on FB Groups, a old feature was to recommend groups based on HS, but when we started we found the field was open text and data is messy. How do you deal with this"
	- Assess the ability to create hypothesis, quantitive analysis, determining goal & success metrics and demonstrating agility
	- Use statistical code to carry out analysis ranging from correlation to multivariate analysis to measurement models
	- Form hypothesis from launching a new product, consider tradeoffs of a feature *in terms of metrics*, use statistical features, know common distributions, law of large numbers, central limit theorem, linear regression, conditional probability
- Analytical reasoning (case study oriented)
	- Problems has to do with business level
		- "what is the goal..., how can we support this goal...to make this decision"
	- Assess the ability in research design, analytical design, storytelling through data, setting goals & success metrics, data visualization
	- Framing an open ended question into a framework that can be inferred through models
	- Creating data sets
	- How to make decision with the outcome
- Behavioral
	- Assess the candidate's agility, growing mentality, partnering, inclusion and communications
	- Use S.T.A.R methods and pick out good examples from [[Tesla]]
	- Conflict resolution
	- Autonomous, passionate, detail vs wordy, explain proud contribution
	- Make or break 

# Meetings
## Recruiter call for a data science role
- Responsibility usually involves a lot of AB tests
- Will setup a screening interview to see fit

## Technical Screening Interview on [[2024-06-03]]
- Case study style questions where we imagined that I was on the notification team  
- How do we measure that we are sending "good quality notifications"
	- Discussed different types of notifications - time sensitive, non time sensitive, security
	- Discussed methods of delivery with active push and passive number
	- Also mentioned the idea of signal vs noise where good quality should be an indication of signal causing the user to take up a follow up action
	- So to measure this I proposed to look at the open app action after the push notification and click through rate for the passive notifications
	- Also after being prompted about a negative/guardrail KPI I talked about proportion of customers that have "no notification" settings as a way to track this
- How do we roll out a new kind of notification that tells you when your friends are attending to a nearby event?
	- Setup AB testing
	- Talked some details about setting up the customers and power analysis but was cut short to talk about the business decision of go/no-go
	- I said it probably has to do with the effect size, mission of the product and the cost of rolling it out
- What if another team comes to you and says this is great but another KPI is dropping
	- I said we need to align on the overall goal of the product and related to my work experience at Tesla where there are over arching KPIs that we are targeting and each feature has their own specific drivers but they "can" compete with each other
	- Cannibalization of different feature is okay as long as the over arching KPI is trending positively because that is also a sign that this feature is desired by the customer and if we don't build this someone else will
- What if we see that the click-through-rate is dropping in the month of July compared to June, how would you investigate this?
	- I said to first check if this is an anomaly historically or it is a seasonal pattern
	- Then I said to explore both on the customer side (are there different user groups with different CTR and are they changing between June/July) and then on the notification side (increase in low CTR notification types like security? Or a new product was introduced and added a lot of notifications and users don't click or don't need to click them like IG?)

## Coding Screening Interview on [[2024-06-07]]
- Simple data wrangling of "calls" data and daily user data with active flag and country metadata
	- Find the callers with more than 3 unique recipient in the last 7 days
	- Find the percentage of DAU that made a call in France yesterday

## Recruiter call for full-loop on [[2024-06-12]]
- Common mistakes
	- Analytical execution will require a "hard" calculation
	- How to outline the approach, talk about tradeoffs, land on one and then how do you execute (relate to a research paper)
	- No need to use the whiteboard if don't feel like it
- Try to lead the conversation for the analytical segments, because this is the style
	- Ask follow ups
	- Once you have a good grasp and brainstormed the approach
	- **Take over and walk interviewer through like a brain storm session**
	- Spend 10ish minute to explore and discussion of goals, areas of opportunity
	- Land on a testable hypothesis and then from then on take it to design, method, data setup (justify the dim, volume, attribute, sample size), common mistakes of AB testing, what to look for and then given a certain outcome (how do I recommend), think about the product development cycle
- Behavioral
	- cross functional examples
	- issues that arose and how you dealt with it
- Technical
	- just longer but no more complicated than the screening 
## Full-loop interview on [[2024-06-14]]
- Behavioral
	- What is a time where you had to convince someone of something
    > Used the capacity planning experience
	
	- What is a time where you had high pressure deliverable
    > Used the resilient planning experience
	
	- What is a time where you had to make your voice heard or help someone else's voice to be heard
    > Used my intern experience
- Technical
	- Ads series data with different currencies
    > This felt easy and straightforward, with filter, groupby and merging. However there were some follow up questions at the end that asked for the downsides of absolute numbers - I felt like the interviewer does not fully understand the question and was slightly confused by my answers
- Analytical reasoning
	- An engineer proposed to make a restaurant recommendations widgets, how would I go about evaluating
	- Asked how do we determine this is worthwhile?
	- Asked about how to build the recommendation model
		- Wanted me to build a logistical model
	- Asked about how to reconcile KPIs in ads dropping, what might cause this and how to address this
	- Asked about how to create a dashboard for this
	> It was less open ended as I was expecting, the interviewer probed with many follow up questions to guide the direction of the answers. I think I was a bit caught up with the need to provide a technical methodology that involved logistic regression to predict recommendations for restaurants. I was caught up in providing a heuristic algorithm based on activities and location. 
- Analytical execution
	- Draw the distribution of comments per user on a news feed app that is used by 2 billion users, and what would be the mean, median and 95th percentile?
		> Stumbled on the median and accidentally went to the middle, fixed it upon hint
	
	- Draw the distribution of means from samples of 10,000 users, what are the mean, median and 95th percentile?
		> I wasn't totally sure how to calculate the 95th percentile on a normal distribution using z-score, I mentioned it but didn't give a clean answer

	- If the average comment per user jumped what could be the cause?
	- If bots post at a much higher rate, how do we back calculate the % of bots if we know the average comment per bot, per user and total?
	- Using an absolute value to classify the two types of user groups, is that a good idea?

## Technical Screening Interview on [[2025-04-01]]
- How to know if one type of ad is better than another? What if its better?

- How to determine if a new ad rank algorithm is better?
> objective is revenue

- How to make trade offs for increasing engagement but decreasing time
> come to the same dollar value, find dollar per engagement

- How to build a ML system for improving ad ranking
> Classification problem

# Technical on [[2025-05-16]]
- Use SQL to answer a few questions about VR session and app data
- Was a bit verbose in some of the SQL wrangling, had some extra code 
- Doin't remember how to do relative date selection
- Understand 
# Analytical Reasoning on [[2025-05-16]]
## Preparation for analytical reasoning

[[Analytical reasoning with chatgpt]]
[[Analytical reasoning with grok]]
[[Analytical reasoning with gemini]]
[[Analytical execution with gemini]]

# Behavioral on [[2025-05-22]]
- A time where you had to pivot
- A time where you had to develop inclusion
- A time where you worked well with others
- A time where you had to convince someone above you
# Analytical Execution on [[2025-05-22]]
- How to determine if spam bots are an issue
	- Size the problem
- How to identify spam bots
	- Missing IP address, age of account
- Probability questions related to bots account percentage and number of requests sent compared to regular users
- Bayesian question regarding a model that predicts the number of spam accounts
#interview 