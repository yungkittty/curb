import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { withTheme } from "styled-components";
import UserContainer from "./components/user-container";
import UserHeader from "./components/user-header";
import UserNameForm from "./components/user-name-form";
import ImageAvatarEditable from "../../components/image-avatar-editable";
import ButtonFloat from "../../components/button-float";
import { platformBools } from "../../configurations/platform";
import inputRegex from "../../utils/input-regex";
import withUser from "../../hocs/with-user";
import withCurrentUser from "../../hocs/with-current-user";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      editMode: false,
      username: { value: undefined, error: undefined },
      avatar: { value: { data: undefined }, loadingProgress: undefined }
    };

    this.state = this.initialState;
    this.submit = this.submit.bind(this);
    this.handleSwapMode = this.handleSwapMode.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      username: { value: usernameState },
      editMode
    } = this.state;
    const { isFetchingUsers, userErrorCode, userId, userName: usernameProps, currentUserId } = this.props;
    // eslint-disable-next-line
    if (userId !== currentUserId && editMode) this.setState({ editMode: false });
    if (prevProps.isFetchingUsers && !isFetchingUsers && userErrorCode === "") {
      this.initialState = { ...this.initialState, username: { value: usernameState } };
      // eslint-disable-next-line
      this.setState(this.initialState);
    }
    if (!prevProps.userName && usernameProps)
      this.initialState = { ...this.initialState, username: { value: usernameProps } };
  }

  submit() {
    const { userId, patchUser } = this.props;
    const { username, avatar } = this.state;
    const { username: initialUsername } = this.initialState;
    if ((username.value && username.value !== initialUsername.value) || avatar.value.file) {
      patchUser({
        id: userId,
        avatar: avatar.value,
        name: username.value,
        onUploadProgress: ({ loaded, total }) =>
          this.setState({ avatar: { ...avatar, loadingProgress: loaded / total } })
      });
    }
  }

  checkForm() {
    const { username } = this.state;
    const usernameCheck = username.value !== undefined ? this.checkInput("username", username.value) : true;
    return usernameCheck;
  }

  checkInput(id, value) {
    const { [id]: Y } = this.state;
    let error = id === "username" && value.length === 0 ? "missing" : undefined;
    if (error === undefined) error = !RegExp(inputRegex.username).test(value) ? "invalid" : undefined;
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
          <UserHeader theme={theme} />
          <ImageAvatarEditable
            id="avatar"
            size="extra-extra-large"
            placeholderColor={theme.primaryVariantColor}
            shouldFetch={false}
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
              fontSize: platformBools.isWeb ? 36 : 32,
              fontFamily: "Montserrat-Bold",
              textAlign: "center"
            }}
            displayPlaceholder={usernameProps === ""}
            value={usernameState.value !== undefined ? usernameState.value : usernameProps}
            onChange={this.handleChange}
            error={usernameState.error && t(`validation:username.${usernameState.error}`)}
          />
        </UserContainer>
        {userId === currentUserId ? (
          <ButtonFloat
            icon={editMode ? "check" : "pen"}
            onClick={this.handleSwapMode}
            disabled={isFetchingMedias || isFetchingUsers}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

User.propTypes = {
  isFetchingUsers: PropTypes.bool.isRequired,
  userErrorCode: PropTypes.string.isRequired,
  isFetchingMedias: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  patchUser: PropTypes.func.isRequired,
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
