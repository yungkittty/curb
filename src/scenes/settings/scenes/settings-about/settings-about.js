import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import SettingsAboutContainer from "./settings-about-container";
import Text from "../../../../components/text";
import Button from "../../../../components/button";
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
      <SettingsAboutContainer>
        <Text type="h3" weight={700}>
          Curb
        </Text>
        <Text type="h5">Version</Text>
        <Button onClick={() => setAppModalScene({ scene: AboutLegalNotices, direction: 1 })}>
          {t("about.description")}
        </Button>
      </SettingsAboutContainer>
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
