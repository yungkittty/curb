import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import Image from "../../../image";

class LoaderImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const { opacity } = this.state;
    Animated.loop(
      Animated.timing(opacity, {
        toValue: 2,
        easing: Easing.ease,
        duration: 1300
      })
    ).start();
  }

  render() {
    const { opacity } = this.state;

    return (
      <Animated.View
        style={{
          opacity: opacity.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [1, 0, 1]
          })
        }}
      >
        <Image style={{ width: 80, height: 80 }} {...this.props} />
      </Animated.View>
    );
  }
}

export default LoaderImage;
