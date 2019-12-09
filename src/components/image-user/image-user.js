import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import CircleContainer from "../circle-container";
import Image from "../image";
import Icon from "../icon";
import withUser from "../../hocs/with-user";

const ImageUser = ({
  userName,
  userAvatar,
  compressLevel,
  theme: { secondaryVariantColor, primaryColor },
  size,
  placeholderColor,
  ...others
}) => (
  <CircleContainer
    {...others}
    diameter={size}
    backgroundColor={
      !userName || userAvatar // eslint-disable-line
        ? placeholderColor
        : secondaryVariantColor
    }
  >
    {innerDiameter =>
      // eslint-disable-next-line
      userAvatar ? (
        <Image
          // eslint-disable-next-line
          src={_.replace(
            _.replace(userAvatar, "-compress-high", compressLevel ? `-compress-${compressLevel}` : ""),
            "medium",
            size
          )}
          objectFit="cover"
          style={{
            width: innerDiameter,
            height: innerDiameter,
            borderRadius: innerDiameter / 2
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

ImageUser.defaultProps = {
  compressLevel: undefined,
  placeholderColor: undefined
};

ImageUser.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  compressLevel: PropTypes.oneOf(["low", "medium", "high"]),
  theme: PropTypes.object.isRequired, // eslint-disable-line
  size: PropTypes.string.isRequired,
  placeholderColor: PropTypes.string
};

export default _.flowRight([
  // eslint-disable-line
  withUser,
  withTheme
])(ImageUser);
