import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import UserContainer from "./components/user-container";
import Image from "../image";
import Icon from "../icon";
import { platformBools } from "../../configurations/platform";

const ImageUser = ({
  // eslint-disable-line
  isUserFetching,
  userAvatarUrl,
  theme,
  size,
  placeholderColor,
  ...others
}) => {
  const X = (() => {
    const Xs = platformBools.isReact
      ? // eslint-disable-line
        [undefined, 60, 100, 300]
      : [undefined, 50, 70, 200];
    switch (size) {
      case "extra-small":
        return Xs[0];
      case "small":
        return Xs[1];
      case "medium":
        return Xs[2];
      case "large":
        return Xs[3];
      default:
        return undefined;
    }
  })();
  return (
    <UserContainer
      {...others}
      isUserFetching={isUserFetching}
      userAvatarUrl={userAvatarUrl}
      placeholderColor={placeholderColor}
      size={X}
    >
      {/* eslint-disable-next-line */}
      {!isUserFetching ? (
        userAvatarUrl ? (
          <Image
            src={_.replace(userAvatarUrl, "medium", size)}
            style={{
              // eslint-disable-line
              // user-pointer, user-select: none
              width: X,
              height: X
            }}
          />
        ) : (
          <Icon icon="user" size={size} color={theme.primaryColor} />
        )
      ) : null}
    </UserContainer>
  );
};

ImageUser.propTypes = {
  isUserFetching: PropTypes.bool.isRequired,
  userAvatarUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  placeholderColor: PropTypes.string.isRequired
};

export default withTheme(ImageUser);
