import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { withNamespaces } from "react-i18next";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";
import Text from "../../../text";

const DownloadButton = ({ t, theme }) => (
  <ButtonContainer
    style={{ textDecoration: "initial" }}
    onClick={`/curb.apk`}
    download
  >
    <React.Fragment>
      <ButtonIcon icon="cloud-download-alt" color={theme.backgroundColor} />
      <Text style={{ color: theme.backgroundColor }}>
        {t("downloadButton")}
      </Text>
    </React.Fragment>
  </ButtonContainer>
);

DownloadButton.propTypes = {
  t: PropTypes.func.isRequired,
  /* eslint-disable-next-line */
  theme: PropTypes.object
};

export default withNamespaces("appDownload")(withTheme(DownloadButton));
