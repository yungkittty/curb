import React from "react";
import { Platform, Animated, Easing } from "react-native";
import { isIphoneX } from "react-native-device-detection";
import PropTypes from "prop-types";

const MessageAnimation = WrappedComponent => {
  class _MessageAnimation extends React.Component {
    constructor(props) {
      super(props);
      // eslint-disable-next-line
      this.initialTop = -(Platform.OS === "ios" ? (isIphoneX ? 80 : 70) : 50);
      this.state = { top: new Animated.Value(this.initialTop) };
      this.closeMessage = this.closeMessage.bind(this);
    }

    componentDidMount() {
      const { persist } = this.props;
      const { top } = this.state;
      Animated.timing(top, {
        toValue: 0,
        easing: Easing.out(Easing.quad),
        duration: 500,
        useNativeDriver: true
      }).start();
      if (persist) return;
      setTimeout(() => this.closeMessage(), 3500);
    }

    componentDidUpdate(prevProps) {
      const { persist } = this.props;
      if (prevProps.persist !== persist) setTimeout(() => this.closeMessage(), 500);
    }

    closeMessage() {
      const { top } = this.state;
      Animated.timing(top, {
        toValue: this.initialTop,
        easing: Easing.out(Easing.quad),
        duration: 500,
        useNativeDriver: true
      }).start();
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

  _MessageAnimation.defaultProps = {
    persist: false
  };

  _MessageAnimation.propTypes = {
    index: PropTypes.number.isRequired,
    persist: PropTypes.bool
  };

  return _MessageAnimation;
};

export default MessageAnimation;
