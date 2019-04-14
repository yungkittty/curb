import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListFlat from "../../../../../../components/list-flat";
import AppModalSceneListItem from "../../../../../../components/app-modal-scene-list-item";
/* eslint-disable-next-line */
import General from "../../";
import languageData from "./language-data";

class Language extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      i18n: {
        store: { data },
        language,
        options: { fallbackLng }
      },
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene
    } = this.props;

    this.state = { languages: Object.keys(data), key: language.substring(0, 2) || fallbackLng[0] };

    setAppModalHeaderText({ text: t("general.menu.language.title") });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: General, direction: -1 })
    });

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
    const { languages, key } = this.state;

    return (
      <ListFlat
        data={languages}
        extraData={{ languages }}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <AppModalSceneListItem
            title={languageData[item]}
            selected={key === item}
            selectionType
            onClick={() => this.handleChange(item)}
          />
        )}
      />
    );
  }
}

Language.propTypes = {
  t: PropTypes.func.isRequired,
  setCurrentSettingsLanguage: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    store: PropTypes.shape({ data: PropTypes.object.isRequired }).isRequired,
    language: PropTypes.string.isRequired,
    options: PropTypes.shape({ fallbackLng: PropTypes.arrayOf(PropTypes.string) }).isRequired
  }).isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default withTranslation("settings")(Language);
