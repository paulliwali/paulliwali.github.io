# Modelling
## Congestion Model Improvement
- S: One of our team's main responsibility is to provide utilization forecasts for the Supercharging team. They use our forecasted plan to understand when and where to expand in order to meet the growing EV demand from our Tesla fleet, as well as other EVs as we opened our network.
- T: One component of the model is to take forecasted daily energy time series and transform it into daily utilization and potential congestion events. This is challenging because it is a rare observable event, with only less than 1% of site-days experiencing this on the network. When simplified into a classification problem, the training data is zero-inflated, showing a huge imbalance between days without waiters (0) and days with waiters (1), which is what we are trying to predict. Therefore, the challenge is two-fold: develop a model robust against the imbalanced data and ensure the validation set is representative of the future when the usage is close to full.
- A: As the technical lead, I iterated on this model to improve its performance. The first iteration involved using a Tobit model formulation for "censored" data and class balancing techniques. Through extensive internal collaborations, I was able to repurpose a site-level queue simulation model built for a different purpose. I then created a site-level model with a Bayesian-like correction add-on, drastically improving the performance.
- R: This approach maintained recall (don't miss from false negatives) while increasing precision (less false positives). Although the recommended network size globally did not change, the increased precision meant a much better allocation of our half a billion dollar budget that is invested into the expansion of the network.
## Resilience Model
- S: After the 2021 winter storm in Texas, which triggered one of the worst energy infrastructure crises, Elon asked us to determine how to make our network "resilient" to ensure people can freely travel out of the state if needed.
- T: This was an urgent request with a vague direction, so our team was tasked with both defining the metrics and creating a framework to calculate this metric. We decided to create a framework to simulate a set covering problem with existing and forecasted Supercharger sites. This framework could optimize against different layers, including historical EV trips, third-party trips, population, and roads, weighted against risks such as earthquakes, storms, and heat.
- A: I was responsible for coding the component that ingests any user-defined period and prepares the various inputs and risk layers, ensuring they conform to a common dataset using SQL and PySpark. Additionally, I prepared the network scenarios for simulation. I helped design a modular framework with a clear interface between each module to enable effective collaborative coding.
- R: The output included Pareto diagrams for each scenario, showing the number of sites (and their ranked order) versus the coverage of the target metric. We were able to answer Elon's resilience question by identifying which stations to back up in a disaster scenario, thus enabling the freedom to travel. Additionally, we repurposed the framework for new coverage and ranked the importance of planned sites.
## Charging power analysis
- S: In various discussions, it became clear that we lacked a simple way to distinguish the real-world differences between Supercharger technologies.
- T: One of our team's core responsibilities is to measure the charging network. It fell to me to design an analysis that would become the de facto assessment of Supercharger technology differences.
- A: On paper, the power difference between the technologies is 1.6x (250kW vs. 150kW). However, I had to consider several factors such as ambient temperature associated with geography and time of the year, battery level, vehicle platforms, software-enabled assistance, and site occupancy to provide a clear and confident measure of the difference between the technology types.
- R: I was able to develop an evaluation framework that can be performed on a timely basis to provide the latest differences between Supercharger technologies. This framework allows us to make informed decisions and clearly communicate the performance of each technology....
## Anomaly time-series - forecasted
- S: We run a model that produces an energy forecast, which is a daily series of the energy expected to be demanded at each Supercharger site. This model is built using regression with several input variables. While this method is flexible to input changes and explainable, we faced a problem due to the lack of data cleaning in the training data and a bias towards capturing peaks. This led to unexpected forecasts that we could visually flag and use fallback models for, which is tedious given there are over 4,000 sites and we run this model every month.
- T: To automate the anomaly flagging without relying on "clear" rules, we needed to implement several different anomaly detection checks. Some checks were based on heuristic rules such as negative energy growth, variability being x times higher, and large zero values. Others were implemented using anomaly detection packages, including change point detection.
- A: I fine-tuned the algorithm using labeled data from previous rounds, ensuring that recall was maintained while increasing precision.
- R: The automated label flags roughly 20%-30% of sites (800 sites), and we manually label less than 10% of those. We successfully fine-tuned the algorithm to reduce false positives by almost 50%.
## Anomaly time-series - KPI
- S: Our team maintains an ETL pipeline that generates KPIs about the network. This pipeline is the backbone of much of our modeling work and is also critical for company-wide weekly emails, business analytics dashboards, and other teams' work. The pipeline has several upstream data dependencies from different teams, which can be affected by connectivity issues, firmware bugs, schema changes, and data quality issues.
- T: We needed a way to automatically flag questionable KPIs so we could take quick action to address any issues.
- A: I modified the Western Electric rules using statistical methods to detect anomalies, with a bias towards identifying drops. Additionally, a time series model was being trained and evaluated to further enhance anomaly detection.
- R: 
## Tesla Electric AB test - AB testing with business goal
- Tesla electric offers to different customers and observing the take rate
- Challenge was that it was not setup by us
# Data Pipelines 
## Wait Time KPI
- S: One of our team's core responsibility is to measure the customer experience at the site. And a key measure we use is wait time and we try to infer this negative experiencer/. through a series of telemetry signals. It is a key driver for many business decisions as it is the second biggest customer complaint.
- T: In the existing version, we used Gaussian Mixture Model to learn the approach time that "would" have happened regardless of the congestion. We used filtering to de noise the telemetry data (seat occupancy, screen on/off). We used logic to fill in missing telemetry data and remove "erroneous" data
- A: For version 2, we used charts and visualization tools to create a valuable labelled dataset to ensure that switching logic was yielding in better performance. Especially for people that were "phantom" waiting. Then in the latest version we are adding support for non-Tesla EV
- R: It is one of the 3 goals of the network for this year and a constantly scrutinized KPI and building confidence around its accuracy is very important
## Detour KPI
- Completed the user experience picture for us
- Huge undertaking of data engineering work that involved multiple teams
	- Forked the trip planner to enable the simulation of historical networks
	- Worked with infrastructure team to deploy instances for pyspark 
- Sampling based on TLFD to be representative and save simulation costs
- Decision to where to build for better customer experience

# Behavioral
- A time where you felt pressure
- There is a constant gas on the pedal feeling at Tesla, but from aligning with stakeholders, setting out OKRs, the ones we plan to do are often done. The hard part comes when we need to answer something really fast from higher exec (including Elon) and we need to pull all the resources on deck to do this. But because of communication, coordination we usually can pull it off successfully and use it for future projects -> Resilience model. 