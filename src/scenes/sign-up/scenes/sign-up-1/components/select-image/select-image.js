import React, { Fragment } from "react";
import ImageContainer from "./components/image-container";
import ImageCircle from "./components/image-circle/image-circle";
import Icon from "../../../../../../components/icon";

const SelectImage = () => (
  <ImageContainer>
    <Fragment>
      <ImageCircle />
      <Icon icon="file-image" color="#BDBDBD" size="big" />
    </Fragment>
  </ImageContainer>
);

export default SelectImage;
