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
  forwardedRef: PropTypes.object, // eslint-disable-line
  sceneLeftKey: PropTypes.string,
  sceneLeft: PropTypes.func,
  sceneRightKey: PropTypes.string,
  sceneRight: PropTypes.func,
  sceneData: PropTypes.object // eslint-disable-line
};

export default SceneSlide(
  React.forwardRef(
    // eslint-disable-line
    (props, forwardedRef) => (
      <ModalScene
        // eslint-disable-line
        {...props}
        forwardedRef={forwardedRef}
      />
    )
  )
);
