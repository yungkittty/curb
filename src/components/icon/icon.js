import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently

library.add(fab, fas);

const Icon = ({ name, size, color, style, ...others }) => {
  const X = (() => {
    switch (size) {
      case "small":
        return 20;
      case "medium":
        return 40;
      default:
        return undefined;
    }
  })();
  return (
    <FontAwesomeIcon
<<<<<<< HEAD
      {...others}
      icon={name}
=======
      style={{ width: `${s}px`, height: `${s}px` }}
>>>>>>> c6916fa5c8ecb1c8cf35fe4fc568e1793fe12c66
      color={color}
      style={{ ...style, width: `${X}px`, height: `${X}px` }}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  color: PropTypes.string.isRequired
};

export default Icon;
