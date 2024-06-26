**Metadata:**
	- #article #data-science 
	- Source: [Functional Data Engineering](https://maximebeauchemin.medium.com/functional-data-engineering-a-modern-paradigm-for-batch-data-processing-2327ec32c42a)
- Modern paradigm for batched data processing
- ETL (extract, transform and load) is a time-consuming, brittle and often unrewarding process
- Functional programming paradigm can bring clarity to the process
	- A style of building the structure and elements of computer programs that treats **computation as the evaluation of mathematical functions and avoid changing-state and mutable data**
	- A declarative programming paradigm, meaning programming is done with expressions or declarations, **instead of statements**
	- Functional code outputs code that only depend on the arguments that are passed to the function
		- __Calling the same function twice with the same argument will produce the same result each time__
	- In contrast to **procedures that depend on a local or global state**
- Reproducibility and replicability are the key characteristics we are after
	- In order to do this, we want **immutable data along with versioned logic**
- Write only **pure tasks**
	- These are deterministic and idempotent
	- No side-effects to things outside the scopes of the task
	- When tasks inevitably fail, they can be re-run without any concerns of double-counting or overwriting unintentionally
	- Instead of returning something like a pure-function - it __overwrites a partition of the data__ which is akin to the immutable object that a typical pure function would return
	- Should only target a single output
- Table partitions as immutable objects
	- Don't use DML operations like UPDATE, APPEND, DELETE
	- A pure task should fully overwrite a partition as its output
- Use dimension snapshots to handle slowly changing dimensions
- Use separate event time and processing time to handle late arriving facts