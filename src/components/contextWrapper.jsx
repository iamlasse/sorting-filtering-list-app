import React, { Component } from 'react';

export const contextProviderWrapper = (WrappedComponent, Context, initialContext) => {
  // console.log(Context, initialContext);

  return class ContextProvider extends Component {
    constructor(props) {
      super(props);
      this.state = { ...initialContext };
    }
    // define any state changers
    changeContext = (obj) => {
      this.setState({ ...obj });
    };
    render() {
      return (
        <Context.Provider value={{
          ...this.state,
          changeContext: this.changeContext
        }}>
          <WrappedComponent {...this.props} />
        </Context.Provider>
      );
    }
  };
};

export const contextConsumerWrapper = (WrappedComponent, Context) => {
  // console.log(Context);

  return class ContextConsumer extends Component {
    render() {
      return (
        <Context.Consumer>
          {context => <WrappedComponent context={context} {...this.props} />}
        </Context.Consumer>
      );
    }
  };
};
