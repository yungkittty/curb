import React from "react";
import PropTypes from "prop-types";
import SceneContainer from "./components/scene-container";
import SceneScene from "./components/scene-scene";
import SceneSlide from "./components/scene-slide";

const AppModalScene = ({
  forwardedRef,
  sceneLeftKey,
  sceneLeft,
  sceneRightKey,
  sceneRight,
  sceneData,
  ...others
}) => (
  <SceneContainer {...others} ref={forwardedRef}>
    <SceneScene {...sceneData} key={sceneLeftKey} scene={sceneLeft} />
    <SceneScene {...sceneData} key={sceneRightKey} scene={sceneRight} />
  </SceneContainer>
);

AppModalScene.defaultProps = {
  forwardedRef: undefined,
  sceneLeftKey: undefined,
  sceneLeft: undefined,
  sceneRightKey: undefined,
  sceneRight: undefined,
  sceneData: undefined
};

AppModalScene.propTypes = {
  // eslint-disable-next-line
  forwardedRef: PropTypes.object,
  sceneLeftKey: PropTypes.string,
  sceneLeft: PropTypes.func,
  sceneRightKey: PropTypes.string,
  sceneRight: PropTypes.func,
  // eslint-disable-next-line
  sceneData: PropTypes.object
};

export default SceneSlide(
  React.forwardRef((props, forwardedRef) => (
    <AppModalScene {...props} forwardedRef={forwardedRef} />
  ))
);
