import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import GroupContainer from "./components/group-container";
import Image from "../image";
import Text from "../text";
import { platformBools } from "../../configurations/platform";

const ImageGroup = ({
  isGroupFetching,
  groupName,
  groupAvatarUrl,
  groupTheme,
  theme,
  size,
  placeholderColor,
  ...others
}) => {
  const X = (() => {
    const Xs = platformBools.isReact ? [undefined, 60, 100, 300] : [undefined, 50, 70, 200];
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
    <GroupContainer
      {...others}
      isGroupFetching={isGroupFetching}
      groupAvatarUrl={groupAvatarUrl}
      groupTheme={groupTheme}
      placeholderColor={placeholderColor}
      size={X}
    >
      {/* eslint-disable-next-line */}
      {!isGroupFetching ? (
        groupAvatarUrl ? (
          <Image
            src={_.replace(groupAvatarUrl, "medium", size)}
            style={{
              // eslint-disable-line
              width: X,
              height: X
            }}
          />
        ) : (
          <Text
            weight={700}
            style={{
              // eslint-disable-line
              fontSize: X / 2,
              color: theme.backgroundColor
            }}
          >
            {_.capitalize(groupName[0])}
          </Text>
        )
      ) : null}
    </GroupContainer>
  );
};

ImageGroup.propTypes = {
  isGroupFetching: PropTypes.bool.isRequired,
  groupName: PropTypes.string.isRequired,
  groupAvatarUrl: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  placeholderColor: PropTypes.string.isRequired
};

export default withTheme(ImageGroup);
