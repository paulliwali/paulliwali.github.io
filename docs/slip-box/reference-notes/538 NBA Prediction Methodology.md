---
source:
  - https://fivethirtyeight.com/methodology/how-our-nba-predictions-work/
author:
  - Nate Silver
tags:
  - "#sports"
  - "#statistics"
  - "#model"
---
# 📰 Summary (use your own words)
Explaining the methodology behind how 538 simulates their game prediction models.

# ✍️ Notes
- First iteration relied on [[Elo ratings]]
	- This worked well to keep track of the general strengths of teams over the years
	- But it does not capture any player movements, injuries and resting quickly
- In 2015, 538 introduced a system called CARM-elo which extends the Elo framework to use their CARMELO player projections
	- This improves the offseason affects to a team's projected strengths
	- It still had trouble with super teams that went easy during the regular season and turns it on during the playoffs - it couldn't properly measure these teams
- In 2018, fully moved away from Elo and uses player rating system
	- This system is based on RAPTOR metric
	- Using a blend of basic box score stats, player tracking metrics, plus/minus stats to estimate a player's effect (per 100 possessions) on his team's offensive and defensive efficiency
	- This metric forms a prior for each player and it gets updated as the season goes on
	- Then team's strengths can be calculated based on the line-ups they have available during game day
- Make game predictions by combining the team's talent level weighted by expected minutes played, and multiplied by a regular season or playoff scalar adjustment and converted into expected points scored
	- The expected winning percentage is calculated with [[Pythagorean expectation]] for regular season this has the form
	- $$winning \% = \frac{Projected Pts Scored^{14.3}}{Projected Pts Scored^{14.3}+Projected Pts Allowed^{14.3}}$$
- The season is then simulated with Monte Carlo and then the predictions are made