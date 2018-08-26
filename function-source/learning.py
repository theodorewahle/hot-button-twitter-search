from sklearn.feature_extraction.text import TfidfVectorizer
from twitter import get_tweets
from tweet import Tweet
from news import get_news

tweets = get_tweets("from:realdonaldtrump")
news = get_news()

scored_tweets = []
for tweet in tweets:
    news.insert(0, tweet)
    vect = TfidfVectorizer(min_df=1)
    tfidf = vect.fit_transform(news)
    vectors = (tfidf * tfidf.T).A
    scores_list = vectors.tolist()[0]
    scored_tweets.append(Tweet(news.pop(0), sum(scores_list)))

sorted_tweets = sorted(scored_tweets)




