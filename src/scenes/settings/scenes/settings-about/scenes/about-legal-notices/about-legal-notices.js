import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ContainerScroll from "../../../../../../components/container-scroll";
import Text from "../../../../../../components/text";
import withAppModal from "../../../../../../hocs/with-app-modal";
/* eslint-disable */
import SettingsAbout from "../../../settings-about";
/* eslint-enable */

class AboutLegalNotices extends Component {
  constructor(props) {
    super(props);
    const {
      // eslint-disable-line
      setAppModalHeaderText,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      t
    } = this.props;

    this.goToPrev = this.goToPrev.bind(this);

    setAppModalHeaderText({ text: t("about.legalNotices.title") });
    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: this.goToPrev }]);
    setAppModalHeaderBackButton({ onClick: this.goToPrev });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: SettingsAbout, direction: -1 });
  }

  render() {
    const { t } = this.props;
    return (
      <ContainerScroll style={{ paddingRight: 40, paddingLeft: 40 }}>
        <Text type="h4" style={{ textAlign: "center" }} isIndented>
          {t("about.legalNotices.content")}
        </Text>
      </ContainerScroll>
    );
  }
}

AboutLegalNotices.propTypes = {
  t: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("settings")
])(AboutLegalNotices);
