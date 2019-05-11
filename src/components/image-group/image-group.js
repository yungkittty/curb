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
  isFetchingGroup,
  groupName,
  groupAvatar,
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
      (isFetchingGroup && !groupName) || groupAvatar
        ? placeholderColor
        : theme[`group${_.capitalize(groupTheme)}VariantColor`]
    }
  >
    {innerDiameter =>
      // eslint-disable-next-line
      groupAvatar ? (
        <Image
          // eslint-disable-next-line
          // eslint-disable-next-line
          src={_.replace(groupAvatar, "medium", size.substr(0, 5) === "extra" ? "large" : size)}
          style={{
            width: innerDiameter,
            height: innerDiameter
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
  placeholderColor: undefined
};

ImageGroup.propTypes = {
  isFetchingGroup: PropTypes.bool.isRequired,
  groupName: PropTypes.string.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large", "extra-large", "extra-extra-large"])
    .isRequired,
  placeholderColor: PropTypes.string
};

export default _.flowRight([
  // eslint-disable-line
  withGroup,
  withTheme
])(ImageGroup);
