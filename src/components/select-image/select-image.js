import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ImageContainer from "./components/image-container";
import Icon from "../icon";
import ImagePreview from "./components/image-preview";
import ImageInput from "./components/image-input";

const SelectImage = ({ theme, id, src, readOnly, onSelect }) => (
  <ImageContainer border={!src} readOnly={readOnly}>
    <React.Fragment>
      {src && (
        <ImagePreview
          style={{ position: "absolute" }}
          src={src}
          readOnly={readOnly}
        />
      )}
      {!readOnly && (
        <React.Fragment>
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
          <Icon
            icon="plus"
            size="medium"
            color={theme.backgroundColor}
            style={{ position: "absolute" }}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  </ImageContainer>
);

SelectImage.defaultProps = {
  src: undefined,
  readOnly: undefined
};

SelectImage.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  src: PropTypes.string,
  readOnly: PropTypes.bool,
  onSelect: PropTypes.func.isRequired
};

export default withTheme(SelectImage);
