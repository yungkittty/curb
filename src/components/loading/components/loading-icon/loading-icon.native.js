import React, { Component } from "react";
import { Animated, View } from "react-native";
import IconContainer from "./components/icon-container";

class LoadingIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotate: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { rotate } = this.state;
      this.setState({ rotate: rotate === 360 ? 0 : rotate + 2 });
    }, 1);
  }

  render() {
    const { rotate } = this.state;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 10
        }}
      >
        <Animated.View
          style={{
            transform: [{ rotateZ: rotate + "deg" }],
            width: 30,
            height: 31
          }}
        >
          <IconContainer {...this.props} />
        </Animated.View>
      </View>
    );
  }
}

export default LoadingIcon;
