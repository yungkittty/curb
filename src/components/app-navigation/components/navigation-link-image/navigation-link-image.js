import React from "react";
import PropTypes from "prop-types";
import NavigationLink from "../navigation-link";
import Image from "../../../image";

const NavigationLinkImage = ({ className, style, to, src }) => (
  <NavigationLink className={className} style={style} to={to}>
    <Image src={src} />
  </NavigationLink>
);

NavigationLinkImage.defaultProps = { className: undefined, style: undefined };

NavigationLinkImage.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line
  style: PropTypes.object,
  // eslint-disable-next-line
  to: PropTypes.object.isRequired,
  // eslint-disable-next-line
  src: PropTypes.any.isRequired
};

export default NavigationLinkImage;
