import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import InputForm from "../../../../components/input-form";
import inputRegex from "../../../../utils/input-regex";
// eslint-disable-next-line
import SignIn from "../../../sign-in";

class ResetPassword1 extends Component {
  constructor(props) {
    super(props);

    const {
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      t
    } = props;

    this.state = { showErrorCode: false };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 1, steps: 3 });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: SignIn, direction: -1 })
    });
    setAppModalFooterButton({
      text: t("sendEmail"),
      onClick: this.submit
    });
  }

  shouldComponentUpdate(nextProps) {
    const { isAccountRequestCodeFetching } = this.props;
    return !nextProps.isAccountRequestCodeSuccess || !isAccountRequestCodeFetching;
  }

  componentDidUpdate(prevProps) {
    const { showErrorCode } = this.state;
    const { accountRequestCodeErrorCode, setAppModalButtonsEnabled } = this.props;
    /* eslint-disable */
    if (!showErrorCode && accountRequestCodeErrorCode && prevProps.isAccountRequestCodeFetching) {
      // eslint-disable-next-line
      this.setState({ showErrorCode: true });
      setAppModalButtonsEnabled({ enabled: true });
    }
  }

  submit() {
    const { requestCode, email, setAppModalButtonsEnabled } = this.props;
    if (!this.checkForm()) return;
    requestCode({ email: email.value });
    setAppModalButtonsEnabled({ enabled: false });
  }

  checkForm() {
    const { email } = this.props;

    const emailCheck = this.checkInput("email", email.value);
    return emailCheck;
  }

  checkInput(id, value) {
    const { setAppModalSceneData, [id]: Y } = this.props;
    const { showErrorCode } = this.state;

    if (showErrorCode) this.setState({ showErrorCode: false });

    let error = value.length === 0 ? "missing" : undefined;
    if (error === undefined && id === "email")
      error = !RegExp(inputRegex.email).test(value) ? "invalid" : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { isAccountRequestCodeFetching, accountRequestCodeErrorCode, email, t } = this.props;
    const { showErrorCode } = this.state;

    return isAccountRequestCodeFetching ? (
      <Loader />
    ) : (
      <AppModalSceneContainer verticalAlign>
        <AppModalSceneTitle style={{ position: "absolute", top: 0 }}>
          {t("enterYourEmail")}
        </AppModalSceneTitle>
        <InputForm
          size="modal"
          id="email"
          type="email"
          placeholder={t("common:email")}
          value={email.value}
          onChange={this.handleChange}
          error={
            // eslint-disable-next-line
            email.error
              ? t(`validation:email.${email.error}`)
              : showErrorCode && accountRequestCodeErrorCode
              ? t(`validation:email.${accountRequestCodeErrorCode}`)
              : undefined
          }
        />
      </AppModalSceneContainer>
    );
  }
}

ResetPassword1.defaultProps = {
  email: { value: "" }
};

ResetPassword1.propTypes = {
  isAccountRequestCodeFetching: PropTypes.bool.isRequired,
  isAccountRequestCodeSuccess: PropTypes.bool.isRequired,
  accountRequestCodeErrorCode: PropTypes.string.isRequired,
  setAppModalButtonsEnabled: PropTypes.func.isRequired,
  email: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired,
  requestCode: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withTranslation("resetPassword")(ResetPassword1);
