import React from "react";
import PropTypes from "prop-types";
import NavigationLink from "../navigation-link";
import Icon from "../../../icon";

const NavigationLinkIcon = ({ className, style, to, name, size, color }) => (
  <NavigationLink className={className} style={style} to={to}>
    <Icon name={name} size={size} color={color} />
  </NavigationLink>
);

NavigationLinkIcon.defaultProps = { className: undefined, style: undefined };

NavigationLinkIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  color: PropTypes.string.isRequired
};

export default NavigationLinkIcon;
