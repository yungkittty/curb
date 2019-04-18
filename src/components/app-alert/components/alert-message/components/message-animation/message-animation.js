import _ from "lodash";
import React from "react";

const MessageAnimation = WrappedComponent => {
  class _MessageAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.wrappedComponent = React.createRef();
      this.state = {};
    }

    componentDidMount() {
      const { style } = this.wrappedComponent.current;
      setTimeout(() => {
        style.left = `0%`;
      }, 80);
    }

    componentWillUnmount() {
      const { style } = this.wrappedComponent.current;
      style.left = `100%`;
    }

    render() {
      return <WrappedComponent {...this.props} ref={this.wrappedComponent} />;
    }
  }

  return _MessageAnimation;
};

export default MessageAnimation;
