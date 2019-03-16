import _ from "lodash";
import React from "react";
<<<<<<< HEAD
import { Animated, Dimensions, Easing } from "react-native";
import PropTypes from "prop-types";
=======
import PropTypes from "prop-types";
import { Animated, Easing } from "react-native";
import { windowDimensions } from "../../../../../../configurations/window";
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16

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
<<<<<<< HEAD
      const { width: X } = Dimensions.get("window");
      wrappedComponentAnimated.setValue(sceneDirection > 0 ? 0 : -X);
=======
      const { width: windowWidth } = windowDimensions;
      wrappedComponentAnimated.setValue(sceneDirection > 0 ? 0 : -windowWidth);
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16
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
<<<<<<< HEAD
          toValue: sceneDirection > 0 ? -X : 0,
=======
          toValue: sceneDirection > 0 ? -windowWidth : 0,
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16
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
