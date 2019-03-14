import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import DownloadContainer from "./components/download-container";
import DownloadInformation from "./components/download-information";
import DownloadText from "./components/download-text";
import DownloadButton from "./components/download-button";
import DownloadBranch from "./components/download-branch";

const AppDownload = ({ t }) => (
  <DownloadContainer>
    <DownloadInformation>
      <DownloadText type="h3" weight={700}>
        {t("downloadText")}
      </DownloadText>
      <DownloadButton />
      <DownloadBranch>{process.env.HEAD_BRANCH}</DownloadBranch>
    </DownloadInformation>
  </DownloadContainer>
);

AppDownload.propTypes = { t: PropTypes.func.isRequired };

export default withNamespaces("downloadApp")(AppDownload);
