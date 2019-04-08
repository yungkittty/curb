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
        render: false,
        opacity: new Animated.Value(0)
      };

      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(
        WrappedComponent
      );
    }

    shouldComponentUpdate(nextProps, nextState) {
      const { render, opacity } = this.state;
      return (
        nextProps !== this.props ||
        nextState.render !== render ||
        nextState.opacity !== opacity
      );
    }

    componentDidUpdate() {
      const { opacity } = this.state;
      const { isAppModalShowed } = this.props;

      // eslint-disable-next-line
      if (isAppModalShowed) this.setState({ render: isAppModalShowed });
      Animated.timing(opacity, {
        toValue: isAppModalShowed ? 1 : 0,
        duration: 500,
        ease: Easing.out(Easing.ease)
      }).start(() => this.setState({ render: isAppModalShowed }));
    }

    render() {
      const { AnimatedWrappedComponent } = this;
      const { render, opacity } = this.state;
      return (
        <AnimatedWrappedComponent
          {...this.props}
          render={render}
          style={{
            ...this.commonStyle,
            opacity
          }}
        />
      );
    }
  }

  _OverlayBlur.propTypes = { isAppModalShowed: PropTypes.bool.isRequired };

  return _OverlayBlur;
};

export default OverlayBlur;
