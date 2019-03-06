import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";
import ButtonText from "./components/button-text";

const DownloadButton = ({ theme }) => (
  <a
    style={{ textDecoration: "initial" }}
    href={`/static/curb-${process.env.HEAD_BRANCH}.apk`}
    download
  >
    <ButtonContainer>
      <ButtonIcon icon="cloud-download-alt" color={theme.backgroundColor} />
      <ButtonText>Download</ButtonText>
    </ButtonContainer>
  </a>
);

DownloadButton.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object
};

export default withTheme(DownloadButton);
