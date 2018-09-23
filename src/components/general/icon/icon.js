import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconType from "./type";

const Icon = ({ icon }) =>
  icon ? (
    <FontAwesomeIcon
      style={{
        width: "100%",
        height: "100%",
        marginTop: "50%",
        marginLeft: "50%",
        transform: "translate(-50%, -50%)"
      }}
      icon={icon}
    />
  ) : null;

Icon.defaultProps = {
  icon: undefined
};

Icon.propTypes = {
  icon: PropTypes.oneOf(IconType)
};

export default Icon;
