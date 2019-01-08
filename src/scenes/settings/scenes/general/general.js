import React, { Component } from "react";
import PropTypes from "prop-types";
import ListFlat from "../../../../components/list-flat";
import ListItem from "../../../../components/list-item";
/* eslint-disable-next-line */
import Settings from "../../";
/* eslint-disable-next-line */
import generalData from "./general-data";

class General extends Component {
  constructor(props) {
    super(props);
    const { setTitle, setLeftClick, setLeftIcon, setComponent } = this.props;

    this.signOut = this.signOut.bind(this);

    setTitle("General");
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(Settings, -1));
  }

  signOut() {
    const { signOut } = this.props;

    signOut();
  }

  render() {
    const { setComponent } = this.props;

    return (
      <ListFlat
        showsVerticalScrollIndicator={false}
        data={generalData}
        extraData={{ generalData }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
            icon={item.icon}
            title={item.title}
            description={item.description}
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
  signOut: () => null,
  setTitle: undefined,
  setLeftClick: undefined,
  setLeftIcon: undefined,
  setComponent: undefined
};

General.propTypes = {
  signOut: PropTypes.func,
  setTitle: PropTypes.func,
  setLeftClick: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setComponent: PropTypes.func
};

export default General;
