import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import UserContainer from "./components/user-container";
import ButtonIconFloat from "../../components/button-icon-float";
import DisplayImage from "./components/user-display/display-image";
import DisplayUsername from "./components/user-display/display-username";
import EditButton from "./components/user-edit/edit-button";
import ImageContainer from "./components/user-image/components/image-container";
import Input from "../../components/input";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: "Antoine",
        error: undefined
      },
      avatar: "https://avatars2.githubusercontent.com/u/26574636",
      editMode: false
    };

    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;

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

    const usernameCheck = this.checkInput("username", username.value);

    return usernameCheck;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { editMode, username, avatar } = this.state;
    const { t } = this.props;

    return (
      <UserContainer>
        <ImageContainer>
          <DisplayImage src={avatar} editMode={editMode} />
          {editMode && <EditButton avatar={avatar} icon="plus" size="large" />}
        </ImageContainer>
        {editMode ? (
          <Input
            style={{ marginTop: 36 }}
            fieldStyle={{
              fontSize: 36,
              fontWeight: "700",
              textAlign: "center"
            }}
            fieldStyleNative={{
              fontSize: 24,
              fontWeight: "700",
              textAlign: "center"
            }}
            id="username"
            value={username.value}
            onChange={this.handleChange}
            error={username.error && t(`validation:username.${username.error}`)}
          />
        ) : (
          <DisplayUsername type="h2" weight={700}>
            {username.value}
          </DisplayUsername>
        )}
        <ButtonIconFloat
          icon={editMode ? "check" : "pen"}
          size="medium"
          onClick={() => {
            this.setState({ editMode: !editMode });
          }}
        />
      </UserContainer>
    );
  }
}

User.propTypes = {
  t: PropTypes.func.isRequired
};

export default withNamespaces()(User);
