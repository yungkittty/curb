import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { platformBools } from "../../configurations/platform";
import UserContainer from "./components/user-container";
import ButtonIconFloat from "../../components/button-icon-float";
import SelectImage from "../../components/select-image";
import InputForm from "../../components/input-form";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      username: {
        value: undefined,
        error: undefined
      },
      avatar: { value: { name: undefined, data: undefined }, progress: undefined }
    };

    this.onUploadProgress = this.onUploadProgress.bind(this);
    this.submit = this.submit.bind(this);
    this.handleSwapMode = this.handleSwapMode.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { editMode } = this.state;
    const { t, owner, isMediasPosting, mediasPostingErrorCode, pushAppAlert } = this.props;
    // eslint-disable-next-line
    if (!owner && editMode) this.setState({ editMode: false });
    if (prevProps.isMediasPosting && !isMediasPosting) {
      if (mediasPostingErrorCode === "") {
        pushAppAlert({
          type: "success",
          message: t("alerts:patchUserSuccess"),
          icon: "check"
        });
        // eslint-disable-next-line
        this.setState({ avatar: { value: { name: undefined, data: undefined }, progress: undefined } });
      } else {
        pushAppAlert({
          type: "error",
          message: t("alerts:patchUserFailure"),
          icon: "times"
        });
        // eslint-disable-next-line
        this.setState({ avatar: { value: { name: undefined, data: undefined }, progress: undefined } });
      }
    }
  }

  onUploadProgress(progress) {
    const { avatar } = this.state;
    this.setState({ avatar: { ...avatar, progress } });
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
    const usernameCheck = username.value ? this.checkInput("username", username.value) : true;
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
    const { t, owner, username: usernameProps, avatarUrl: avatarProps, isMediasPosting } = this.props;

    return (
      <React.Fragment>
        <UserContainer>
          <SelectImage
            id="avatar"
            readOnly={!editMode}
            progress={avatarState.progress && avatarState.progress}
            src={
              avatarState.value.data ||
              `${process.env.REACT_APP_API_URL}${_.replace(avatarProps, "medium", "large")}`
            }
            onSelect={this.handleChange}
          />
          <InputForm
            id="username"
            readOnly={!editMode}
            containerStyle={{ marginTop: 64, textAlign: "center" }}
            textStyle={{
              fontSize: platformBools.isReact ? 36 : 32,
              fontFamily: "Montserrat-Bold",
              textAlign: "center"
            }}
            value={usernameState.value || usernameProps}
            onChange={this.handleChange}
            error={usernameState.error && t(`validation:username.${usernameState.error}`)}
          />
        </UserContainer>
        {owner && !isMediasPosting && (
          <ButtonIconFloat icon={editMode ? "check" : "pen"} size="medium" onClick={this.handleSwapMode} />
        )}
      </React.Fragment>
    );
  }
}

User.propTypes = {
  pushAppAlert: PropTypes.func.isRequired,
  isMediasPosting: PropTypes.bool.isRequired,
  mediasPostingErrorCode: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  patchUser: PropTypes.func.isRequired,
  postMediaAvatar: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  owner: PropTypes.bool.isRequired
};

export default withTranslation()(User);
