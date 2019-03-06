import React from "react";
import DownloadContainer from "./components/download-container";
import DownloadInformation from "./components/download-information";
import DownloadText from "./components/download-text";
import DownloadButton from "./components/download-button";
import DownloadBranch from "./components/download-branch";

const AppDownload = () => (
  <DownloadContainer>
    <DownloadInformation>
      <DownloadText type="h3">
        Download the app to access the Curb network on your mobile
      </DownloadText>
      <DownloadButton />
      <DownloadBranch>{process.env.HEAD}</DownloadBranch>
    </DownloadInformation>
  </DownloadContainer>
);

export default AppDownload;
