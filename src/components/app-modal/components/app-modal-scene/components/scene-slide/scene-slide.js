import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

const SceneSlide = WrappedComponent => {
  class _SceneSlide extends React.Component {
    constructor(props) {
      super(props);
      this.wrappedComponent = React.createRef();
      this.prevSceneDirection = undefined;
      this.state = {
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
      const { style } = this.wrappedComponent.current;
      style.transition = "";
      style.transform = `translateX(${sceneDirection > 0 ? "0" : "-50"}%)`;
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
        style.transition = "all 0.45s ease-in-out";
        style.transform = `translateX(${sceneDirection > 0 ? "-50" : "0"}%)`;
      }))
    }

    render() {
      const {
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
          style={{ flexDirection: !sceneAlt ? "row" : "row-reverse" }}
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
