# Modeling Examples
CPaaS
- build plan for budget 
- energy contracts
- utilization and pricing 

Congestion Model - Full model effort with business goal
- Zero inflated data
- Rare occurrence event - driven by selected sites and have to apply globally
- Balance between precision and recall (business decision)
- Convincing non technical people on our validation process, the meaning of precision and recall, what decisions we made
- Validation set in the future needs to reflect the state

Resilience Model - deadline, urgent modeling with business goal
- Trip, population and road coverage metrics
- Modular design to enable a good use of collaborative coding, and adding risk layers to weigh trips differently
- Outputted Pareto diagrams of the most important sites in a geography 
- Able to answer E's question about which stations to backup in a disaster scenario and do cost benefit analysis
- Also repurposed to be used for new coverage and rank importance of planned sites

Arrival and Service Model - custom solution to improve the model
- Physical operations model
- Bayesian correction analogy

Price sensitivity AB test - AB testing with business goal
- Tesla electric offers to different customers and observing the take rate
- Challenge was that it was not setup by us
# Data Pipelines 
Wait Time KPI - key business driver that dealt with noisy data, business impact, cross team communication and validation
- Adding new signals to telemetry
- Measurement of user experience
- Key driver for many business decisions as it is the second biggest customer complaint
- We used Gaussian Mixture Model to learn the approach time that "would" have happened regardless of the congestion 
- We used filtering to de noise the telemetry data (seat occupancy, screen on/off)
- We used logic to fill in missing telemetry data and remove "erroneous" data
- We built combination charts and visualization tools to debug and get the ground truth without labelled data

Detour KPI - data engineering effort to complete customer experience and lead this cross team effort
- Completed the user experience picture for us
- Huge undertaking of data engineering work that involved multiple teams
	- Forked the trip planner to enable the simulation of historical networks
	- Worked with infrastructure team to deploy instances for pyspark 
- Sampling based on TLFD to be representative and save simulation costs
- Decision to where to build for better customer experience

# Data analysis examples 
Charging power analysis
- Average power increase is the foundation metric for faster charging speeds
- Caveats with battery level, vehicle platforms, ambient temperature and software enabled assistance
- Gives exec a confident measure of the network's progress

Seasonal TOU analysis - scrapped a costly project due to ineffectiveness
