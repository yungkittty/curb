import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import CircleContainer from "../circle-container";
import Image from "../image";
import Icon from "../icon";
import withUser from "../../hocs/with-user";

const ImageUser = ({
  isFetchingUser,
  userName,
  userAvatar,
  theme: { secondaryVariantColor, primaryColor },
  size,
  placeholderColor,
  ...others
}) => (
  <CircleContainer
    {...others}
    diameter={size}
    backgroundColor={
      (isFetchingUser && !userName) || userAvatar // eslint-disable-line
        ? placeholderColor
        : secondaryVariantColor
    }
  >
    {innerDiameter =>
      // eslint-disable-next-line
      userAvatar ? (
        <Image
          // eslint-disable-line
          src={`${process.env.REACT_APP_API_URL}${_.replace(
            userAvatar,
            "medium",
            _.replace(size, new RegExp("extra-", "g"), "")
          )}`}
          style={{
            width: innerDiameter,
            height: innerDiameter
          }}
        />
      ) : userName ? (
        <Icon
          // eslint-disable-line
          icon="user"
          size={size}
          color={primaryColor}
        />
      ) : null
    }
  </CircleContainer>
);

ImageUser.propTypes = {
  isFetchingUser: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large", "extra-large", "extra-extra-large"])
    .isRequired,
  placeholderColor: PropTypes.string.isRequired
};

export default _.flow([
  // eslint-disable-line
  withUser,
  withTheme
])(ImageUser);
