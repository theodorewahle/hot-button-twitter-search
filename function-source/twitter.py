import requests
import json
from config import twitter_bearer_token

def get_tweets(query):
    headers = {"Authorization" : "Bearer " + twitter_bearer_token }
    url = "https://api.twitter.com/1.1/search/tweets.json?q={0}&count=50&tweet_mode=extended".format(query)
    reponse = requests.get(url, headers=headers)
    dictionary_response = json.loads(reponse.text)
    return [status["full_text"] for status in dictionary_response["statuses"]]

