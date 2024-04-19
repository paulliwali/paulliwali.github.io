---
source: https://hakibenita.com/sql-for-data-analysis
author: Haki Benita
tags:
  - sql
  - data-science
---
# 📰 Summary (use your own words)
SQL code for fast data analysis so one can skip using Pandas if not needed. This article is showcasing PostgreSQL.

# ✍️ Notes
- There is a high cost in loading data into Pandas, so it is often not worth it for ad-hoc analysis 
	- Or it is worth pre-analysis in SQL itself before fetching it into Pandas

## Common Table Expressions (CTE)
- Good for recursive queries 
- Good for readability and modularity
```sql
WITH emails AS (
	SELECT 'PAUL.DENG@test.com' AS email
), 
normalized_emails AS ( 
	SELECT lower(email) as email FROM emails
)
SELECT * FROM normalized_emails;
```

| email       |
|:----------- |
| paul.deng@test.com |

## Generating Data
- Useful for joining data to
- Can use `UNION ALL` to concat data, `VALUE LIST` to create constant data, `UNNEST` to generate small 1 dimensional data from a list
- A really useful command is to use `GENERATE_SERIES` for large amounts of data with a fixed step and can be used for time series
```sql
WITH daterange AS (
	SELECT *
	FROM generate_series(
		'2023-01-01 UTC'::timestamptz, --start
		'2023-01-02 UTC'::timestamptz, --end
		INTERVAL '1 hour' --step
	) WITH ORDINALITY AS t(hh, n)
)
SELECT * FROM daterange
```

## Sampling
- To produce random numbers, one can use `CEIL(RANDOM())` or `FLOOR(RANDOM())` 
	- Don't use `ROUND(RANDOM())` because it doesn't retain the distribution
```sql
SELECT 
	CEIL(RANDOM() * 3) AS n,
	COUNT(*)
FROM generate_series(0, 1000)
GROUP BY 1
```
- One can extend this to produce random choice
```sql
SELECT 
	(array['RED', 'BLUE', 'GREEN'])[CEIL(RANDOM() * 3)] AS color 
FROM generate_series(1, 5)
```
- To sample you can use `RANDOM()` but it is pretty inefficient
- So PostgreSQL has two methods: `system` and `bernoulli`
	- `system` is done with blocks so it is faster
```sql
-- using random
WITH random_sample AS ( 
	SELECT * 
	FROM users 
	ORDER BY RANDOM() LIMIT 1000
)
SELECT COUNT(*) FROM random_sample

-- using system
WITH system_sample AS (
	SELECT *
	FROM users TABLESAMPLE() SYSTEM(10) -- argument is percentage
)
SELECT COUNT(*) FROM system_sample

-- using bernoulli 
WITH bernoulli_sample AS (
	SELECT *
	FROM users TABLESAMPLE() BERNOULLI(10) -- argument is percentage
)
SELECT COUNT(*) FROM bernoulli_sample
```

## Data Exploration 
- Can calculate simple statistical descriptions with `COUNT`, `AVG`, `STDDEV`, `MIN`, `MAX`, `MODE` and `PERCENTILE_CONT` or `PERCENTILE_DISC`
- The median of a series can be calculated with either percentile functions 
	- `PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY n)` gives *a value* that 50% of the values are less than which could be a value that doesn't exist in the series
	- `PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY n)` gives *the value* that 50% of the values are less than which is from the series

## Subtotals
- There is a `ROLLUP` command that gives hierarchical subtotals, but only for the combination specified
```sql
WITH emp AS (
	SELECT * FROM (VALUES
		('Haki', 'R&D', 'Manager'),
		('Dan', 'R&D', 'Developer'),
		('Jax', 'R&D', 'Developer'),
		('George', 'Sales', 'Manager'),
		('Bill', 'Sales', 'Developer'),
		('David', 'Sales', 'Developer')
	) AS t(
	 name, department, role
	)
)
SELECT department, role, COUNT(*)
FROM emp
GROUP BY ROLLUP(department), role;
```

- To get *all combinations*, we can precalculate them using `CUBE`
- Both of these commands are just syntax sugar for `grouping sets` which gives the explicit combinations

## Pivot Tables
- We can also reshape data in SQL by using conditional expressions `CASE ... WHEN ... THEN .. WHEN ... THEN ... ELSE ... END`
- Another way to do this is through aggregate expressions `COUNT(*) FILTER (WHERE ...) AS`
- Overall, it is still tedious to do compared to pandas so if there are lots of transformations being done it might be better to use pandas here

## Cumulative Aggregation
- Use the window function `OVER (PARTITION BY ...)` and passing that into a statistical function 
	- The partition by command can take an integer to evaluate over all the rows
	- It can also take a frame clause to perform moving window

## Statistics
- PostgreSQL even have built in regression functions like `REGR_SLOPE()`, `REGR_INTERCEPT`
- Interpolating missing data or finer granularity is also a common task, PostgreSQL can do this with `COALESC` to get a default value and more complex query to do forward fill and back fill as well
- Binning with `CASE ... WHEN` and if we want equal height binning we can use `NTILE` and histogram (equal width binning) with `WIDTH_BUCKET`