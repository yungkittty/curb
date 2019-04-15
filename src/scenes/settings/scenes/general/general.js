import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListFlat from "../../../../components/list-flat";
import AppModalSceneListItem from "../../../../components/app-modal-scene-list-item";
/* eslint-disable */
import Settings from "../../../settings";
import generalData from "./general-data";
/* eslint-enable */

class General extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalScene } = this.props;

    setAppModalHeaderText({ text: t("general.title") });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: Settings, direction: -1 })
    });
  }

  render() {
    const { t, setAppModalScene, currentUserId, signOut } = this.props;

    return (
      <ListFlat
        data={generalData}
        extraData={{ generalData }}
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

General.propTypes = {
  t: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default withTranslation("settings")(General);
