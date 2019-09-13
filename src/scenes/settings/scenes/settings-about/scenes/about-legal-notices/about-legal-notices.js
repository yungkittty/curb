import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import LegalNoticesContainer from "./components/legal-notices-container";
import Text from "../../../../../../components/text";
import withAppModal from "../../../../../../hocs/with-app-modal";
/* eslint-disable */
import SettingsAbout from "../../../settings-about";
/* eslint-enable */

class AboutLegalNotices extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalScene } = this.props;

    setAppModalHeaderText({ text: t("about.legalNotices.title") });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: SettingsAbout, direction: -1 })
    });
  }

  render() {
    const { t } = this.props;
    return (
      <LegalNoticesContainer>
        <Text type="h4" style={{ marginLeft: 40, marginRight: 40 }}>
          {t("about.legalNotices.content")}
        </Text>
      </LegalNoticesContainer>
    );
  }
}

AboutLegalNotices.propTypes = {
  t: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default _.flowRight([withAppModal, withTranslation("settings")])(AboutLegalNotices);
