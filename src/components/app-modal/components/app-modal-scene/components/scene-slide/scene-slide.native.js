import _ from "lodash";
import React from "react";
import { Animated, Dimensions, Easing } from "react-native";
import PropTypes from "prop-types";

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

    componentDidUpdate(prevProps) {
      const { scene: prevScene } = prevProps;
      const { scene, sceneDirection } = this.props;
      if (scene === prevScene) return;
      const { wrappedComponentAnimated } = this.state;
      const { width: X } = Dimensions.get("window");
      wrappedComponentAnimated.setValue(sceneDirection > 0 ? 0 : -X);
      const { sceneAlt: prevSceneAlt } = this.state;
      const sceneAlt =
        sceneDirection === this.prevSceneDirection
          ? !prevSceneAlt
          : prevSceneAlt;
      this.prevSceneDirection = sceneDirection;
      // eslint-disable-next-line
      this.setState({
        sceneAlt,
        ...((sceneAlt ? -sceneDirection : sceneDirection) > 0
          ? { sceneRightKey: _.uniqueId(), sceneRight: scene }
          : { sceneLeftKey: _.uniqueId(), sceneLeft: scene })
      },
      () => setTimeout(() => {
        Animated.timing(wrappedComponentAnimated, {
          toValue: sceneDirection > 0 ? -X : 0,
          easing: Easing.inOut(Easing.quad),
          duration: 450,
          useNativeDriver: true
        }).start();
      }));
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
            translateX: wrappedComponentAnimated,
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

  _SceneSlide.propTypes = {
    scene: PropTypes.func.isRequired,
    sceneDirection: PropTypes.number.isRequired
  };

  return _SceneSlide;
};

export default SceneSlide;
