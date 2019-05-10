import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import ImageAvatarEditable from "../../../../components/image-avatar-editable";
import InputForm from "../../../../components/input-form";
import inputRegex from "../../../../utils/input-regex";
import withAppModal from "../../../../hocs/with-app-modal";
/* eslint-disable */
import SignIn from "../../../sign-in";
import SignUp2 from "../sign-up-2";
/* eslint-enable */

class SignUp1 extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderSteps, setAppModalHeaderLeftButton, setAppModalFooterButton } = this.props;

    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 1, steps: 2 });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:next"), onClick: this.goToNext });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: SignIn, direction: -1 });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm()) {
      setAppModalScene({ scene: SignUp2, direction: 1 });
    }
  }

  checkForm() {
    const { name, email } = this.props;
    const nameCheck = this.checkInput("name", name.value);
    const emailCheck = this.checkInput("email", email.value);
    return nameCheck && emailCheck;
  }

  checkInput(id, value) {
    let error = value.length === 0 ? "missing" : undefined;
    if (error === undefined && id === "name")
      error = !RegExp(inputRegex.username).test(value) ? "invalid" : undefined;
    if (error === undefined && id === "email")
      error = !RegExp(inputRegex.email).test(value) ? "invalid" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { t, avatar, name, email } = this.props;
    return (
      <AppModalSceneContainer>
        <AppModalSceneTitle style={{ marginBottom: 40 }}>{t("createAccount")}</AppModalSceneTitle>
        <ImageAvatarEditable
          editMode
          id="avatar"
          size="extra-large"
          data={avatar.value.data}
          onSelect={this.handleChange}
        />
        <InputForm
          containerStyle={{ marginTop: 60 }}
          size="modal"
          id="name"
          placeholder={t("common:username")}
          onChange={this.handleChange}
          value={name.value}
          error={name.error && t(`validation:username.${name.error}`)}
        />
        <InputForm
          size="modal"
          id="email"
          type="email"
          autoCapitalize="none"
          placeholder={t("common:email")}
          onChange={this.handleChange}
          value={email.value}
          error={email.error && t(`validation:email.${email.error}`)}
        />
      </AppModalSceneContainer>
    );
  }
}

SignUp1.defaultProps = {
  name: { value: "", error: undefined },
  email: { value: "", error: undefined },
  avatar: { value: { data: undefined, file: undefined }, error: undefined }
};

SignUp1.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  name: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  email: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  avatar: PropTypes.shape({
    value: PropTypes.shape({ data: PropTypes.string, file: PropTypes.object }),
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("signUp")
])(SignUp1);
