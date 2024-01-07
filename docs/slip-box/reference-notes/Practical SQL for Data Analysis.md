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
- Good for readibility and modularity
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
- To produce random numbers, one can use `ceil(random())` or `floor(random())` 
- Don't use `round(random())` because it doesn't retain the distribution
```sql
SELECT 
	ceil(random() * 3) AS n,
	count(*)
FROM generate_series(0, 1000)
GROUP BY 1
```
- One can extend this to produce random choice
```sql
SELECT 
	(array['RED', 'BLUE', 'GREEN'])[ceil(random() * 3)] AS color 
FROM generate_series(1, 5)
```
- To sample you can use `random()` but it is pretty inefficient
- So PostgreSQL has two methods: `system` and `bernoulli`
	- `system` is done with blocks so it is faster
```sql
-- using random
WITH random_sample AS ( 
	SELECT * 
	FROM users 
	ORDER BY random() LIMIT 1000
)
SELECT count(*) FROM random_sample

-- using system
WITH system_sample AS (
	SELECT *
	FROM users TABLESAMPLE() SYSTEM(10) -- argument is percentage
)
SELECT count(*) FROM system_sample

-- using bernoulli 
WITH bernoulli_sample AS (
	SELECT *
	FROM users TABLESAMPLE() BERNOULLI(10) -- argument is percentage
)
SELECT count(*) FROM bernoulli_sample
```

