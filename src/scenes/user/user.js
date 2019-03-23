import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
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
      avatar: { value: { data: undefined } },
      editMode: false
    };

    this.submit = this.submit.bind(this);
    this.handleSwapMode = this.handleSwapMode.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: { value: nextProps.username },
      avatar: {
        value: {
          name: undefined,
          data: `https://api.curb-app.com${_.replace(
            nextProps.avatarUrl,
            "medium",
            "large"
          )}`
        }
      }
    });
  }

  submit() {
    const { patchCurrentUser, postUserAvatar } = this.props;
    const { username, avatar } = this.state;

    if (this.checkForm()) {
      patchCurrentUser({ name: username.value });
      if (avatar.value.file) {
        const data = new FormData();
        data.append("file", avatar.value.file);
        postUserAvatar(data);
      }
    }
  }

  checkForm() {
    const { username } = this.state;
    const usernameCheck = this.checkInput("username", username.value);
    return usernameCheck;
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
    else if (editMode && this.checkForm()) {
      this.submit();
      this.setState({ editMode: false });
    }
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
        <SelectImage
          readOnly={!editMode}
          src={avatar.value.data}
          id="avatar"
          onSelect={this.handleChange}
        />
        <Input
          readOnly={!editMode}
          style={{ marginTop: 24 }}
          textStyle={{
            fontSize: 36,
            fontWeight: "700",
            textAlign: "center"
          }}
          textStyleNative={{
            fontSize: 24,
            fontWeight: "700",
            textAlign: "center"
          }}
          id="username"
          value={username.value}
          onChange={this.handleChange}
          error={username.error && t(`validation:username.${username.error}`)}
        />
        <ButtonIconFloat
          icon={editMode ? "check" : "pen"}
          size="medium"
          onClick={this.handleSwapMode}
        />
      </UserContainer>
    );
  }
}

User.propTypes = {
  patchCurrentUser: PropTypes.func.isRequired,
  postUserAvatar: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
};

export default withNamespaces()(User);
