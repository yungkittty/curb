import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";
import Icon from "../icon";

const ButtonIcon = ({
  className,
  style,
  contentIconStyle,
  onClick,
  icon,
  ...others
}) => (
  <ButtonContainer className={className} style={style} onClick={onClick}>
    {icon ? (
      <Icon {...others} style={contentIconStyle} icon={icon} />
    ) : (
      <React.Fragment />
    )}
  </ButtonContainer>
);

ButtonIcon.defaultProps = {
  className: undefined,
  style: undefined,
  contentIconStyle: undefined,
  onClick: undefined,
  icon: undefined
};

ButtonIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  icon: PropTypes.string
};

export default ButtonIcon;
