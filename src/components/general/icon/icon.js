import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconType from "./type";

const Icon = ({ icon, color, size }) => (
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
);

Icon.propTypes = {
  icon: PropTypes.oneOf(IconType).isRequired
};

export default Icon;
