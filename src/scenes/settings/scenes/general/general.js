import React, { Component } from "react";
import PropTypes from "prop-types";
import ListFlat from "../../../../components/list-flat";
import ListItem from "../../../../components/list-item";
/* eslint-disable-next-line */
import Settings from "../../";
/* eslint-disable-next-line */
import Language from "./scenes/language";
/* eslint-disable-next-line */
import DeleteAccount from "./scenes/delete-account";

const generalData = [
  {
    id: "language",
    title: "Language",
    description: "Display language of the application",
    icon: "language",
    scene: Language
  },
  {
    id: "logout",
    title: "Logout",
    description: "Disconnect your account from this device",
    icon: "sign-out-alt"
  },
  {
    id: "delete-account",
    title: "Delete account",
    description: "Permanently delete your account",
    icon: "trash-alt",
    scene: DeleteAccount
  }
];

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
