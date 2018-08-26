import React from 'react'
import TweetEmbed from 'react-tweet-embed'

const TwitterFeed = ({ tweets }) => {
  const temp_tweets = {
    "0": "1032256443985084417",
    "1": "1033147164812300288",
    "2": "1032736867391811584",
    "3": "1033339636343549952",
    "4": "1032431371728445441",
    "5": "1032260490439864320", "6": "1032428929980739585", "7": "1033327353227882496", "8": "1033152062203342850", "9": "1032282621290704897"}
  const tweet_ids = Object.keys(temp_tweets).map(key => temp_tweets[key])
  return (
    <div>
    {tweet_ids.map(id => <TweetEmbed key={id} id={id}/>)}
    </div>
  )
}

export default TwitterFeed
