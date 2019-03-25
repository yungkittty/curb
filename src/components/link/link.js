import React from "react";
import PropTypes from "prop-types";
import { Link as ReactRouterDOMLink } from "react-router-dom";
import { withTheme } from "styled-components";
import Text from "../text";

const Link = ({ style, theme, children, ...others }) => (
  <ReactRouterDOMLink {...others} style={{ ...style, textDecoration: "initial" }}>
    <Text style={{ color: theme.linkColor }}>{children}</Text>
  </ReactRouterDOMLink>
);

Link.defaultProps = { style: undefined };

Link.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withTheme(Link);
