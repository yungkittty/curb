import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../icon";

const MessageIcon = ({ theme, icon }) => (
  <IconContainer>
    <Icon icon={icon} color={theme.backgroundColor} size="small" />
  </IconContainer>
);

MessageIcon.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired
};

export default withTheme(MessageIcon);
