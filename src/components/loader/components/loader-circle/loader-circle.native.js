import React, { Component } from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { View, Animated, Easing } from "react-native";

class LoaderCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const { animationDelay } = this.props;
    const { rotation } = this.state;

    Animated.loop(
      Animated.sequence([
        Animated.delay(animationDelay),
        Animated.timing(rotation, {
          toValue: 360,
          easing: Easing.ease,
          duration: 1200,
          useNativeDriver: true
        })
      ])
    ).start();
  }

  render() {
    const { theme, innerDiameter } = this.props;
    const { rotation } = this.state;

    return (
      <Animated.View
        style={{
          position: "absolute",
          borderColor: "red",
          borderWidth: 1,
          borderStyle: "solid",
          height: innerDiameter,
          transform: [
            {
              rotate: rotation.interpolate({
                inputRange: [0, 360],
                outputRange: ["0deg", "360deg"]
              })
            }
          ]
        }}
      >
        <View
          style={{
            backgroundColor: theme.secondaryVariantColor,
            borderRadius: innerDiameter / 20,
            width: innerDiameter / 10,
            height: innerDiameter / 10
          }}
        />
      </Animated.View>
    );
  }
}

LoaderCircle.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
  innerDiameter: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired
};

export default withTheme(LoaderCircle);
