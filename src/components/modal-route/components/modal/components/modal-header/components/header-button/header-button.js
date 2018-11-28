import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import Icon from "../../../../../../../icon";

const color = "#333";

const HeaderButton = ({ position, icon, onClick }) => (
  <ButtonContainer position={position} onClick={onClick}>
    <Icon icon={icon} color={color} size="small" />
  </ButtonContainer>
);

HeaderButton.defaultProps = {
  icon: undefined,
  onClick: undefined
};

HeaderButton.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default HeaderButton;
