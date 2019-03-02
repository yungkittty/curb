import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import LinkContainer from "./components/link-container";
import Icon from "../../../../../icon";

const HeaderLink = ({ theme, icon, to }) => (
  <LinkContainer to={to}>
    <Icon icon={icon} color={theme.fontColor} size="small" />
  </LinkContainer>
);

HeaderLink.defaultProps = {
  theme: undefined,
  icon: undefined,
  to: undefined
};

HeaderLink.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  icon: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default withTheme(HeaderLink);
