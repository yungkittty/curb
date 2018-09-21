import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import Icon from "../../../../../../../general/icon";
import IconType from "../../../../../../../general/icon/type";

const HeaderButton = ({ position, icon, onClick }) => (
  <ButtonContainer position={position} onClick={onClick}>
    <Icon icon={icon} />
  </ButtonContainer>
);

HeaderButton.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  icon: PropTypes.oneOf(IconType).isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeaderButton;
