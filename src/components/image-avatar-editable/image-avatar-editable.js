import React from "react";
import PropTypes from "prop-types";
import Circle from "../circle";
import InputFile from "../input-file";
import ImageUser from "../image-user";
import ImageGroup from "../image-group";

const ImageAvatarEditable = ({
  // eslint-disable-line
  style,
  shouldFetch,
  userId,
  groupId,
  size,
  placeholderColor,
  ...others
}) => (
  <InputFile
    {...others}
    as={Circle}
    containerProps={{ diameter: size }}
    type="image"
    Placeholder={
      // eslint-disable-next-line
      userId
        ? () => (
            // eslint-disable-next-line
            <ImageUser
              // eslint-disable-line
              shouldFetch={shouldFetch}
              userId={userId}
              size={size}
              placeholderColor={placeholderColor}
            />
          )
        : groupId
        ? () => (
            // eslint-disable-next-line
            <ImageGroup
              // eslint-disable-line
              shouldFetch={shouldFetch}
              groupId={groupId}
              size={size}
              placeholderColor={placeholderColor}
            />
          )
        : null
    }
  />
);

ImageAvatarEditable.defaultProps = {
  style: undefined,
  shouldFetch: true,
  userId: undefined,
  groupId: undefined,
  placeholderColor: undefined
};

ImageAvatarEditable.propTypes = {
  style: PropTypes.object, // eslint-disable-line
  shouldFetch: PropTypes.bool,
  userId: PropTypes.string,
  groupId: PropTypes.string,
  size: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-extra-large"
  ]).isRequired,
  placeholderColor: PropTypes.string
};

export default ImageAvatarEditable;
