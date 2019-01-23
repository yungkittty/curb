import React, { Component } from "react";
import PropTypes from "prop-types";
import UserContainer from "./components/user-container";
import FloatingButton from "../../components/floating-button";
import { withNamespaces } from "react-i18next";
import DisplayImage from "./components/user-display/display-image";
import DisplayUsername from "./components/user-display/display-username";
import EditButton from "./components/user-edit/edit-button";
import EditUsername from "./components/user-edit/edit-username";
import ImageContainer from "./components/user-image/components/image-container";
import Input from "../../components/input";

class User extends Component {
  constructor(props) {
    super(props);
    const {
      t,
    } = this.props;
    this.state = {
      username: {
        value: "Antoines",
        error: undefined
      },
      avatar: "https://avatars2.githubusercontent.com/u/26574636",
      editMode: false
    };

    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  checkInput(id, value) {
    const error =
      value.length === 0 ? "missing" : undefined; 

    this.setState(prev => {
      const obj = {
        [id]: {
          ...prev[id],
          value,
          error
        }
      };
      return obj;
    });

    return error === undefined;
  }

  validate() {
    if (this.checkForm()) this.submit();
  }

  checkForm() {
    const { username } = this.state;

    const usernameCheck = 
      this.checkInput("username", username.value);

    return usernameCheck;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { editMode, username, avatar } = this.state;

    return (
      <UserContainer>
        <ImageContainer>
          <DisplayImage src={avatar} editMode={editMode} />
          {editMode && <EditButton avatar={avatar} icon="plus" size="large" />}
        </ImageContainer>
        {editMode ? (
          <Input 
            id="username" 
            value={username.value} 
            onChange={this.handleChange}
            /**
             * 
             * TODO: traduction 
             * 
            */
            error={username.error && "Required"} 
          />
        ) : (
          <DisplayUsername h3 bold>
            {username.value}
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

User.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(User);
