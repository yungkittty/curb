import React from "react";
import PropTypes from "prop-types";
import NavigationLink from "../navigation-link";
import LinkImageImage from "./components/link-image-image";

const NavigationLinkImage = ({ className, style, to, src }) => (
  <NavigationLink className={className} style={style} to={to}>
    {src && <LinkImageImage src={src} />}
  </NavigationLink>
);

NavigationLinkImage.defaultProps = {
  className: undefined,
  style: undefined,
  src: undefined
};

NavigationLinkImage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  // eslint-disable-next-line
  src: PropTypes.any
};

export default NavigationLinkImage;
