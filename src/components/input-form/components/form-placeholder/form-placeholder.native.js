import React from "react";
import { Animated, Easing } from "react-native";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import Text from "../../../text";

class FormPlaceholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderScale: new Animated.Value(props.upper ? 0.857142857 : 1),
      placeholderTranslateY: new Animated.Value(props.upper ? -10 : 20),
      placeholderTranslateX: new Animated.Value(props.upper ? -18 : 16)
    };

    this.AnimatedWrappedComponent = Animated.createAnimatedComponent(Text);
  }

  componentDidUpdate(prevProps) {
    const { upper } = this.props;
    if (upper === prevProps.upper) return;
    const {
      placeholderScale,
      placeholderTranslateY,
      placeholderTranslateX
    } = this.state;
    Animated.parallel([
      Animated.timing(placeholderScale, {
        toValue: upper ? 0.857142857 : 1,
        duration: 150,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      }),
      Animated.timing(placeholderTranslateY, {
        toValue: upper ? -10 : 20,
        duration: 150,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      }),
      Animated.timing(placeholderTranslateX, {
        toValue: upper ? -18 : 16,
        duration: 150,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      })
    ]).start();
  }

  render() {
    const { AnimatedWrappedComponent } = this;
    const {
      placeholderScale,
      placeholderTranslateY,
      placeholderTranslateX
    } = this.state;
    const { theme } = this.props;
    return (
      <AnimatedWrappedComponent
        {...this.props}
        style={{
          position: "absolute",
          width: "100%",
          color: theme.secondaryColor,
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

FormPlaceholder.propTypes = {
  upper: PropTypes.bool.isRequired
};

export default withTheme(FormPlaceholder);
