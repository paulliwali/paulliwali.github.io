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

Use GPT to train this sequence

Hard part will be getting this data in a good format

#data-science #projects