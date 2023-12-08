# Python Data Science

## Useful decorators

`@parallel` to quickly implement parallelization on any function

```python
from joblib import Parallel
from os import cpu_count
from typing import Callable

def parallel(func=None, args=(), merge_func=lambda x:x, parallelism=cpu_count()):
 def decorator(func: Callable):
  def inner(*args, **kwargs):
   results = Parallel(n_jobs=parallelism)(delayed(func)(*args, **kwargs) for i in range(parallelism))
   return merge_func(results)
  return inner
 if func is None:
  # decorator was used like @parallel(...)
  return decorator
 else:
  # decorator was used like @parallel
  return decorator(func)
```

`@redirect` to add line numbers to the printout

```python
from contextlib import redirect_stdout
from io import StringIO
from math import floor, log
from typing import Callable

def redirect(func=None, line_print: Callable=None):
 def decorator(func: Callable):
  def inner(*args, **kwargs):
   with StringIO() as buf, redirect_stdout(buf):
    func(*args, **kwargs)
    output = buf.getvalue()
   lines = output.splitlines()
   if line_print is not None:
    for line in lines:
     line_print(line)
   else:
    width = floor(log(len(lines), 10)) + 1
    for i, line in enumerate(lines):
     i += 1
     print(f'{i:0{width}}: {line}')
  return inner
 if func is None:
  # decorator was used like @redirect(...)
  return decorator
 else:
  # decorator was used like @redirect
  return decorator(func)
```

### Jupyter

Show more rows

```python
pd.set_option('display.max_rows', 500)
```

Format display

```python
pd.options.display.float_format = '{:,.2f}'.format
```

## Pandas

Flatten multiindex and rename with underscore

```python
df.columns = ["_".join(a) for a in df.columns.to_flat_index()]
```

Dates

```python
df.date_col.dt.to_period('M').dt.to_timestamp()
```
Subtotals

```python
df = pd.pivot_table(
 df,
 values=["values_to_agg"],
 index=["index_col"],
 columns=["columns"],
 aggfunc=np.mean,
 margins=True
).stack("columns")
```

Proportion

```python
df['weight'] / df.groupby(["event_dt"])['weight'].transform('sum')
```

Apply count to all rows

```python
df["count"] = df.groupby("groupby_var")[["value_var"]].transform("count")
```

Left anti-join

```python
df_left = df_left.merge(df_right, on=["keys"], how="outer", indicator=True)
df_left = df_left.loc[df_left["_merge"] == "left_only"]
df_left = df_left.drop(columns="_merge")
```

```python
df2 = df.piovt()
df2.columns = df.columns.to_series().str.join('_')
df2.reset_index
```

## Plotting

```python
def legend_without_duplicate_labels(ax):
    handles, labels = ax.get_legend_handles_labels()
    unique = [(h, l) for i, (h, l) in enumerate(zip(handles, labels)) if l not in labels[:i]]
    ax.legend(*zip(*unique))
```

```python
color_map = plt.get_smap("viridis")
norm = plt.Normalize(0, 20)
plt.plot(df, color=color_map(norm(value)))
scalarmappaple = plt.cm.ScalarMappable(norm=norm, cmap=plt.cm.viridis)
plt.colorbar(scalarmappaple, oreientation="horizontal")
```

```python
ax.set_xticklabels(ax.get_xticklabels(), rotation=30)
```

```python
Try using the legend='full' parameter for seaborn.lineplot()
```

## Scikit

Creating a valid estimator

1. Init variables much be of a data type which evaluates as equal when compared with another copy of itself
 - pass the string of the estimator and use a method to resolve the name
2. Fit method needs to return the estimator itself for chaining
3. Attribute `self.is_fitted_` is set by `.fit()` method and checked by `.predict()`
4. Input is validated with `check_array()`

Disable warnings from scikit
```python
  
def warn(*args, **kwargs):
	pass
import warnings
warnings.warn = warn
```

## Pyspark

Sometimes switching between corporate IP will result in a bad port to fix it:

```bash
export SPARK_LOCAL_IP=127.0.0.1
```

hive partition -> individual files

Spark has optimal file sizes and depending on how writing is done, multiple files representing 1 partition can be written by multiple executors, or 1 single file representing 1 partition can be written
