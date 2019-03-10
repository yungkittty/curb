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

AppModalScene.propTypes = {
  // eslint-disable-next-line
  forwardedRef: PropTypes.object.isRequired,
  sceneLeftKey: PropTypes.string.isRequired,
  sceneLeft: PropTypes.func.isRequired,
  sceneRightKey: PropTypes.string.isRequired,
  sceneRight: PropTypes.func.isRequired,
  // eslint-disable-next-line
  sceneData: PropTypes.object.isRequired
};

export default SceneSlide(
  React.forwardRef((props, forwardedRef) => (
    <AppModalScene {...props} forwardedRef={forwardedRef} />
  ))
);
