import React from "react";
import { Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import { windowDimensions } from "../../../../../../configurations/window";

const ContainerAnimation = WrappedComponent => {
  class _ContainerAnimation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        animationRunning: false,
        top: new Animated.Value(windowDimensions.getHeight())
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
      if (prevProps.isAppModalShowed !== isAppModalShowed) {
        this.startAnimation(isAppModalShowed);
      }
    }

    startAnimation(state) {
      const { animationRunning, top } = this.state;
      if (animationRunning) return;
      this.setState({ animationRunning: true });
      Animated.timing(top, {
        toValue: state ? 0 : windowDimensions.getHeight(),
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true
      }).start(() => {
        this.setState({ animationRunning: false });
      });
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      const { opacity, top } = this.state;
      return (
        <AnimatedWrappedComponent
          {...this.props}
          style={{
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
