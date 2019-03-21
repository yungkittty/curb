import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ImageContainer from "./components/image-container";
import Icon from "../icon";
import Image from "../image";

const SelectImage = ({ theme, src, readOnly }) => (
  <ImageContainer border={src && readOnly}>
    <React.Fragment>
      {src && <Image src={src} />}
      {!readOnly && (
        <Icon
          icon="file-image"
          size="medium"
          color={theme.secondaryVariantColor}
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
