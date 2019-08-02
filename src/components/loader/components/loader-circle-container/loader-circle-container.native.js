import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";
import CircleContainer from "../../../circle-container";

class LoaderCircleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      rotation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const { rotation } = this.state;

    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        easing: Easing.linear,
        duration: 5000,
        useNativeDriver: true
      })
    ).start();
    this.setState({ mounted: true });
  }

  render() {
    const { diameter, children } = this.props;
    const { rotation, mounted } = this.state;

    return (
      <Animated.View
        style={{
          transform: [
            {
              rotate: rotation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"]
              })
            }
          ]
        }}
      >
        <CircleContainer diameter={diameter}>
          {innerDiameter => children(innerDiameter, mounted)}
        </CircleContainer>
      </Animated.View>
    );
  }
}

LoaderCircleContainer.propTypes = {
  diameter: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-extra-large"
  ]).isRequired,
  children: PropTypes.func.isRequired
};

export default LoaderCircleContainer;
