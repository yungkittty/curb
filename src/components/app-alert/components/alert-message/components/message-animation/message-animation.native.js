import React from "react";
import { Animated, Easing } from "react-native";

const MessageAnimation = WrappedComponent => {
  class _MessageAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { elevation: new Animated.Value(4), top: new Animated.Value(-50) };
      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(WrappedComponent);
    }

    componentDidMount() {
      const { top } = this.state;
      Animated.timing(top, {
        toValue: 0,
        easing: Easing.out(Easing.quad),
        duration: 400,
        useNativeDriver: true
      }).start();
      setTimeout(
        () =>
          Animated.timing(top, {
            toValue: -50,
            easing: Easing.out(Easing.quad),
            duration: 400,
            useNativeDriver: true
          }).start(),
        3500
      );
    }

    componentDidUpdate() {
      const { elevation } = this.state;
      const { index } = this.props;
      if (index !== 0)
        Animated.timing(elevation, {
          toValue: 0,
          easing: Easing.out(Easing.quad),
          duration: 10,
          useNativeDriver: true
        }).start();
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      const { elevation, top } = this.state;
      return (
        <AnimatedWrappedComponent
          {...this.props}
          style={{ elevation, transform: [{ translateY: top }] }}
          ref={this.wrappedComponent}
        />
      );
    }
  }

  return _MessageAnimation;
};

export default MessageAnimation;
