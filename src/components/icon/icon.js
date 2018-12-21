import React from "react";
import PropTypes from "prop-types";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, color, size }) => {
  var s = null;
  switch (size) {
    case "small":
      s = 22;
      break;
    case "medium":
      s = 32;
      break;
    case "big":
      s = 48;
      break;
    case "huge":
      s = 78;
      break;
    default:
      s = null;
  }
  return findIconDefinition({ iconName: icon }) ? (
    <FontAwesomeIcon
      style={{ width: `${s}px`, height: `${s}px` }}
      color={color}
      icon={icon}
    />
  ) : null;
};

Icon.defaultProps = {
  icon: undefined,
  size: "medium"
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "big", "huge"])
};

export default Icon;
