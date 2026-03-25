- Metadata
    - Source: https://github.com/elsehow/aaronson-oracle
    - Repo: https://github.com/paulliwali/aaronson-oracle-baseball

- Adapting Aaronson's Oracle to predict baseball pitches for a complete game
- Aaronson's Oracle
    - Algorithm that predicts the next keystroke by analyzing the past 5 keystrokes and the 32 possible combinations they can create
    - Then see what is more likely to follow that 5 keystroke combination
    - So when the user starts to type a particular sequence it will guess what the next keystroke is
    - It is 70% accurate
    - Enhancements can be also storing other various lengths and use the most confident one
- Pseudo-code
    - initialize a dict with 5-gram combinations as keys and the number of times each keystroke follow this combination as dict of values
    - record the rolling 5-gram combination from the user
    - look up the highest probable next keystroke, return that or default to one by chance if there are no stored values
    - update the dict with user inputs
    - calculate the rolling accuracy when making a prediction

# 2026-01-01: performance

The existing performance of the models were:
  
| Model                    | Overall | Fast   | Breaking | Off-Speed | N Pitches |
| ------------------------ | ------- | ------ | -------- | --------- | --------- |
| Naive (Always Fast)      | 0.5643  | 1.0000 | 0.0000   | 0.0000    | 24,917    |
| N-Gram (n=3)             | 0.5335  | 0.7795 | 0.2496   | 0.1121    | 24,917    |
| N-Gram (n=4)             | 0.5376  | 0.8223 | 0.1977   | 0.0837    | 24,917    |
| Frequency-Based (Oracle) | 0.4834  | 0.5979 | 0.3775   | 0.2104    | 24,917    |
| Markov Context           | 0.5552  | 0.9493 | 0.0540   | 0.0175    | 24,917    |
## 2026-03-15: autoresearch

Leveraging Andrej Karthpath's [autoresearch](https://github.com/karpathy/autoresearch?tab=readme-ov-file) loop to discover better models for predicting pitch sequencing. After a night of running and my Macbook dying half way, it was able to run 35 experiments and discover a model with 0.61% accuracy on the evaluation dataset that had an architecture of 6-layer transformer, 4 heads, 128d model, FFN 6x hidden dim with some regularization. It also found that other architectures like GBM or LSTM performed much worse.

Side note on how it works -> [[autoresearch]]

#data-science #projects