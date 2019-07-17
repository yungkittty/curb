import React from "react";
import PropTypes from "prop-types";
import ContainerScroll from "../container-scroll";

const AppModalSceneContainer = ({
  // eslint-disable-line
  isJustified,
  ...others
}) => (
  <ContainerScroll
    {...others}
    contentContainerStyle={{
      display: "flex",
      position: "relative",
      flexGrow: 1,
      ...(isJustified ? { justifyContent: "center" } : {}),
      alignItems: "center"
    }}
  />
);

AppModalSceneContainer.defaultProps = {
  isJustified: false
};

AppModalSceneContainer.propTypes = {
  isJustified: PropTypes.bool
};

export default AppModalSceneContainer;
