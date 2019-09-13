import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonContainer from "../../../button-container";
import ButtonIcon from "./components/button-icon";
import Text from "../../../text";
import { platformBools } from "../../../../configurations/platform";

const DownloadButton = ({ t, theme }) => (
  <ButtonContainer
    onClick={`https://tsfr.io/curb-${platformBools.isAndroid ? "android" : "ios"}`}
    style={{
      position: "relative",
      width: 220,
      height: 50,
      borderRadius: 12,
      backgroundColor: "#56ccf2"
    }}
  >
    <React.Fragment>
      <ButtonIcon
        // eslint-disable-line
        icon="cloud-download-alt"
        color={theme.backgroundColor}
        size="medium"
      />
      <Text style={{ color: theme.backgroundColor }}>
        {/* eslint-disable-line */}
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
