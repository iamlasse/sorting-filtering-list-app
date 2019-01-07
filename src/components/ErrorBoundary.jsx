import React, { Component, Fragment } from 'react';
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: '' };
  }
  static getDerivedStateFromError(error) {
    // console.log("get derived state from error: ", error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // console.log('Component did catch: ', error, info);
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    this.setState({
      hasError: true,
      error,
      errorInfo: info
    });
  }
  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    // console.log(hasError, error, errorInfo, children);
    return (<Fragment>
      {hasError && <div className="errors-wrapper">
        {error && error.message}
        {error && <div className="error">Crashed</div>}
      </div>}
      {children}
    </Fragment>);
  }
}
