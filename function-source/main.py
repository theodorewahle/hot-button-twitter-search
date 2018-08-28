import json
from flask import make_response, jsonify
from learning import get_top_tweets

def top_tweets(request):
    if request.method == "OPTIONS":
        response = make_response(jsonify({ "message" : "success" }), 204)
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Headers"] = 'Content-Type'
        return response
    request_json = request.get_json()
    if request_json and 'user' in request_json:
        user = request_json['user']
        tweets = { "tweets" : get_top_tweets(user)}
        response = make_response(jsonify(tweets), 200)
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Headers"] = 'Content-Type'
        return response
