import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import ListFlat from "../../../../components/list-flat";
import ListItem from "../../../../components/list-item";
/* eslint-disable-next-line */
import Settings from "../../";
/* eslint-disable-next-line */
import generalData from "./general-data";

class General extends Component {
  constructor(props) {
    super(props);
    const { t, setTitle, setLeftClick, setLeftIcon, setComponent } = this.props;

    this.signOut = this.signOut.bind(this);

    setTitle(t("settings:general.title"));
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(Settings, -1));
  }

  signOut() {
    const { signOut } = this.props;

    signOut();
  }

  render() {
    const { t, setComponent } = this.props;

    return (
      <ListFlat
        showsVerticalScrollIndicator={false}
        data={generalData}
        extraData={{ generalData }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
            icon={item.icon}
            title={t(`settings:general.menu.${item.id}.title`)}
            description={t(`settings:general.menu.${item.id}.description`)}
            onClick={() =>
              item.scene ? setComponent(item.scene, 1) : this.signOut()
            }
          />
        )}
      />
    );
  }
}

General.defaultProps = {
  setTitle: undefined,
  setLeftClick: undefined,
  setLeftIcon: undefined,
  setComponent: undefined
};

General.propTypes = {
  t: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  setTitle: PropTypes.func,
  setLeftClick: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setComponent: PropTypes.func
};

export default withNamespaces()(General);
