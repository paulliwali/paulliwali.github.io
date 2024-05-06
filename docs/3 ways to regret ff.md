1. How your record will be if switched with another league mate
2. How your record will be if you started the most optimal lineup each week
3. How your record will be if you didn't drop good performing players

Database Schema

schedule

| week | home  | away  |
| ---- | ----- | ----- |
| 1    | alice | bob   |
| 1    | emliy | frank |
| 2    | alice | frank |
| 2    | bob   | emily |

roster

| team_owner | week | roster                   | roster_started |
| ---------- | ---- | ------------------------ | -------------- |
| alice      | 1    | list(player_a, player_b) | list(player_a) |
| frank      | 1    |                          |                |
| bob        | 1    |                          |                |
player_performance

| player_name | week | points |
| ----------- | ---- | ------ |
| player_a    | 1    | 12     |
| player_a    | 2    | 13     |
| player_a    | 3    | 11     |
