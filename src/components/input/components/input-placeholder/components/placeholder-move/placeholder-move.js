import React from "react";
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";

const PlaceholderMove = WrappedComponent => {
  class _PlaceholderMove extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        placeholderFontSize: new Animated.Value(16),
        placeholderTop: new Animated.Value(20),
        placeholderLeft: new Animated.Value(16)
      };

      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(
        WrappedComponent
      );
    }

    componentDidUpdate(prevProps) {
      const { upper } = this.props;
      if (upper === prevProps.upper) return;
      const {
        placeholderTop,
        placeholderLeft,
        placeholderFontSize
      } = this.state;
      Animated.timing(placeholderFontSize, {
        toValue: upper ? 12 : 16,
        easing: Easing.ease,
        duration: 200
      }).start();
      Animated.timing(placeholderTop, {
        toValue: upper ? -10 : 20,
        easing: Easing.ease,
        duration: 200
      }).start();
      Animated.timing(placeholderLeft, {
        toValue: upper ? 6 : 16,
        easing: Easing.ease,
        duration: 200
      }).start();
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      const {
        placeholderFontSize,
        placeholderTop,
        placeholderLeft
      } = this.state;
      return (
        <AnimatedWrappedComponent
          {...this.props}
          style={{
            fontSize: placeholderFontSize,
            top: placeholderTop,
            left: placeholderLeft
          }}
        />
      );
    }
  }

  _PlaceholderMove.propTypes = {
    upper: PropTypes.bool.isRequired
  };

  return _PlaceholderMove;
};

export default PlaceholderMove;
