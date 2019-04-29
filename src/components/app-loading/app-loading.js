import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import LoadingContainer from "./components/loading-container";
import LoadingImage from "./components/loading-image";
import Text from "../text";
import curbLogo from "../../assets/image/curb_logo.png";

const AppLoading = ({ theme, isAppLoaded, onTransitionEnd }) => (
  <LoadingContainer isAppLoaded={isAppLoaded} onTransitionEnd={onTransitionEnd}>
    <LoadingImage src={curbLogo} />
    <Text color={theme.fontColor} type="h1" weight={700} style={{ letterSpacing: 0 }}>
      Curb
    </Text>
  </LoadingContainer>
);

AppLoading.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  isAppLoaded: PropTypes.bool.isRequired,
  onTransitionEnd: PropTypes.func.isRequired
};

export default withTheme(AppLoading);
