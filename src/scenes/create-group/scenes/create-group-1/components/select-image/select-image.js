import React from "react";
import ImageContainer from "./components/image-container";
import ImageCircle from "./components/image-circle/image-circle";
import Icon from "../../../../../../components/icon";

const SelectImage = () => (
  <ImageContainer>
    <ImageCircle />
    <Icon icon="file-image" color="#BDBDBD" size="big" />
  </ImageContainer>
);

export default SelectImage;
