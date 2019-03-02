import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ImageContainer from "./components/image-container";
import Icon from "../../../../../../components/icon";
// import Image from "../../../../../../components/image";

const SelectImage = ({ theme }) => (
  <ImageContainer>
    <Icon icon="file-image" size="medium" color={theme.secondaryVariantColor} />
  </ImageContainer>
);

SelectImage.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(SelectImage);
