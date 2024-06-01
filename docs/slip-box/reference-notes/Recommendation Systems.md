> Aims to find the and suggest items of likely interest based on the users' preferences

Association based

Content Based

Collaborative Filtering
- Memory/neighbor based: user based, item based
- Model based: matrix factorization

Community Based 

Knowledge Based


Terms
- Long tail: selling niche products to many customers 
- Cold start: a new user that doesn't have any available data
- Serendipity: recommend an item that a customer likes, even though they didn't ask for it
- Implicit: inferred data from user behavior but we will need to derive the rating. Often use [[Jaccard Similarity]] to compute this
- Explicit: directly given (related to revealed preference survey), but can be subject to sparsity, erroneous, unreliable
- Sparsity: recommending items in the long tail is hard because of few user rating

Measures:
- Mean absolute error
- Mean average precision at K: calculate the mean average of number of relevant items within the top k recommendations
- Lift: the number of hits of the model at top k recommendations over the number hits at random
