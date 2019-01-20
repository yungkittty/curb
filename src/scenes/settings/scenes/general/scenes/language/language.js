import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces, withI18n } from "react-i18next";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";
/* eslint-disable-next-line */
import General from "../../";

class Language extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      lng,
      i18n: {
        store: { data },
        options: { fallbackLng }
      },
      setTitle,
      setLeftClick,
      setLeftIcon,
      setComponent
    } = this.props;

    this.state = { languages: Object.keys(data), key: lng || fallbackLng[0] };

    setTitle(t("general.menu.language.title"));
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(General, -1));

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
        showsVerticalScrollIndicator={false}
        data={languages}
        extraData={{ languages }}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ListItem
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
  setTitle: PropTypes.func.isRequired,
  setLeftClick: PropTypes.func.isRequired,
  setLeftIcon: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired
};

export default withI18n()(withNamespaces("settings")(Language));
