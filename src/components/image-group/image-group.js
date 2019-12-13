import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import CircleContainer from "../circle-container";
import Image from "../image";
import Text from "../text";
import withGroup from "../../hocs/with-group";
import emojiRegex from "./utils/emoji-regex";

const ImageGroup = ({
  groupName,
  groupAvatar,
  compressLevel,
  groupTheme,
  theme,
  theme: { backgroundColor },
  size,
  placeholderColor,
  ...others
}) => (
  <CircleContainer
    {...others}
    diameter={size}
    backgroundColor={
      !groupName || groupAvatar // eslint-disable-line
        ? placeholderColor
        : theme[`group${_.capitalize(groupTheme)}Color`]
    }
  >
    {innerDiameter =>
      // eslint-disable-next-line
      groupAvatar ? (
        <Image
          // eslint-disable-next-line
          src={_.replace(
            _.replace(groupAvatar, "-compress-high", compressLevel ? `-compress-${compressLevel}` : ""),
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
      ) : groupName ? (
        <Text
          weight={700}
          style={{
            fontSize: innerDiameter / 2,
            color: backgroundColor
          }}
        >
          {(RegExp(emojiRegex).exec(groupName.substr(0, 2)) || [])[0] || _.capitalize(groupName[0])}
        </Text>
      ) : null
    }
  </CircleContainer>
);

ImageGroup.defaultProps = {
  compressLevel: undefined,
  placeholderColor: undefined
};

ImageGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  compressLevel: PropTypes.oneOf(["low", "medium", "high"]),
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  size: PropTypes.string.isRequired,
  placeholderColor: PropTypes.string
};

export default _.flowRight([
  // eslint-disable-line
  withGroup,
  withTheme
])(ImageGroup);
