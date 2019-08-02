import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";

class CircleRoundContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: new Animated.Value(0)
    };

    this.startAnimation = this.startAnimation.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { mounted } = this.props;
    if (!prevProps.mounted && mounted) this.startAnimation();
  }

  startAnimation() {
    const { index } = this.props;
    const { rotation } = this.state;

    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        delay: (8 - index) * 36,
        easing: Easing.bezier(0.5, 0, 0.5, 1),
        duration: 1200,
        useNativeDriver: true
      })
    ).start();
  }

  render() {
    const { children } = this.props;
    const { rotation } = this.state;
    return (
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              rotate: rotation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"]
              })
            }
          ]
        }}
      >
        {children}
      </Animated.View>
    );
  }
}

CircleRoundContainer.propTypes = {
  index: PropTypes.number.isRequired,
  // eslint-disable-next-line
  children: PropTypes.object.isRequired
};

export default CircleRoundContainer;
