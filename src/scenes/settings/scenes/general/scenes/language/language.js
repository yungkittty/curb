import React, { Component } from "react";
import PropTypes from "prop-types";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import ListFlat from "../../../../../../components/list-flat";
import ModalListItem from "../../../../../../components/modal-list-item";
/* eslint-disable-next-line */
import General from "../../";

class Language extends Component {
  constructor(props) {
    super(props);
    console.log(i18n);
    const {
      t,
      lng,
      i18n: {
        store: { data },
        options: { fallbackLng }
      },
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene
    } = this.props;

    this.state = { languages: Object.keys(data), key: lng || fallbackLng[0] };

    setAppModalHeaderText({ headerText: t("general.menu.language.title") });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: General, sceneDirection: -1 })
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key) {
    const { i18n } = this.props;

    this.setState({ key });
    i18n.changeLanguage(key);
  }

  render() {
    const { t } = this.props;
    const { languages, key } = this.state;

    return (
      <ListFlat
        data={languages}
        extraData={{ languages }}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ModalListItem
            title={t(`general.menu.language.menu.${item}`)}
            selected={key === item}
            selectionType
            onClick={() => this.handleChange(item)}
          />
        )}
      />
    );
  }
}

Language.defaultProps = {
  lng: undefined
};

Language.propTypes = {
  t: PropTypes.func.isRequired,
  lng: PropTypes.string,
  i18n: PropTypes.shape({
    changeLanguage: PropTypes.func.isRequired
  }).isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default withTranslation("settings")(Language);
