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
        // eslint-disable-next-line
        paddingTop: Platform.OS === "ios" ? (isIphoneX ? 30 : 20) : undefined
      };

      this.state = {
        animationRunning: false,
        top: new Animated.Value(windowDimensions.renderHeight)
        };

      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(
        WrappedComponent
      );

      this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidMount() {
      const { isAppModalShowed } = this.props;
      this.startAnimation(isAppModalShowed);
    }

    shouldComponentUpdate(nextProps, nextState) {
      const { children } = this.props;
      const { top } = this.state;
      return children !== nextProps.children || top !== nextState.top;
    }

    componentDidUpdate() {
      const { isAppModalShowed } = this.props;
      this.startAnimation(isAppModalShowed);
    }

    startAnimation(state) {
      const { animationRunning, top } = this.state;
      if (animationRunning) return;
      this.setState({ animationRunning: true });
      Animated.timing(top, {
        toValue: state ? 0 : windowDimensions.renderHeight,
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true
      }).start(() =>
        this.setState({
          animationRunning: false
        })
      );
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      const { opacity, top } = this.state;
      return (
        <AnimatedWrappedComponent
          {...this.props}
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
    children: PropTypes.arrayOf(PropTypes.node).isRequired
  };

  return _ContainerAnimation;
};

export default ContainerAnimation;
