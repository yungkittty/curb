import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";
/* eslint-disable-next-line */
import General from "../../";
/* eslint-disable-next-line */
import languageData from "./language-data";

class Language extends Component {
  constructor(props) {
    super(props);
    const { t, setTitle, setLeftClick, setLeftIcon, setComponent } = this.props;

    this.state = { language: "english" };

    setTitle(t("settings:general.menu.language.title"));
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(General, -1));

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(language) {
    this.setState({ language });
  }

  render() {
    const { t } = this.props;
    const { language } = this.state;

    return (
      <ListFlat
        showsVerticalScrollIndicator={false}
        data={languageData}
        extraData={{ languageData }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={t(`settings:general.menu.language.menu.${item.id}`)}
            selected={language === item.id}
            selectionType={true}
            onClick={() => this.handleChange(item.id)}
          />
        )}
      />
    );
  }
}

Language.defaultProps = {
  setTitle: undefined,
  setLeftClick: undefined,
  setLeftIcon: undefined,
  setComponent: undefined
};

Language.propTypes = {
  t: PropTypes.func.isRequired,
  setTitle: PropTypes.func,
  setLeftClick: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setComponent: PropTypes.func
};

export default withNamespaces()(Language);
