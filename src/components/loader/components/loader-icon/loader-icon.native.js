import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import Icon from "../../../icon";

class LoaderIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotateZ: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const { rotateZ } = this.state;
    Animated.loop(
      Animated.timing(rotateZ, {
        toValue: 1,
        easing: Easing.linear,
        duration: 2000
      })
    ).start();
  }

  render() {
    const { rotateZ } = this.state;

    return (
      <Animated.View
        style={{
          transform: [
            {
              rotateZ: rotateZ.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"]
              })
            }
          ]
        }}
      >
        <Icon {...this.props} />
      </Animated.View>
    );
  }
}

export default LoaderIcon;
