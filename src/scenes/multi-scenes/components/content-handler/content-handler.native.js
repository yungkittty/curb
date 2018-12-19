import React, { Component } from "react";
import HandlerContainer from "./components/handler-container";
import WindowContent from "../../../../components/popup/components/popup-window/components/window-content";
import { Dimensions, Animated } from "react-native";

const width = Dimensions.get("window").width;
const AnimatedHandlerContainer = Animated.createAnimatedComponent(
  HandlerContainer
);

class ContentHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: new Animated.Value(0)
    };
  }

  componentWillReceiveProps(newProps) {
    this.fade(newProps.state);
  }

  fade(state) {
    Animated.timing(this.state.slide, {
      toValue: width * state * -1,
      duration: 350,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { scenes } = this.props;
    return (
      <AnimatedHandlerContainer
        style={{ translateX: this.state.slide }}
        length={scenes.length}
        width={width}
      >
        {scenes.map((scene, i) => (
          <WindowContent
            key={i}
            content={scene.content}
            onChange={this.props.onChange}
            data={this.props.data}
          />
        ))}
      </AnimatedHandlerContainer>
    );
  }
}

export default ContentHandler;
