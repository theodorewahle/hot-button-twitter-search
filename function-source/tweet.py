class Tweet:
    def __init__(self, id, text):
        self.text = text
        self.id = id
        self.score = 0

    def __lt__(self, other):
        return self.score > other.score

    def set_score(self, score):
        self.score = score
