import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import SettingsContainer from "./components/settings-container";
import ListFlat from "../../components/list-flat";
import ListItem from "../../components/list-item";
/* eslint-disable-next-line */
import settingsData from "./settings-data";

class Settings extends Component {
  constructor(props) {
    super(props);
    const { t, setTitle } = this.props;

    setTitle(t("settings"));
  }

  render() {
    const { t, setComponent } = this.props;

    return (
      <SettingsContainer>
        <ListFlat
          showsVerticalScrollIndicator={false}
          data={settingsData}
          extraData={{ settingsData }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              title={t(`${item.id}.title`)}
              description={t(`${item.id}.description`)}
              onClick={() => setComponent(item.scene, 1)}
            />
          )}
        />
      </SettingsContainer>
    );
  }
}

Settings.propTypes = {
  t: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired
};

export default withNamespaces("settings")(Settings);
