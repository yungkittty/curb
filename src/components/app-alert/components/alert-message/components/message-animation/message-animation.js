import React from "react";
import PropTypes from "prop-types";

const MessageAnimation = WrappedComponent => {
  class _MessageAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.wrappedComponent = React.createRef();
      this.closeMessage = this.closeMessage.bind(this);
    }

    componentDidMount() {
      const { persist, index } = this.props;
      const { style } = this.wrappedComponent.current;
      style.top = `${30 + index * 80}px`;
      style.right = `-500px`;
      style.transition = "right 0.5s ease-out, top 0.2s ease-out";
      setTimeout(() => {
        style.right = `30px`;
      }, 80);
      if (persist) return;
      setTimeout(() => this.closeMessage(), 3500);
    }

    shouldComponentUpdate(nextProps) {
      const { index } = nextProps;
      return !(index < 0);
    }

    componentDidUpdate(prevProps) {
      const { persist, index } = this.props;
      const { style } = this.wrappedComponent.current;
      if (prevProps.persist !== persist) setTimeout(() => this.closeMessage(), 0);
      style.top = `${30 + index * 80}px`;
    }

    closeMessage() {
      const { style } = this.wrappedComponent.current;
      style.right = `-500px`;
      setTimeout(() => {
        style.display = "none";
      }, 500);
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
