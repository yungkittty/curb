import React from "react";
import PropTypes from "prop-types";
import SceneContainer from "./components/scene-container";

const SceneScene = ({ scene, ...others }) => (
  <SceneContainer>
    {scene ? React.createElement(scene, others) : null}
  </SceneContainer>
);

SceneScene.defaultProps = { scene: undefined };

SceneScene.propTypes = { scene: PropTypes.func };

export default SceneScene;
