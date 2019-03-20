import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { isAndroid } from "react-device-detect";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";
import Text from "../../../text";

const DownloadButton = ({ t, theme }) => (
  <ButtonContainer
    style={{ textDecoration: "initial" }}
    href={`https://tsfr.io/curb-${isAndroid ? "android" : "ios"}`}
  >
    <React.Fragment>
      <ButtonIcon
        icon="cloud-download-alt"
        color={theme.backgroundColor}
        size="medium"
      />
      <Text style={{ color: theme.backgroundColor }}>
        {t("downloadButton")}
      </Text>
    </React.Fragment>
  </ButtonContainer>
);

DownloadButton.propTypes = {
  t: PropTypes.func.isRequired,
  /* eslint-disable-next-line */
  theme: PropTypes.object.isRequired
};

export default withTheme(DownloadButton);
