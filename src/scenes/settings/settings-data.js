/* eslint-disable */
import SettingsGeneral from "./scenes/settings-general";
import SettingsAbout from "./scenes/settings-about";
/* eslint-enable */

const settingsData = [
  {
    icon: "cogs",
    id: "general",
    scene: SettingsGeneral
  },
  {
    icon: "comment-dots",
    id: "about",
    scene: SettingsAbout
  }
];

export default settingsData;
