==Important to note that we should not be leaking the testing data into scaling. We won't know the test data in practice so they shouldn't be used to inform us.==

Standard scaler
- Removing the mean and dividing by the standard deviation
- This changes the feature to be centered around 0 and has unit variance
- Many ML models assumes this to be true for the features
Min Max Scale (Normalization)
- Removing the minimum and dividing by the range
- This changes the feature to be between 0 and 1
Normalizer
- Scales each data point such that the feature vector has a Euclidean distance of 1
- Used when the direction of the data matters but not the length of the vector
#data-science #machine-learning 