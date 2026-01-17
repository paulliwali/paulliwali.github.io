# Context
We have a dataset representing user interactions with a new "Stories" feature. Each row in our `interactions` DataFrame corresponds to a single user interaction, and it has the following columns:

- `user_id` (str): A unique identifier for each user.
- `story_id` (str): A unique identifier for each story.
- `interaction_type` (str): The type of interaction, which can be 'view', 'like', 'share', or 'skip'.
- `timestamp` (datetime): The time of the interaction.

### **Question 1:** How would you use pandas to calculate the total number of unique users who viewed _at least one_ story?

---

**Benchmark Answer for Question 1:**

A Senior Data Scientist would approach this with a clear understanding of filtering and then identifying unique values.

Python

```
import pandas as pd

# Assume 'interactions' DataFrame is already loaded and looks something like this:
data = {
    'user_id': ['A', 'B', 'A', 'C', 'B', 'D', 'A', 'C'],
    'story_id': ['s1', 's2', 's1', 's3', 's1', 's4', 's5', 's2'],
    'interaction_type': ['view', 'like', 'share', 'view', 'view', 'skip', 'view', 'like'],
    'timestamp': pd.to_datetime([
        '2023-01-01 10:00:00', '2023-01-01 10:05:00', '2023-01-01 10:10:00',
        '2023-01-01 10:15:00', '2023-01-01 10:20:00', '2023-01-01 10:25:00',
        '2023-01-01 10:30:00', '2023-01-01 10:35:00'
    ])
}
interactions = pd.DataFrame(data)

# Filter for 'view' interactions
view_interactions = interactions[interactions['interaction_type'] == 'view']

# Get the number of unique users from the filtered DataFrame
num_unique_viewers = view_interactions['user_id'].nunique()

print(f"Total number of unique users who viewed at least one story: {num_unique_viewers}")
```

**Explanation of the benchmark answer:**

1. **Filtering for 'view' interactions:** The first crucial step is to narrow down the DataFrame to only include rows where `interaction_type` is 'view'. This ensures we are only considering the relevant interactions.
2. **`nunique()` for unique count:** After filtering, we simply call `.nunique()` on the `user_id` column of the filtered DataFrame. This directly gives us the count of distinct `user_id`s, which represents the total number of unique users who had at least one 'view' interaction. This is the most direct and idiomatic pandas way to achieve the desired result.

---

## Question 2:** We want to understand the popularity of stories. How would you use pandas to find the top 5 most viewed stories, along with the count of views for each?

---

**Benchmark Answer for Question 2:**

A Senior Data Scientist would ensure the sorting is in the correct direction to identify the "top" items.

Python

```
import pandas as pd

# Assume 'interactions' DataFrame is already loaded as before
data = {
    'user_id': ['A', 'B', 'A', 'C', 'B', 'D', 'A', 'C', 'E', 'A'],
    'story_id': ['s1', 's2', 's1', 's3', 's1', 's4', 's5', 's2', 's1', 's3'],
    'interaction_type': ['view', 'like', 'view', 'view', 'view', 'skip', 'view', 'view', 'view', 'view'],
    'timestamp': pd.to_datetime([
        '2023-01-01 10:00:00', '2023-01-01 10:05:00', '2023-01-01 10:10:00',
        '2023-01-01 10:15:00', '2023-01-01 10:20:00', '2023-01-01 10:25:00',
        '2023-01-01 10:30:00', '2023-01-01 10:35:00', '2023-01-01 10:40:00',
        '2023-01-01 10:45:00'
    ])
}
interactions = pd.DataFrame(data)

# Filter for 'view' interactions (re-defining view_interactions for clarity in this separate example)
view_interactions = interactions[interactions['interaction_type'] == 'view']

# Calculate the count of views for each story_id and get the top 5
top_5_most_viewed_stories = view_interactions['story_id'].value_counts().head(5)

print("Top 5 most viewed stories and their view counts:")
print(top_5_most_viewed_stories)
```

**Explanation of the benchmark answer:**

1. **Filtering for 'view' interactions:** As established, we first ensure we are only counting 'view' interactions.
2. **`value_counts()`:** This method is perfect for counting the occurrences of unique values in a Series. By default, `value_counts()` returns the counts in _descending_ order, which is exactly what we need for "top N" analysis.
3. **`head(5)`:** This method then conveniently selects the first 5 entries from the resulting Series, which correspond to the 5 most viewed stories.

---
## **Question 3:** We are concerned about user "churn" on the Stories feature. Specifically, we want to identify users who had a 'view' interaction but then never had a 'like' or 'share' interaction. How would you identify these users using pandas?

---

**Benchmark Answer for Question 3:**

A Senior Data Scientist would likely consider using set operations or direct boolean indexing combined with `isin()` for this type of problem, as it can often be more explicit and performant than a full pivot for specific filter conditions.

Python

```
import pandas as pd
import numpy as np

# Assume 'interactions' DataFrame is already loaded
data = {
    'user_id': ['A', 'B', 'A', 'C', 'B', 'D', 'A', 'C', 'E', 'F', 'G'],
    'story_id': ['s1', 's2', 's1', 's3', 's1', 's4', 's5', 's2', 's6', 's7', 's8'],
    'interaction_type': ['view', 'like', 'view', 'view', 'view', 'skip', 'view', 'like', 'view', 'view', 'view'],
    'timestamp': pd.to_datetime([
        '2023-01-01 10:00:00', '2023-01-01 10:05:00', '2023-01-01 10:10:00',
        '2023-01-01 10:15:00', '2023-01-01 10:20:00', '2023-01-01 10:25:00',
        '2023-01-01 10:30:00', '2023-01-01 10:35:00', '2023-01-01 10:40:00',
        '2023-01-01 10:45:00', '2023-01-01 10:50:00'
    ])
}
interactions = pd.DataFrame(data)

# 1. Get all unique users who had a 'view' interaction
viewers = interactions[interactions['interaction_type'] == 'view']['user_id'].unique()

# 2. Get all unique users who had a 'like' interaction
likers = interactions[interactions['interaction_type'] == 'like']['user_id'].unique()

# 3. Get all unique users who had a 'share' interaction
sharers = interactions[interactions['interaction_type'] == 'share']['user_id'].unique()

# Convert to sets for efficient set operations
viewers_set = set(viewers)
likers_set = set(likers)
sharers_set = set(sharers)

# Find users who viewed but did NOT like AND did NOT share
# This means they are in the 'viewers_set' AND not in 'likers_set' AND not in 'sharers_set'
users_who_viewed_but_no_like_share = viewers_set - (likers_set.union(sharers_set))

# Convert the result back to a list or pandas Series if preferred
churn_users = list(users_who_viewed_but_no_like_share)

print("Users who viewed but never liked or shared:")
print(churn_users)

# Alternative using boolean indexing (more concise for simple cases)
# Get users who had a 'view' interaction
viewed_users_df = interactions[interactions['interaction_type'] == 'view']

# Get users who had a 'like' or 'share' interaction
liked_or_shared_users_df = interactions[interactions['interaction_type'].isin(['like', 'share'])]

# Identify users who are in 'viewed_users_df' but NOT in 'liked_or_shared_users_df'
# We want unique user_ids from viewed_users_df
unique_viewers = viewed_users_df['user_id'].unique()
unique_liked_or_shared = liked_or_shared_users_df['user_id'].unique()

# Use pandas isin() for filtering:
churn_users_isin = unique_viewers[~np.isin(unique_viewers, unique_liked_or_shared)]

print("\nUsers who viewed but never liked or shared (using isin()):")
print(churn_users_isin)
```

**Explanation of the benchmark answer:**

1. **Extracting Unique User Sets:** The most robust and often clearest way to handle "did X but not Y" logic is by first getting the unique identifiers for each group of users (`viewers`, `likers`, `sharers`).
2. **Set Operations:** Python's built-in `set` type provides highly optimized operations for finding differences and unions.
    - `likers_set.union(sharers_set)` creates a set of all users who either liked OR shared.
    - `viewers_set - (likers_set.union(sharers_set))` then subtracts this combined set from the `viewers_set`. The result is exactly the users who viewed but are NOT in the group of users who liked or shared.
3. **Alternative using `np.isin()`:** For direct pandas manipulation, filtering the unique viewers based on whether they are _not_ in the unique set of likers/sharers using `np.isin()` is also very effective and often highly performant.

Both of these benchmark approaches are efficient and directly target the problem without needing to create a sparse pivoted DataFrame, which can be memory-intensive for very large datasets with many interaction types.

---

## **Question 4:** We need to analyze user engagement over time. Specifically, we want to calculate the daily average number of interactions per user. How would you do this using pandas?

---

**Benchmark Answer for Question 4:**

A Senior Data Scientist would typically break this down into two clear steps: first calculate interactions per user per day, and then average these values.

Python

```
import pandas as pd

# Assume 'interactions' DataFrame is already loaded
data = {
    'user_id': ['A', 'B', 'A', 'C', 'B', 'D', 'A', 'C', 'E', 'A', 'A', 'B', 'C'],
    'story_id': ['s1', 's2', 's1', 's3', 's1', 's4', 's5', 's2', 's6', 's7', 's8', 's9', 's10'],
    'interaction_type': ['view', 'like', 'view', 'view', 'view', 'skip', 'view', 'like', 'view', 'view', 'share', 'view', 'view'],
    'timestamp': pd.to_datetime([
        '2023-01-01 10:00:00', '2023-01-01 10:05:00', '2023-01-01 10:10:00',
        '2023-01-01 10:15:00', '2023-01-01 10:20:00', '2023-01-01 10:25:00',
        '2023-01-02 09:00:00', '2023-01-02 09:15:00', '2023-01-02 10:00:00',
        '2023-01-03 11:00:00', '2023-01-03 11:10:00', '2023-01-03 11:20:00',
        '2023-01-03 11:30:00'
    ])
}
interactions = pd.DataFrame(data)

# Step 1: Extract the date from the timestamp
interactions['event_date'] = interactions['timestamp'].dt.date
# Alternatively, for datetime objects normalized to the start of the day:
# interactions['event_date'] = interactions['timestamp'].dt.normalize()

# Step 2: Calculate the number of interactions per user per day
interactions_per_user_per_day = interactions.groupby(['user_id', 'event_date']).size().reset_index(name='interactions_count')

# The resulting DataFrame `interactions_per_user_per_day` now looks like:
#    user_id  event_date  interactions_count
# 0        A  2023-01-01                   2
# 1        A  2023-01-02                   1
# 2        A  2023-01-03                   2
# 3        B  2023-01-01                   2
# 4        B  2023-01-03                   1
# 5        C  2023-01-01                   1
# 6        C  2023-01-02                   1
# 7        C  2023-01-03                   1
# 8        D  2023-01-01                   1
# 9        E  2023-01-02                   1

# Step 3: Calculate the overall average of these daily user interaction counts
daily_average_interactions_per_user = interactions_per_user_per_day['interactions_count'].mean()

print(f"Daily average number of interactions per user: {daily_average_interactions_per_user:.2f}")

# --- Alternative using `groupby().transform()` or `groupby().apply()` could also work for complex scenarios,
# --- but the two-step `groupby().size().mean()` is often clearest for this specific question.
```

**Explanation of the benchmark answer:**

1. **Extracting `event_date`:** The `dt.date` accessor is used to get just the date component (YYYY-MM-DD) from the `timestamp` column. This is crucial for grouping interactions by day, regardless of the time of day. `dt.normalize()` is another excellent option that keeps the result as a datetime object but with time set to 00:00:00.
2. **Interactions per user per day:**
    - `interactions.groupby(['user_id', 'event_date'])`: Groups the DataFrame by both the user and the specific day.
    - `.size()`: This is a very efficient way to count the number of rows within each group. It directly gives you the count of interactions for each `(user_id, event_date)` combination.
    - `.reset_index(name='interactions_count')`: This converts the grouped result (a Series) back into a DataFrame, giving the count column a meaningful name.
3. **Overall Average:** Finally, `.mean()` is called on the newly created `interactions_count` column of the `interactions_per_user_per_day` DataFrame. This calculates the average of all the individual daily interaction counts per user, fulfilling the "daily average number of interactions per user" requirement.

---

## **Question 5:** We want to understand if there's a correlation between the number of views a user has and the number of shares they make. How would you calculate this correlation using pandas, and what columns would you use?

---


```
import pandas as pd
import numpy as np

# Assume 'interactions' DataFrame is already loaded
data = {
    'user_id': ['A', 'B', 'A', 'C', 'B', 'D', 'A', 'C', 'E', 'A', 'B', 'A'],
    'story_id': ['s1', 's2', 's1', 's3', 's1', 's4', 's5', 's2', 's6', 's7', 's8', 's9'],
    'interaction_type': ['view', 'like', 'view', 'view', 'view', 'skip', 'share', 'view', 'share', 'view', 'like', 'view'],
    'timestamp': pd.to_datetime([
        '2023-01-01 10:00:00', '2023-01-01 10:05:00', '2023-01-01 10:10:00',
        '2023-01-01 10:15:00', '2023-01-01 10:20:00', '2023-01-01 10:25:00',
        '2023-01-01 10:30:00', '2023-01-01 10:35:00', '2023-01-01 10:40:00',
        '2023-01-01 10:45:00', '2023-01-01 10:50:00', '2023-01-01 10:55:00'
    ])
}
interactions = pd.DataFrame(data)

# Step 1: Calculate total views per user
total_views_per_user = interactions[interactions['interaction_type'] == 'view'] \
                                     .groupby('user_id') \
                                     .size() \
                                     .rename('total_views') # Rename for clarity

# Step 2: Calculate total shares per user
total_shares_per_user = interactions[interactions['interaction_type'] == 'share'] \
                                     .groupby('user_id') \
                                     .size() \
                                     .rename('total_shares') # Rename for clarity

# Step 3: Combine these two Series into a single DataFrame for easier correlation calculation
# Using pd.merge or pd.concat is common. pd.DataFrame.join is also an option.
# We'll use a merge for robustness in case some users only have views or shares.
user_engagement = pd.merge(
    total_views_per_user.reset_index(),
    total_shares_per_user.reset_index(),
    on='user_id',
    how='outer' # Use outer to keep all users, even if they have 0 views or shares
).fillna(0) # Fill NaN with 0 for users who didn't have views or shares for a type

# Step 4: Calculate the correlation between 'total_views' and 'total_shares'
# Using .corr() on the DataFrame directly between the two columns
correlation_views_shares = user_engagement['total_views'].corr(user_engagement['total_shares'])

print(f"Correlation between total views and total shares per user: {correlation_views_shares:.4f}")

# The columns used for correlation are 'total_views' and 'total_shares' from the
# 'user_engagement' DataFrame.

# --- Alternative: Correlation of Daily Counts per User-Day ---
# If the question implied correlating daily patterns, the approach would be:

# interactions['event_date'] = interactions['timestamp'].dt.date
#
# daily_counts = interactions.groupby(['user_id', 'event_date', 'interaction_type']).size().unstack(fill_value=0)
#
# # Ensure 'view' and 'share' columns exist, fill with 0 if not
# if 'view' not in daily_counts.columns:
#     daily_counts['view'] = 0
# if 'share' not in daily_counts.columns:
#     daily_counts['share'] = 0
#
# # Now, correlate the 'view' and 'share' columns from this daily_counts DataFrame
# daily_correlation = daily_counts['view'].corr(daily_counts['share'])
# print(f"\nCorrelation between daily views and daily shares (across all user-days): {daily_correlation:.4f}")
```

**Explanation of the benchmark answer:**

1. **Aggregate Total Views and Shares per User:**
    - We first filter the `interactions` DataFrame for `interaction_type == 'view'` and `interaction_type == 'share'` separately.
    - Then, `groupby('user_id').size()` efficiently counts the number of interactions for each user for that specific type.
    - `.rename()` gives these Series meaningful names (`total_views`, `total_shares`).
2. **Combine Aggregated Data:**
    - `pd.merge()` is used to combine these two Series (after `reset_index()` to make `user_id` a column again) into a single DataFrame (`user_engagement`).
    - `how='outer'` ensures that users who only viewed but never shared, or vice-versa, are included.
    - `.fillna(0)` is crucial because if a user had no views or no shares, the corresponding column in the merged DataFrame would have `NaN`. For correlation purposes, `NaN` values are typically treated as missing, and we want to correctly represent "zero interactions."
3. **Calculate Correlation:**
    - Finally, the `.corr()` method is called between the `total_views` and `total_shares` columns of the `user_engagement` DataFrame. This directly computes the Pearson correlation coefficient, which is the standard measure for this type of question.

The alternative approach for daily correlation is also shown, demonstrating how you would approach it if the daily granularity were explicitly required.

---

## **Question 6:** We have an external list of "power users" (`power_users_df`), which contains `user_id` and a `power_user_score`. We want to calculate the average number of 'like' interactions made by these power users, compared to the average number of 'like' interactions made by all other users (non-power users). How would you do this using pandas?

Assume `power_users_df` looks like this:

```
  user_id  power_user_score
0      A                95
1      B                88
2      F                92
```

---

**Benchmark Answer for Question 6:**

A Senior Data Scientist would approach this by:

1. First, calculate the total 'like' interactions for every user.
2. Then, merge this data with the `power_users_df` to categorize users as 'power' or 'non-power'.
3. Finally, group by this new category and calculate the average 'like' interactions for each group.

Python

```
import pandas as pd
import numpy as np

# Assume 'interactions' DataFrame is already loaded
data = {
    'user_id': ['A', 'B', 'A', 'C', 'B', 'D', 'A', 'C', 'E', 'F', 'G', 'A', 'H', 'I'],
    'story_id': ['s1', 's2', 's1', 's3', 's1', 's4', 's5', 's2', 's6', 's7', 's8', 's9', 's10', 's11'],
    'interaction_type': ['view', 'like', 'view', 'view', 'like', 'skip', 'share', 'like', 'view', 'like', 'view', 'view', 'like', 'view'],
    'timestamp': pd.to_datetime([
        '2023-01-01 10:00:00', '2023-01-01 10:05:00', '2023-01-01 10:10:00',
        '2023-01-01 10:15:00', '2023-01-01 10:20:00', '2023-01-01 10:25:00',
        '2023-01-01 10:30:00', '2023-01-01 10:35:00', '2023-01-01 10:40:00',
        '2023-01-01 10:45:00', '2023-01-01 10:50:00', '2023-01-01 10:55:00',
        '2023-01-02 09:00:00', '2023-01-02 09:05:00'
    ])
}
interactions = pd.DataFrame(data)

# Power users DataFrame as provided in the question
power_users_data = {
    'user_id': ['A', 'B', 'F'],
    'power_user_score': [95, 88, 92]
}
power_users_df = pd.DataFrame(power_users_data)


# Step 1: Calculate the total number of 'like' interactions for each user
# We use .size() to count interactions per group, and .rename() for clarity.
likes_per_user = interactions[interactions['interaction_type'] == 'like'] \
                                .groupby('user_id') \
                                .size() \
                                .rename('total_likes') \
                                .reset_index() # Convert Series to DataFrame for merging

# Step 2: Merge with power_users_df to identify power users and non-power users
# Use a left merge from 'likes_per_user' to keep all users who liked,
# and then add a flag for power users.
user_likes_with_power_status = pd.merge(
    likes_per_user,
    power_users_df[['user_id']], # Only need user_id from power_users_df for the join
    on='user_id',
    how='left',
    indicator='_merge' # Add a column indicating merge source (left_only, right_only, both)
)

# Create a 'user_type' column based on whether the user_id was found in power_users_df
user_likes_with_power_status['user_type'] = np.where(
    user_likes_with_power_status['_merge'] == 'both',
    'power_user',
    'non_power_user'
)

# Clean up the merge indicator column
user_likes_with_power_status = user_likes_with_power_status.drop(columns=['_merge'])

# Step 3: Calculate the average number of 'like' interactions for each user group
average_likes_by_group = user_likes_with_power_status.groupby('user_type')['total_likes'].mean()

print("Average number of 'like' interactions by user type:")
print(average_likes_by_group)

# To include users who had 0 likes but are part of the population:
# If you need to consider *all* users from the original interactions DataFrame,
# even those with 0 likes, the approach would be slightly different:

# Get all unique user IDs from the main interactions dataset
all_users = pd.DataFrame(interactions['user_id'].unique(), columns=['user_id'])

# Left merge all users with their like counts, filling NaN for those with 0 likes
all_users_likes = pd.merge(
    all_users,
    likes_per_user,
    on='user_id',
    how='left'
).fillna({'total_likes': 0}) # Fill NaN total_likes with 0

# Now merge with power_users_df to classify all users
all_users_classified = pd.merge(
    all_users_likes,
    power_users_df[['user_id']],
    on='user_id',
    how='left',
    indicator='_merge'
)

all_users_classified['user_type'] = np.where(
    all_users_classified['_merge'] == 'both',
    'power_user',
    'non_power_user'
)
all_users_classified = all_users_classified.drop(columns=['_merge'])

average_likes_by_group_all_users = all_users_classified.groupby('user_type')['total_likes'].mean()
print("\nAverage number of 'like' interactions by user type (including users with 0 likes):")
print(average_likes_by_group_all_users)


# If you were to perform a t-test (beyond pandas, using scipy.stats):
# from scipy import stats
#
# power_user_likes = all_users_classified[all_users_classified['user_type'] == 'power_user']['total_likes']
# non_power_user_likes = all_users_classified[all_users_classified['user_type'] == 'non_power_user']['total_likes']
#
# # Perform independent t-test (assuming equal variances for now)
# t_stat, p_value = stats.ttest_ind(power_user_likes, non_power_user_likes, equal_var=True)
# print(f"\nResults of Independent t-test:")
# print(f"T-statistic: {t_stat:.4f}")
# print(f"P-value: {p_value:.4f}")
```
