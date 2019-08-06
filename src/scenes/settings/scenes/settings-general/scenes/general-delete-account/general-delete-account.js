import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../../../components/loader";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import ContentDescription from "./components/content-description";
import withAppModal from "../../../../../../hocs/with-app-modal";
// eslint-disable-next-line
import SettingsGeneral from "../../../settings-general";

class GeneralDeleteAccount extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      deleteAccount
    } = this.props;

    setAppModalHeaderText({
      text: t("general.menu.deleteAccount.title")
    });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: SettingsGeneral, direction: -1 })
    });
    setAppModalFooterButton({
      text: t("general.menu.deleteAccount.buttonTitle"),
      onClick: deleteAccount
    });
  }

  componentDidUpdate(prevProps) {
    const { isFetchingAccount, enableAppModalButtons, disableAppModalButtons } = this.props;
    if (prevProps.isFetchingAccount === isFetchingAccount) return;
    if (isFetchingAccount) disableAppModalButtons();
    else enableAppModalButtons();
  }

  render() {
    const { t, isFetchingAccount } = this.props;

    return isFetchingAccount ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>{t("general.menu.deleteAccount.contentTitle")}</AppModalSceneTitle>
        <ContentDescription type="h4" isIndented>
          {t("general.menu.deleteAccount.contentDescription")}
        </ContentDescription>
      </AppModalSceneContainer>
    );
  }
}

GeneralDeleteAccount.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  isFetchingAccount: PropTypes.bool.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("settings")
])(GeneralDeleteAccount);
