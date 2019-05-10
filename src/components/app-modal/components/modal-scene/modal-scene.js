import React from "react";
import PropTypes from "prop-types";
import SceneContainer from "./components/scene-container";
import SceneScene from "./components/scene-scene";
import SceneSlide from "./components/scene-slide";

const ModalScene = ({
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

ModalScene.defaultProps = {
  forwardedRef: undefined,
  sceneLeftKey: undefined,
  sceneLeft: undefined,
  sceneRightKey: undefined,
  sceneRight: undefined,
  sceneData: undefined
};

ModalScene.propTypes = {
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
  React.forwardRef((props, forwardedRef) => <ModalScene {...props} forwardedRef={forwardedRef} />)
);
