import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  
  renderAuthButton() {
    return this.props.auth
      ? <button onClick={ () => this.props.changeAuth(false) }>Sign out</button>
      : <button onClick={ () => this.props.changeAuth(true) }>Sign in</button>
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
        <li>{ this.renderAuthButton() }</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route exact path='/' component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(App);