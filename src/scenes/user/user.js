import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import UserContainer from "./components/user-container";
import ButtonIconFloat from "../../components/button-icon-float";
import SelectImage from "../../components/select-image";
import Input from "../../components/input";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: {
        value: undefined,
        error: undefined
      },
      avatar: { value: { name: undefined, data: undefined } },
      editMode: false
    };

    this.submit = this.submit.bind(this);
    this.handleSwapMode = this.handleSwapMode.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submit() {
    const { patchCurrentUser, postUserAvatar } = this.props;
    const { username, avatar } = this.state;

    if (username.value && this.checkInput("username", username.value))
      patchCurrentUser({ name: username.value });
    if (avatar.value.file) {
      postUserAvatar({ avatar: avatar.value.file });
    }
  }

  checkInput(id, value) {
    const { [id]: Y } = this.state;
    const error =
      id === "username" && value.length === 0 ? "missing" : undefined;

    this.setState({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleSwapMode() {
    const { editMode } = this.state;

    if (!editMode) this.setState({ editMode: true });
    else if (editMode) {
      this.submit();
      this.setState({ editMode: false });
    }
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const {
      editMode,
      username: usernameState,
      avatar: avatarState
    } = this.state;
    const {
      t,
      owner,
      username: usernameProps,
      avatarUrl: avatarProps
    } = this.props;

    return (
      <UserContainer>
        <SelectImage
          id="avatar"
          readOnly={!editMode}
          src={
            avatarState.value.data ||
            `${process.env.REACT_APP_API_URL}${_.replace(
              avatarProps,
              "medium",
              "large"
            )}`
          }
          onSelect={this.handleChange}
        />
        <Input
          readOnly={!editMode}
          style={{ marginTop: 84, textAlign: "center" }}
          textStyle={{
            fontSize: 36,
            fontFamily: "Montserrat-Bold",
            textAlign: "center"
          }}
          textStyleNative={{
            fontSize: 24,
            fontFamily: "Montserrat-Bold",
            textAlign: "center"
          }}
          id="username"
          value={usernameState.value || usernameProps}
          onChange={this.handleChange}
          error={
            usernameState.error &&
            t(`validation:username.${usernameState.error}`)
          }
        />
        {owner && (
          <ButtonIconFloat
            icon={editMode ? "check" : "pen"}
            size="medium"
            onClick={this.handleSwapMode}
          />
        )}
      </UserContainer>
    );
  }
}

User.propTypes = {
  patchCurrentUser: PropTypes.func.isRequired,
  postUserAvatar: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  owner: PropTypes.bool.isRequired
};

export default withTranslation()(User);
