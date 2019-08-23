import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";
import Circle from "../../../circle";

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
        toValue: 360,
        easing: Easing.linear,
        duration: 5000,
        useNativeDriver: true
      })
    ).start();
    this.setState({ mounted: true });
  }

  render() {
    const { children, ...others } = this.props;
    const { rotation, mounted } = this.state;

    return (
      <Circle
        as={Animated.View}
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
        {...others}
      >
        {innerDiameter => children(innerDiameter, mounted)}
      </Circle>
    );
  }
}

LoaderCircleContainer.propTypes = {
  children: PropTypes.func.isRequired
};

export default LoaderCircleContainer;
