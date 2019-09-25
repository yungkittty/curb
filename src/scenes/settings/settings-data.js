// eslint-disable-next-line
import SettingsGeneral from "./scenes/settings-general";
import SettingsFeedback from "./scenes/settings-feedback";

const settingsData = [
  {
    icon: "cogs",
    id: "general",
    scene: SettingsGeneral
  },
  {
    icon: "comment-dots",
    id: "feedback",
    scene: SettingsFeedback
  }
];

export default settingsData;
