import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ImageContainer from "./components/image-container";
import Icon from "../icon";
import ImagePreview from "./components/image-preview";
import ImageInput from "./components/image-input";

const SelectImage = ({ style, theme, id, size, src, readOnly, onSelect }) => (
  <ImageContainer style={style} size={size} border={!src} readOnly={readOnly}>
    <React.Fragment>
      {src && (
        <ImagePreview
          style={{ position: "absolute" }}
          size={size}
          src={src}
          readOnly={readOnly}
        />
      )}
      {!readOnly && (
        <React.Fragment>
          <Icon
            icon="plus"
            size="medium"
            color={theme.backgroundColor}
            style={{ position: "absolute" }}
          />
          <ImageInput
            onSelect={(data, file) => {
              onSelect({
                target: {
                  id,
                  value: { data, file }
                }
              });
            }}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  </ImageContainer>
);

SelectImage.defaultProps = {
  size: undefined,
  src: undefined,
  readOnly: undefined
};

SelectImage.propTypes = {
  // eslint-disable-next-line
  style: PropTypes.object,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  size: PropTypes.string,
  id: PropTypes.string.isRequired,
  src: PropTypes.string,
  readOnly: PropTypes.bool,
  onSelect: PropTypes.func.isRequired
};

export default withTheme(SelectImage);
