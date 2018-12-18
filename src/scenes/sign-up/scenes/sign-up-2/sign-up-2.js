import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import { SignUp1 } from "../..";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import Input from "../../../../components/input";

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    const {
      data: { password = "", confirmPassword = "" },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      password: {
        data: password,
        error: false,
        errorMsg: "You must enter a password"
      },
      confirmPassword: {
        data: confirmPassword,
        error: false,
        errorMsg: "Passwords don't match"
      }
    };

    this.sumbit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 2, total: 2 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(SignUp1, -1));
    setButtonTitle("Finish");
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const {
      data: { confirmPassword, ...others },
      signUp
    } = this.props;

    signUp({ ...others });
  }

  checkForm() {
    const { password, confirmPassword } = this.state;

    const passwordCheck = this.checkInput("password", password.data);
    const confirmPasswordCheck = this.checkInput(
      "confirmPassword",
      confirmPassword.data
    );

    return passwordCheck && confirmPasswordCheck;
  }

  checkInput(id, value) {
    const { password, confirmPassword } = this.state;
    if (
      value.length === 0 ||
      (id === "confirmPassword" && password.data !== confirmPassword.data)
    )
      this.setState(prev => ({
        [id]: {
          ...prev[id],
          error: true
        }
      }));
    else {
      this.setState(prev => ({
        [id]: {
          ...prev[id],
          error: false
        }
      }));
      return true;
    }
    return false;
  }

  handleChange(event) {
    const { setData } = this.props;
    const { id, value } = event.target;

    setData({ [id]: value });

    this.setState(
      prev => ({ [id]: { ...prev[id], data: value } }),
      this.checkInput.bind(this, id, value)
    );
  }

  render() {
    const { password, confirmPassword } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>Choose your password</ContentTitle>
        <Input
          size="modal"
          id="password"
          placeholder="Password"
          type="password"
          value={password.data}
          onChange={this.handleChange}
          error={password.error ? password.errorMsg : null}
        />
        <Input
          size="modal"
          id="confirmPassword"
          placeholder="Confirm password"
          type="password"
          value={confirmPassword.data}
          onChange={this.handleChange}
          error={confirmPassword.error ? confirmPassword.errorMsg : null}
        />
      </ContentContainer>
    );
  }
}

SignUp2.defaultProps = {
  data: undefined,
  setData: undefined,
  setProgress: undefined,
  setLeftIcon: undefined,
  setLeftClick: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

SignUp2.propTypes = {
  /* eslint-disable-next-line */
  data: PropTypes.object,
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default SignUp2;
