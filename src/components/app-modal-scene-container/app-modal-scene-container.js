import React from "react";
import PropTypes from "prop-types";
import ContainerScroll from "../container-scroll";

const AppModalSceneContainer = ({ verticalAlign, ...props }) => (
  <ContainerScroll
    {...props}
    contentContainerStyle={{
      position: "relative",
      alignItems: "center",
      justifyContent: verticalAlign ? "center" : undefined
    }}
  />
);

AppModalSceneContainer.defaultProps = {
  verticalAlign: undefined
};

AppModalSceneContainer.propTypes = {
  verticalAlign: PropTypes.bool
};

export default AppModalSceneContainer;
