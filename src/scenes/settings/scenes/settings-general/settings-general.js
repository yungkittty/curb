import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListFlat from "../../../../components/list-flat";
import AppModalSceneListItem from "../../../../components/app-modal-scene-list-item";
import withAppModal from "../../../../hocs/with-app-modal";
import withCurrentUser from "../../../../hocs/with-current-user";
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
    const { isFetchingSignIn, enableAppModalButtons, disableAppModalButtons } = this.props;
    if (prevProps.isFetchingSignIn === isFetchingSignIn) return;
    if (isFetchingSignIn) disableAppModalButtons();
    else enableAppModalButtons();
  }

  render() {
    const { isFetchingSignIn, t, setAppModalScene, userId, signOut } = this.props;

    return isFetchingSignIn ? (
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
            disabled={item.needSignedInUser && !userId}
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
  isFetchingSignIn: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default _.flow([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("settings")
])(SettingsGeneral);
