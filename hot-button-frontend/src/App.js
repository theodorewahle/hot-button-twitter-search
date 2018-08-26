import React, { Component } from 'react';
import { Row, Col, Input, InputGroup, InputGroupAddon,  Button } from 'reactstrap'
import './App.css';
import TwitterFeed from './components/TwitterFeed'
import AccountCard from './components/AccountCard'

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
        <Col style={{ marginLeft: 400, marginRight: 400, paddingTop: 30, paddingBottom: 30}}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input placeholder="username" />
          </InputGroup>
          <div style={{ paddingTop: 20 }}>
          <Button  outline color="light">{"What's Hot?"}</Button>
          </div>
        </Col>
        </Row>

        <Row style={{justifyContent: 'center'}}>
          <Col>
            <AccountCard name="Donald Trump" username="realDonaldTrump" position="U.S. President"/>
          </Col>
          <Col>
          <TwitterFeed tweets={[]} />
          </Col>
          <Col>

          </Col>
        </Row>


      </div>
    );
  }
}

export default App;
