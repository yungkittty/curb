import React from "react";
import { Animated, Easing } from "react-native";
import PropTypes from "prop-types";

const MessageAnimation = WrappedComponent => {
  class _MessageAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { top: new Animated.Value(-50) };
    }

    componentDidMount() {
      const { persist } = this.props;
      const { top } = this.state;
      Animated.timing(top, {
        toValue: 0,
        easing: Easing.out(Easing.quad),
        duration: 400,
        useNativeDriver: true
      }).start();
      if (persist) return;
      setTimeout(
        () =>
          Animated.timing(top, {
            toValue: -50,
            easing: Easing.out(Easing.quad),
            duration: 400,
            useNativeDriver: true
          }).start(),
        3500
      );
    }

    componentDidUpdate() {
      const { top } = this.state;
      setTimeout(
        () =>
          Animated.timing(top, {
            toValue: -50,
            easing: Easing.out(Easing.quad),
            duration: 400,
            useNativeDriver: true
          }).start(),
        500
      );
    }

    render() {
      const { top } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          ref={this.wrappedComponent}
          style={{ transform: [{ translateY: top }] }}
        />
      );
    }
  }

  _MessageAnimation.propTypes = {
    index: PropTypes.number.isRequired
  };

  return _MessageAnimation;
};

export default MessageAnimation;
