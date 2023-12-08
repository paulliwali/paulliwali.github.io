⌗ Metadata
- Source: 
	- https://confusedbit.dev/posts/how_does_gpt_work/
	- https://jalammar.github.io/illustrated-transformer/
- Author: 
- Tags: #programming #machine-learning 

📰 Summary (use your own words)
Stems from Google's seminal paper "Attention is all you need" which outlined the foundation of a transformer. This transformer structure is the key to drastically improve the natural language processing.

✍️ Notes
- Generalized pre-trained transformer
- The baseline model for natural language is a Markov chain
	- Take a reference text and learn the probabilities of word sequences
	* > The cat eats the rat
	- This learns that after `the` there is a 50/50 chance that the next word is cat or rat
	- **This model fails to understand *context***
- To improve this, the Transformer architecture gives *attention* to words
	- The Transformer is comprised a stack of encoders and a stack of decoders 
	- Each encoder is comprised of self-attention layer and a feed forward neural network
	- Each decoder is comprised of a self-attention layer and a feed forward neural network but *with a encoder-decoder attention layer* in between that focuses on relevant parts of the input sequence
	- To pass the inputs around these layers, they have to be embedded into numbers through an embedding algorithm
		- Happens once in the bottom most encoder
		- All encoders will receive a 512 sized vector after the embedding
		- The words are passed on independent paths, but the self-attention layer is what gives the better encoding to each word as it tries to understand the context 
	- Self-attention layer calculates additional vectors: queries, keys, values to help calculate the "attention" vector that gets passed into the feed forward neural network
	- Multi-headed attention expands the model's ability to focus a several parts
