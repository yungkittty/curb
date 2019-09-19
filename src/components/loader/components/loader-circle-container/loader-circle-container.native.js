import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";
import CircleContainer from "../../../circle-container";

class LoaderCircleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const { rotation } = this.state;

    Animated.loop(
      Animated.timing(rotation, {
        toValue: 360,
        easing: Easing.linear,
        duration: 5000,
        useNativeDriver: true
      })
    ).start();
  }

  render() {
    const { children, ...others } = this.props;
    const { rotation } = this.state;

    return (
      <Animated.View
        style={{
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
        <CircleContainer {...others}>{innerDiameter => children(innerDiameter)}</CircleContainer>
      </Animated.View>
    );
  }
}

LoaderCircleContainer.propTypes = {
  children: PropTypes.func.isRequired
};

export default LoaderCircleContainer;
