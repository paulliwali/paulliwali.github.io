# Python Basics

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
```

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
