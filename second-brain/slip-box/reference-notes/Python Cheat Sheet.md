# Python Basics

## Sets
- Removes duplicates easily

## List
- Able to be sorted
- list comprehension
- mode, min and max

## Dictionary

Dictionary comprehension for filtering items in `some_dict` that exists in `some_list`

```python
some_list = [1, 2, 3]
new_dict = {k: v for k, v in some_dict.itmes() if k in some_list}
```

Nested dictionary comprehension

```python
some_list = [1, 2, 3]
new_dict = {
 outer_k: {
  inner_k: inner_v for inner_k, inner_v in outer_v.items() if inner_k in some_list
 } for outer_k, outer_v in some_dict.items() if outer_k in some_list
}
```

## Time and Dates

Don't initialize timezone when creating datetime objects, localize the naive datetime. [Source](http://pytz.sourceforge.net/#localized-times-and-date-arithmetic)

```python
import pytz
from datetime import datetime

pdt = pytz.timezone('America/Los_Angeles')
bad_tz_aware_datetime = datetime(2014, 1, 1, tzinfo=pdt)
naive_datetime = datetime(2014, 1, 1)
good_tz_aware_datetime = pdt.localize(naive_datetime)

pd.to_datetime(observation_df['enter_epoch_ms'], unit='ms', utc=True).dt.tz_convert(observation_df["timezone"])
```


```bash
## Logging

```python
# Setup logger for scripts
import logging
# Create a custom logger
logger = logging.getLogger(__name__)
# Create handlers
c_handler = logging.StreamHandler()
f_handler = logging.FileHandler('file.log')
c_handler.setLevel(logging.WARNING)
f_handler.setLevel(logging.ERROR)
# Create formatters and add it to handlers
c_format = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
f_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
c_handler.setFormatter(c_format)
f_handler.setFormatter(f_format)
# Add handlers to the logger
logger.addHandler(c_handler)
logger.addHandler(f_handler)
logger.warning('This is a warning')
logger.error('This is an error')
```

Computation of arguments passed to the logging method can be expensive, so they should be avoided if the logger will just throw the event away. Thus, using string formatting `%s` over f-string formatting in logging messages is more optimal, since the arguments are deferred until it cannot be avoided.

## Imports

```python
# Import modules from root 'src' folder
import sys
src_path = os.path.abspath("../../src")
if src_path not in sys.path:
    sys.path.append(src_path)
```

## Built-ins

`yield` - gets a generator object from the function. When Python calls a function with `yield` it will execute code up to it and pauses to deliver the object, when it is called again it will resume from that statement until the next `yield`

`generators` - a special kind of `iterator` that you can only iterator over once and doesn't store values in memory

## Decorators

Used in python as syntatic sugar for passing functions to functions and returning new functions.

### Decorate functions without arguments

```python
from timeit import default_timer as timer
from time import sleep
from typing import Callable

def measure(func: Callable):
 def inner(*args, **kwargs):
  print(f'---> Calling {func.__name__}()')
  start = timer()
  func(*args, **kwargs)
  elapsed_sec = timer() - start
  print(f'---> Done {func.__name__}(): {elapsed_sec:.3f} secs')
 return inner

def sleeper(seconds: int = 0):
 print('Going to sleep...')
 sleep(seconds)
 print('Done!')
```

Instead of calling the `sleeper` function within measure

```python
measured_sleeper = measure(sleeper)
measured_sleeper(3)
```

```
---> Calling sleeper()
Going to sleep...
Done!
---> Done sleeper(): 3.003 secs
````

We can use the decorator syntax to do this succinctly by wrapping the original function

```python
@measure
def sleeper(seconds: int = 0):
 print('Going to sleep...')
 sleep(seconds)
 print('Done!')

sleeper(3)
```

### Decorate functions with arguments

```python
from typing import Callable

def repeat(n: int = 1):
 def decorator(func: Callable):
  def inner(*args, **kwargs):
   for _ in range(n):
    func(*args, **kwargs)
  return inner
 return decorator

@repeat(n=3)
def hello(name: str):
 print(f'Hello {name}!')

hello("world")
```

```
Hello world!
Hello world!
Hello world!
```

### Decorate class with a function

```python
from typing import Callable

def trace(cls: type):
 def make_traced(cls: type, method_name: str, method: Callable):
  def traced_method(*args, **kwargs):
   print(f'Executing {cls.__name__}::{method_name}...')
   return method(*args, **kwargs)
  return traced_method
 for name in cls.__dict__.keys():
  if callable(getattr(cls, name)) and name != "__class__":
   setattr(cls, name, make_traced(cls, name, getattr(cls, name)))
 return cls

@trace
class Foo:
 i: int = 0
 def __init__(self, i: int = 0):
  self.i = i
 def increment(self):
  self.i += 1
 def __str__(self):
  return f'This is a {self.__class__.__name__} object with i = {self.i}'
```

# Numpy


# Pandas
- Remember `transform` and `filter`

![[Pasted image 20240513115340.png]]

![[Pasted image 20240513115346.png]]

Exploratory

```python
df.info() # Get the total non-null rows, dtypes, column names
df.shape # Shape of the dataframe
len(df) # Length of the dataframe 
df.columns # Column names
df.dtypes # Get the dtype of the columns
df.describe() # Get descriptive statistics of the columns
df.value_counts() # Get number of count per value
```

Format conversion

```python
df['hour'] = df['hour'].astype('int64')
```

NULL filter

```python
df.loc[df['column_name'].isnull()]
```

Flatten multiindex and rename with underscore

```python
df.columns = ["_".join(a) for a in df.columns.to_flat_index()]
```

Dates

```python
df.date_col.dt.to_period('M').dt.to_timestamp() # Convert to the month
```

Resample

```python
df = pd.DataFrame(index=pd.date_rage('1/1/2000', periods=10, freq='min'), data=range(10))

# Downsample 
df.resample('2min').sum()

# Upsample
df.resample('30s').ffill()
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

lambda

```python
# Apply to all columns
df = df.assign(NewCol=lambda x: x['colA'] * x['colB'])

# Apply to all rows
df = df.apply(lambda x: func(x), axis=1)
# Apply to somme rows
df = df.apply(lambda x: func(x) if x.name in ['a', 'b'] else x, axis=1)
```



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

# Jupyter

Show more rows

```python
pd.set_option('display.max_rows', 500)
```

Format display

```python
pd.options.display.float_format = '{:,.2f}'.format
```

# Plotting

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

# Scikit

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

# Pyspark

Sometimes switching between corporate IP will result in a bad port to fix it:

```bash
export SPARK_LOCAL_IP=127.0.0.1
```

hive partition -> individual files

Spark has optimal file sizes and depending on how writing is done, multiple files representing 1 partition can be written by multiple executors, or 1 single file representing 1 partition can be written
