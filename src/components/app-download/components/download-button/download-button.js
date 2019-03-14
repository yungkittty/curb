import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { withNamespaces } from "react-i18next";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";
import Text from "../../../text";

const DownloadButton = ({ t, theme }) => (
  <a
    style={{ textDecoration: "initial" }}
    href={`/static/curb-${process.env.HEAD_BRANCH}.apk`}
    download
  >
    <ButtonContainer>
      <ButtonIcon icon="cloud-download-alt" color={theme.backgroundColor} />
      <Text style={{ color: theme.backgroundColor }}>
        {t("downloadButton")}
      </Text>
    </ButtonContainer>
  </a>
);

DownloadButton.propTypes = {
  t: PropTypes.func.isRequired,
  /* eslint-disable-next-line */
  theme: PropTypes.object
};

export default withNamespaces("downloadApp")(withTheme(DownloadButton));
