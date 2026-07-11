⌗ Metadata
- Source: https://karpathy.medium.com/software-2-0-a64152b37c35
- Author: Andrej Karpathy
- Tags: #programming #machine-learning 

📰 Summary (use your own words)

There is a shift in programs that execute exact instructions line by line to programs that knows the rules and rewards and finds the "best" way to achieve this end result.


✍️ Notes
- Classical Software 1.0 stack is written in Python, C, etc
	- Explicit instructions to tell the program what to do
- Many still think that machine learning is *just* a toolbox to find creative solutions to online challenges
	- Have to fully accepted that it is not the future but *here already*
- Software 2.0 is written in an abstract, human-unreadible language
	- Also known as "black-box" program
	- Consists of:
		- datasets that defines the desired outcomes
		- architecture that defines the structure but with the details waiting for be filled in
- This is crucial to tackle future problems because there are lots of real-world problems where it is easier to collect data but very hard to define the explicit instructions to solve it
	- Examples of transitioning from 1.0 to 2.0:
		- Visual recognition - from engineered features with bits of SVM to using convolutional neural network architectures
		- Speech recognition - from preprocessing, gaussian mixture models, hidden markov models to entirely neural neets
		- Speech synthesis - from stiching to large ConvNets
		- Machine translation - from phrase based statistical techniques to weakly or unsupervised neural networks
		- Games - from hand coded rule based to ConvNet
- Benefits of 2.0
	- Computationally homogeneous
		- Entirely consistent of matrix multiplications and activation equation
	- Simple to bake into silicon
		- instruction set being much smaller it is easier to make smaller chips
	- Constant running time
		- Each iteration of the forward pass is the same 
	- Highly portable
		- Once trained, the sequence of matrix multiplication is easy to run 
	- Agile
		- Easy to retrain and increase or decrease the speed
- Limitations of 2.0
	- If debugging and explaining code was already the hardest part of 1.0, **then this is infinitely harder with 2.0**
	- Silent failures or gives very wrong results
	- How do we share, manage and deploy software 2.0?