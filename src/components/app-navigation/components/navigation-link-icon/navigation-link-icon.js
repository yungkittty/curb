import React from "react";
import PropTypes from "prop-types";
import NavigationLink from "../navigation-link";
import Icon from "../../../icon";

const NavigationLinkIcon = ({ className, style, to, icon, size, color }) => (
  <NavigationLink className={className} style={style} to={to}>
    <Icon icon={icon} size={size} color={color} />
  </NavigationLink>
);

NavigationLinkIcon.defaultProps = { className: undefined, style: undefined };

NavigationLinkIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  color: PropTypes.string.isRequired
};

export default NavigationLinkIcon;
