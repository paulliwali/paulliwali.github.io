---
tags:
  - "#machine-learning"
source:
  - https://github.com/karpathy/autoresearch?tab=readme-ov-file
---
# How it works

Setup an agent to perform a training loop to change everything about a model from hyperparameters to the architecture. Instead of just doing your typical grid-search for hyperparameters that optimizes the model, we are now changing every detail about it and because its "cheap" for an agent to try different ones, we just let it do what it does best and track its experiment and results. The other paradigm shift is instead of coding using scikit-learn or pytorch, you only interact with a markdown file that gives the instructions to how the agent should approach the problem

# How to set it up for your use case

