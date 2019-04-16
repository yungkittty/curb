import React from "react";
import PropTypes from "prop-types";
import UserContainer from "./components/user-container";
import ImageUser from "../image-user";

const ButtonImageUser = ({
  // eslint-disable-line
  className,
  style,
  contentImageStyle,
  userId,
  size,
  ...others
}) => (
  <UserContainer
    // eslint-disable-line
    className={className}
    style={style}
    size={size}
    onClick={`/users/${userId}`}
  >
    <ImageUser
      // eslint-disable-line
      {...others}
      userId={userId}
      style={contentImageStyle}
      size={size}
    />
  </UserContainer>
);

ButtonImageUser.defaultProps = {
  className: undefined,
  style: undefined,
  contentImageStyle: undefined
};

ButtonImageUser.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentImageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  userId: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large"
  ]).isRequired
};

export default ButtonImageUser;
