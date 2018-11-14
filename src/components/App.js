import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  onAuthClick(isLoggedIn) {
    this.props.changeAuth(!isLoggedIn);
  }

  renderButton() {
    return (
      <button onClick={() => this.onAuthClick(this.props.auth)}>
        {this.props.auth ? 'Sing out' : 'Sing in'}
      </button>
    )
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/" exact component={CommentList} />
        <Route path="/post" exact component={CommentBox} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(App);