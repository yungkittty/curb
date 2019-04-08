import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";
import { windowDimensions } from "../../../../../../configurations/window";

const SceneSlide = WrappedComponent => {
  class _SceneSlide extends React.Component {
    constructor(props) {
      super(props);
      this.prevSceneDirection = undefined;
      this.state = {
        wrappedComponentAnimated: new Animated.Value(0),
        sceneAlt: false,
        sceneLeftKey: _.uniqueId(),
        sceneLeft: props.scene,
        sceneRightKey: undefined,
        sceneRight: undefined
      };
    }

    shouldComponentUpdate(nextProps) {
      return nextProps.scene !== null;
    }

    componentDidUpdate(prevProps) {
      const { scene: prevScene } = prevProps;
      const { scene, sceneDirection } = this.props;
      if (scene === prevScene) return;
      const { wrappedComponentAnimated } = this.state;
      const { width: windowWidth } = windowDimensions;
      wrappedComponentAnimated.setValue(sceneDirection > 0 ? 0 : -windowWidth);
      const { sceneAlt: prevSceneAlt } = this.state;
      const sceneAlt =
        sceneDirection === this.prevSceneDirection
          ? !prevSceneAlt
          : prevSceneAlt;
      this.prevSceneDirection = sceneDirection;
      // eslint-disable-next-line
      this.setState(
        {
          sceneAlt,
          ...((sceneAlt ? -sceneDirection : sceneDirection) > 0
            ? { sceneRightKey: _.uniqueId(), sceneRight: scene }
            : { sceneLeftKey: _.uniqueId(), sceneLeft: scene })
        },
        () =>
          setTimeout(() => {
            Animated.timing(wrappedComponentAnimated, {
              toValue: sceneDirection > 0 ? -windowWidth : 0,
              easing: Easing.inOut(Easing.quad),
              duration: 450,
              useNativeDriver: true
            }).start();
          })
      );
    }

    render() {
      const {
        wrappedComponentAnimated,
        sceneAlt,
        sceneLeftKey,
        sceneLeft,
        sceneRightKey,
        sceneRight
      } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          ref={this.wrappedComponent}
          style={{
            transform: [{ translateX: wrappedComponentAnimated }],
            flexDirection: !sceneAlt ? "row" : "row-reverse"
          }}
          sceneLeftKey={sceneLeftKey}
          sceneLeft={sceneLeft}
          sceneRightKey={sceneRightKey}
          sceneRight={sceneRight}
        />
      );
    }
  }

  _SceneSlide.defaultProps = {
    scene: undefined,
    sceneDirection: undefined
  };

  _SceneSlide.propTypes = {
    scene: PropTypes.func,
    sceneDirection: PropTypes.number
  };

  return _SceneSlide;
};

export default SceneSlide;
