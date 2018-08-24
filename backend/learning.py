from sklearn.feature_extraction.text import TfidfVectorizer
from twitter import get_tweets
from news import get_news

tweets = get_tweets("@realDonaldTrump")
news = get_news()


vect = TfidfVectorizer(min_df=1)
tfidf = vect.fit_transform([
    "I'd like an apple",
    "I'd like an orange",
    "I'd like a pear",
])

vectors = (tfidf * tfidf.T).A
