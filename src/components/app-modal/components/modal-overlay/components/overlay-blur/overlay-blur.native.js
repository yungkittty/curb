import React from "react";
import { Animated, Easing } from "react-native";
import PropTypes from "prop-types";

const OverlayBlur = WrappedComponent => {
  class _OverlayBlur extends React.Component {
    constructor(props) {
      super(props);

      this.commonStyle = {
        width: "100%",
        height: "100%"
      };

      this.state = {
        animationRunning: false,
        backgroundColor: new Animated.Value(0)
      };

      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(WrappedComponent);

      this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidMount() {
      const { isAppModalShowed } = this.props;
      this.startAnimation(isAppModalShowed);
    }

    shouldComponentUpdate(nextProps, nextState) {
      const { isAppModalShowed, children } = this.props;
      const { backgroundColor } = this.state;
      return (
        isAppModalShowed !== nextProps.isAppModalShowed ||
        children !== nextProps.children ||
        backgroundColor !== nextState.backgroundColor
      );
    }

    componentDidUpdate() {
      const { isAppModalShowed } = this.props;
      this.startAnimation(isAppModalShowed);
    }

    startAnimation(state) {
      const { appModalUnmount } = this.props;
      const { animationRunning, backgroundColor } = this.state;
      if (animationRunning) return;
      this.setState({ animationRunning: true });
      Animated.timing(backgroundColor, {
        toValue: state ? 1 : 0,
        duration: 500,
        ease: Easing.out(Easing.exp)
      }).start(() => {
        this.setState({ animationRunning: false });
        if (!state) appModalUnmount();
      });
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      const { theme } = this.props;
      const { backgroundColor } = this.state;
      return (
        <AnimatedWrappedComponent
          {...this.props}
          style={{
            ...this.commonStyle,
            backgroundColor: backgroundColor.interpolate({
              inputRange: [0, 1],
              outputRange: ["rgba(0, 0, 0, 0)", theme.overlayColor]
            })
          }}
        />
      );
    }
  }

  _OverlayBlur.propTypes = {
    isAppModalShowed: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    appModalUnmount: PropTypes.func.isRequired,
    // eslint-disable-next-line
    theme: PropTypes.object.isRequired
  };

  return _OverlayBlur;
};

export default OverlayBlur;
