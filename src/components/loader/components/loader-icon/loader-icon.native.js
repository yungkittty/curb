import React, { Component } from "react";
import { Animated, View } from "react-native";
import IconContainer from "./components/icon-container";

class LoaderIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotateZ: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ rotateZ: (this.state.rotateZ + 2) % 360 });
    }, 1);
  }

  render() {
    const { rotateZ } = this.state;
    return (
      <Animated.View
        style={{
          transform: [{ rotateZ: rotateZ + "deg" }],
          width: 30,
          height: 31,
          zIndex: 10
        }}
      >
        <IconContainer {...this.props} />
      </Animated.View>
    );
  }
}

export default LoaderIcon;
