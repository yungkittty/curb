import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import GroupContainer from "./components/group-container";
import Image from "../image";
import GroupTitle from "./components/group-title";
import { platformBools } from "../../configurations/platform";
import withGroup from "../../hocs/with-group";

const ImageGroup = ({
  isGettingGroup,
  groupName,
  groupAvatar,
  groupTheme,
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
    <GroupContainer
      {...others}
      isGettingGroup={isGettingGroup}
      groupName={groupName}
      groupAvatar={groupAvatar}
      groupTheme={groupTheme}
      placeholderColor={placeholderColor}
      size={X}
    >
      {/* eslint-disable-next-line */}
      {!isGettingGroup || groupAvatar || groupName ? (
        groupAvatar ? (
          <Image
            src={_.replace(groupAvatar, "medium", size)}
            style={{
              // eslint-disable-line
              width: X,
              height: X
            }}
          />
        ) : (
          <GroupTitle weight={700} X={X}>
            {RegExp(
              "^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])$"
            ).test(groupName.substr(0, 2))
              ? groupName.substr(0, 2)
              : _.capitalize(groupName[0])}
          </GroupTitle>
        )
      ) : null}
    </GroupContainer>
  );
};

ImageGroup.propTypes = {
  isGettingGroup: PropTypes.bool.isRequired,
  groupName: PropTypes.string.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  placeholderColor: PropTypes.string.isRequired
};

export default _.flow([
  // eslint-disable-line
  withGroup,
  withTheme
])(ImageGroup);
