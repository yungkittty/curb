import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces, withI18n } from "react-i18next";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";
/* eslint-disable-next-line */
import General from "../../";
/* eslint-disable-next-line */
import languageData from "./language-data";

class Language extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      lng,
      i18n: {
        options: { fallbackLng }
      },
      setTitle,
      setLeftClick,
      setLeftIcon,
      setComponent
    } = this.props;

    this.state = { key: lng || fallbackLng[0] };

    setTitle(t("settings:general.menu.language.title"));
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
    const { key } = this.state;

    return (
      <ListFlat
        showsVerticalScrollIndicator={false}
        data={languageData}
        extraData={{ languageData }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={t(`settings:general.menu.language.menu.${item.id}`)}
            selected={key === item.key}
            selectionType={true}
            onClick={() => this.handleChange(item.key)}
          />
        )}
      />
    );
  }
}

Language.defaultProps = {
  lng: undefined,
  setTitle: undefined,
  setLeftClick: undefined,
  setLeftIcon: undefined,
  setComponent: undefined
};

Language.propTypes = {
  t: PropTypes.func.isRequired,
  lng: PropTypes.string,
  i18n: PropTypes.shape({
    changeLanguage: PropTypes.func.isRequired
  }).isRequired,
  setTitle: PropTypes.func,
  setLeftClick: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setComponent: PropTypes.func
};

export default withI18n()(withNamespaces()(Language));
