import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import UserContainer from "./components/user-container";
import ImageUser from "../image-user";

const ButtonImageUser = ({
  // eslint-disable-line
  className,
  style,
  contentImageStyle,
  userId,
  history,
  onClick,
  size,
  ...others
}) => (
  <UserContainer
    // eslint-disable-line
    className={className}
    style={style}
    size={size}
    onClick={() => {
      // eslint-disable-next-line
      onClick && onClick();
      history.push(`/users/${userId}`);
    }}
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
  contentImageStyle: undefined,
  onClick: undefined
};

ButtonImageUser.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentImageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  userId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large"
  ]).isRequired
};

export default withRouter(ButtonImageUser);
