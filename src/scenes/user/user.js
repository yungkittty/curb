import React, { Component } from "react";
import UserContainer from "./components/user-container";
import FloatingButton from "../../components/floating-button";
import DisplayImage from "./components/user-display/display-image";
import DisplayUsername from "./components/user-display/display-username";
import EditButton from "./components/user-edit/edit-button";
import EditUsername from "./components/user-edit/edit-username";
import ImageContainer from "./components/user-image/components/image-container";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Antoine",
      avatar: "https://avatars2.githubusercontent.com/u/26574636",
      editMode: false,
      owner: false
    };
  }

  render() {
    const { editMode, username, avatar, owner } = this.state;

    return (
      <UserContainer>
        <ImageContainer>
          <DisplayImage src={avatar} editMode={editMode} />
          {editMode && <EditButton background={avatar} icon="plus" size="big" />}
        </ImageContainer>
        {editMode ? (
          <EditUsername placeholder={username} />
        ) : (
          <DisplayUsername h3 bold>
            {username}
          </DisplayUsername>
        )} 
        <FloatingButton
          icon={editMode ? "check" : "pen"}
          display="none"
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
