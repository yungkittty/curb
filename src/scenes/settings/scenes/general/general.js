import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import ListFlat from "../../../../components/list-flat";
import ModalListItem from "../../../../components/modal-list-item";
/* eslint-disable */
import Settings from "../../";
import generalData from "./general-data";
/* eslint-enable */

class General extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene
    } = this.props;

    setAppModalHeaderText({ headerText: t("general.title") });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: Settings, sceneDirection: -1 })
    });
  }

  render() {
    const { t, setAppModalScene, currentUserToken, signOut } = this.props;

    return (
      <ListFlat
        showsVerticalScrollIndicator={false}
        data={generalData}
        extraData={{ generalData }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ModalListItem
            icon={item.icon}
            title={t(`general.menu.${item.id}.title`)}
            description={t(`general.menu.${item.id}.description`)}
            disabled={item.needSignedInUser && !currentUserToken}
            onClick={() =>
              item.scene
                ? setAppModalScene({ scene: item.scene, sceneDirection: 1 })
                : signOut()
            }
          />
        )}
      />
    );
  }
}

General.propTypes = {
  t: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  currentUserToken: PropTypes.string.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default withNamespaces("settings")(General);
