import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ButtonsContainer from "./components/buttons-container";
import ButtonsButton from "./components/buttons-button";

const HeaderButtons = ({ buttons, ...others }) => (
  <ButtonsContainer {...others}>
    {_.map(buttons, (button, buttonIndex) => (
      <ButtonsButton {...button} key={buttonIndex} />
    ))}
  </ButtonsContainer>
);

HeaderButtons.defaultProps = {
  buttons: []
};

HeaderButtons.propTypes = {
  buttons: PropTypes.array // eslint-disable-line
};

export default HeaderButtons;
