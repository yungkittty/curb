import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import LoadingContainer from "./components/loading-container";
import curbLogo from "../../assets/image/curb_logo.png";
import Image from "../image";
import Text from "../text";

const AppLoading = ({ theme }) => (
  <LoadingContainer>
    <Image src={curbLogo} style={{ position: "relative", top: -40, width: 150, height: 150 }} />
    <Text color={theme.fontColor} type="h1" weight={700}>
      Curb
    </Text>
  </LoadingContainer>
);

AppLoading.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(AppLoading);
