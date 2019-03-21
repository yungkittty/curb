import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ImageContainer from "./components/image-container";
import Icon from "../icon";
import Image from "../image";

const SelectImage = ({ theme, src, readOnly, onUpload }) => (
  <ImageContainer border={src} readOnly={readOnly}>
    <React.Fragment>
      {src && (
        <Image
          style={{
            filter: `blur(${readOnly ? "0" : "2"}px)
            brightness(${readOnly ? "100" : "80"}%)`
          }}
          src={src}
        />
      )}
      {!readOnly && (
        <Icon
          icon="plus"
          size="medium"
          color={theme.backgroundColor}
          style={{ position: "absolute" }}
        />
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
  src: PropTypes.string,
  readOnly: PropTypes.string
};

export default withTheme(SelectImage);
