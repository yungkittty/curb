/* eslint-disable */
import SettingsGeneral from "./scenes/settings-general";
import SettingsDiscoverability from "./scenes/settings-discoverability";
import SettingsDescription from "./scenes/settings-description";
import SettingsModules from "./scenes/settings-modules";
import SettingsTheme from "./scenes/settings-theme";
import SettingsDeleteGroup from "./scenes/settings-delete-group";
/* eslint-enable */

const groupSettingsData = [
  {
    id: "general",
    scene: SettingsGeneral
  },
  {
    id: "discoverability",
    scene: SettingsDiscoverability
  },
  {
    id: "description",
    scene: SettingsDescription
  },
  {
    id: "modules",
    scene: SettingsModules
  },
  {
    id: "theme",
    scene: SettingsTheme
  },
  {
    id: "deleteGroup",
    scene: SettingsDeleteGroup
  }
];

export default groupSettingsData;
