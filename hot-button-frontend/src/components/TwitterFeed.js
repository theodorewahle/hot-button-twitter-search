import React from 'react'
import { connect } from 'react-redux'
import TweetEmbed from 'react-tweet-embed'
import { Col } from 'reactstrap'
import Loader from './Loader'

class TwitterFeed  extends React.Component {
  render() {
    const { tweets, user, loading } = this.props.tweets
    console.log(this.props.tweets)
    const tweet_ids = Object.keys(tweets).map(key => tweets[key])

    if (loading) {
      return <Loader color='white' loading={loading}/>
    }

    if (tweets && user) {
      return (
        <div >
          <h3 style={{ color: 'white' }}>Relevant Tweets from @{user}:</h3>
          {tweet_ids.map(id => <TweetEmbed key={id} id={id}/>)}
        </div>
      )
    }

    return (
      <div>
      <h4 style={{ color: 'white', paddingTop: 100}}>{"Search a Twitter user to see their politically-relevant Tweets!"}</h4>
      </div>
    )
  }
  }


const mapStateToProps = ({ tweets }) => ({ tweets });

export default connect(
  mapStateToProps,
  null
)(TwitterFeed)
