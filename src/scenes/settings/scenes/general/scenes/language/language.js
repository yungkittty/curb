import React, { Component } from "react";
import PropTypes from "prop-types";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";
/* eslint-disable-next-line */
import General from "../../";
/* eslint-disable-next-line */
import languageData from "./language-data";

class Language extends Component {
  constructor(props) {
    super(props);
    const { setTitle, setLeftClick, setLeftIcon, setComponent } = this.props;

    this.state = { language: "english" };

    setTitle("Language");
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(General, -1));

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(language) {
    this.setState({ language });
    console.log("Change language call");
  }

  render() {
    const { language } = this.state;

    return (
      <ListFlat
        showsVerticalScrollIndicator={false}
        data={languageData}
        extraData={{ languageData }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
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
  setTitle: PropTypes.func,
  setLeftClick: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setComponent: PropTypes.func
};

export default Language;
