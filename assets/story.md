# 🤖 Interactive Machine Learning Experiments

## TL;DR

Hey readers!

I've open-sourced a new [**🤖 Interactive Machine Learning Experiments**](https://github.com/trekhleb/machine-learning-experiments) project on GitHub. Each experiment consists of 🏋️ _Jupyter/Colab notebook_ (to see how a model was trained) and 🎨 _demo page_ (to see a model in action right in your browser). 

Although the models may be a little dumb (remember, these are just experiments, not a production ready code), they will try to do their best to:

- 🖌 Recognize digits or sketches you draw in your browser
- 📸 Detect and recognize the objects you'll show to your camera
- 🌅 Classify your uploaded image
- 📝 Write a Shakespeare poem with you
- ✊🖐✌️ Play with you in Rock-Paper-Scissors game
- etc. 

I've trained the models on _Python_ using _TensorFlow 2_ with _Keras_ support  and then consumed them for a demo in a browser using _React_ and _JavaScript_ version of _Tensorflow_. 

![Interactive Machine Learning Experiments](./images/repository-cover.png)

## Models performance

⚠️ First, let's set our expectations.️ The repository contains machine learning **experiments** and **not** a production ready, reusable, optimised and fine-tuned code and models. This is rather a sandbox or a playground for learning and trying different machine learning approaches, algorithms and data-sets. Models might not perform well and there is a place for overfitting/underfitting.

Therefore, sometimes you might see things like this:

![Dumb model](./images/story/01-dumb-model.png)

But be patient, sometimes the model might get smarter 🤓 and give you this:

![Smart model](./images/story/02-smart-model.png)

## Background

I'm a [software engineer](https://www.linkedin.com/in/trekhleb/) and for last several years now I've been doing mostly frontend and backend programming. In my spare time, as a hobby, I decided to dig into machine learning topics to make it less _like a magic_ and _more like a math_ to myself.

1. 🗓 Since **Python** might be a good choice to start experimenting with Machine Learning I decided to learn its basic syntax first. As a result a [🐍 Playground and Cheatsheet for Learning Python](https://github.com/trekhleb/learn-python) project came out. This was just to practice Python and at the same time to have a cheatsheet of basic syntax once I need it (for things like `dict_via_comprehension = {x: x**2 for x in (2, 4, 6)}` etc.).

2. 🗓 After learning some Python I wanted to dig into the basic **math** behind the Machine Learning. So after passing an awesome [Machine Learning course by Andrew Ng](https://www.coursera.org/learn/machine-learning) on Coursera the [🤖 Homemade Machine Learning](https://github.com/trekhleb/homemade-machine-learning) project came out. This time it was about creating a cheatsheet for basic machine learning math algorithms like linear regression, logistic regression, k-means, multilayer perceptron etc.

3. 🗓 The next attempt to play around with basic Machine Learning math was [🤖 NanoNeuron](https://github.com/trekhleb/nano-neuron). It was about 7 simple JavaScript functions that supposed to give you a feeling of how machines can actually "learn".

4. 🗓 After finishing yet another awesome [Deep Learning Specialization by Andrew Ng](https://www.coursera.org/specializations/deep-learning) on Coursera I decided to practice a bit more with **multilayer perceptrons**, **convolutional** and **recurrent neural networks** (CNNs and RNNs). This time instead of implementing everything from scratch I decided to start using some machine learning framework. I ended up using [TensorFlow 2](https://www.tensorflow.org/) with [Keras](https://www.tensorflow.org/guide/keras/overview). I also didn't want to focus too much on math (letting the framework doing it for me) and instead I wanted to come up with something more practical, applicable and something I could try to play with right in my browser. As a result a new [🤖 Interactive Machine Learning Experiments](https://github.com/trekhleb/machine-learning-experiments) came out that I want to describe a bit more here.

## Tech-stack

## Experiments