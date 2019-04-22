import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import InputCode from "../../../../components/input-code";
// eslint-disable-next-line
import ResetPassword1 from "../reset-password-1";

class ResetPassword2 extends Component {
  constructor(props) {
    super(props);

    const { setAppModalHeaderSteps, setAppModalHeaderLeftButton, setAppModalScene } = props;

    this.state = { isLoading: false, errorCode: undefined };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.focusFirstNode = this.focusFirstNode.bind(this);

    setAppModalHeaderSteps({ currentStep: 2, steps: 3 });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: ResetPassword1, direction: -1 })
    });

    this.inputCode = React.createRef();
    setTimeout(() => this.focusFirstNode(), 450);
  }

  componentDidUpdate(prevProps) {
    const { code, isAccountFetching, accountErrorCode, enableAppModalButtons } = this.props;

    if (code.value !== "" && prevProps.isAccountFetching && !isAccountFetching && accountErrorCode !== "") {
      // eslint-disable-next-line
      this.setState({ isLoading: false, errorCode: accountErrorCode }, () => this.focusFirstNode());
      enableAppModalButtons();
    }
  }

  focusFirstNode() {
    const { current: inputCode } = this.inputCode;
    inputCode.focusFirstNode();
  }

  submit(code) {
    const { validateAccountResetPasswordCode, email, disableAppModalButtons } = this.props;

    validateAccountResetPasswordCode({ code, email: email.value });
    disableAppModalButtons();
    setTimeout(() => this.setState({ isLoading: true }));
  }

  checkInput(id, value) {
    const { setAppModalSceneData, [id]: Y } = this.props;
    const { errorCode } = this.state;

    if (errorCode) this.setState({ errorCode: undefined });

    const error = value.length === 0 ? "missing" : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    if (value.length === 6) this.submit(value);
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { t } = this.props;
    const { isLoading, errorCode } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <AppModalSceneContainer verticalAlign>
        <AppModalSceneTitle style={{ position: "absolute", top: 0 }}>{t("enterCode")}</AppModalSceneTitle>
        <InputCode
          id="code"
          fields={6}
          ref={this.inputCode}
          onChange={this.handleChange}
          error={errorCode ? t(`validation:resetPassCode.${errorCode}`) : undefined}
        />
      </AppModalSceneContainer>
    );
  }
}

ResetPassword2.defaultProps = {
  code: { value: "" },
  email: { value: "" }
};

ResetPassword2.propTypes = {
  isAccountFetching: PropTypes.bool.isRequired,
  accountErrorCode: PropTypes.string.isRequired,
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  code: PropTypes.shape({ value: PropTypes.string }),
  email: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired,
  validateAccountResetPasswordCode: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withTranslation("resetPassword")(ResetPassword2);
