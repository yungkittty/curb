import React from "react";
import PropTypes from "prop-types";
import InputFile from "../input-file";
import { platformBools } from "../../configurations/platform";
import ImageUser from "../image-user";
import ImageGroup from "../image-group";

const ImageAvatarEditable = ({ size, style, userId, groupId, placeholderColor, ...others }) => {
  const X = (() => {
    const Xs = platformBools.isReact
      ? // eslint-disable-line
        [60, 100, 200, 320]
      : [50, 70, 160, 200];
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
    <InputFile
      {...others}
      type="image"
      style={{ ...style, borderRadius: X / 2, width: X, height: X }}
      PlaceholderComponent={
        // eslint-disable-next-line
        userId
          ? () => <ImageUser size={size} userId={userId} placeholderColor={placeholderColor} />
          : groupId
          ? () => <ImageGroup size={size} groupId={groupId} placeholderColor={placeholderColor} />
          : undefined
      }
    />
  );
};

ImageAvatarEditable.defaultProps = {
  style: undefined,
  userId: undefined,
  groupId: undefined,
  placeholderColor: undefined
};

ImageAvatarEditable.propTypes = {
  // eslint-disable-next-line
  style: PropTypes.object,
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  userId: PropTypes.string,
  groupId: PropTypes.string,
  placeholderColor: PropTypes.string
};

export default ImageAvatarEditable;
