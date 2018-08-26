from sklearn.feature_extraction.text import TfidfVectorizer
from twitter import get_tweets
from news import get_news
import json


def get_top_tweets(user):
    tweets = get_tweets("from:" + user)
    news = get_news()
    
    scored_tweets = []
    for tweet in tweets:
        news.insert(0, tweet.text)
        vect = TfidfVectorizer(min_df=1)
        tfidf = vect.fit_transform(news)
        vectors = (tfidf * tfidf.T).A
        scores_list = vectors.tolist()[0]
        tweet.set_score(sum(scores_list))
        news.pop(0)
        scored_tweets.append(tweet)
    sorted_tweets = sorted(scored_tweets)
    top_ten_scored_tweet_ids = {}

    for i in range(10):
        top_ten_scored_tweet_ids[str(i)] = sorted_tweets[i].id
    return top_ten_scored_tweet_ids
