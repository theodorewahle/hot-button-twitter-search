import requests
import json
from config import news_api_key

def get_news():
    url = "https://newsapi.org/v2/top-headlines"
    params = {
        "sources": ["the-new-york-times" , "cnn" , "the-washington-post", "politico"],
        "pageSize" : 100,
        "apiKey": news_api_key
    }
    news = requests.get(url=url, params=params)
    response = json.loads(news.text)
    articles = response["articles"]
    return [article["title"] + article["description"] for article in articles]
