- Metadata:
    - Source: https://github.com/thundergolfer/google-rules-of-machine-learning
    - #machine-learning #data-science #google
1. Don't be afraid to launch a product without machine learning
	1. To create a useful ML tool it requires a large amount of data to outperform simpler heuristic algorithms
	2. Don't shift to ML until you have data
3. First, design and implement metrics
	1. Track as much in the current system so that it is easier to build ML systems on top
4. Choose machine learning over complex heuristics
	1. Once the heuristic is complex, they become very difficult to maintain and update over ML pipelines
5. Test the infrastructure independently from the machine learning
	1. Encapsulate the learning parts of the system so the rest can be tested
	2. Make sure the models from the training environment performs the same as the models from the production environment
6. Be careful about dropped data when copying pipelines
	1. When copying an existing pipeline, it may drop certain data but that might not be applicable to the new pipeline
7. Turn heuristics into features, or handle them externally
	1. Use existing rules and heuristics in your ML
	2. They probably contain intuition about the problem that you don't want to throw away
8. 