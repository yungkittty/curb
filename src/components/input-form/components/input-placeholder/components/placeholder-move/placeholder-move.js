import React from "react";
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";

const PlaceholderMove = WrappedComponent => {
  class _PlaceholderMove extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        placeholderScale: new Animated.Value(props.upper ? 0.875 : 1),
        placeholderTranslateY: new Animated.Value(props.upper ? -10 : 20),
        placeholderTranslateX: new Animated.Value(props.upper ? -30 : 16)
      };

      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(
        WrappedComponent
      );
    }

    componentDidUpdate(prevProps) {
      const { upper } = this.props;
      if (upper === prevProps.upper) return;
      const {
        placeholderScale,
        placeholderTranslateY,
        placeholderTranslateX
      } = this.state;
      Animated.timing(placeholderScale, {
        toValue: upper ? 0.875 : 1,
        easing: Easing.inOut(Easing.quad),
        duration: 200,
        useNativeDriver: true
      }).start();
      Animated.timing(placeholderTranslateY, {
        toValue: upper ? -10 : 20,
        easing: Easing.inOut(Easing.quad),
        duration: 200,
        useNativeDriver: true
      }).start();
      Animated.timing(placeholderTranslateX, {
        toValue: upper ? -30 : 16,
        easing: Easing.inOut(Easing.quad),
        duration: 200,
        useNativeDriver: true
      }).start();
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      const {
        placeholderScale,
        placeholderTranslateY,
        placeholderTranslateX
      } = this.state;
      return (
        <AnimatedWrappedComponent
          {...this.props}
          style={{
            transform: [
              { scale: placeholderScale },
              { translateY: placeholderTranslateY },
              { translateX: placeholderTranslateX }
            ]
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
