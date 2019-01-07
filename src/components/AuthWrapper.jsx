import React, { Component } from 'react';
export class AuthWrapper extends Component {
  state = {
    isAuthenticated: true
  };
  toggleAuth = () => {
    this.setState(state => ({
      isAuthenticated: !state.isAuthenticated
    }));
  };
  render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated)
      return (<div>Please log in {isAuthenticated ? <button onClick={this.toggleAuth}>Log out</button> : <button onClick={this.toggleAuth}>Log in</button>}</div>);
    return this.props.children;
  }
}
