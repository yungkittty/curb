import React from "react";
import PropTypes from "prop-types";
import Circle from "../circle";
import InputFile from "../input-file";
import ImageUser from "../image-user";
import ImageGroup from "../image-group";

const ImageAvatarEditable = ({ style, size, userId, groupId, placeholderColor, ...others }) => {
  return (
    <InputFile
      {...others}
      as={Circle}
      containerProps={{ diameter: size }}
      type="image"
      Placeholder={
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
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large", "extra-large", "extra-extra-large"])
    .isRequired,
  userId: PropTypes.string,
  groupId: PropTypes.string,
  placeholderColor: PropTypes.string
};

export default ImageAvatarEditable;
