import React, { Component } from 'react';
import { Row, Col, Container  } from 'reactstrap'
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js'
import TwitterFeed from './components/TwitterFeed'
import SearchBar from './components/SearchBar'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App" style={styles.appStyle}>
          <Container style={{ width: '100%'}}>
            <Row style={{justifyContent: 'center', alignItems: 'center'}}>
              <Col>
                <h1 style={{ color: 'white', paddingTop:50}}>Hot Button: Politics</h1>
                <h4 style={{ color: 'white'}} >Search tweets and filter by relevance to political headlines.</h4>
              </Col>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <SearchBar />
            </Row>
            <Row style={{ justifyContent: 'center'}}>
              <Col  style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                <TwitterFeed/>
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

const styles = {
  appStyle: {
    minHeight: '100vh',
    minWidth: '100vw',
    maxWidth: '100%',
    background: 'linear-gradient(to right, red, blue)'
  }
}

export default App
