import _ from "lodash";
import React from "react";

const MessageAnimation = WrappedComponent => {
  class _MessageAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return _MessageAnimation;
};

export default MessageAnimation;
