import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonContainer from "./components/button-container";
import Icon from "../../../../../../../icon";

const HeaderButton = ({ theme, icon, onClick }) => (
  <ButtonContainer onClick={onClick}>
    {icon ? (
      <Icon icon={icon} color={theme.fontColor} size="small" />
    ) : (
      <React.Fragment />
    )}
  </ButtonContainer>
);

HeaderButton.defaultProps = {
  theme: undefined,
  icon: undefined,
  onClick: undefined
};

HeaderButton.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default withTheme(HeaderButton);
