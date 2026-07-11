- Library that implements many ready to use Machine Learning algorithms
- Core API design principles
    - Consistency - all objects share the same simple interface
        - Estimators
            - Can estimate some parameters based on a dataset
            - Done using `fit()` method
            - Takes the dataset as a parameter (2 for supervised) and maybe another parameter as the hyperparameter
        - Transformers
            - Some estimators can also modify the dataset by transforming it
            - Done using `transform()` method
            - Sometimes there is a combined method `fit_transform()`
        - Predictors
            - Can make predictions based on a dataset
            - Done using `predict()` method
            - Usually have a `score()` method that returns the quality of prediction 
    - Inspection - all of the estimator's learned parameter and hyperparameters are publicly accessible
    - Nonproliferation of classes - uses Numpy arrays for storing datasets
    - Composition - reuses the same building blocks
    - Sensible defaults - makes reasonable defaults so it is easy to get an E2E going without tuning
- To make a custom transformer that still works with other Scikit-Learn functionalities, you need to create a class and implement `fit()`, `transform()` and `fit_transform()`
    - ```python
# Small transfomer that creaters the combined features

```python
from sklearn.base import BaseEstimator, TransformerMixin

room_ix, bedrooms_ix, population_ix, households_ix = 3, 4, 5, 6

class CombinedAttributesAdder(BaseEstimator, TransformerMixin):
    def __init__(self, add_bedrooms_per_room = True): # no *args or **kargs
        self.add_bedrooms_per_room = add_bedrooms_per_room
    
    def fit(self, X, y=None):
        return self
    
    def transform(self, X, y=None):
        rooms_per_household = X[:, room_ix] / X[:, households_ix]
        population_per_household = X[:, population_ix] / X[:, households_ix]
        if self.add_bedrooms_per_room:
            bedrooms_per_room = X[:, bedrooms_ix] / X[:, room_ix]
            return np.c_[X, rooms_per_household, population_per_household, bedrooms_per_room]

        else:
            return np.c_[X, rooms_per_household, population_per_household]

attr_adder = CombinedAttributesAdder(add_bedrooms_per_room=False)
housing_extra_attrsibs = attr_adder.transform(housing_df.values)```
- Transformation pipelines in `scikit-learn` helps you to automate the transformers needed to be applied
    - ```python
# Create a simple piepline to auotmate the transformers
```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler


num_pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy="median")),
    ('attrsibs_adder', CombinedAttributesAdder()),
    ('std_scaler', StandardScaler()),
])

housing_num_tr = num_pipeline.fit_transform(housing_num)
```
- All but the last estimator must be transformers (they must have `fit_transform()` method)
- When you call pipeline's `fit()` method, it will chain call the `fit_transform()` method of the transfomers

