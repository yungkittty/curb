/* eslint-disable */
import SettingsGeneral from "./scenes/settings-general";
import SettingsFeedback from "./scenes/settings-feedback";
import SettingsAbout from "./scenes/settings-about";
/* eslint-enable */

const settingsData = [
  {
    icon: "cog",
    id: "general",
    scene: SettingsGeneral
  },
  {
    icon: "comment-dots",
    id: "feedback",
    scene: SettingsFeedback
  },
  {
    icon: "comment-dots",
    id: "about",
    scene: SettingsAbout
  }
];

export default settingsData;
