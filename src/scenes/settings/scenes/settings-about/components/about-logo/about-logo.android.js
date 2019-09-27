import React from "react";
import Image from "../../../../../../components/image";

// https://facebook.github.io/react-native/docs/images

const AboutLogo = () => (
  <Image
    // eslint-disable-next-line
    src="asset:/images/app-icon.png"
    style={{ height: 130, width: 130 }}
  />
);

export default AboutLogo;
