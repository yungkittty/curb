import React from "react";
import PropTypes from "prop-types";

const MessageAnimation = WrappedComponent => {
  class _MessageAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.wrappedComponent = React.createRef();
    }

    componentDidMount() {
      const { index } = this.props;
      const { style } = this.wrappedComponent.current;
      style.top = `${30 + index * 80}px`;
      style.right = `-500px`;
      style.transition = "right 0.5s ease-out, top 0.2s ease-out";
      setTimeout(() => {
        style.right = `30px`;
      }, 80);
      setTimeout(() => {
        style.right = `-510px`;
      }, 3500);
    }

    shouldComponentUpdate(nextProps) {
      const { index } = nextProps;
      return !(index < 0);
    }

    componentDidUpdate() {
      const { style } = this.wrappedComponent.current;
      const { index } = this.props;
      style.top = `${30 + index * 80}px`;
    }

    render() {
      return <WrappedComponent {...this.props} ref={this.wrappedComponent} />;
    }
  }

  _MessageAnimation.propTypes = {
    index: PropTypes.number.isRequired
  };

  return _MessageAnimation;
};

export default MessageAnimation;
