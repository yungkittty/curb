import React, { Component } from "react";
import UserContainer from "./components/user-container";
import FloatingButton from "../../components/floating-button";
import DisplayImage from "./components/user-display/display-image";
import DisplayUsername from "./components/user-display/display-username";
import EditImage from "./components/user-edit/edit-image";
import EditUsername from "./components/user-edit/edit-username";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Antoine",
      avatar: "https://avatars2.githubusercontent.com/u/26574636",
      editMode: false
    };
  }

  /**
   * Only one components for Edit and display, all subcomponents (image / text / button) for both.
   */

  render() {
    const { editMode, username, avatar } = this.state;

    return (
      <UserContainer>
        {editMode ? <EditImage src={avatar} /> : <DisplayImage src={avatar} />}
        {editMode ? (
          <EditUsername placeholder={username} />
        ) : (
          <DisplayUsername h3 bold>
            {username}
          </DisplayUsername>
        )}
        <FloatingButton
          icon={editMode ? "check" : "pen"}
          size="small"
          onClick={() => {
            this.setState({ editMode: !editMode });
          }}
        />
      </UserContainer>
    );
  }
}

export default User;
