 * **Metadata:**
	 * #article #data-science 
	 * Source: [Introduction to Apache Airflow](https://khashtamov.com/en/introduction-to-apache-airflow/)
- Created in 2014 by Maxime Beauchemin at Airbnb
- A swiss-army knife to build data pipelines using **directed acyclic graph (DAG)**
	- Describes the dependencies in your job
- Each node in the DAG is an **operator**, and Airflow has various operators for each type of job
	- Operator **can't get a return value from previous operator/job** because they can be executed in a distributed fashion
	- An operator that react to an event is a **sensor**
		- For example, a `S3Senor` can check if an object exists in a S3 bucket and perform something 
	- Hooks are used to interact with external services and used to build Operators
- Executor is responsible for how tasks are going to be executed
	- SequentialExecutor - default executor but doesn't support parallel so not ideal for production
	- LocalExecutor - use separate executor for parallel execution but can't scale horizontally and is not fault tolerant
	- CeleryExecutor - most popular executor for production, uses Celery task queue but requires broker (Redis, RabbitMQ, etc)
	- DaskExecutor - Similar to Celery but uses Dask
	- KubernetesExecutor - uses Kubernestes cluster for task execution
- Using `Operator1 >> Operator2` to build the DAG logic