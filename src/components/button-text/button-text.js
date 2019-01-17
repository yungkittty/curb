import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";
import Text from "../text";

const ButtonText = ({ className, style, onClick, text, ...others }) => (
  <ButtonContainer className={className} style={style} onClick={onClick}>
    {text ? <Text {...others}>{text}</Text> : <React.Fragment />}
  </ButtonContainer>
);

ButtonText.defaultProps = {
  className: undefined,
  style: undefined,
  onClick: undefined
};

ButtonText.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  text: PropTypes.string.isRequired
};

export default ButtonText;
