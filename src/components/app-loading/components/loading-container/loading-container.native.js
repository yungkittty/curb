import React, { Component } from "react";
import { withTheme } from "styled-components";
import { Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import Container from "../../../container";

class LoadingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { animatedOpacity: new Animated.Value(1) };

    this.AnimatedComponent = Animated.createAnimatedComponent(Container);
  }

  componentDidUpdate() {
    const { animatedOpacity } = this.state;
    const { isAppLoaded, onTransitionEnd } = this.props;
    if (isAppLoaded)
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 350,
        delay: 300,
        easing: Easing.ease,
        useNativeDriver: true
      }).start(onTransitionEnd);
  }

  render() {
    const { AnimatedComponent } = this;
    const { animatedOpacity } = this.state;
    const { theme, children } = this.props;
    return (
      <AnimatedComponent
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: animatedOpacity,
          backgroundColor: theme.backgroundColor
        }}
      >
        {children}
      </AnimatedComponent>
    );
  }
}

LoadingContainer.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  isAppLoaded: PropTypes.bool.isRequired,
  onTransitionEnd: PropTypes.func.isRequired
};

export default withTheme(LoadingContainer);
