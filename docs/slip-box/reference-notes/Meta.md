# About
## Notes from founder letter 2021
- Internet was giving people the power to connect and that was true when Facebook was founded
- As we move from text to sound to video, the next platform of connecting people will be more immersive -> *metaverse*
	- The feeling of **presence** will be critical for all products
- This won't be done by just one company but collectively with creators and developers and it is meta's job to enable and accelerate this development
> We don't build service to make money; we make money to build better service
- Challenges from each chapter of development is unique - privacy and safety are at the forefront of this chapter
	- Also needs to conform to rules and regulations while remaining accessible to people
	- Apps are free, ads model give business the best price, commerce tools are at cost or modest fees
- To build beyond Facebook
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

## Full-loop interview on [[2024-06-14]]

#interview 