import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { withTheme } from "styled-components";
import UserContainer from "./components/user-container";
import UserNameForm from "./components/user-name-form";
import ImageAvatarEditable from "../../components/image-avatar-editable";
import ButtonFloat from "../../components/button-float";
import withUser from "../../hocs/with-user";
import withCurrentUser from "../../hocs/with-current-user";
import { platformBools } from "../../configurations/platform";

class User extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      editMode: false,
      username: {
        value: undefined,
        error: undefined
      },
      avatar: { value: { data: undefined }, loadingProgress: undefined }
    };

    this.state = this.initialState;

    this.onUploadProgress = this.onUploadProgress.bind(this);
    this.submit = this.submit.bind(this);
    this.handleSwapMode = this.handleSwapMode.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { username: usernameState, avatar, editMode } = this.state;
    const {
      isFetchingUsers,
      usersErrorCode,
      isFetchingMedias,
      mediasErrorCode,
      userId,
      userName: usernameProps,
      currentUserId
    } = this.props;
    const { username: initialUsername, avatar: initialAvatar } = this.initialState;
    // eslint-disable-next-line
    if (!(userId === currentUserId) && editMode) this.setState({ editMode: false });

    if (prevProps.isFetchingMedias && !isFetchingMedias)
      // eslint-disable-next-line
      this.setState({
        avatar: mediasErrorCode === "" ? initialAvatar : { ...avatar, loadingProgress: undefined },
        editMode: mediasErrorCode !== ""
      });
    if (prevProps.isFetchingUsers && !isFetchingUsers)
      // eslint-disable-next-line
      this.setState({ editMode: usersErrorCode !== "" });

    // eslint-disable-next-line
    if (usernameState.value === usernameProps) this.setState({ username: initialUsername });
  }

  onUploadProgress({ loaded, total }) {
    const { avatar } = this.state;
    this.setState({ avatar: { ...avatar, loadingProgress: loaded / total } });
  }

  submit() {
    const { userId, patchUser, postMediaAvatarUser } = this.props;
    const { username, avatar } = this.state;

    if (username.value) {
      patchUser({
        // eslint-disable-line
        id: userId,
        name: username.value
      });
    }

    if (avatar.value.file) {
      postMediaAvatarUser({
        id: userId,
        avatar: avatar.value,
        onUploadProgress: this.onUploadProgress,
        onSuccessAlert: { type: "success", message: "postAvatar.userSuccess", icon: "check" }
      });

      this.onUploadProgress({ loaded: 0.01, total: 100 });
    }
  }

  checkForm() {
    const { username } = this.state;
    const usernameCheck = username.value !== undefined ? this.checkInput("username", username.value) : true;
    return usernameCheck;
  }

  checkInput(id, value) {
    const { [id]: Y } = this.state;
    const error = id === "username" && value.length === 0 ? "missing" : undefined;

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
    const {
      // eslint-disable-line
      editMode,
      username: usernameState,
      avatar: avatarState
    } = this.state;
    const {
      // eslint-disable-line
      isFetchingUsers,
      isFetchingMedias,
      userId,
      userName: usernameProps,
      currentUserId,
      theme,
      t
    } = this.props;

    return (
      <React.Fragment>
        <UserContainer>
          <ImageAvatarEditable
            id="avatar"
            size="extra-extra-large"
            placeholderColor={theme.primaryVariantColor}
            userId={userId}
            editMode={editMode}
            data={avatarState.value.data}
            loadingProgress={avatarState.loadingProgress}
            onSelect={this.handleChange}
          />
          <UserNameForm
            id="username"
            size="large"
            readOnly={!editMode}
            containerStyle={{ marginTop: 64, textAlign: "center" }}
            textStyle={{
              fontSize: platformBools.isReact ? 36 : 32,
              fontFamily: "Montserrat-Bold",
              textAlign: "center"
            }}
            displayPlaceholder={usernameProps === ""}
            value={usernameState.value !== undefined ? usernameState.value : usernameProps}
            onChange={this.handleChange}
            error={usernameState.error && t(`validation:username.${usernameState.error}`)}
          />
        </UserContainer>
        <ButtonFloat
          icon={editMode ? "check" : "pen"}
          onClick={this.handleSwapMode}
          disabled={userId === currentUserId && !isFetchingMedias && !isFetchingUsers}
        />
      </React.Fragment>
    );
  }
}

User.propTypes = {
  isFetchingUsers: PropTypes.bool.isRequired,
  usersErrorCode: PropTypes.string.isRequired,
  isFetchingMedias: PropTypes.bool.isRequired,
  mediasErrorCode: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  patchUser: PropTypes.func.isRequired,
  postMediaAvatarUser: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withUser,
  withCurrentUser,
  withTranslation(),
  withTheme
])(User);
