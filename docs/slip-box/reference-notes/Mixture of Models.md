---
tags:
  - "#machine-learning"
  - academic
source:
  - https://arxiv.org/abs/1701.06538
  - https://arxiv.org/abs/2006.16668
  - https://arxiv.org/abs/2101.03961
  - https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/#architecture
---
# What is it?
A way to subdivide a giant neural network into sub-networks which can be expertly trained on one aspect of the problem and then sparsely combined back together for each task. 

This means that during application, instead of using *all the parameters* of the model for any input the MoE model would select different parameters for each input. This also means that the MoE model has an outrageous number of parameters which are sparsely activated. 

This idea was introduced in 1991 and while it made theoretical sense it was never practical because of several reasons:
1. GPUs are faster at arithmetic than at branching
2. Network bandwidth is a bottleneck between GPU clusters
3. Large data sets are needed to train the multi-million to billion parameters
4. The huge number of parameters is prone to training instability
# Architectures
- One architecture design is the "sparsely-gated mixture-of-expert layer". It uses the a sparse gating function to select two experts (two sub-networks) to perform the computation
- Google developers introduced a module to scale the Transformer model with sparsely-gated MoE architecture back in 2006 with GShard
- And then in 2022 introduced the Switch Transformer to simplify the MoE routing algorithm
