class Tweet:
    def __init__(self, text, score):
        self.text = text
        self.score = score

    def __lt__(self, other):
        return self.score > other.score