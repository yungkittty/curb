import React from "react";
// import { withTheme } from "styled-components";
import { Animated /* , Easing */ } from "react-native";
import PropTypes from "prop-types";

const OverlayBlur = WrappedComponent => {
  class _OverlayBlur extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        animationRunning: false
        // backgroundColor: new Animated.Value(0)
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

    startAnimation(/* state */) {
      const { appModalTransitionEnd } = this.props;
      const { animationRunning /* , backgroundColor */ } = this.state;
      if (animationRunning) return;
      this.setState({ animationRunning: true });
      /* Animated.timing(backgroundColor, {
        toValue: state ? 1 : 0,
        duration: 500,
        ease: Easing.out(Easing.exp)
      }).start(() => { */

      // simulate animation with setTimeout.
      setTimeout(() => {
        this.setState({ animationRunning: false });
        appModalTransitionEnd();
      }, 500);

      /* }); */
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      // const { theme } = this.props;
      // const { backgroundColor } = this.state;
      return (
        <AnimatedWrappedComponent
          {...this.props}
          /* style={{
            backgroundColor: backgroundColor.interpolate({
              inputRange: [0, 1],
              outputRange: ["rgba(0, 0, 0, 0)", theme.overlayColor]
            })
          }} */
        />
      );
    }
  }

  _OverlayBlur.propTypes = {
    isAppModalShowed: PropTypes.bool.isRequired,
    appModalTransitionEnd: PropTypes.func.isRequired
    // theme: PropTypes.object.isRequired // eslint-disable-line
  };

  return /* withTheme( */ _OverlayBlur /* ) */;
};

export default OverlayBlur;
