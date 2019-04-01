import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListFlat from "../../components/list-flat";
import ModalListItem from "../../components/modal-list-item";
/* eslint-disable-next-line */
import settingsData from "./settings-data";

class Settings extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderText } = this.props;

    setAppModalHeaderText({ headerText: t("settings") });
  }

  render() {
    const { t, setAppModalScene } = this.props;

    return (
      <ListFlat
        data={settingsData}
        extraData={{ settingsData }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ModalListItem
            title={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}
            onClick={() =>
              setAppModalScene({ scene: item.scene, sceneDirection: 1 })
            }
          />
        )}
      />
    );
  }
}

Settings.propTypes = {
  t: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default withTranslation("settings")(Settings);
