import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AboutLogo from "./components/about-logo";
import AboutContainer from "./components/about-container";
import AboutTitle from "./components/about-title";
import AboutButton from "./components/about-button";
import Text from "../../../../components/text";
import withAppModal from "../../../../hocs/with-app-modal";
/* eslint-disable */
import Settings from "../../../settings";
import AboutLegalNotices from "./scenes/about-legal-notices";
/* eslint-enable */

class SettingsAbout extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalScene } = this.props;

    setAppModalHeaderText({ text: t("about.title") });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: Settings, direction: -1 })
    });
  }

  render() {
    const { t, setAppModalScene } = this.props;
    return (
      <AboutContainer>
        <AboutLogo />
        <AboutTitle type="h2" weight={700} style={{ marginTop: 65, marginBottom: 27 }}>
          Curb
        </AboutTitle>
        <Text style={{ color: "#BDBDBD" }}>Version {process.env.CURB_Version}</Text>
        <AboutButton onClick={() => setAppModalScene({ scene: AboutLegalNotices, direction: 1 })}>
          <Text>{t("about.description")}</Text>
        </AboutButton>
      </AboutContainer>
    );
  }
}

SettingsAbout.propTypes = {
  t: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default _.flowRight([withAppModal, withTranslation("settings")])(SettingsAbout);
