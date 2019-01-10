import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";
import Icon from "../icon";

const ButtonIcon = ({ className, style, onClick, icon, size, color }) => (
  <ButtonContainer className={className} style={style} onClick={onClick}>
    <Icon icon={icon} size={size} color={color} />
  </ButtonContainer>
);

ButtonIcon.defaultProps = {
  className: undefined,
  style: undefined,
  onClick: undefined
};

ButtonIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  color: PropTypes.string.isRequired
};

export default ButtonIcon;
