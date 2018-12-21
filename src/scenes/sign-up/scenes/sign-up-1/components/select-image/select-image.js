import React from "react";
import ImageContainer from "./components/image-container";
import ImageCircle from "./components/image-circle/image-circle";
import ImageIcon from "./components/image-icon";

const SelectImage = () => (
  <ImageContainer>
    <ImageCircle />
    <ImageIcon icon="file-image" color="#BDBDBD" size="big" />
  </ImageContainer>
);

export default SelectImage;
