window.LECTURES = [
 {
  "id": "01-intro-to-genai",
  "title": "Introduction to Generative AI",
  "summary": "",
  "questions": [
   {
    "topic": "symbolic or subsymbolic: where the knowledge comes from",
    "stem": "A random forest sorts e-mails into spam and not spam. It learned from a million e-mails that people had labelled. What is true?",
    "options": [
     {
      "text": "It is subsymbolic, because its knowledge comes from examples",
      "correct": true
     },
     {
      "text": "It is symbolic, because its trees are made of if-then splits",
      "correct": false
     },
     {
      "text": "It is not machine learning, because it is not a neural network",
      "correct": false
     },
     {
      "text": "No single tree in it explains why an e-mail is spam",
      "correct": true
     }
    ],
    "explanation": "Its trees do split on rules, but nobody wrote them: they were learned from the labelled e-mails, hundreds of trees of them. What makes a system subsymbolic is where its knowledge comes from, not whether it is a neural network. Random forests are an ensemble technique, one of the families of machine learning."
   },
   {
    "topic": "the cow rule: only what the rules say",
    "stem": "A symbolic system uses one rule: every animal with horns, an udder, hooves and a tail is a cow. What is true?",
    "options": [
     {
      "text": "For a cow whose horns were removed, the rule concludes that it is not a cow",
      "correct": false
     },
     {
      "text": "For a female goat, the rule wrongly concludes that it is a cow",
      "correct": true
     },
     {
      "text": "A person can follow how the system reached its conclusion",
      "correct": true
     },
     {
      "text": "To fix a failure, someone has to think of and write another rule",
      "correct": true
     }
    ],
    "explanation": "For the dehorned cow, the rule simply does not apply, so it concludes nothing at all, not “no cow”. The goat has horns, an udder, hooves and a tail, so the rule fires. Symbols and rules are human-readable, so the reasoning can be traced, but every fix is one more rule, and there is always one more exception."
   },
   {
    "topic": "the map of AI: each side and its weakness",
    "stem": "What is true about symbolic and subsymbolic AI?",
    "options": [
     {
      "text": "Symbolic systems usually handle cases their authors did not foresee",
      "correct": false
     },
     {
      "text": "In a subsymbolic system, the knowledge is spread across learned parameters, so its errors can only be fixed by retraining",
      "correct": true
     },
     {
      "text": "Generative AI combines both sides, so it counts as neuro-symbolic AI",
      "correct": false
     },
     {
      "text": "Subsymbolic systems first give numbers a meaning as symbols, then learn rules over them",
      "correct": false
     }
    ],
    "explanation": "A symbolic system only knows what its rules say, so unforeseen cases usually fail. Subsymbolic systems skip the symbols and work on raw numbers; what they know is a pattern across many parameters, which makes them hard to interpret and to control: a cow detector that learned “grass means cow” can only be fixed with more cows in other places. Generative AI lies entirely on the subsymbolic side; neuro-symbolic or bilateral AI bridges the two."
   },
   {
    "topic": "embeddings: a lookup, with meaning as distance",
    "stem": "A language model turns each token ID into a vector with its embedding layer. What is true?",
    "options": [
     {
      "text": "The embedding layer is a lookup table: each token ID selects one learned row",
      "correct": true
     },
     {
      "text": "The embedding of ·bank already differs between “river bank” and “savings bank”",
      "correct": false
     },
     {
      "text": "Tokens that appear in similar contexts end up with nearby vectors",
      "correct": true
     },
     {
      "text": "Directions in the space can carry meaning, as in king − man + woman ≈ queen",
      "correct": true
     }
    ],
    "explanation": "“You shall know a word by the company it keeps”: words used in similar contexts get similar vectors, and differences such as male to female become directions. Search in RAG builds on this closeness. The lookup itself is static, though: the same token always gets the same row, and only attention later pulls ·bank apart by context."
   },
   {
    "topic": "judging needs both sides",
    "stem": "You want a model that tells whether a photo shows a cow. What is true?",
    "options": [
     {
      "text": "It needs photos of cows and photos of things that are not cows",
      "correct": true
     },
     {
      "text": "It learns a decision boundary between cow and not cow",
      "correct": true
     },
     {
      "text": "It has to learn what cow photos look like, so that it can draw new ones",
      "correct": false
     },
     {
      "text": "Trained on cow photos alone, it learns where the boundary lies",
      "correct": false
     }
    ],
    "explanation": "This is a discriminative task: the model learns where cows end and everything else begins, so it must see both sides of that line. From cows alone the line could be anywhere; a model answering “cow” to every photo would be right about all of them. Knowing what cows look like well enough to draw one is what a generative model learns."
   },
   {
    "topic": "what a discriminative model does not learn",
    "stem": "What does a discriminative model learn?",
    "options": [
     {
      "text": "\\(p(x)\\): how likely the picture itself is",
      "correct": false
     },
     {
      "text": "What the data looks like, so it can make new data like it",
      "correct": false
     },
     {
      "text": "The joint \\(p(x, y)\\), so it can sample new labelled examples",
      "correct": false
     },
     {
      "text": "One explicit rule per class, written by experts",
      "correct": false
     }
    ],
    "explanation": "None of these. A discriminative model learns \\(p(y \\mid x)\\): which output goes with an input, where one class ends and the next begins. Learning \\(p(x)\\) or \\(p(x, y)\\) and sampling from it is what a generative model does, and hand-written rules belong to symbolic AI."
   },
   {
    "topic": "the probabilistic view: two distributions",
    "stem": "What is true about the distributions that the two kinds of model learn?",
    "options": [
     {
      "text": "A discriminative model approximates \\(p(y \\mid x)\\), such as how likely “cow” is given the picture",
      "correct": true
     },
     {
      "text": "A generative model approximates \\(p(x)\\), or \\(p(x, y)\\) when the data come with labels",
      "correct": true
     },
     {
      "text": "A generative model makes new data by sampling, the likely \\(x\\) more often than the unlikely",
      "correct": true
     },
     {
      "text": "\\(p(x)\\) can be high for a picture that does not exist yet",
      "correct": true
     }
    ],
    "explanation": "Both learn a piece of the true distribution: \\(p_\\theta(y \\mid x) \\approx p(y \\mid x)\\) or \\(p_\\theta(x) \\approx p(x)\\). Where labels are part of the data, the generative model learns them along with the rest, as the joint. \\(p(x)\\) is how likely the world is to produce this \\(x\\), including ones nobody has made yet, which is exactly what sampling draws on."
   },
   {
    "topic": "byte-pair encoding: why subwords",
    "stem": "Why do most language models use subword tokens learned with BPE, rather than single characters or whole words?",
    "options": [
     {
      "text": "With single characters, sequences get long and expensive, and each token carries little meaning",
      "correct": true
     },
     {
      "text": "With whole words, the vocabulary would have to be huge, and new words would not fit in",
      "correct": true
     },
     {
      "text": "With BPE, two tokens with neighbouring IDs have similar meanings",
      "correct": false
     },
     {
      "text": "With BPE, the vocabulary size can be chosen, trading shorter sequences against a larger vocabulary",
      "correct": true
     }
    ],
    "explanation": "Subwords sit in between: frequent words become one token, rare ones split into pieces, and byte-level BPE never meets an unknown word. Merging repeats until a chosen target size is reached: more merges give fewer tokens per text, but a larger vocabulary. A token's ID is just its place in the list; nothing about its meaning follows from the number."
   },
   {
    "topic": "joint, marginal, conditional",
    "stem": "An audio sensor on a farm records which animal is in front of it and what it hears.\n\n| animal ↓ · sound → | moo | woof | meow | nothing | sum |\n|---|---|---|---|---|---|\n| cow | 14 % | 1 % | 1 % | 24 % | 40 % |\n| dog | 1 % | 12 % | 1 % | 16 % | 30 % |\n| cat | 1 % | 1 % | 10 % | 18 % | 30 % |\n| sum | 16 % | 14 % | 12 % | 58 % | 100 % |\n\nWhat is true?",
    "options": [
     {
      "text": "\\(p(\\text{moo} \\mid \\text{cow}) \\approx 88\\,\\%\\)",
      "correct": false
     },
     {
      "text": "\\(p(\\text{cow} \\mid \\text{moo}) \\approx 88\\,\\%\\)",
      "correct": true
     },
     {
      "text": "\\(p(\\text{cow}) = 40\\,\\%\\), the sum of the cow row",
      "correct": true
     },
     {
      "text": "\\(p(\\text{cow}, \\text{moo}) = p(\\text{cow}) \\cdot p(\\text{moo})\\)",
      "correct": false
     }
    ],
    "explanation": "A conditional is the joint divided by the marginal of what is given: \\(p(\\text{cow} \\mid \\text{moo}) = 0.14 / 0.16 \\approx 88\\,\\%\\), the moo column divided by its sum. The other way round, \\(0.14 / 0.40 = 35\\,\\%\\): a cow is mostly silent. The marginal sums out the other variable. The product of the marginals, \\(0.40 \\cdot 0.16 = 0.064\\), would only equal the joint if animal and sound were independent."
   },
   {
    "topic": "the chain rule",
    "stem": "An autoregressive model reads “The cow says moo” as four tokens \\(x_1, \\dots, x_4\\). What is true?",
    "options": [
     {
      "text": "\\(p(x_1, \\dots, x_4) = p(x_1) \\cdot p(x_2) \\cdot p(x_3) \\cdot p(x_4)\\)",
      "correct": false
     },
     {
      "text": "\\(p(x_1, \\dots, x_4) = p(x_1) \\cdot p(x_2 \\mid x_1) \\cdot p(x_3 \\mid x_1, x_2) \\cdot p(x_4 \\mid x_1, x_2, x_3)\\)",
      "correct": true
     },
     {
      "text": "The model has to compute \\(p(x)\\) of the whole sentence directly, before it predicts any token",
      "correct": false
     },
     {
      "text": "By predicting each next token, the model also gives the probability of the whole sentence",
      "correct": true
     }
    ],
    "explanation": "The product rule, applied again and again, gives the chain rule \\(p(x_1, \\dots, x_T) = \\prod_t p(x_t \\mid x_{<t})\\). Every factor is exactly a next-token prediction, so the model models \\(p(x)\\) indirectly. Multiplying the plain marginals would assume the tokens are independent, which they are not."
   },
   {
    "topic": "what autoregressive means",
    "stem": "Why are next-token models called autoregressive?",
    "options": [
     {
      "text": "“Auto”: it predicts from its own output; “regressive”: it predicts a value from the values before it",
      "correct": true
     },
     {
      "text": "“Auto”: it learns automatically, without any data prepared by people",
      "correct": false
     },
     {
      "text": "“Regressive”: it can only output continuous numbers, like a linear regression",
      "correct": false
     },
     {
      "text": "“Regressive”: it goes back and corrects earlier tokens once it has seen later ones",
      "correct": false
     }
    ],
    "explanation": "Greek autós, “self”: the token it just drew is appended and becomes input for the next prediction. Latin regressus, “a going back”: like a time-series model, it predicts the next value from the ones before it. Its outputs are probabilities over a vocabulary, and it never revises a token it has already produced."
   },
   {
    "topic": "byte-pair encoding: learning the vocabulary",
    "stem": "Byte-level BPE learns a vocabulary from a corpus. What is true?",
    "options": [
     {
      "text": "It starts from the 256 possible bytes",
      "correct": true
     },
     {
      "text": "In each round, it merges the most frequent pair of neighbouring units into one new unit",
      "correct": true
     },
     {
      "text": "A unit made by a merge can itself be merged again in a later round",
      "correct": true
     },
     {
      "text": "The whitespace before a word is attached to the end of the previous word",
      "correct": false
     }
    ],
    "explanation": "The corpus is split into words, and every word into its bytes. Each round counts which two neighbouring units occur together most often and merges them, purely by frequency, not by meaning; merged units can grow further. The whitespace belongs to the word after it, as in “·cow”."
   },
   {
    "topic": "byte-pair encoding: a new text",
    "stem": "A trained byte-level BPE tokenizer encodes a text it has never seen. What is true?",
    "options": [
     {
      "text": "It applies the merges in order of how often each pair occurs in the new text",
      "correct": false
     },
     {
      "text": "A character too rare to have been merged stays as its bytes",
      "correct": true
     },
     {
      "text": "A word that never occurred in the corpus becomes a special unknown token",
      "correct": false
     },
     {
      "text": "Its vocabulary also contains special tokens, such as one that marks the end of a text",
      "correct": true
     }
    ],
    "explanation": "A new text is encoded by applying the merges in the same order in which they were learned. Since every text is made of bytes, nothing is ever out of the vocabulary: a rare character, such as 牛, simply stays three bytes. The vocabulary is the 256 bytes, every merge in order, and a few special tokens like `<|endoftext|>`."
   },
   {
    "topic": "pictures: patches as tokens",
    "stem": "A vision transformer turns a picture into a sequence of tokens. What is true?",
    "options": [
     {
      "text": "Each patch is flattened and multiplied by the same learned matrix \\(W\\)",
      "correct": true
     },
     {
      "text": "Each patch position has its own learned matrix \\(W\\)",
      "correct": false
     },
     {
      "text": "An 8 × 8 patch with red, green and blue values gives 192 numbers",
      "correct": true
     },
     {
      "text": "Where the patch was, by row and column, is added to its vector",
      "correct": true
     }
    ],
    "explanation": "The picture is cut into square patches and read row by row, like the tokens of a sentence. Each patch becomes \\(x_i \\in \\mathbb{R}^{192}\\) (8 · 8 · 3), and one learned \\(W \\in \\mathbb{R}^{d \\times 192}\\), shared by all patches, turns it into its embedding. Its position is added, so pictures of any size and shape can be read."
   },
   {
    "topic": "codebooks: why IDs",
    "stem": "Image patches can optionally be snapped to the nearest vector of a codebook, which gives each patch an ID. What is true?",
    "options": [
     {
      "text": "Without IDs, a model cannot understand a picture",
      "correct": false
     },
     {
      "text": "To generate a picture token by token, a model must pick its next token from a vocabulary",
      "correct": true
     },
     {
      "text": "Neighbouring IDs, such as 7554 and 7555, stand for similar-looking patches",
      "correct": false
     },
     {
      "text": "Diffusion models need these IDs to add their noise",
      "correct": false
     }
    ],
    "explanation": "The patch vectors alone are enough for understanding a picture. Generating one token at a time is different: the model picks the next token from a fixed list, so each vector is replaced by the ID of its nearest codebook entry. An ID's number means nothing in itself, and diffusion works on the vectors, not on IDs."
   },
   {
    "topic": "sound: windows and residual codebooks",
    "stem": "A neural audio codec cuts sound into windows and uses residual vector quantisation. What is true?",
    "options": [
     {
      "text": "Each further codebook matches what the earlier ones still left out",
      "correct": true
     },
     {
      "text": "Each window gets one ID from a single, very large codebook",
      "correct": false
     },
     {
      "text": "Each further codebook encodes the next window of the sound",
      "correct": false
     },
     {
      "text": "A single codebook as precise as eight of them would need only eight times as many entries",
      "correct": false
     }
    ],
    "explanation": "One codebook of 1,024 entries is far too coarse, so the codec snaps the vector, then snaps what is still missing with a new codebook, and so on: eight codebooks give eight IDs per window. Matching that with one codebook would need \\(2^{80}\\) entries, not \\(8 \\cdot 1{,}024\\). The first codebook carries most of what is said, the later ones how it sounds."
   },
   {
    "topic": "diffusion: learning",
    "stem": "How is a diffusion model trained?",
    "options": [
     {
      "text": "The network learns to predict the noise in a noisy example",
      "correct": true
     },
     {
      "text": "Forward diffusion, which adds the noise, is learned together with the network",
      "correct": false
     },
     {
      "text": "Every training example gets a fresh noise level and fresh noise",
      "correct": true
     },
     {
      "text": "Because we drew the noise ourselves, the network's guess can be compared with it",
      "correct": true
     }
    ],
    "explanation": "We take a real example, draw noise, and mix the two at some noise level: that is forward diffusion, fixed, with nothing in it learned. The network only learns to predict the noise we added, and since we know it, the difference can be trained to be small."
   },
   {
    "topic": "diffusion: generating",
    "stem": "A diffusion model generates a new picture. What is true?",
    "options": [
     {
      "text": "It makes the picture patch by patch, starting at the top left",
      "correct": false
     },
     {
      "text": "In every step, it changes every part of the picture at once",
      "correct": true
     },
     {
      "text": "It starts from pure noise and subtracts a scaled part of the predicted noise in each step",
      "correct": true
     },
     {
      "text": "Running the steps one after the other is a second skill the network has learned",
      "correct": false
     }
    ],
    "explanation": "Diffusion makes the whole output at once: from pure noise, the network predicts the noise, a scaled part of it is subtracted, and the slightly cleaner result goes back into the same network. That loop is run around the network by a sampler; the network itself only ever learned to predict noise. Patch by patch is the autoregressive way."
   },
   {
    "topic": "diffusion: why many small steps",
    "stem": "From the predicted noise, the clean picture can be worked out in a single step. Why do samplers still take many steps?",
    "options": [
     {
      "text": "From a picture that is almost all noise, the best guess is a blur, an average of many possible pictures",
      "correct": true
     },
     {
      "text": "Each step moves only part of the way, so the next guess, from less noise, can be sharper",
      "correct": true
     },
     {
      "text": "Small steps let the coarse shape be settled before the details are filled in",
      "correct": true
     },
     {
      "text": "The network was trained on only one noise level, so each step can remove only that much",
      "correct": false
     }
    ],
    "explanation": "Samplers do compute the clean picture at every step: it is the model's current guess. But under heavy noise many pictures are possible, and the best guess is their average. Moving only a little each time lets later guesses add detail. The network was trained on every noise level. The original models took 1,000 steps; today's samplers typically need 20 to 50."
   },
   {
    "topic": "diffusion: noise for every modality",
    "stem": "Diffusion is not tied to pictures. What is true about the “noise” for different kinds of data?",
    "options": [
     {
      "text": "For text, the noise is masks: the noisier a sentence, the more of its tokens are masked",
      "correct": true
     },
     {
      "text": "For Stable Diffusion, Gaussian noise is added to a compressed latent, not to the pixels",
      "correct": true
     },
     {
      "text": "For DNA, each base becomes a probability over A, C, G and T, uniform when it is pure noise",
      "correct": true
     },
     {
      "text": "For sound, the noise is Gaussian noise added to the signal, as for pictures",
      "correct": true
     }
    ],
    "explanation": "What noise is depends on the data. Pictures, sound and video get Gaussian noise, today usually on a compressed latent; text gets masks; DNA gets probabilities. Like autoregression, diffusion works for every modality."
   }
  ]
 },
 {
  "id": "02-theoretical-foundations",
  "title": "Theoretical Foundations of Language Modelling",
  "summary": "",
  "questions": [
   {
    "topic": "what a model needs, and which part provides it",
    "stem": "To predict the next token, a model needs several kinds of understanding. What is true about the part of a decoder-only transformer that mainly provides each?",
    "options": [
     {
      "text": "Attention provides world knowledge, such as where the Eiffel Tower is",
      "correct": false
     },
     {
      "text": "The embedding table provides what a token means in this particular sentence",
      "correct": false
     },
     {
      "text": "Positional encoding provides where each token stands in the sequence",
      "correct": true
     },
     {
      "text": "The feed-forward provides how the tokens relate to each other",
      "correct": false
     }
    ],
    "explanation": "World knowledge sits in the model's own weights, mostly in the feed-forward; attention can only combine what the tokens already hold. The embedding table gives a token's meaning on its own, the same in every sentence. How the tokens relate is attention's job, while the feed-forward works on each token alone."
   },
   {
    "topic": "embeddings: a learned lookup",
    "stem": "What is true about the embedding table of a language model?",
    "options": [
     {
      "text": "It is a learned matrix with one row per token, and a token's ID picks its row",
      "correct": true
     },
     {
      "text": "Two tokens get similar rows when their IDs are close, such as 19362 and 19363",
      "correct": false
     },
     {
      "text": "It has one row for every word that occurred in the training corpus",
      "correct": false
     },
     {
      "text": "Tokens used in similar contexts end up close, and some directions carry relations such as man to woman",
      "correct": true
     }
    ],
    "explanation": "The ID is only an index; its number says nothing about meaning. The table has one row per token of the vocabulary, not per word of the corpus. During training, words that keep similar company move close together, as word2vec showed, so that king − man + woman lands near queen."
   },
   {
    "topic": "the same token in two places",
    "stem": "A model reads “The cat says meow. The cow says”. The token ·says occurs twice. What is true?",
    "options": [
     {
      "text": "Both get the same row from the embedding table",
      "correct": true
     },
     {
      "text": "Through attention, the second ·says can take in ·cow, but the first cannot",
      "correct": true
     },
     {
      "text": "Once ·cow has been read, the first ·says's vector is updated to include it",
      "correct": false
     },
     {
      "text": "The feed-forward lets the second ·says take in the meaning of ·cow",
      "correct": false
     }
    ],
    "explanation": "The embedding is a lookup, so the same token always starts from the same row. Context enters only through attention, and the mask lets each token draw only on itself and the tokens before it; ·cow comes after the first ·says, so that one never sees it, not even later. The feed-forward works on each token on its own."
   },
   {
    "topic": "why queries and keys",
    "stem": "Why does attention score pairs of tokens with queries and keys instead of with the dot product of their embeddings?",
    "options": [
     {
      "text": "The dot product of embeddings measures how similar two tokens are, not how much one should change the other",
      "correct": true
     },
     {
      "text": "·purple and ·spotted have similar embeddings, yet purple changes the meaning of cow much more",
      "correct": true
     },
     {
      "text": "Without the projections, the weights in a row would not add up to 1",
      "correct": false
     },
     {
      "text": "\\(W^Q\\) and \\(W^K\\) are learned, so what one token looks for can line up with what another offers",
      "correct": true
     }
    ],
    "explanation": "Similar is not relevant: both colours describe how a thing looks, but spotted is what we expect of a cow anyway. Two learned matrices carry every token into a space where its query, what it looks for, meets the keys, what the others offer. That the weights add up to 1 is the softmax's job."
   },
   {
    "topic": "values: how, not how much",
    "stem": "What is true about the values in attention?",
    "options": [
     {
      "text": "They decide how much each token shifts another",
      "correct": false
     },
     {
      "text": "They decide in which direction a token moves the tokens that take from it",
      "correct": true
     },
     {
      "text": "Using the embedding itself as the value is the simplest choice, and it can work",
      "correct": true
     },
     {
      "text": "·purple has a different value for each word it describes, such as car, cow or flower",
      "correct": false
     }
    ],
    "explanation": "Queries and keys set how much a token shifts another; the value sets how. Most models learn a third matrix, \\(v = x W^V\\), though adding the embedding itself has been shown to work as well. ·purple has one value, the same move for a car, a cow and a flower; how far it moves each is the attention weight's job."
   },
   {
    "topic": "attention in matrices: the shapes",
    "stem": "One attention head reads \\(n = 6\\) tokens. The embeddings have \\(d_\\text{model} = 512\\) numbers, and \\(d_k = d_v = 64\\). What is true?",
    "options": [
     {
      "text": "\\(QK^\\top\\) has shape \\(64 \\times 64\\)",
      "correct": false
     },
     {
      "text": "\\(W^Q\\) has shape \\(512 \\times 64\\)",
      "correct": true
     },
     {
      "text": "The output of the head has shape \\(6 \\times 64\\), a new vector per token",
      "correct": true
     },
     {
      "text": "\\(d_\\text{model} = 512\\) is the most tokens the model can read at once",
      "correct": false
     }
    ],
    "explanation": "\\(Q = XW^Q\\) turns the \\(6 \\times 512\\) embeddings into \\(6 \\times 64\\). Every query meets every key, so \\(QK^\\top\\) and the weights are \\(6 \\times 6\\), one row per token, each turned into weights by the softmax on its own; times the \\(6 \\times 64\\) values, they give one new vector of \\(d_v\\) numbers per token. \\(d_\\text{model}\\) is the length of each token's vector, not a sequence length, and none of the \\(W\\) depends on how long the text is."
   },
   {
    "topic": "softmax on a row of scores",
    "stem": "·cow's raw scores for The, ·small, ·purple and ·cow are 4, 22, 36 and 30, with \\(d_k = 64\\). What is true?",
    "options": [
     {
      "text": "Without scaling, ·purple gets almost all of ·cow's attention",
      "correct": true
     },
     {
      "text": "After dividing by 8, The and ·small get a weight of exactly 0",
      "correct": false
     },
     {
      "text": "After dividing by 8, ·purple still gets the most weight, and ·cow itself the second most",
      "correct": true
     },
     {
      "text": "After the division, a score 1 higher than another gets about 2.7 times its weight",
      "correct": true
     }
    ],
    "explanation": "Softmax gives a score 1 higher \\(e \\approx 2.7\\) times the share, so a gap of 6 already means about 400 times: unscaled, ·purple takes nearly 100 %. Divided by \\(\\sqrt{64} = 8\\), the scores keep their order and give The, ·small, ·purple and ·cow about 1 %, 10 %, 60 % and 28 %. Since \\(e^{s}\\) is never 0, no weight becomes exactly 0 unless its score is \\(-\\infty\\)."
   },
   {
    "topic": "masked attention: what each token sees",
    "stem": "A decoder-only transformer is trained with masked self-attention. What is true?",
    "options": [
     {
      "text": "The first token of a text puts all of its weight on itself",
      "correct": true
     },
     {
      "text": "The mask sets the values of later tokens to zero before they are summed",
      "correct": false
     },
     {
      "text": "Without the mask, the model could look at the very token it is asked to predict",
      "correct": true
     },
     {
      "text": "The diagonal is masked too, so no token attends to itself",
      "correct": false
     }
    ],
    "explanation": "The mask adds \\(-\\infty\\) to the scores above the diagonal, before the softmax; it does not touch the values. Each token draws on itself and the tokens before it, so the first token has only itself to give its weight to. In training the whole text is there, and without the mask each prediction could simply read its answer."
   },
   {
    "topic": "multi-head attention: split by dimensions",
    "stem": "Multi-head attention runs \\(h\\) heads. What is true?",
    "options": [
     {
      "text": "The tokens of the sequence are split into \\(h\\) groups, and each head attends within one group",
      "correct": false
     },
     {
      "text": "\\(Q\\), \\(K\\) and \\(V\\) are cut along the embedding dimension into \\(h\\) slices of \\(d_\\text{model}/h\\) numbers",
      "correct": true
     },
     {
      "text": "The heads' results are averaged, so no further matrix is needed",
      "correct": false
     },
     {
      "text": "Each head can attend to a different kind of relation, and all heads run in parallel",
      "correct": true
     }
    ],
    "explanation": "Every head sees all tokens, but only its own slice of each vector, so \\(d_k\\) is usually smaller than \\(d_\\text{model}\\). One head might find which adjective describes a noun, another what a pronoun refers to. The \\(h\\) results are put side by side, which gives \\(d_\\text{model}\\) again, and mixed by one more learned matrix, \\(W^O\\)."
   },
   {
    "topic": "attention alone: shuffled in, shuffled out",
    "stem": "Without positional encoding and without a mask, attention satisfies \\(\\mathrm{Attention}(PX) = P \\cdot \\mathrm{Attention}(X)\\) for any permutation \\(P\\). What does this mean?",
    "options": [
     {
      "text": "Attention gives every token the same output vector",
      "correct": false
     },
     {
      "text": "The output does not depend on which tokens are in the sequence",
      "correct": false
     },
     {
      "text": "The indices \\(i\\) and \\(j\\) in the sum tell attention where each token stands",
      "correct": false
     },
     {
      "text": "Reordering the input tokens reorders the output vectors the same way, each vector unchanged",
      "correct": true
     }
    ],
    "explanation": "Each output is a sum over pairs, \\(\\mathrm{out}_i = \\sum_j \\mathrm{softmax}_j(q_i \\cdot k_j / \\sqrt{d_k})\\, v_j\\): it depends on which tokens occur together, never on where they stand. \\(i\\) and \\(j\\) only label the pairs. The outputs differ between tokens and change when other tokens are present, but the order of the sentence is lost."
   },
   {
    "topic": "absolute positions: learned or computed",
    "stem": "What is true about absolute positional encodings?",
    "options": [
     {
      "text": "A learned table of positions sets a hard limit on the length of a text",
      "correct": true
     },
     {
      "text": "In a learned table, the rows for late positions are trained only by long texts",
      "correct": true
     },
     {
      "text": "Sinusoidal encodings give attention the distance between two tokens directly",
      "correct": false
     },
     {
      "text": "Sinusoidal encodings are computed, so nothing is learned and every position gets a vector",
      "correct": true
     }
    ],
    "explanation": "A learned table has one row per position, added to the token embeddings, and no row beyond its last; late rows are seen rarely. The sinusoidal waves need no training and exist for any position. Moving \\(k\\) positions turns each sine–cosine pair by the same angle from anywhere, so distance can be learned, but it is only mixed into \\(X + PE\\), never given to attention directly."
   },
   {
    "topic": "relative bias: added to the scores",
    "stem": "Relative positional encoding as in T5 adds a matrix \\(B\\) to the attention. What is true?",
    "options": [
     {
      "text": "\\(B\\) is added to each token's embedding before the first block",
      "correct": false
     },
     {
      "text": "Its numbers depend on which two tokens are paired, not on how far apart they are",
      "correct": false
     },
     {
      "text": "It is added to the scores \\(QK^\\top\\), before the softmax",
      "correct": true
     },
     {
      "text": "ALiBi learns one number for every distance in the same way",
      "correct": false
     }
    ],
    "explanation": "Relative bias skips the embeddings and nudges the scores: one number per distance \\(i - j\\), the same all along each diagonal. T5 learns these numbers for each head. ALiBi learns nothing and simply lowers a score in proportion to the distance, so far-away tokens count less."
   },
   {
    "topic": "rotary positions: what is turned",
    "stem": "What is true about rotary positions (RoPE)?",
    "options": [
     {
      "text": "Each query and key is turned, two numbers at a time, by an angle that grows with its position",
      "correct": true
     },
     {
      "text": "The values are turned as well, so the output carries the position",
      "correct": false
     },
     {
      "text": "The turning speeds are learned in training, like the other weights",
      "correct": false
     },
     {
      "text": "The score of a query at \\(m\\) and a key at \\(n\\) depends on their positions only through \\(n - m\\)",
      "correct": true
     }
    ],
    "explanation": "The dot product depends on the angle between query and key; turn both by their own positions, and that angle changes only with their distance: \\((R(m)q)^\\top (R(n)k) = q^\\top R(n-m)\\, k\\). Only queries and keys are turned, inside every attention layer; the values are not. The speeds \\(\\theta_i = b^{-2(i-1)/d}\\) are fixed before training."
   },
   {
    "topic": "rotary positions: why many speeds",
    "stem": "RoPE turns each pair of dimensions at its own speed, from fast to slow. What is true?",
    "options": [
     {
      "text": "With one fast speed only, the angle comes round again, so far-apart positions can look alike",
      "correct": true
     },
     {
      "text": "Like a clock's second, minute and hour hands, fast and slow pairs together tell every position apart",
      "correct": true
     },
     {
      "text": "Fast pairs tell neighbouring positions apart, slow pairs distances across a long text",
      "correct": true
     },
     {
      "text": "Past the length a model was trained on, its slow pairs reach angles it never saw, and attention can break down",
      "correct": true
     }
    ],
    "explanation": "At one radian a position, position 44 is almost seven full turns and looks like position 0; a single slow speed would barely separate neighbours. Many speeds give every position its own set of hands, and every scale of distance has pairs that resolve it. The slow pairs only see a small part of their turn in training, which is why longer texts need extra tricks."
   },
   {
    "topic": "the feed-forward: what the world knows",
    "stem": "After “The Eiffel Tower is in”, a small model puts 75 % on ·Paris. What is true?",
    "options": [
     {
      "text": "Attention alone cannot supply Paris, since it only combines what the tokens already hold",
      "correct": true
     },
     {
      "text": "The feed-forward finds Paris by reading the vectors of the neighbouring tokens",
      "correct": false
     },
     {
      "text": "Such knowledge is thought to sit mostly in the feed-forward weights",
      "correct": true
     },
     {
      "text": "The feed-forward, widened to \\(4 \\cdot d_\\text{model}\\), has about twice as many weights as attention",
      "correct": true
     }
    ],
    "explanation": "No token in the prompt holds Paris, so it must come from the model's own weights. The feed-forward runs the same small network on each token's vector alone; nothing passes between tokens there. Attention has four \\(d \\times d\\) matrices, the feed-forward two of \\(d \\times 4d\\), so it holds most of a block's weights."
   },
   {
    "topic": "mixture of experts",
    "stem": "In a mixture-of-experts layer, the feed-forward is split into several experts with a router. What is true?",
    "options": [
     {
      "text": "The router picks \\(k\\) experts for each token, and only those run",
      "correct": true
     },
     {
      "text": "The output is the chosen experts' outputs, weighted by the router's probabilities",
      "correct": true
     },
     {
      "text": "All tokens of a sequence have to go to the same \\(k\\) experts",
      "correct": false
     },
     {
      "text": "Each token uses only part of the layer's weights, so fewer parameters are active than there are in total",
      "correct": true
     }
    ],
    "explanation": "The router decides for every token on its own, so ·cow and ·says may use different experts. The chosen experts' outputs are mixed, as in \\(y = p_2 E_2(x) + p_5 E_5(x)\\). Since the others do not run, a token's compute depends on the active parameters, not on all of them."
   },
   {
    "topic": "add & norm: why deep stacks still train",
    "stem": "Every attention and every feed-forward sits in a residual connection with a norm. What is true?",
    "options": [
     {
      "text": "LayerNorm computes the mean and spread across all tokens of the sequence",
      "correct": false
     },
     {
      "text": "Attention adds what it found to a token's vector instead of replacing it",
      "correct": true
     },
     {
      "text": "The sums give the gradient a straight path down through the whole stack",
      "correct": true
     },
     {
      "text": "LayerNorm brings each token's numbers back into the same range, however deep the stack",
      "correct": true
     }
    ],
    "explanation": "LayerNorm uses the mean and spread of the \\(d\\) numbers of one token's vector, then scales and shifts with the learned \\(\\gamma\\) and \\(\\beta\\). The residual stream carries each token's vector straight up; every part only writes a correction into it, \\(x + \\mathrm{Attention}(x)\\), and in training the gradient travels down through these sums. A steady range keeps training stable."
   },
   {
    "topic": "decoder blocks and parameters",
    "stem": "A decoder-only transformer stacks \\(N\\) decoder blocks. What is true?",
    "options": [
     {
      "text": "All \\(N\\) blocks share one set of weights, applied \\(N\\) times",
      "correct": false
     },
     {
      "text": "Each block hands on fewer numbers per token than it received",
      "correct": false
     },
     {
      "text": "Before training, the weights are set by hand, and training then refines them",
      "correct": false
     },
     {
      "text": "When the trained model answers a new prompt, backpropagation keeps adjusting its weights",
      "correct": false
     }
    ],
    "explanation": "None of these. The blocks have the same architecture but each has its own weights, and each hands on the same shape it got: one vector of \\(d_\\text{model}\\) numbers per token. Parameters start as random numbers and are trained by backpropagation on examples; at inference they stay fixed."
   },
   {
    "topic": "linear and softmax: from vectors to a distribution",
    "stem": "After the last block, every token has a vector of \\(d_\\text{model}\\) numbers. What is true?",
    "options": [
     {
      "text": "A linear layer turns each vector into one score per token of the vocabulary",
      "correct": true
     },
     {
      "text": "These scores, the logits, can be negative; softmax turns them into probabilities that add up to 1",
      "correct": true
     },
     {
      "text": "The linear layer's matrix has shape \\(d_\\text{model} \\times\\) vocabulary size",
      "correct": true
     },
     {
      "text": "In some models, this matrix is the embedding table itself, used the other way round",
      "correct": true
     }
    ],
    "explanation": "The vectors have the wrong size and are not probabilities yet. One last learned matrix gives a score for every token of the vocabulary, and softmax, row by row, makes each row a distribution. Qwen3-0.6B, for example, reuses its embedding table for this."
   },
   {
    "topic": "one pass, many training signals",
    "stem": "A decoder-only transformer is trained on texts and later generates text. What is true?",
    "options": [
     {
      "text": "In training, only the last position's distribution is compared with a target",
      "correct": false
     },
     {
      "text": "In training, every position predicts the token after it, so one text gives many training signals",
      "correct": true
     },
     {
      "text": "In generation, the distributions of all positions are averaged to draw the next token",
      "correct": false
     },
     {
      "text": "In training, the model has to run once per prefix, because each prediction may only see earlier tokens",
      "correct": false
     }
    ],
    "explanation": "Every position gets its own distribution, and in training each is scored against the token that follows, all in one pass. The causal mask makes this possible: each position sees exactly what it would see while generating, so no separate run per prefix is needed. In generation, only the last row is used to draw the next token."
   }
  ]
 },
 {
  "id": "03-training-paradigms-1",
  "title": "Training Paradigms I",
  "summary": "",
  "questions": [
   {
    "topic": "optimize for evals: an empirical process",
    "stem": "A lab builds a new LLM. It optimizes for evals by choosing the architecture, the data and the training stages, subject to constraints. What is true about how it makes these choices?",
    "options": [
     {
      "text": "Each eval target can be traced to one design choice that fixes it",
      "correct": false
     },
     {
      "text": "The best choices can mostly be derived from theory, before any training",
      "correct": false
     },
     {
      "text": "Many choices are settled by trying them small, measuring, and scaling up",
      "correct": true
     },
     {
      "text": "The evals are picked after training, to describe the finished model",
      "correct": false
     }
    ],
    "explanation": "A neat chain from “90 % on GSM8K?” to “12 % maths data” is not how it works: one eval depends on many choices, and the path has many dead ends. Training an LLM is empirical: start small, measure, scale up, repeat. The evals come first; they are what all the choices are optimized for."
   },
   {
    "topic": "scaling laws: loss, compute, data, parameters",
    "stem": "Kaplan et al. trained language models of many sizes on different amounts of data. What did they find?",
    "options": [
     {
      "text": "On log-log axes, the loss falls along a straight line as compute grows",
      "correct": true
     },
     {
      "text": "A smaller model gains more from extra data than a bigger model does",
      "correct": false
     },
     {
      "text": "A bigger model can make use of more tokens before its curve flattens",
      "correct": true
     },
     {
      "text": "For any model size, more tokens lower the loss at the same rate, without limit",
      "correct": false
     }
    ],
    "explanation": "The loss falls as a straight line in log-log with compute, data or parameters, as long as the other two do not hold it back. For each model size, more tokens help until the curve flattens. A small model flattens earlier, so it gains less from more data, not more."
   },
   {
    "topic": "C ≈ 6 · N · D for a mixture of experts",
    "stem": "A mixture of experts has 2B active and 30B total parameters. It is trained on 4T tokens. With \\(C \\approx 6 \\cdot N \\cdot D\\), what is true?",
    "options": [
     {
      "text": "\\(N\\) is 30B here, because every weight has to be in memory",
      "correct": false
     },
     {
      "text": "\\(C \\approx 6 \\cdot 2 \\cdot 10^9 \\cdot 4 \\cdot 10^{12} \\approx 4.8 \\cdot 10^{22}\\) FLOPs",
      "correct": true
     },
     {
      "text": "It costs about as much compute as a dense 2B model on the same 4T tokens",
      "correct": true
     },
     {
      "text": "Two of the 6 come from the forward pass, four from the backward pass",
      "correct": true
     }
    ],
    "explanation": "\\(N\\) counts the parameters each token is multiplied with. Experts the router did not pick do nothing for that token, so in a mixture of experts these are the active ones: the same FLOPs per token as a dense 2B model, although all 30B sit in memory. Forward: one multiply and one add per weight and token; backward: two each, for the input's gradient and for the weight's own."
   },
   {
    "topic": "compute-optimal: the Chinchilla valley",
    "stem": "For several fixed compute budgets, Chinchilla trained models of different sizes, each on as many tokens as the budget allowed. What is true?",
    "options": [
     {
      "text": "A model that is too big runs out of budget after too few tokens",
      "correct": true
     },
     {
      "text": "With ten times the compute, the best model has about three times the parameters and three times the tokens",
      "correct": true
     },
     {
      "text": "The best model has about 20 parameters for every training token",
      "correct": false
     },
     {
      "text": "At the best size, the training tokens are about 20 times the parameters",
      "correct": true
     }
    ],
    "explanation": "Every budget gives a valley: a model too small cannot take in what the data offers, a model too big sees too few tokens. Parameters and tokens of the best model both grow with about the square root of the compute, so \\(\\sqrt{10} \\approx 3\\) each, and their ratio stays at about 20 tokens per parameter, not the other way round."
   },
   {
    "topic": "breaking Chinchilla on purpose",
    "stem": "The same compute can train 20B parameters on 0.4T tokens, the compute-optimal split, or 2B parameters on 4T tokens. Why can the 2B model be the better choice?",
    "options": [
     {
      "text": "It reaches a lower loss, because it sees ten times as many tokens",
      "correct": false
     },
     {
      "text": "Post-training, evaluation and serving run the model over and over, and each then costs about a tenth",
      "correct": true
     },
     {
      "text": "Both splits use the same compute, so both reach the same loss",
      "correct": false
     },
     {
      "text": "Near the compute-optimal point, the loss of a much smaller model is only a few percent higher",
      "correct": true
     }
    ],
    "explanation": "Every split of the same compute costs the same, but only the compute-optimal one reaches the lowest loss; the 2B model ends about 4 % above it. The valley is shallow near its bottom, and a model ten times smaller makes everything that follows ten times cheaper. Compute-optimal only means best for the training compute, so the rule is broken knowingly."
   },
   {
    "topic": "usable compute: model FLOPs utilisation",
    "stem": "Labs plan a training run with only about 35 % of a GPU's peak FLOPs, the model FLOPs utilisation (MFU). Why so little?",
    "options": [
     {
      "text": "Much of the time, the GPU waits for data from its memory",
      "correct": true
     },
     {
      "text": "The optimizer step for every token takes up most of the compute",
      "correct": false
     },
     {
      "text": "Much of the time, the GPU waits for the other GPUs' gradients",
      "correct": true
     },
     {
      "text": "The peak only covers the forward pass, and training also needs a backward pass",
      "correct": false
     }
    ],
    "explanation": "The peak assumes the GPU computes all the time; in real runs it often waits, for data to arrive from memory and for the gradients of the other GPUs. The optimizer runs once per step, not once per token. The peak is a rate of operations, and the forward and backward passes both run at it, which is why \\(6ND\\) counts both."
   },
   {
    "topic": "width and depth: a wide, flat valley",
    "stem": "A dense model has a fixed number of parameters. It can be wide and shallow or narrow and deep. What is true?",
    "options": [
     {
      "text": "The deepest shape that fits is best, since every block adds a step of processing",
      "correct": false
     },
     {
      "text": "Over a wide range of width per block, the loss barely changes",
      "correct": true
     },
     {
      "text": "The number of blocks is the width divided by the head size of 128",
      "correct": false
     },
     {
      "text": "With heads 128 wide, the width sets the number of heads",
      "correct": true
     }
    ],
    "explanation": "Kaplan et al. found the loss within about 1 % as long as \\(d\\) divided by the number of blocks stays between about 20 and 250, so neither extreme pays off. The width divided by 128 gives the heads, 2,048 gives 16. The number of blocks follows from how many blocks of that width fit into the parameter budget."
   },
   {
    "topic": "dense or a mixture of experts",
    "stem": "A dense model and a mixture of experts both use 2B parameters per token; the mixture of experts holds 30B in total. What is true?",
    "options": [
     {
      "text": "Both cost about the same FLOPs per token",
      "correct": true
     },
     {
      "text": "The mixture of experts needs only its 2B active parameters in memory",
      "correct": false
     },
     {
      "text": "A router picks a few experts for each token; the others do nothing for it",
      "correct": true
     },
     {
      "text": "Recent models have moved towards fewer, wider experts",
      "correct": false
     }
    ],
    "explanation": "The trade is compute against memory: the same FLOPs per token and far more room for what the model learns, but all 30B have to sit in memory, since any token may need any expert. The trend of recent years goes the other way: experts have become finer and sparser."
   },
   {
    "topic": "what a language costs",
    "stem": "The same text needs 7.2 times as many tokens in Greek as in English with GPT-2's tokenizer, but only 1.9 times with EuroLLM's. What is true?",
    "options": [
     {
      "text": "How many tokens a language needs depends on the tokenizer, not only on the text",
      "correct": true
     },
     {
      "text": "With GPT-2's tokenizer, a Greek page costs about seven times the compute of the English page",
      "correct": true
     },
     {
      "text": "EuroLLM does better on Greek because its vocabulary is larger than the others'",
      "correct": false
     },
     {
      "text": "With GPT-2's tokenizer, only about a seventh as much Greek text fits into the same context window",
      "correct": true
     }
    ],
    "explanation": "A tokenizer serves the languages of the corpus it was learned on best, and GPT-2's was learned on English. Seven times the tokens means seven times the compute and price per page and a seventh of the text in the context window. EuroLLM's 128k vocabulary is smaller than Qwen3's 152k and still better for every EU language: the corpus matters, not the size."
   },
   {
    "topic": "what a vocabulary costs",
    "stem": "A model has width \\(d\\) and a vocabulary of \\(V\\) tokens. What is true about what the vocabulary costs?",
    "options": [
     {
      "text": "The same vocabulary takes a larger share of a large model than of a small one",
      "correct": false
     },
     {
      "text": "Its weights grow with the number of decoder blocks",
      "correct": false
     },
     {
      "text": "A tokenizer can be swapped for a better one after pre-training at little cost",
      "correct": false
     },
     {
      "text": "The token embedding and the output layer together hold \\(2 \\cdot V \\cdot d\\) weights",
      "correct": true
     }
    ],
    "explanation": "The vocabulary lives in two tables outside the blocks, \\(V \\times d\\) going in and \\(d \\times V\\) coming out. For a small model they are a large share of the parameters, for a large one only a few percent. A model's weights are learned for one tokenizer's IDs, so the tokenizer cannot be changed once the model has been trained on it."
   },
   {
    "topic": "images: three routes into the model",
    "stem": "Images can get into a language model in three ways. What is true?",
    "options": [
     {
      "text": "Native training with an encoder reuses two finished models, so it needs no large joint run",
      "correct": false
     },
     {
      "text": "An adapter joins a vision encoder trained elsewhere to a finished language model, which is cheap",
      "correct": true
     },
     {
      "text": "Without an encoder, the patches go through one linear layer: the simplest, but less proven at scale",
      "correct": true
     },
     {
      "text": "Adding the images late, in a large share at the end, worked best on image and text benchmarks",
      "correct": false
     }
    ],
    "explanation": "The adapter reuses two finished models, but the images join a model built for text. Native training with an encoder trains encoder, projector and model together from the start, in one large run. Without an encoder there is just one network, so far only in smaller models. Kimi K2.5 found early and a little at a time best, on images and on text alike."
   },
   {
    "topic": "what attention costs on long rows",
    "stem": "Attention compares every token with every earlier one. What is true about pre-training on long rows?",
    "options": [
     {
      "text": "Twice the row length gives about twice as many attention scores",
      "correct": false
     },
     {
      "text": "Because of this cost, labs pre-train on short rows and stretch the context only at the end",
      "correct": true
     },
     {
      "text": "The cost of the weights per token, about \\(6N\\), grows with the row length",
      "correct": false
     },
     {
      "text": "FlashAttention makes the compute of attention grow only linearly with the length",
      "correct": false
     }
    ],
    "explanation": "\\(QK^\\top\\) holds a score for every pair of tokens, so twice the tokens make four times the scores. The weights cost the same per token whatever the length; attention adds a part that grows with it. FlashAttention never stores the score matrix, so the memory is no longer quadratic, but the compute still is, and the result is exactly the same."
   },
   {
    "topic": "cleaning: filter, deduplicate, classify",
    "stem": "Raw web text is cleaned in three steps: filter, deduplicate, classify. What is true?",
    "options": [
     {
      "text": "Cheap heuristic rules drop whole pages, such as ones that are mostly symbols",
      "correct": true
     },
     {
      "text": "Near copies, such as the same page with only a date changed, are reduced to one",
      "correct": true
     },
     {
      "text": "A passage repeated on thousands of pages, such as a footer, is cut out, and the pages stay",
      "correct": true
     },
     {
      "text": "Small models give each page a topic and a quality score, which the mix can use",
      "correct": true
     }
    ],
    "explanation": "Heuristic filters work on whole pages: too short, mostly symbols, the same line over and over. Deduplication keeps one of exact and of near copies, and cuts repeated passages out of each page instead of dropping the pages. The topic and quality scores let the mix draw more from the good pages of each topic."
   },
   {
    "topic": "decontamination: benchmarks out",
    "stem": "Before training, labs drop every web page that shares a long run of words, in the same order, with a benchmark. Why?",
    "options": [
     {
      "text": "Such pages are near copies of each other and waste compute",
      "correct": false
     },
     {
      "text": "Benchmark questions are low-quality text that would raise the loss",
      "correct": false
     },
     {
      "text": "A model may answer the benchmark from memory, so its score no longer shows whether it can reason",
      "correct": true
     },
     {
      "text": "Without it, the model would learn wrong answers to the benchmark questions",
      "correct": false
     }
    ],
    "explanation": "A forum page that quotes a test question with its worked answer can teach the model the answer itself. Taking benchmarks out before training is decontamination; removing copies within the training data is deduplication, a separate step. The answers on such pages may well be right: the problem is that the test then measures memory, not reasoning."
   },
   {
    "topic": "the data mix: predicted, not picked",
    "stem": "Nobody knows in advance how much web, code, maths, books or images the training mix should contain. How does Olmo 3 choose it?",
    "options": [
     {
      "text": "It trains the full model on several mixes and keeps the one with the lowest loss",
      "correct": false
     },
     {
      "text": "It uses exactly the mix of whichever small model scored best",
      "correct": false
     },
     {
      "text": "It uses the best predicted mix as it is, however often a source has to be repeated",
      "correct": false
     },
     {
      "text": "It takes every source exactly once, so that no data is repeated",
      "correct": false
     }
    ],
    "explanation": "None of these. A swarm of small models is each trained on a different random mix and evaluated; a regression model then learns to predict every task's score from a mix's shares, and the best predicted mix need not be one that was tried. That mix is then limited by what exists: a scarce source such as maths may be repeated, but no more than about four to seven times."
   },
   {
    "topic": "packing instead of padding",
    "stem": "Documents of very different lengths have to go into training rows of 4,096 tokens. What is true?",
    "options": [
     {
      "text": "Each document is ended with a special end-of-text token before the documents are joined",
      "correct": true
     },
     {
      "text": "With packing, one document can start in one row and end in the next",
      "correct": true
     },
     {
      "text": "With padding, the padding slots are computed like all others, but nothing is learned from them",
      "correct": true
     },
     {
      "text": "With packing, a row usually holds several documents",
      "correct": true
     }
    ],
    "explanation": "Packing joins all documents into one long stream, each ended by a token such as `<|endoftext|>`, and cuts it into rows of equal length wherever the cut falls. Padding puts one document in a row and fills the rest; with documents of very different lengths, up to half a batch can be padding, compute spent for nothing. That is why every lab packs."
   },
   {
    "topic": "image slots: input only, no loss",
    "stem": "Qwen2.5-VL puts an image into the token row as `<|vision_start|>`, then 256 times `<|image_pad|>`, then `<|vision_end|>`. What is true about the `<|image_pad|>` slots?",
    "options": [
     {
      "text": "The embedding table gives all of them the same vector",
      "correct": true
     },
     {
      "text": "Since nothing is learned from them, the text after the image cannot attend to them",
      "correct": false
     },
     {
      "text": "Before the first decoder block, the vision encoder's vectors replace them, in order",
      "correct": true
     },
     {
      "text": "Their labels are set to −100, so the loss skips them",
      "correct": true
     }
    ],
    "explanation": "The slots only hold a place; their own embedding carries nothing. The vision encoder returns one vector per 2 × 2 patches, and these overwrite the slots before the first block. The image is input only: the model never has to predict it, so its positions get PyTorch's ignore label, but the text that follows still attends to the image vectors."
   },
   {
    "topic": "inputs and targets: the text is its own label",
    "stem": "Pre-training reads a row of 4,097 token IDs from the packed stream. What is true?",
    "options": [
     {
      "text": "People have to write the right next token for each position first",
      "correct": false
     },
     {
      "text": "The targets are the same tokens, shifted by one position",
      "correct": true
     },
     {
      "text": "The model learns only from the last token of each row",
      "correct": false
     },
     {
      "text": "The row gives 4,096 inputs and 4,096 targets",
      "correct": true
     }
    ],
    "explanation": "The target of every token is simply the token after it, so the text is its own label: pre-training is self-supervised. The inputs drop the last ID and the targets the first, and every one of the 4,096 positions gives a training signal. That is why language models can learn from so much text."
   },
   {
    "topic": "the forward pass: tensor shapes",
    "stem": "A batch has \\(B\\) rows of \\(T\\) token IDs. The model has width \\(d\\) and a vocabulary of \\(V\\) tokens. What is true about one forward pass?",
    "options": [
     {
      "text": "After the token embedding, the batch has the shape \\(B \\times T \\times d\\)",
      "correct": true
     },
     {
      "text": "After the last decoder block, the shape is still \\(B \\times T \\times d\\)",
      "correct": true
     },
     {
      "text": "The linear layer and softmax give one distribution per row, of shape \\(B \\times V\\)",
      "correct": false
     },
     {
      "text": "With \\(B = 1{,}024\\) and \\(T = 4{,}096\\), one pass gives about 4.2 million next-token distributions",
      "correct": true
     }
    ],
    "explanation": "Every ID becomes a vector of length \\(d\\), and the blocks keep that shape. The output layer turns the vector at every position into a distribution over the vocabulary, \\(B \\times T \\times V\\), so \\(1{,}024 \\cdot 4{,}096 \\approx 4.2\\) million distributions at once. Nothing is generated: thanks to the causal mask, every position is scored in the same pass."
   },
   {
    "topic": "the loss: −log p of the true next token",
    "stem": "At each position, the model gives probability \\(p\\) to the token that actually came next. What is true about the training loss?",
    "options": [
     {
      "text": "At each position it is \\(-\\log p\\), so a small \\(p\\) gives a large loss",
      "correct": true
     },
     {
      "text": "Before training, with probability spread evenly over \\(V\\) tokens, it is about \\(\\ln V\\) at every position",
      "correct": true
     },
     {
      "text": "Summed over a sentence, it is \\(-\\log\\) of the whole sentence's probability",
      "correct": true
     },
     {
      "text": "The batch losses of all steps are added up, and the gradient comes from that sum",
      "correct": false
     }
    ],
    "explanation": "Cross-entropy only looks at the probability on the true next token: close to 1 gives a loss close to 0, small gives a large one. An untrained model gives each token \\(1/V\\), so every loss curve starts at \\(-\\ln(1/V) = \\ln V\\). By the chain rule, the losses of the tokens add up to \\(-\\log p\\) of the whole text. Each step's batch loss is the mean over its own positions; across steps, the losses are only logged."
   }
  ]
 },
 {
  "id": "04-training-paradigms-2",
  "title": "Training Paradigms II",
  "summary": "",
  "questions": [
   {
    "topic": "mid-training: three goals",
    "stem": "Mid-training is a short stage at the end of pre-training. What is it for?",
    "options": [
     {
      "text": "Letting the learning rate fall, so the weights settle at the bottom instead of bouncing",
      "correct": true
     },
     {
      "text": "Finishing on the best data, so that RL later finds some good answers to reinforce",
      "correct": true
     },
     {
      "text": "Teaching the model the chat format with its system, user and assistant turns",
      "correct": false
     },
     {
      "text": "Stretching the context window beyond the row length used in pre-training",
      "correct": true
     }
    ],
    "explanation": "A high learning rate travels far but keeps bouncing between the walls of the valley; letting it fall lets the weights settle. The web has a lot of poor text, so the run ends on better material such as reasoning traces: RL can only reinforce good answers if the model already gives some. These traces are plain text without a chat format, which comes only in post-training. The third goal is the longer context."
   },
   {
    "topic": "three limits of the context length",
    "stem": "A model pre-trained on rows of 4,096 tokens should later read a million. What is true?",
    "options": [
     {
      "text": "The cost of attention has to be handled in the architecture, before pre-training starts",
      "correct": true
     },
     {
      "text": "The positions have to be stretched in the architecture, before pre-training starts",
      "correct": false
     },
     {
      "text": "Long rows come only at the end, because they are costly and long documents are rare",
      "correct": true
     },
     {
      "text": "The feed-forward layers have to grow with the length of the context",
      "correct": false
     }
    ],
    "explanation": "Three things limit the context: attention compares every pair of tokens and grows with the square of the length, the positions beyond the training length were never seen, and long documents are rare. Attention is decided in the architecture from the start; the positions and the long documents are dealt with in mid-training. The feed-forward layers look at each token alone, so their size does not depend on the length."
   },
   {
    "topic": "the KV cache: why memory becomes the limit",
    "stem": "Why is generating text with a KV cache limited more by memory than by compute?",
    "options": [
     {
      "text": "Each new token has to compute the keys and values of all earlier tokens again",
      "correct": false
     },
     {
      "text": "An n × n matrix of scores for all pairs of tokens is stored at every step",
      "correct": false
     },
     {
      "text": "Every new token has to read the whole cache, the keys and values of all earlier tokens in every block",
      "correct": true
     },
     {
      "text": "The cache grows with every token of the conversation and has to fit in GPU memory next to the weights",
      "correct": true
     }
    ],
    "explanation": "The cache exists so that earlier keys and values are not computed again: each step computes only the new token's row, which is little arithmetic. Its query is scored against the cached keys, one row of scores, not a full n × n matrix. What remains expensive is holding the growing cache and reading all of it for every token, so the bottleneck moves from compute to memory and bandwidth."
   },
   {
    "topic": "smaller caches: MQA, GQA, MLA",
    "stem": "A model has h query heads per block. What do these attention variants keep in the KV cache?",
    "options": [
     {
      "text": "Grouped-query attention gives every query head its own key and value, only smaller",
      "correct": false
     },
     {
      "text": "Multi-query attention lets all query heads share a single key and value",
      "correct": true
     },
     {
      "text": "Grouped-query attention lets each group of query heads share one key and value",
      "correct": true
     },
     {
      "text": "Multi-head latent attention caches one small latent per token and rebuilds the keys and values from it",
      "correct": true
     }
    ],
    "explanation": "Multi-head attention keeps a key and a value for every head. Multi-query attention keeps one for all, which shrinks the cache h times but costs quality. Grouped-query attention lies in between: g groups give a cache h/g times smaller at a quality close to multi-head attention. Multi-head latent attention keeps all heads but caches a compressed version of each token, from which the keys and values of every head can be computed."
   },
   {
    "topic": "stretching rotary positions with YaRN",
    "stem": "To extend the context, YaRN changes the speeds at which the rotary pairs turn. What is true?",
    "options": [
     {
      "text": "It slows the slow pairs and leaves the fast pairs as they are",
      "correct": true
     },
     {
      "text": "It slows every pair by the same factor",
      "correct": false
     },
     {
      "text": "It lets the model learn new speeds for every pair in mid-training",
      "correct": false
     },
     {
      "text": "It slows the fast pairs most, because they come round again soonest",
      "correct": false
     }
    ],
    "explanation": "The fast pairs turned through every angle many times in training, so longer texts show them nothing new; they stay untouched. The slow pairs saw only part of a turn, and beyond the training length they would reach angles never seen, so they are slowed down, the slowest by the full stretch factor. Slowing every pair by the same factor is plain position interpolation. The speeds are set by a rule, not learned."
   },
   {
    "topic": "long rows and intra-document masking",
    "stem": "In the long-context stage, a row of 64K tokens holds a long PDF and several short documents. Intra-document masking is used. What is true?",
    "options": [
     {
      "text": "A token of the PDF can now also attend to later tokens of the PDF",
      "correct": false
     },
     {
      "text": "A token of the PDF gives no weight to the documents before it in the same row",
      "correct": true
     },
     {
      "text": "It is added here because it clearly helped already in pre-training",
      "correct": false
     },
     {
      "text": "The scores between tokens of two different documents are set to −∞",
      "correct": true
     }
    ],
    "explanation": "The mask puts −∞ between documents, so each document sees only itself, and the causal mask still hides later tokens. Without it, a token would also attend to unrelated documents that happen to share the row. It is used only from mid-training on, because in pre-training it did not help."
   },
   {
    "topic": "the post-training map: dataset or own output",
    "stem": "Post-training methods learn either from a dataset or from the model's own output. What is true?",
    "options": [
     {
      "text": "DPO learns from the model's own output, scored by the frozen reference model",
      "correct": false
     },
     {
      "text": "On-policy distillation learns from the model's own output, which a teacher grades token by token",
      "correct": true
     },
     {
      "text": "RLVR learns from the model's own output, which a checker scores as right or wrong",
      "correct": true
     },
     {
      "text": "PPO and GRPO are further ways to score the output, next to reward models and checkers",
      "correct": false
     }
    ],
    "explanation": "SFT and DPO learn from a dataset: SFT from examples to copy, DPO from pairs in which one answer is better, labelled once. On-policy distillation, RLHF and RLAIF, and RLVR learn from the model's own output, and differ in who scores it: a teacher, a reward model or judge, a checker. PPO and GRPO do not score anything; they are two ways to turn the scores into an update, with a different baseline."
   },
   {
    "topic": "which methods need a reward model",
    "stem": "Which of these post-training methods need a separately trained reward model?",
    "options": [
     {
      "text": "DPO",
      "correct": false
     },
     {
      "text": "On-policy distillation",
      "correct": false
     },
     {
      "text": "RLVR",
      "correct": false
     },
     {
      "text": "SFT on answers written by a stronger model",
      "correct": false
     }
    ],
    "explanation": "None of them. DPO learns directly from preference pairs, against a frozen reference; skipping the reward model is exactly what sets it apart from RLHF. In on-policy distillation, a teacher language model grades every token, and in RLVR a checker decides right or wrong. SFT simply copies the given answers."
   },
   {
    "topic": "where SFT data comes from",
    "stem": "How can the examples for supervised fine-tuning be obtained?",
    "options": [
     {
      "text": "People write the answers to curated prompts",
      "correct": true
     },
     {
      "text": "A stronger model writes the answers",
      "correct": true
     },
     {
      "text": "The model writes several answers itself, and only the best are kept",
      "correct": true
     },
     {
      "text": "For a very specific domain, people writing the answers is still the best source",
      "correct": true
     }
    ],
    "explanation": "All three are ways to fill an SFT dataset: a curated dataset written by people, distillation from a stronger model, and rejection sampling of the model's own answers. For general purposes, distillation works best; for narrow domains that strong models do not cover well, people still do."
   },
   {
    "topic": "on-policy vs ordinary distillation",
    "stem": "What sets on-policy distillation apart from ordinary distillation?",
    "options": [
     {
      "text": "The student writes the text, and the teacher grades each of its tokens",
      "correct": true
     },
     {
      "text": "The teacher writes the text, and the student learns to copy it",
      "correct": false
     },
     {
      "text": "It needs the teacher's probabilities, so it does not work with an API that returns only text",
      "correct": true
     },
     {
      "text": "A token that the teacher finds much less likely than the student does is pushed down",
      "correct": true
     }
    ],
    "explanation": "In ordinary distillation, the student learns the teacher's text or its whole distribution. In on-policy distillation, the text comes from the student, and the teacher says how likely it would have been to write each token. Each token's grade is the difference of the two log-probabilities, so a token the teacher finds unlikely gets a negative grade. That needs the teacher's probabilities, which closed APIs do not provide."
   },
   {
    "topic": "DPO: what it does",
    "stem": "What does DPO do?",
    "options": [
     {
      "text": "It first trains a reward model, which then scores fresh answers of the policy",
      "correct": false
     },
     {
      "text": "It makes the chosen answer more likely and the rejected one less likely, each compared with a frozen reference",
      "correct": true
     },
     {
      "text": "It lets the policy write fresh answers during training and compares them in pairs",
      "correct": false
     },
     {
      "text": "It updates the reference model along with the policy, so the two stay close",
      "correct": false
     }
    ],
    "explanation": "DPO learns from a fixed dataset of pairs, labelled once, and widens the gap between chosen and rejected answer, measured against a frozen copy of the SFT model. It needs neither a reward model nor fresh answers; a reward model scoring fresh answers is what RLHF adds. The reference must stay frozen, or the comparison would lose its anchor."
   },
   {
    "topic": "RLHF: the reward model",
    "stem": "RLHF trains a reward model on pairs of a better and a worse answer. What is true?",
    "options": [
     {
      "text": "It is trained to give the better answer a score close to 1 and the worse one close to 0",
      "correct": false
     },
     {
      "text": "The pairs can come from people ranking several answers to the same prompt",
      "correct": true
     },
     {
      "text": "Only the difference between two scores is trained, so a single score means little on its own",
      "correct": true
     },
     {
      "text": "Once trained, it can score fresh answers that the policy writes during RL",
      "correct": true
     }
    ],
    "explanation": "People rank several answers, and every two of them give a pair. The loss only pushes the better answer's score above the worse one's, so the absolute values carry no meaning, only their order. Unlike DPO's fixed pairs, the trained reward model can then judge any new answer the policy writes."
   },
   {
    "topic": "reward hacking",
    "stem": "In RLHF without any penalty, the policy drifts further and further from where it started, and the reward model's score keeps rising. What is true?",
    "options": [
     {
      "text": "The policy can find answers that the reward model overrates",
      "correct": true
     },
     {
      "text": "The true quality keeps rising along with the reward model's score",
      "correct": false
     },
     {
      "text": "This cannot happen, because the reward model was trained on human preferences",
      "correct": false
     },
     {
      "text": "The true quality rises at first, then falls",
      "correct": true
     }
    ],
    "explanation": "The reward model is only an approximation of what people prefer, learned from a limited set of pairs. Pushed far enough, the policy exploits its weak spots: the score keeps climbing while the real quality peaks and then drops. That is reward hacking, and the fix is a penalty that pulls the policy back towards the reference, harder the further it drifts."
   },
   {
    "topic": "the KL term and the clipped ratio",
    "stem": "PPO in RLHF has both a KL term and a clipped ratio \\(\\rho_t\\). What is true?",
    "options": [
     {
      "text": "The KL term measures how far the policy has moved from the frozen SFT model",
      "correct": true
     },
     {
      "text": "The KL term measures how far the policy has moved since the answer was written, to limit each update",
      "correct": false
     },
     {
      "text": "The ratio compares a token's probability now with its probability when the answer was written",
      "correct": true
     },
     {
      "text": "With a positive advantage, an answer stops pushing a token up once the token's ratio passes \\(1 + \\varepsilon\\)",
      "correct": true
     }
    ],
    "explanation": "Two different distances: the KL term compares the policy with the reference, the SFT model, which never changes, and guards against reward hacking over the whole run. The ratio compares the policy with itself at the moment the answer was written; the same answer is used for several updates, and clipping stops it from moving a token too far. Limiting the size of each update is the clip's job, not the KL term's. (The original PPO paper also describes a variant that penalises KL to the old policy instead of clipping; RLHF as in the lecture uses the clip plus KL to the reference.)"
   },
   {
    "topic": "no checker: RLHF or RLAIF",
    "stem": "A team post-trains a model to write poems and to comfort sad friends. No script can say right or wrong. What is true?",
    "options": [
     {
      "text": "RLVR fits, because a script can count the words of each answer",
      "correct": false
     },
     {
      "text": "RLHF fits: a reward model trained on people's preferences scores the answers",
      "correct": true
     },
     {
      "text": "RLAIF fits: a model judges the answers, following a constitution written by people",
      "correct": true
     },
     {
      "text": "In RLAIF, a label costs much less than one from a person",
      "correct": true
     }
    ],
    "explanation": "RLVR needs a checker for what matters; counting words checks a length limit, not whether a poem is good. Where nothing can be verified, the score comes from a reward model trained on human preferences (RLHF) or from a model that judges by principles people wrote, for example as a rubric for the prompt (RLAIF). A model's label costs far less than a person's."
   },
   {
    "topic": "when RLVR works",
    "stem": "For which of these tasks can RLVR give the reward?",
    "options": [
     {
      "text": "A maths problem whose final answer is known",
      "correct": true
     },
     {
      "text": "Fixing a bug, checked by unit tests that run in a sandbox",
      "correct": true
     },
     {
      "text": "Answering in under 50 words without commas",
      "correct": true
     },
     {
      "text": "Replying in valid JSON with the right fields",
      "correct": true
     }
    ],
    "explanation": "RLVR works whenever a checker can say right or wrong directly: the final answer for maths, unit tests for code, a script for constraints in the instructions, a parser for the format. The rule of thumb: verifiable means RLVR, everything else needs RLHF or RLAIF."
   },
   {
    "topic": "why a baseline",
    "stem": "Four answers to one prompt get rewards of 0.8, 0.5, 0.3 and 0.1. Each answer's tokens are pushed up in proportion to its weight. What is true?",
    "options": [
     {
      "text": "With the plain reward as weight, even the worst answer is pushed up, only less",
      "correct": true
     },
     {
      "text": "With the mean, 0.425, subtracted, the two worse answers get negative weights and are pushed down",
      "correct": true
     },
     {
      "text": "Subtracting the mean changes which answer counts as the best",
      "correct": false
     },
     {
      "text": "With a baseline, an answer is judged by how good it is, not by how much better than expected",
      "correct": false
     }
    ],
    "explanation": "All four rewards are positive, so without a baseline every answer becomes more likely, the bad ones included. With the baseline \\(b\\), the weight is \\(r - b\\): the answer is judged by how much better it is than expected, and below-average answers become less likely. Subtracting the same number from every reward keeps their order."
   },
   {
    "topic": "PPO: rewards, values, advantages",
    "stem": "In PPO for RLHF, the reward model scores a whole answer, and a value model is trained alongside the policy. What is true?",
    "options": [
     {
      "text": "The reward model gives every token its own score",
      "correct": false
     },
     {
      "text": "The value model decides which token the policy writes next",
      "correct": false
     },
     {
      "text": "A token's advantage is the reward that came after it minus what the value model expected there",
      "correct": true
     },
     {
      "text": "A token with a negative advantage is made more likely, since its answer still got a positive reward",
      "correct": false
     }
    ],
    "explanation": "The reward model's score sits on the last token only, and each token collects the rewards that come after it. The value model, the critic, only predicts that sum and serves as the baseline; the policy writes the tokens. A negative advantage means worse than expected, so the token becomes less likely, whatever the reward itself."
   },
   {
    "topic": "PPO vs GRPO",
    "stem": "What is true about PPO and GRPO?",
    "options": [
     {
      "text": "GRPO needs no value model; its baseline is the mean reward of several answers to the same prompt",
      "correct": true
     },
     {
      "text": "PPO gives every token of an answer the same advantage, GRPO a separate one for each token",
      "correct": false
     },
     {
      "text": "GRPO needs only one answer per prompt, like PPO",
      "correct": false
     },
     {
      "text": "Both put the KL penalty into the reward",
      "correct": false
     }
    ],
    "explanation": "GRPO samples a group of answers to the same prompt and uses their mean as the baseline, so it keeps one model less in memory. In PPO, the value model gives every token its own advantage; in GRPO, all tokens of an answer share one. PPO puts the KL penalty into the reward, GRPO into the loss. Ratio and clipping are the same in both."
   },
   {
    "topic": "GRPO: computing the advantages",
    "stem": "GRPO samples four answers to one maths prompt. A checker scores them 1, 0, 0 and 1. The advantage is \\(A_i = (r_i - \\text{mean}) / \\text{std}\\), with mean 0.5 and std 0.5. What is true?",
    "options": [
     {
      "text": "Each correct answer gets an advantage of +1",
      "correct": true
     },
     {
      "text": "Every token of the second answer gets an advantage of −1",
      "correct": true
     },
     {
      "text": "If all four answers were correct, all of them would be pushed up strongly",
      "correct": false
     },
     {
      "text": "A longer answer gets a larger advantage than a shorter one with the same score",
      "correct": false
     }
    ],
    "explanation": "\\((1 - 0.5) / 0.5 = +1\\) and \\((0 - 0.5) / 0.5 = -1\\), and every token of an answer gets its answer's advantage. If all four were correct, every reward would equal the mean, so the group gives no signal: nothing is better than expected. The advantage depends only on the scores in the group, not on length."
   }
  ]
 },
 {
  "id": "05-applied-genai",
  "title": "Applied Generative AI",
  "summary": "",
  "questions": [
   {
    "topic": "same function, two behaviours",
    "stem": "The same prompt, “What does the cow say?”, goes to a base model and to the same model after post-training. What is true?",
    "options": [
     {
      "text": "The base model continues the text, for example with more questions like it",
      "correct": true
     },
     {
      "text": "The post-trained model replies to the question as a chat assistant",
      "correct": true
     },
     {
      "text": "After post-training, the model knows when Test 1 is, without any context",
      "correct": false
     },
     {
      "text": "Both compute \\(p(\\text{next token} \\mid \\text{context};\\ \\theta)\\), with different weights \\(\\theta\\)",
      "correct": true
     }
    ],
    "explanation": "The base model treats the prompt as text to continue; post-training changed the weights so that it answers in a chat. Both are the same kind of function, a distribution over the next token. Post-training did not teach it course facts: asked when Test 1 is, the post-trained model confidently invents a date, so such facts have to go into the context."
   },
   {
    "topic": "benchmarks and Elo ratings",
    "stem": "The Arena turns votes between two answers into Elo ratings, with \\(E_A = \\dfrac{1}{1 + 10^{(R_B - R_A)/400}}\\). What is true about judging models this way and by benchmarks?",
    "options": [
     {
      "text": "A model that ranks first on the benchmarks is also the best for your own task",
      "correct": false
     },
     {
      "text": "If benchmark questions are in the training data, the score overstates the model",
      "correct": true
     },
     {
      "text": "A model rated 22 points higher wins about three out of four votes",
      "correct": false
     },
     {
      "text": "A model rated 400 points higher wins about 10 out of every 11 votes",
      "correct": true
     }
    ],
    "explanation": "Contamination lets a model score well on questions it has already seen. No benchmark asks your question, so benchmarks narrow the choice and your own eval decides. At 400 points the odds are 10 : 1, about 91 %; at 22 points the formula gives only about 53 %, close to a coin toss."
   },
   {
    "topic": "will it fit? memory for a model",
    "stem": "The memory a model needs is about parameters × bytes per weight + KV cache. What is true?",
    "options": [
     {
      "text": "An 8 B model at 16 bit needs about 16 GB for its weights",
      "correct": true
     },
     {
      "text": "A 70 B model at 4 bit needs about 35 GB for its weights",
      "correct": true
     },
     {
      "text": "The KV cache comes on top and grows with the length of the context",
      "correct": true
     },
     {
      "text": "On a GPU with 80 GB, a 100 B model at 4 bit leaves about 30 GB for the KV cache",
      "correct": true
     }
    ],
    "explanation": "16 bit are 2 bytes per weight, so 8 B weights take 16 GB; 4 bit are half a byte, so 70 B take 35 GB and 100 B take 50 GB, which leaves about 30 GB for the cache. Going from 16 to 4 bit quarters the memory for the weights. The KV cache keeps a key and a value for every token, so a longer context needs more of it."
   },
   {
    "topic": "quantisation: fewer bits per weight",
    "stem": "A model is quantised from 16 bit to 4 bit. What is true?",
    "options": [
     {
      "text": "The weights come back exactly, they are only stored more compactly",
      "correct": false
     },
     {
      "text": "Each weight becomes a small integer, multiplied by a scale shared by a group of weights",
      "correct": true
     },
     {
      "text": "Decoding gets faster, because fewer bytes have to be read from memory for each token",
      "correct": true
     },
     {
      "text": "A bigger model at 4 bit can need less memory than a smaller one at 16 bit and still do better",
      "correct": true
     }
    ],
    "explanation": "A weight like 0.0488 becomes 4 × 0.0112 = 0.0449: close, not exact, so some quality is lost. Generating a token reads every active weight once, so speed is bounded by memory bandwidth divided by the size of the weights, and smaller weights mean more tokens per second. A 1.7 B model at 4 bit took less memory than a 0.6 B model at 16 bit and answered more questions right."
   },
   {
    "topic": "the model forgets everything",
    "stem": "A chat app talks to a model through an API. In request 1, the user tells it their name. What is true?",
    "options": [
     {
      "text": "If request 2 is sent alone, the model cannot know the name",
      "correct": true
     },
     {
      "text": "The model learns from request 1, so later requests can leave it out",
      "correct": false
     },
     {
      "text": "Resending the history every turn adds up to about \\(n^2/2\\) messages over \\(n\\) turns",
      "correct": true
     },
     {
      "text": "When a long history is compacted into a summary, no details are lost",
      "correct": false
     }
    ],
    "explanation": "The model is stateless: every request stands alone, and whatever it should know from earlier turns must be sent again. In turn \\(n\\), all \\(n\\) messages so far go along, so the total grows with the square of the length. Compaction keeps a long run going by summarising the history, but details are lost."
   },
   {
    "topic": "context or weights: where new facts go",
    "stem": "A course assistant must know the exam dates, which change every semester. What is true?",
    "options": [
     {
      "text": "Fine-tuning on the dates is the best way to give the model these new facts",
      "correct": false
     },
     {
      "text": "With RAG, a changed date only reaches the model after retraining",
      "correct": false
     },
     {
      "text": "Fine-tuning suits behaviour, style and format better than new facts",
      "correct": true
     },
     {
      "text": "With fine-tuning, each answer can be traced back to its source document",
      "correct": false
     }
    ],
    "explanation": "Facts belong in the context: pasted into the prompt they work at once, with RAG after re-indexing, and both can be traced to a source. Fine-tuning changes the weights, takes weeks, data and GPUs, needs training again for every new date, and the knowledge it adds cannot be traced to any document. It is the right lever for behaviour, style and format."
   },
   {
    "topic": "setting up RAG",
    "stem": "What is true about setting up retrieval-augmented generation?",
    "options": [
     {
      "text": "Chunking, embedding and indexing the documents happen once, offline",
      "correct": true
     },
     {
      "text": "Indexing the documents changes the weights of the model",
      "correct": false
     },
     {
      "text": "In the prompt, the question comes first and the passages after it",
      "correct": false
     },
     {
      "text": "Chunks are best cut at a fixed length, wherever the headings fall",
      "correct": false
     }
    ],
    "explanation": "The documents are chunked, embedded and put into a vector index ahead of time; each question then only triggers a search. The model itself is not changed, retrieval only decides what it gets to read. Chunks are split by meaning, with the heading kept in every chunk, and the prompt gives the passages with their source and puts the question last."
   },
   {
    "topic": "words, meaning, or a reranker",
    "stem": "A schedule has one entry each for Test 1, Test 2 and the retake. The right entry is searched by words (BM25), by meaning (embeddings) or with a reranker. What is true?",
    "options": [
     {
      "text": "BM25 matches by meaning, so it handles synonyms well",
      "correct": false
     },
     {
      "text": "Embeddings can match “second chance if I fail” to the retake, with no word in common",
      "correct": true
     },
     {
      "text": "Embeddings can miss Test 1, because “Test 1” and “Test 2” get almost the same vector",
      "correct": true
     },
     {
      "text": "A reranker reads question and passage together; it is slower, so it scores only the top few",
      "correct": true
     }
    ],
    "explanation": "BM25 counts shared words, so it finds Test 2 for “second chance” and needs the exact words. Embeddings place similar meanings close together, which handles paraphrases but blurs numbers and names. A reranker scores each question–passage pair together and found the right entry every time, so a fast search picks the top 50 and the reranker the top 3."
   },
   {
    "topic": "how RAG fails",
    "stem": "A RAG assistant gives a wrong date for Test 1. What is true?",
    "options": [
     {
      "text": "If retrieval missed the right passage, the model answers from its weights, just as confidently",
      "correct": true
     },
     {
      "text": "Putting the whole schedule into the context instead would be safer, since nothing is missed",
      "correct": false
     },
     {
      "text": "A passage in the middle of a long context is missed more often than one at the start or end",
      "correct": true
     },
     {
      "text": "Measuring recall@k on your eval questions shows whether retrieval is the problem",
      "correct": true
     }
    ],
    "explanation": "A failed search does not make the model say “I don't know”; it falls back on what it learned. With the whole schedule in the context, the small model got 0 of 20 right, against 19 of 20 with only the right entry: quality drops long before the window is full, and the middle gets lost. Recall@k checks whether the right passage is among the top \\(k\\), the step people skip."
   },
   {
    "topic": "the model never sees JSON",
    "stem": "An app sends a model a JSON list of messages, each with a role. What is true?",
    "options": [
     {
      "text": "The model reads the JSON and takes the roles from its fields",
      "correct": false
     },
     {
      "text": "A chat template joins the messages into one sequence of tokens",
      "correct": true
     },
     {
      "text": "Special tokens such as `<|im_start|>` are learned in post-training and differ between models",
      "correct": true
     },
     {
      "text": "`<|im_end|>` reaches the model as several ordinary tokens, one per character",
      "correct": false
     }
    ],
    "explanation": "Before the model sees anything, the template turns the messages into plain text marked with special tokens, and the model writes until it produces `<|im_end|>`. Each special token is a single token that the model learned to use in post-training, so every model family has its own. Tool definitions also end up as text in this sequence."
   },
   {
    "topic": "prefill and decode: where the wait comes from",
    "stem": "The same question is sent once with 3 passages (135 tokens) and once with the schedule pasted 16 times (about 6,000 tokens). What is true?",
    "options": [
     {
      "text": "With the long prompt, the wait before the first token is much longer",
      "correct": true
     },
     {
      "text": "The prompt is read one token at a time, as slowly as the answer is written",
      "correct": false
     },
     {
      "text": "With streaming, the whole answer is finished sooner",
      "correct": false
     },
     {
      "text": "A long answer adds waiting after the first token, not before it",
      "correct": true
     }
    ],
    "explanation": "The model first reads the whole prompt at once (prefill) and then writes one token after another (decode). Prefill takes longer the longer the prompt, so long prompts delay the first token and long answers make you wait after it. Streaming shows each token as soon as it is written, starting right after prefill, but it does not make the answer any faster."
   },
   {
    "topic": "the prefix cache",
    "stem": "A course assistant puts the whole schedule, about 450 tokens, into its system prompt. A user asks a second question in the same chat. What is true?",
    "options": [
     {
      "text": "Turn 2 starts faster, because the server reuses what it read of the same start",
      "correct": true
     },
     {
      "text": "At a provider, the cached part of the input costs a fraction of the normal input price",
      "correct": true
     },
     {
      "text": "Putting the current time at the very start of the system prompt keeps this speed-up",
      "correct": false
     },
     {
      "text": "If one token near the end of the prompt changes, the whole prompt is read again",
      "correct": false
     }
    ],
    "explanation": "The server keeps what it has read and, for a prompt with the same beginning, reads only what is new. One changed token means everything after it must be read again, so a changing value at the start spoils the cache for every request, while a change at the end costs little. Providers bill cached input at about 2.5 to 10 % of the input price. What stays the same goes first."
   },
   {
    "topic": "each token a draw, and mode dropping",
    "stem": "Asked “Pick a random number between 1 and 9”, a post-trained model says 5 in about half of all runs. What is true?",
    "options": [
     {
      "text": "No single answer is wrong, but the diversity of the answers is gone",
      "correct": true
     },
     {
      "text": "An eval that checks correctness would flag this as an error",
      "correct": false
     },
     {
      "text": "At temperature 0, it would answer 5, its most probable number, every time",
      "correct": true
     },
     {
      "text": "The base model, before post-training, shows an even stronger peak at 5",
      "correct": false
     }
    ],
    "explanation": "This is mode dropping, and post-trained models show it more than base models, whose answers spread more widely. Every number is a valid answer, so a correctness eval sees nothing wrong. Each run draws from the model's distribution, so other numbers still come up; the temperature sets how random that draw is, and at 0 the server always takes the most probable token."
   },
   {
    "topic": "structured output: constrained decoding",
    "stem": "The answer must be JSON with a date field, so the server enforces a schema with constrained decoding. What is true?",
    "options": [
     {
      "text": "Tokens the schema forbids get probability 0, and the rest keep the probabilities they had",
      "correct": false
     },
     {
      "text": "Asking for JSON in the prompt alone would already guarantee output that parses",
      "correct": false
     },
     {
      "text": "The output always parses, but the date in it can still be wrong",
      "correct": true
     },
     {
      "text": "The order of the fields in the schema does not change how often the date is right",
      "correct": false
     }
    ],
    "explanation": "At every step, the forbidden tokens are struck out, even the most likely one, and the allowed ones are renormalised to share the whole 100 %. Without a schema, a model asked for JSON may wrap it in Markdown backticks, which does not parse. The schema checks the form, not the facts: 20 of 20 answers were valid, 7 of 20 had the right date. With a reasoning field before the date, written first because the model writes left to right, all 20 dates were right."
   },
   {
    "topic": "what helps against hallucination",
    "stem": "A course assistant sometimes invents dates. What is true?",
    "options": [
     {
      "text": "Allowing “I don't know”, in the prompt and in the scoring, cuts confident wrong answers",
      "correct": true
     },
     {
      "text": "Setting the temperature to 0 stops it from inventing dates",
      "correct": false
     },
     {
      "text": "With RAG and cited sources, it no longer invents anything",
      "correct": false
     },
     {
      "text": "Comparing several runs catches guesses, but not an error it makes every time",
      "correct": true
     }
    ],
    "explanation": "Temperature 0 only makes the answer the same every time, not right; like a schema, it changes the form, not what the model knows. Grounding with sources helps, yet even legal RAG tools still hallucinate in 17 to 33 % of cases. Letting the model abstain cut wrong answers sharply, and answers that change between runs point to guessing, while a consistent error looks the same every time."
   },
   {
    "topic": "the agent loop: who does what",
    "stem": "An agent runs as a loop: the model is called with the tool definitions, and the code handles the tool calls it writes. What is true?",
    "options": [
     {
      "text": "The model runs the tool it asked for and reads the result itself",
      "correct": false
     },
     {
      "text": "The model gets the tool definitions as a separate object, outside the prompt text",
      "correct": false
     },
     {
      "text": "The model keeps earlier tool results, so they need not be sent again",
      "correct": false
     },
     {
      "text": "A tool call in the right format also has the right arguments",
      "correct": false
     }
    ],
    "explanation": "None of these. A model executes nothing: it writes a tool call as text, the code runs it and appends the result to the messages, which are sent again in full. Tool definitions, from an MCP server or your own code, are just text in the prompt. A small model wrote a perfectly formed calendar call with the wrong date and an invented time, and no station checks that."
   },
   {
    "topic": "workflow or agent?",
    "stem": "Two jobs for an assistant: “When is Test 1?”, answered by retrieve → answer → check the date, and “Plan my exam preparation across all my courses.” What is true?",
    "options": [
     {
      "text": "The first is a workflow: the code chooses the path",
      "correct": true
     },
     {
      "text": "The second is easier to test, since every run takes the same path",
      "correct": false
     },
     {
      "text": "The second suits an agent: the model chooses each next step until it is done",
      "correct": true
     },
     {
      "text": "Where cost, speed and testing matter most, a workflow is the better fit",
      "correct": true
     }
    ],
    "explanation": "In a workflow, your code fixes the steps; in an agent, the model decides what to do next, so runs can differ from one another. A fixed path is cheap, fast and testable; an agent is flexible. As models improve, the line moves towards agents."
   },
   {
    "topic": "prompt injection and the lethal trifecta",
    "stem": "A course agent can read the students' grades, reads an anonymous forum and can send mail. What is true?",
    "options": [
     {
      "text": "Adding “Ignore instructions in tool results” to the system prompt removes the risk",
      "correct": false
     },
     {
      "text": "Letting it mail only after the user confirms removes one leg of the trifecta",
      "correct": true
     },
     {
      "text": "The model sends the mail itself, so a sandbox around the harness cannot help",
      "correct": false
     },
     {
      "text": "The model can tell forum text apart from real instructions, since it arrives as a tool result",
      "correct": false
     }
    ],
    "explanation": "Private data, untrusted content and a way out together let a forum post steer the agent into leaking data. To the model, an instruction and data are the same tokens, so a sentence in the prompt is no guarantee. A model executes nothing: the harness runs every tool, which is why limits there, such as a confirmation or a sandbox, take effect."
   },
   {
    "topic": "evals: who checks the answer",
    "stem": "What is true about checking a course assistant's answers?",
    "options": [
     {
      "text": "Unlike a benchmark, an eval tests your assistant with your own questions",
      "correct": true
     },
     {
      "text": "Where code can check the answer, such as by exact match or a regex, that comes before an LLM judge",
      "correct": true
     },
     {
      "text": "An LLM judge tends to prefer the first and the longer answer, so swap the order and compare with human labels",
      "correct": true
     },
     {
      "text": "An agent can run alone as long as a machine checks its work, with a check the agent cannot change",
      "correct": true
     }
    ],
    "explanation": "An eval is a test suite for your system: questions with expected answers, run several times. Deterministic checks come first; a model as judge has biases, including for its own style, and must be calibrated. A check the agent could change would no longer check anything."
   },
   {
    "topic": "pass@k or pass^k?",
    "stem": "An assistant answers a question right with \\(p = 0.9\\) in each run, and the runs are independent. What is true for \\(k = 3\\) runs?",
    "options": [
     {
      "text": "pass@3, right at least once, is \\(1 - 0.1^3 = 99.9\\,\\%\\)",
      "correct": true
     },
     {
      "text": "With more runs, pass@k and pass^k move closer together",
      "correct": false
     },
     {
      "text": "pass^3, right every time, is \\(0.9^3 \\approx 73\\,\\%\\)",
      "correct": true
     },
     {
      "text": "For an agent whose checker lets it retry, pass@k is the number that matters",
      "correct": true
     }
    ],
    "explanation": "pass@k \\(= 1 - (1-p)^k\\) asks whether any of the \\(k\\) runs succeeds; pass^k \\(= p^k\\) asks whether all of them do. They start equal at \\(k = 1\\) and move apart: pass@k towards 100 %, pass^k towards 0. An agent that can check and retry needs one success, a user who relies on every answer needs pass^k."
   }
  ]
 }
];
