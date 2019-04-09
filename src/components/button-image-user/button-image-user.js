import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";
import ImageUser from "../image-user";

const ButtonImageUser = ({
  // eslint-disable-line
  className,
  style,
  contentImageStyle,
  onClick,
  userId,
  ...others
}) => (
  <ButtonContainer className={className} style={style} onClick={onClick}>
    <ImageUser {...others} style={contentImageStyle} userId={userId} />
  </ButtonContainer>
);

ButtonImageUser.defaultProps = {
  className: undefined,
  style: undefined,
  contentImageStyle: undefined,
  onClick: undefined,
  userId: undefined
};

ButtonImageUser.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentImageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  userId: PropTypes.string
};

export default ButtonImageUser;
