import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Icon from "../icon";
import ImageContainer from "./components/image-container";
import ImagePreview from "./components/image-preview";
import ImageUser from "../image-user";
import ImageSelector from "./components/image-selector";
import ImageInput from "./components/image-input";

const ImageUserEditable = ({ style, theme, id, size, userId, editMode, localAvatar, progress, onSelect }) => (
  <ImageContainer style={style} size={size} border={!localAvatar} editMode={editMode}>
    {!localAvatar && userId ? (
      <ImageUser size={size} userId={userId} />
    ) : (
      <ImagePreview size={size} src={localAvatar} progress={progress} />
    )}
    {editMode && (
      <ImageSelector>
        <Icon icon="plus" size="small" color={theme.secondaryVariantColor} />
        <ImageInput
          style={{ position: "absolute", width: "100%", height: "100%" }}
          onSelect={(data, file) => {
            onSelect({
              target: {
                id,
                value: { data, file }
              }
            });
          }}
        />
      </ImageSelector>
    )}
  </ImageContainer>
);

ImageUserEditable.defaultProps = {
  localAvatar: undefined,
  editMode: false,
  progress: undefined
};

ImageUserEditable.propTypes = {
  // eslint-disable-next-line
  style: PropTypes.object,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  localAvatar: PropTypes.string,
  editMode: PropTypes.bool,
  progress: PropTypes.number,
  onSelect: PropTypes.func.isRequired
};

export default withTheme(ImageUserEditable);
