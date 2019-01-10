import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";
import Image from "../image";

const ButtonImage = ({ className, style, onClick, src }) => (
  <ButtonContainer className={className} style={style} onClick={onClick}>
    {src ? <Image src={src} /> : <React.Fragment />}
  </ButtonContainer>
);

ButtonImage.defaultProps = {
  className: undefined,
  style: undefined,
  onClick: undefined,
  src: undefined
};

ButtonImage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  // eslint-disable-next-line
  src: PropTypes.any
};

export default ButtonImage;
