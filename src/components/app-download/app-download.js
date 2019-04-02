import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import DownloadContainer from "./components/download-container";
import DownloadText from "./components/download-text";
import DownloadButton from "./components/download-button";
import DownloadBranch from "./components/download-branch";

const AppDownload = ({ t }) => (
  <DownloadContainer>
    <DownloadText type="h3" weight={700}>
      {t("downloadText")}
    </DownloadText>
    <DownloadButton t={t} />
    <DownloadBranch>{process.env.CURB_VERSION}</DownloadBranch>
  </DownloadContainer>
);

AppDownload.propTypes = { t: PropTypes.func.isRequired };

export default withTranslation("appDownload")(AppDownload);
