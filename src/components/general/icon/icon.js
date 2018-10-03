import React from "react";
import PropTypes from "prop-types";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, color, size }) =>
  findIconDefinition({ iconName: icon }) ? (
    <FontAwesomeIcon
      style={{
        width: size + "px",
        height: size + "px",
        marginTop: "50%",
        marginLeft: "50%",
        transform: "translate(-50%, -50%)"
      }}
      color={color}
      icon={icon}
    />
  ) : null;

Icon.defaultProps = {
  icon: undefined
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Icon;
