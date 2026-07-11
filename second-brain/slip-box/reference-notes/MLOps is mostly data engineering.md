---
source:
  - https://www.cpard.xyz/posts/mlops_is_mostly_data_engineering/
author:
  - foobar
tags:
  - machine-learning
  - programming
---
# 📰 Summary (use your own words)
There is an infrastructure need to run and operate machine learning in production. The category of jobs related to this is labelled as MLOps or "Machine Learning Operations", but it is becoming apparent that there is a lot of overlap with the traditional data engineering roles.

The landscape right now is littered with tools, and lots of the new ML focused tools are just duplications of what existed.

# ✍️ Notes
* MLOps Stack
	* Deployment and serving of models
		* OctoML
	* Model quality and monitoring
		* Weights and biases
	* Model training
		* AWS Sagemaker
	* Feature stores
		* Tecton
* There is nothing *unique* about the MLOps stack compared to the traditional data engineering and software engineering stack.
* Deployment and Serving
	* We need to wrap the model in a clean API that can be exposed to the users. Enable scalable deployment of this service and operate in a needs based way. Continuous integration of new features without disrupting usage. Monitoring for problems and logging for debugging.
	* We don't actually need a new suite of tools for this, but rather enrich the existing platforms for ML models as the foundational software artifacts*. So then the ML Engineers can package their work easily.
* Model Quality and Monitoring
	* ML challenges the existing platforms by adding an additional layer of complexity with a blackbox model that requires monitoring.
	* The strong requirement on a quality data is often the aspect that is lacking.
* Model Training
	* Very similar to data pipelines and can be effectively adopted
* Feature Stores
	* A popular feature store architecture from Tecton shows that we have:
		* Inputs: stream data sources, batch data sources
		* Store: transformations, storage and serving
		* Output: model serving and training
