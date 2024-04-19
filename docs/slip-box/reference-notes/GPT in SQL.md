---
source:
  - https://explainextended.com/2023/12/31/happy-new-year-15/
author:
  - Quassnoi
tags:
  - machine-learning
---
# 📰 Summary (use your own words)
Explains GPT with a SQL demo

# ✍️ Notes
- A generative LLM is a function that takes in some texts (prompt) and returns strings and numbers which represents the probability this string "should" be next 
	- The function is **deterministic**
	- But how can GPTs give different answers? 
- The family of algorithms that found success in creating LLMs with good grammar and structure is called generative pre-trained transformers
- The rough structure of a GPT is as follows
```python
def generate(prompt: str) -> str:
	tokens = tokenize(prompt)

	while True:
		candidates = gpt2(tokens)
		next_token = select_next_token(candidates)

		tokens.append(next_token)

		if should_stop_generating():
			break

	comletion = detokenize(tokens)
	return completion
```

### Tokenizer
- converting from strings to numbers in an efficient way
- byte-pair encoding was what was used in GPT2
	- start with encoding of 256 tokens, one for each byte
	- then find the most common 2-token combinations
	- assign the encoding of this to the next token, repeat
	- do this x times
### Embedding
- Each token has orthogonal properties which can be encoded with vectors
- The process of converting a token ID to a vector space is called embedding
- How many properties should the vector space capture?
	- We don't know
	- Just need to create it large enough to capture *all* of it
- GPT2 stores two kinds of embeddings as matrices: one for the tokens (WTE) and one for the position (WPE)
	- The values of the matrices are learned during training
	- The WPE shape limits the maximum number of tokens that can be used in a prompt for the GPT - which is 1024 in GPT2 and now up to 1million in Gemini 1.5 Pro
### Attention
- The groundbreaking feature of the transformer, it gives the ability to transfer some meaning from other token to the current one
- Uses 12 sets of matrices called Q (query), K (key) and V (value)
- Each matrix has 64 columns and together they form the attention matrix for each token
	- 3 x 12 x 64 columns for each token
- Temperature
	- Changes how the softmax function selects the next token, can increase the "creativeness"
- 