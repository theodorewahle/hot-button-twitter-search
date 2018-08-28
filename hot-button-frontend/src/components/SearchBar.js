import React from 'react'
import { connect } from 'react-redux';
import { Col, Input, InputGroup, InputGroupAddon,  Button } from 'reactstrap'
import {getTweets} from '../redux/tweets/Api'

class SearchBar extends React.Component {
  state = {
    user: ''
  }

  handleClick = async () => {
    await this.props.getTweets(this.state.user)
    this.setState({ user: ''})
  }

  render() {
    return (
      <Col xs="6" md="5" lg="4" xl="3" style={{ paddingTop: 30, paddingBottom: 30}}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input value={this.state.user} onChange={e => this.setState({ user: e.target.value })} placeholder="username" />
        </InputGroup>
        <div style={{ paddingTop: 20 }}>
        <Button onClick={this.handleClick} outline color="light">{"What's Hot?"}</Button>
        </div>
      </Col>
    )
  }
}


const mapDispatchToProps = {
  getTweets
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
