# SQL Snippets

Composite table elements for better sub-queries

```SQL
WITH sub_table_name AS (
 SELECT *
 FROM db.table
), sub_table_name_2 as (
 SELECT *
 FROM db.table
)
SELECT *
FROM sub_table_name
WHERE key == value
LEFT JOIN sub_table_name
ON sub_table_name.col_name = sub_table_name.col_name
LEFT JOIN sub_table_name_2
ON sub_table_name.col_name = sub_table_name_2.col_name
```

Anti Join

```SQL
SELECT *
FROM table_left
LEFT JOIN table_right
ON table_left.col_name = table_right.col_name
WHERE table_right.val_col IS NULL
```

Pivot from long to wide

```SQL
SELECT
 group_col_name,
 MAX(CASE WHEN metric_name = 'val_name_a' THEN metric_value END) AS val_name_a,
 MAX(CASE WHEN metric_name = 'val_name_b' THEN metric_value END) as val_name_b
FROM table_name
GROUP BY group_col_name
```

## Time related

```SQL
-- Convert datetime
FROM_UNIXTIME(timestamp_epoch_ms / 1000, 'UTC') as utc_timestamp

-- Note, that dBeaver might not print it with the timezone conversion, to show it you need to
CAST(utc_timestamp as varchar)

-- Convert to epoch ms
CAST(to_unixtime(resampled_timestamp_s) AS bigint) as epoch_ms

-- Get hour
HOUR(CAST(datetime_str as timestamp))

-- Truncate datetime to month
DATE_TRUNC('month', CAST(event_dt as timestamp))
```

## Partitions

```SQL
-- rank
SELECT orderkey, clerk, totalprice,
 rank() OVER (PARTITION BY clerk
    ORDER BY totalprice DESC) as rnk
FROM orders
ORDER BY clerk, rnk
```
