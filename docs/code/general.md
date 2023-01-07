# General Coding Principles

## Keys to writing clean functions

- How easy would it be to unit test the function
- How many lines are in a function, if it greater than 20 lines then it might be doing too many things
- What are the logical steps each function is performing, if the description is "do A then B then C", then it can probably be split into 3 functions
- Data fetching -> Data processing/transformation -> Data visualization

## Clean Code Practice

1. DRY Principle
2. Minimize entities, classes, functions
3. It should be readable and simple
4. Be testable
5. SOLID Principle
6. Careful with dependencies, should be one directional
7. Don't hardcode

```bash
redis-cli -a "my-pass" --bigkeys -n <DATABASE_NUMBER>
````
