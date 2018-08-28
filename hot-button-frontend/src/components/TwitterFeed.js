import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import TweetEmbed from 'react-tweet-embed'
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
        <Row style={{ justifyContent: 'center'}}>
          <Col style={{ alignItems: 'center'}}>
          <Row style={{ justifyContent: 'center' }}>
          <h3 style={{ color: 'white' }}>Relevant Tweets from @{user}:</h3>
          </Row>
          {tweet_ids.map(id => <Row style={{ justifyContent: 'center' }}><TweetEmbed key={id} id={id}/></Row>)}
          </Col>
        </Row>
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
