import React, { Component } from "react";
import PropTypes from "prop-types";
import SettingsContainer from "./components/settings-container";
import ListFlat from "../../components/list-flat";
import ListItem from "../../components/list-item";
/* eslint-disable-next-line */
import General from "./scenes/general";

const settingsData = [
  {
    id: "general",
    title: "General",
    description: "Language  ·  Logout  ·  Delete account",
    scene: General
  }
];

class Settings extends Component {
  constructor(props) {
    super(props);
    const { setTitle } = this.props;

    setTitle("Settings");
  }

  render() {
    const { setComponent } = this.props;

    return (
      <SettingsContainer>
        <ListFlat
          showsVerticalScrollIndicator={false}
          data={settingsData}
          extraData={{ settingsData }}
          keyExtractor={setting => setting.id}
          renderItem={({ item: setting }) => (
            <ListItem
              title={setting.title}
              description={setting.description}
              onClick={() => setComponent(setting.scene, 1)}
            />
          )}
        />
      </SettingsContainer>
    );
  }
}

Settings.defaultProps = {
  setTitle: undefined
};

Settings.propTypes = {
  setTitle: PropTypes.func
};

export default Settings;
