"""Main module to run the aaronson-oracle-baseball"""
import os
import sys

class TestData:
    def __init__(self, filename):
        self.filename = filename
        self.count = 0

    def read_file(self):
        file = open(self.filename, "r")
        content = file.read()
        self.data = content.strip().split()
        file.close()

    def get(self, str=""):
        self.read_file()
        if (self.count == len(self.data)):
            return '0'
        else:
            self.count += 1
            return self.data[self.count-1]

def parse_sequence(input_method=input):
    input_single = input_method("Press 's' or 'f' or 'd': ")
    return input_single

if __name__ == "__main__":

    filename = sys.argv[1]

    # Init the model to have all combinations and init with 0 values for keystroke in value
    model = {}  # init a model that looks like {'ffffd': {'f': 2, 'd': 0}, 'ffddf': {'f': 1, 'd': 3}}
    input_sequence = []  # keeps the history of input sequences
    accuracy = []  # keeps track of the guesses, 1 if correct, 0 if incorrect

    data = TestData(filename)

    print("Start of oracle, press 0 to end.")
    while True:
        # # uncomment this to run in real time
        # input_single = parse_sequence()

        # uncomment this to read in from file
        input_single = parse_sequence(data.get)
        
        if input_single == 'f' or input_single == 'd' or input_single == 's':
            print("You pressed", input_single)

            five_gram_sequence = ''.join(input_sequence[-5:])

            # retreive a prediction once we have enough data
            if len(five_gram_sequence) == 5:
                try:
                    # update the model with the user input
                    model[five_gram_sequence][input_single] += 1

                    # return the more likely next keystroke
                    model_sequence = model[five_gram_sequence]
                    if model_sequence['f'] == model_sequence['d'] == model_sequence['s']:
                        model_prediction = 'f'
                    elif model_sequence['f'] > model_sequence['d']:
                        if model_sequence['f'] > model_sequence['s']:
                            model_prediction = 'f'
                        else:
                            model_prediction = 's'
                    elif model_sequence['d'] > model_sequence['f']:
                        if model_sequence['d'] > model_sequence['s']:
                            model_prediction = 'd'
                        else:
                            model_prediction = 's'
                    elif model_sequence['s'] > model_sequence['d']:
                        if model_sequence['s'] > model_sequence['f']:
                            model_prediction = 's'
                        else:
                            model_prediction['f']
                    print("Oracle predicted", model_prediction)

                    accuracy.append(int(model_prediction == input_single))
                    rolling_acc = sum(accuracy) / len(accuracy)
                    print("Rolling accuracy", round(rolling_acc * 100, 0), "%")

                except KeyError:
                    model[five_gram_sequence] = {'s': 0, 'f': 0, 'd': 0}
                    model[five_gram_sequence][input_single] += 1
            
            # update the sequence
            input_sequence.append(input_single)

        elif input_single == '0':
            print("Finish, final accuracy is", round(rolling_acc * 100, 0), "%")
            print("Predictions made", len(accuracy))
            print("Inputs made", len(input_sequence))
            break
        else:
            print("Press either 's' or 'f' or 'd' please") 
