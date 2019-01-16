<<<<<<< HEAD
import styled from "styled-components";
import { Image } from "react-native";

const Input = styled(Image)``;

export default Input;
=======
import React from "react";
import { Image as ReactNativeImage } from "react-native";
import PropTypes from "prop-types";

const Image = ({ src: uri, ...others }) => (
  <ReactNativeImage {...others} source={{ uri }} />
);

Image.propTypes = {
  // eslint-disable-next-line
  src: PropTypes.any.isRequired
};

export default Image;
>>>>>>> dfbab837c3013ef21759b82a57f5605c1ea4f679
