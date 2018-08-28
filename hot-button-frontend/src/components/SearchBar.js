import React from 'react'
import { connect } from 'react-redux';
import { Col, Input, InputGroup, InputGroupAddon,  Button } from 'reactstrap'
import {getTweets} from '../redux/tweets/Api'

class SearchBar extends React.Component {
  state = {
    user: ''
  }

  render() {
    return (
      <Col style={{ marginLeft: 800, marginRight: 800, paddingTop: 30, paddingBottom: 30}}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input value={this.state.user} onChange={e => this.setState({ user: e.target.value })} placeholder="username" />
        </InputGroup>
        <div style={{ paddingTop: 20 }}>
        <Button  outline color="light">{"What's Hot?"}</Button>
        </div>
      </Col>
    )
  }
}


const mapStateToProps = ({ tweets }) => ({ tweets });

const mapDispatchToProps = {
  getTweets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
