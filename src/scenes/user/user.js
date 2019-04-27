import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { withTheme } from "styled-components";
import withUser from "../../hocs/with-user";
import { platformBools } from "../../configurations/platform";
import UserContainer from "./components/user-container";
import ButtonIconFloat from "../../components/button-icon-float";
import ImageAvatarEditable from "../../components/image-avatar-editable";
import UserNameForm from "./components/user-name-form";

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
    const { avatar, editMode } = this.state;
    const {
      t,
      owner,
      isUserPatching,
      userPatchingErrorCode,
      isMediasPosting,
      mediasPostingErrorCode,
      pushAppAlert
    } = this.props;
    const { username: initialUsername, avatar: initialAvatar } = this.initialState;
    // eslint-disable-next-line
    if (!owner && editMode) this.setState({ editMode: false });

    if (prevProps.isMediasPosting && !isMediasPosting)
      if (mediasPostingErrorCode === "") {
        pushAppAlert({
          type: "success",
          message: t("alerts:postAvatarSuccess"),
          icon: "check"
        });
        // eslint-disable-next-line
        this.setState({ avatar: initialAvatar });
      } else {
        pushAppAlert({
          type: "error",
          message: t("alerts:postAvatarFailure"),
          icon: "times"
        });
        // eslint-disable-next-line
        this.setState({ avatar: { ...avatar, loadingProgress: undefined }, editMode: true });
      }
    if (prevProps.isUserPatching && !isUserPatching)
      if (userPatchingErrorCode === "") {
        pushAppAlert({
          type: "success",
          message: t("alerts:patchUserSuccess"),
          icon: "check"
        });
        // eslint-disable-next-line
        this.setState({ username: initialUsername });
      } else {
        pushAppAlert({
          type: "error",
          message: t(`alerts:${userPatchingErrorCode}`),
          icon: "times"
        });
        // eslint-disable-next-line
        this.setState({ editMode: true });
      }
  }

  onUploadProgress(loadingProgress) {
    const { avatar } = this.state;
    this.setState({ avatar: { ...avatar, loadingProgress } });
  }

  submit() {
    const { userId, patchUser, postMediaAvatar } = this.props;
    const { username, avatar } = this.state;
    let payload = null;

    if (username.value) payload = { ...payload, name: username.value };

    if (payload) patchUser({ id: userId, payload });
    if (avatar.value.file) {
      postMediaAvatar({
        target: "users",
        id: userId,
        avatar: avatar.value.file,
        onUploadProgress: this.onUploadProgress
      });
      this.onUploadProgress(0.01);
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
    const { editMode, username: usernameState, avatar: avatarState } = this.state;
    const { t, theme, owner, userName: usernameProps, userId, isMediasPosting, isUserPatching } = this.props;

    return (
      <React.Fragment>
        <UserContainer>
          <ImageAvatarEditable
            id="avatar"
            size="large"
            placeholderColor={theme.primaryColor}
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
            value={usernameState.value !== undefined ? usernameState.value : usernameProps}
            onChange={this.handleChange}
            error={usernameState.error && t(`validation:username.${usernameState.error}`)}
          />
        </UserContainer>
        {owner && !isMediasPosting && !isUserPatching && (
          <ButtonIconFloat icon={editMode ? "check" : "pen"} size="medium" onClick={this.handleSwapMode} />
        )}
      </React.Fragment>
    );
  }
}

User.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  pushAppAlert: PropTypes.func.isRequired,
  isMediasPosting: PropTypes.bool.isRequired,
  mediasPostingErrorCode: PropTypes.string.isRequired,
  isUserPatching: PropTypes.bool.isRequired,
  userPatchingErrorCode: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  patchUser: PropTypes.func.isRequired,
  postMediaAvatar: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  owner: PropTypes.bool.isRequired
};

export default _.flow([
  // eslint-disable-line
  withTheme,
  withUser,
  withTranslation()
])(User);
