# hot-button-twitter-search
Hot Button is a new way to search Twitter. Hot Button scans news headlines to identify hot topics, and then allows you to sort a user's tweets by their relevancy to recent news. Hot Button's comparisons between hot topics and a user's tweets are powered by  scikit-learn!

Checkout the project here: https://hot-button-twitter-search.appspot.com/

![Screenshot](https://preview.ibb.co/fNMJNp/Screen_Shot_2018_08_28_at_4_17_30_PM.png)

# Backend 
- The backend is this Cloud Function:
- `https://us-east1-hot-button-twitter-search.cloudfunctions.net/sorted-tweets-1`
- To use this API, `POST` an object that contains a Twitter username, like this:
```
{ "user": "@realDonaldTrump" }
```
- The response will up to 10 of the user's tweets, sorted by relevance to today's political headlines:
```

{
  "tweets": {
    "0": "1052947510271111170", 
    "1": "1052556222459727872", 
    "2": "1052914382986973184", 
    "3": "1053655992649506821", 
    "4": "1052368431201341447", 
    "5": "1051801524857384960", 
    "6": "1052885781675687936", 
    "7": "1052186219696803841", 
    "8": "1052219253384994816", 
    "9": "1052741954918866944"
  }
}
```
- These are the Tweet ids. Every Tweet on Twitter has a unique id. If you are using some kind of embedded Tweet component, you can just pass in this id, and it will return the embedded Tweet.
