import React from "react";
import PropTypes from "prop-types";
import OverlayContainer from "./components/overlay-container";
import OverlayDarken from "./components/overlay-darken";

const ContainerOverlay = ({ style, ...others }) => (
  <OverlayContainer {...others}>
    <OverlayDarken style={style} />
  </OverlayContainer>
);

ContainerOverlay.propTypes = {
  style: PropTypes.object.isRequired // eslint-disable-line
};

export default ContainerOverlay;
