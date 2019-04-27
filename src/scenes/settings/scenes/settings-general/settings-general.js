import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListFlat from "../../../../components/list-flat";
import AppModalSceneListItem from "../../../../components/app-modal-scene-list-item";
/* eslint-disable */
import Settings from "../../../settings";
import settingsGeneralData from "./settings-general-data";
import Loader from "../../../../components/loader";
/* eslint-enable */

class SettingsGeneral extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalScene } = this.props;

    setAppModalHeaderText({ text: t("general.title") });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: Settings, direction: -1 })
    });
  }

  componentDidUpdate(prevProps) {
    const {
      t,
      isSignOutFetching,
      signOutErrorCode,
      enableAppModalButtons,
      disableAppModalButtons,
      pushAppAlert
    } = this.props;
    if (prevProps.isSignOutFetching === isSignOutFetching) return;
    if (isSignOutFetching) disableAppModalButtons();
    else enableAppModalButtons();
    if (prevProps.isSignOutFetching && !isSignOutFetching) {
      if (signOutErrorCode === "")
        pushAppAlert({
          type: "success",
          message: t("alerts:signOutSuccess"),
          icon: "check"
        });
      else
        pushAppAlert({
          type: "error",
          message: t("alerts:signOutFailure"),
          icon: "times"
        });
    }
  }

  render() {
    const { isSignOutFetching, t, setAppModalScene, currentUserId, signOut } = this.props;

    return isSignOutFetching ? (
      <Loader />
    ) : (
      <ListFlat
        data={settingsGeneralData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AppModalSceneListItem
            icon={item.icon}
            title={t(`general.menu.${item.id}.title`)}
            description={t(`general.menu.${item.id}.description`)}
            disabled={item.needSignedInUser && !currentUserId}
            onClick={() => (item.scene ? setAppModalScene({ scene: item.scene, direction: 1 }) : signOut())}
          />
        )}
      />
    );
  }
}

SettingsGeneral.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  isSignOutFetching: PropTypes.bool.isRequired,
  signOutErrorCode: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  pushAppAlert: PropTypes.func.isRequired
};

export default withTranslation("settings")(SettingsGeneral);
