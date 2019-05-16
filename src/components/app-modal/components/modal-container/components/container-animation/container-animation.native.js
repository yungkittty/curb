import React from "react";
import { Animated, Easing, Platform } from "react-native";
import { isIphoneX } from "react-native-device-detection";
import PropTypes from "prop-types";
import { windowDimensions } from "../../../../../../configurations/window";

const ContainerAnimation = WrappedComponent => {
  class _ContainerAnimation extends React.Component {
    constructor(props) {
      super(props);

      this.commonStyle = {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        elevation: Platform.OS === "android" ? 4 : undefined,
        boxShadow: Platform.OS === "ios" ? "0px 10px 35px 0px rgba(0, 0, 0, 0.2)" : undefined,
        // eslint-disable-next-line
        paddingTop: Platform.OS === "ios" ? (isIphoneX ? 30 : 20) : undefined
      };

      this.state = {
        animationRunning: false,
        top: new Animated.Value(windowDimensions.renderHeight)
      };

      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(WrappedComponent);

      this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidMount() {
      const { isAppModalShowed } = this.props;
      this.startAnimation(isAppModalShowed);
    }

    componentDidUpdate(prevProps) {
      const { isAppModalShowed } = this.props;
      if (prevProps.isAppModalShowed !== isAppModalShowed) this.startAnimation(isAppModalShowed);
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
    isAppModalShowed: PropTypes.bool.isRequired
  };

  return _ContainerAnimation;
};

export default ContainerAnimation;
