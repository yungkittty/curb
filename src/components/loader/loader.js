import React from "react";
import LoaderContainer from "./components/loader-container";
import LoaderImage from "./components/loader-image";
import image from "../../assets/images/curb_logo.png";

const Loader = () => (
  <LoaderContainer>
    <LoaderImage src={image} alt="Loading" />
  </LoaderContainer>
);

export default Loader;
