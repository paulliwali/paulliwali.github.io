# About
Profitability for EV charging stations
	- Need to predict demand and optimally set prices, which should ideally have a feedback loop
- Stable Prospect: site selection tool
	- Able to forecast demand, energy cost and government incentives
- Stable Evaluate: calculates ROI
	- Able to predict site performance to calculate the rate of return for the station
- Stable Dynamic Pricing: real time pricing
	- The latest big product

# Meetings

Call with Gordon Bauer on [[2024-05-30]]
- How do you guys deal with competing interests between EV charging companies for the dynamic pricing tool?
	- Right now the same recommendation can be used by different EV companies
- How do you guys predict demand at the address level
	- How to evaluate the model performance?
	- Key sources of data
	- Very impressive to do because I understand the challenges
	- Didn't get to ask
- My focus on the team was the capacity model (Stable Prospect) and KPIs on utilization, customer experience and behavior
	-  We didn't fully go into the dynamic pricing route because of internal interests and alignment to ensure a good user experience
- I think Stable Auto is currently US based, but I think there is a much bigger market in EU and APAC
	- Gordon said there are plans to expand
- Case study questions he asked
	- How do you provide confidence interval in a point estimations 
		- I first answered that your features will have variance in the values and we can use that, but he clarified that this is for historical observed value which has 1 true value
		- Then I said you can use the different models you trained to give a range
	- How do you evaluate the confidence interval 
		- I said you should use the data sets from the different regions, and take the worst days but I don't think I answered this properly
		- What I should have said was something involving boot strapping and sample out from the data set to give that sample of values to ensure the CI is correct
		- Also consider coverage (does the observed value fall with the CI), width of the interval (does it align with the acceptable range), pinball loss (used to evaluate the accuracy of a quantile forecast) or continuous ranked probability score (CPRS generalizes the MAE to the case of the probability forecasts)
		- Read into [[Quantile Regression]]
	- How do you estimate cost elasticity due to a price change
		- I said we should first detrend the time series to understand what is purely from the effects of the price change and then ensure there are no cross elasticity effects from neighboring sites and whatever the delta in demand would be from the price change

Technical Call with Courtney [[2024-06-10]]
- Using Replit with pandas to solve some problems
- Given a dataset of chargers and stations, asked to find the number of chargers per station and the average utilization by company
	- Simple group by and merge
	- Needed to read the data as JSON
	- Needed to apply a function over a column of list of integers
- Asked to implement a KNN function that returns the nearest neighbors of sites given k
	- Made a cross join of the stations and then implemented a euclidean distance function to calculate the distance between all stations
	- Removed itself
	- Outputted the head of each groupby
