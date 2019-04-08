import React from "react";
import { Animated, Easing, Platform } from "react-native";
import { isIphoneX } from "react-native-device-detection";
import PropTypes from "prop-types";
import {
  windowBreakpoints,
  windowDimensions
} from "../../../../../../configurations/window";

const ContainerAnimation = WrappedComponent => {
  class _ContainerAnimation extends React.Component {
    constructor(props) {
      super(props);

      this.commonStyle = {
        position: "absolute",
        flexDirection: "column",
        width: windowDimensions.width > windowBreakpoints.large ? 700 : "100%",
        height: windowDimensions.width > windowBreakpoints.large ? 740 : "100%",
        borderRadius:
          windowDimensions.width > windowBreakpoints.large ? 25 : undefined,
        // eslint-disable-next-line no-nested-ternary
        paddingTop: Platform.OS === "ios" ? (isIphoneX ? 30 : 20) : undefined
      };

      this.state = {
        render: false,
        animationRunning: false,
        opacity: new Animated.Value(0),
        top: new Animated.Value(40)
      };

      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(
        WrappedComponent
      );
    }

    shouldComponentUpdate(nextProps, nextState) {
      const { isAppModalShowed, children } = this.props;
      const { render, opacity, top } = this.state;
      return (
        nextProps.isAppModalShowed !== isAppModalShowed ||
        nextProps.children !== children ||
        nextState.render !== render ||
        nextState.opacity !== opacity ||
        nextState.top !== top
      );
    }

    componentDidUpdate() {
      const { animationRunning, opacity, top } = this.state;
      const { isAppModalShowed } = this.props;

      // eslint-disable-next-line
      if (isAppModalShowed) this.setState({ render: true });

      if (animationRunning) return;
      // eslint-disable-next-line
      this.setState({ animationRunning: true });
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: isAppModalShowed ? 1 : 0,
          duration: 350,
          ease: Easing.out(Easing.ease)
        }),
        Animated.timing(top, {
          toValue: isAppModalShowed ? 0 : 40,
          duration: 350,
          ease: Easing.out(Easing.ease)
        })
      ]).start(() =>
        this.setState({
          animationRunning: false,
          render: isAppModalShowed
        })
      );
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      const { render, opacity, top } = this.state;

      return (
        <AnimatedWrappedComponent
          {...this.props}
          render={render}
          style={{
            ...this.commonStyle,
            opacity,
            transform: [{ translateY: top }]
          }}
        />
      );
    }
  }

  _ContainerAnimation.propTypes = {
    isAppModalShowed: PropTypes.bool.isRequired,
    // eslint-disable-next-line
    children: PropTypes.arrayOf(PropTypes.node).isRequired
  };

  return _ContainerAnimation;
};

export default ContainerAnimation;
