import React from "react";
import PropTypes from "prop-types";
import Circle from "../circle";
import InputFile from "../input-file";
import ImageUser from "../image-user";
import ImageGroup from "../image-group";
import FilePreview from "../input-file/components/file-preview";

const ImageAvatarEditable = ({ style, size, userId, groupId, placeholderColor, ...others }) => {
  return (
    <InputFile
      {...others}
      type="image"
      PreviewComponent={() => (
        <Circle diameter={size} contentStyle={style}>
          {innerDiameter => (
            <FilePreview
              type="image"
              style={{ width: innerDiameter, height: innerDiameter, borderRadius: innerDiameter / 2 }}
              {...others}
            />
          )}
        </Circle>
      )}
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
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large", "extra-large"]).isRequired,
  userId: PropTypes.string,
  groupId: PropTypes.string,
  placeholderColor: PropTypes.string
};

export default ImageAvatarEditable;
