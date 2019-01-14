import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently

library.add(fab, fas);

const Icon = ({ size, style, ...others }) => {
  const X = (() => {
    switch (size) {
      case "small":
        return 20;
      case "medium":
        return 40;
      case "large":
        return 80;
      default:
        return undefined;
    }
  })();
  return (
    <FontAwesomeIcon
      {...others}
      style={{ ...style, width: `${X}px`, height: `${X}px` }}
    />
  );
};

Icon.defaultProps = { style: undefined };

Icon.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Icon;
