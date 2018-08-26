from learning import get_top_tweets

def top_tweets(request):
    request_json = request.get_json()
    if request_json and 'user' in request_json:
        user = request_json['user']
        return get_top_tweets(user)
