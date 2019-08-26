import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently

library.add(fas);

const Icon = ({
  // eslint-disable-line
  style,
  size,
  ...others
}) => {
  const innerSize = (() => {
    switch (size) {
      case "extra-extra-extra-small":
        return 10;
      case "extra-extra-small":
        return 17;
      case "extra-small":
        return 20;
      case "small":
        return 35;
      case "medium":
        return 50;
      case "large":
        return 65;
      case "extra-large":
        return 130;
      case "extra-extra-large":
        return 200;
      default:
        return undefined;
    }
  })();
  return (
    <FontAwesomeIcon
      // eslint-disable-line
      {...others}
      style={{
        ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
        width: `${innerSize}px`,
        height: `${innerSize}px`
      }}
    />
  );
};

Icon.defaultProps = { style: undefined };

Icon.propTypes = {
  style: PropTypes.oneOfType([
    // eslint-disable-line
    PropTypes.object,
    PropTypes.array
  ]),
  size: PropTypes.oneOf([
    // eslint-disable-line
    "extra-extra-extra-small",
    "extra-extra-small",
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-extra-large"
  ]).isRequired
};

export default Icon;
