import React, { Component } from 'react';
import { Row, Col  } from 'reactstrap'
import './App.css';
import TwitterFeed from './components/TwitterFeed'
import SearchBar from './components/SearchBar'

class App extends Component {

  render() {
    return (
      <div className="App" style={{ background: 'linear-gradient(to right, red, blue)'}}>
        <Row style={{justifyContent: 'center', alignItems: 'center'}}>
        <Col>
          <h1 style={{ color: 'white', paddingTop:50}}>Hot Button: Politics</h1>
          <h4 style={{ color: 'white'}} >Tweets filtered by relevance to political headlines.</h4>
          </Col>
        </Row>
        <Row>
          <SearchBar />
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Col>
            <TwitterFeed tweets={[]} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
