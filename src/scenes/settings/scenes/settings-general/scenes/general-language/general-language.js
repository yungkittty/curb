import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneList from "../../../../../../components/app-modal-scene-list";
import AppModalSceneListItem from "../../../../../../components/app-modal-scene-list-item";
import withAppModal from "../../../../../../hocs/with-app-modal";
// eslint-disable-next-line
import SettingsGeneral from "../../../settings-general";
import generalLanguageData from "./general-language-data";

class GeneralLanguage extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      i18n: {
        language,
        options: { fallbackLng }
      },
      setAppModalHeaderText,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      setAppModalScene
    } = this.props;

    this.state = { key: language.substring(0, 2) || fallbackLng[0] };

    setAppModalHeaderText({ text: t("general.menu.language.title") });
    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: () => setAppModalScene({ scene: SettingsGeneral, direction: -1 }) }]);
    setAppModalHeaderBackButton({ onClick: () => setAppModalScene({ scene: SettingsGeneral, direction: -1 }) });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key) {
    const { i18n, setCurrentSettingsLanguage, setAppModalHeaderText, t } = this.props;

    this.setState({ key });
    i18n.changeLanguage(key);
    setCurrentSettingsLanguage({ language: key });
    setAppModalHeaderText({ text: t("general.menu.language.title") });
  }

  render() {
    const { key } = this.state;
    const {
      i18n: {
        store: { data }
      }
    } = this.props;

    return (
      <AppModalSceneList
        data={Object.keys(data)}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <AppModalSceneListItem
            title={generalLanguageData[item]}
            selected={key === item}
            selectionType
            onClick={() => this.handleChange(item)}
          />
        )}
      />
    );
  }
}

GeneralLanguage.propTypes = {
  t: PropTypes.func.isRequired,
  setCurrentSettingsLanguage: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    store: PropTypes.shape({ data: PropTypes.object.isRequired }).isRequired,
    language: PropTypes.string.isRequired,
    options: PropTypes.shape({ fallbackLng: PropTypes.arrayOf(PropTypes.string) }).isRequired
  }).isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("settings")
])(GeneralLanguage);
