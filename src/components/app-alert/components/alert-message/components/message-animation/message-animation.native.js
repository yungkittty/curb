import React from "react";
import { Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import { windowDimensions } from "../../../../../../configurations/window";

const MessageAnimation = WrappedComponent => {
  class _MessageAnimation extends React.Component {
    constructor(props) {
      super(props);
      // eslint-disable-next-line
      this.initialTop = -(windowDimensions.getStatusBarHeight() + 50);
      this.state = { top: new Animated.Value(this.initialTop) };
      this.closeMessage = this.closeMessage.bind(this);
    }

    componentDidMount() {
      const { top } = this.state;
      Animated.timing(top, {
        toValue: 0,
        easing: Easing.out(Easing.quad),
        duration: 500,
        useNativeDriver: true
      }).start();
      setTimeout(() => this.closeMessage(), 3500);
    }

    componentDidUpdate(prevProps) {
      const { arrayLength } = this.props;
      if (prevProps.arrayLength !== arrayLength) setTimeout(() => this.closeMessage(), 500);
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
          forwardRef={this.wrappedComponent}
          style={{ transform: [{ translateY: top }] }}
        />
      );
    }
  }

  _MessageAnimation.propTypes = {
    arrayLength: PropTypes.number.isRequired
  };

  return _MessageAnimation;
};

export default MessageAnimation;
