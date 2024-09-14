Best practices usually start to make sense when the team gets large and there are multiple data sources, calculation processes and users. It prevents the urge to make ad-hoc changes in order to 'solve it quickly to get it going' that eventually will tangle everything.

Load Data Incrementally

-   Extract data incrementally at regular intervals
-   Airflow makes this process easy by scheduling jobs to follow a time cadence

Process Historic Data

-   Ad-hoc workarounds are usually needed to retrieve older data for a new workflow

Partition Ingested Data

-   Partitioned data at ingestion allows for parallel DAG runs that won't get into a write lock

Enforce the Idempotency Constraint

-   Runs with the same parameters should have the same outcome on different days
-   Sometimes the processes will change and the outcome can change

Enforce Deterministic Properties

-   For a set of given input the output is always the same, cases where the function can be non-deterministic
    **Using external state within the function
    ** Operating in time-sensitive ways
    **Relying on order of input variable
    ** Implementation issues inside the function (relying on dictionary order)
    **Improper exception handling and post-exception behavior
    ** Intermediate commits and unexpected conditions

Execute Conditionally

-   Option to control tasks to run after the success of other tasks

Code Workflow as well as the Applications

-   Able to control both the workflow as well as the underlying application
-   Dynamically control DAGs within another DAG

Reset Data Between Tasks

-   What might seem like inefficient is actually intended to not allow the reading of temporary files
-   Task instances of the same DAG gets executed on different workers and they don't read from the temporary data

Understand SLA's and Alerts

-   SLA can be used to detect long running tasks
-   Airflow sends email to notify missed SLA's
