- **Metadata**
    - Source: https://www.loggly.com/blog/exceptional-logging-of-exceptions-in-python/
    - Author: Aaron Maxwell
    - Tags: [[Python Learning]] [[programming]] [[logging]]
- Big Tarp Pattern
    - ```python
try: 
  main()
except Exception:
  logger.exception("Error in main()!")```
    - `logger.exception(msg)` method will log a full stack trace of the error with the message
    - This will log to the level **ERROR**
    - Or, logging with `logger.info(msg, exc_info=True)` allows for a full stack trace and customization of the log level
- Pinpoint Pattern
    - ```python
try:
  object = some_function()
except SomeSpecificError as err:
  logger.warn("Some specific error was raised. {}".format(err.message))```
    - You don’t need the full stack trace when you know which exception was raised
- Message and Raise Pattern
    - ```python
try:
  some_function()
except SomeError:
  logger.warn("Error occured, not handling it.")
  raise```
    - This pattern allows for a higher level handler to deal with it
- Cryptic Message (__Anti-Pattern__)
    - ```python
try:
  some_function()
except SomeError:
  logger.warn("Something bad.")```
    - This will cause confusion down the road because it doesn’t inform others where exactly this is occurring in the code
    - **FIX:** add `exec_info=True` to give the full stack trace in the message
- All Shall Pass (__Anti-Pattern__)
    - ```python
try:
  some_function()
except Exception:
  pass```
    - This is the worst pattern of all because it hides the fact that there is an error
- Python logging levels
    - 1. CRITICAL
    - 2. ERROR
    - 3. WARNING
    - 4. INFO
    - 5. DEBUG
