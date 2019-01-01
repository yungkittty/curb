import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../../../../../../components/icon";

const ItemIcon = ({ theme, icon }) => (
  <IconContainer>
    <Icon icon={icon} color={theme.fontVariantColor} size="big" />
  </IconContainer>
);

ItemIcon.defaultProps = {
  theme: undefined,
  icon: undefined
};

ItemIcon.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  icon: PropTypes.string
};

export default withTheme(ItemIcon);
