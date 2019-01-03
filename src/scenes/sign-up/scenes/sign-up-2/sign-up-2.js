import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import SignUp1 from "../sign-up-1";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import Input from "../../../../components/input";

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    const {
      data: {
        password = {
          value: "",
          error: false,
          errorMsg: "You must enter a password"
        },
        confirmPassword = {
          value: "",
          error: false,
          errorMsg: "Passwords don't match"
        }
      },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      password,
      confirmPassword
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
      data: { name, email, password },
      signUp
    } = this.props;

    signUp({ name: name.value, email: email.value, password: password.value });
  }

  checkForm() {
    const { password, confirmPassword } = this.state;

    const passwordCheck = this.checkInput("password", password.value);
    const confirmPasswordCheck = this.checkInput(
      "confirmPassword",
      confirmPassword.value
    );

    return passwordCheck && confirmPasswordCheck;
  }

  checkInput(id, value) {
    const { password } = this.state;
    const { setData } = this.props;

    const error =
      value.length === 0 ||
      (id === "confirmPassword" && password.value !== value);

    this.setState(prev => {
      const obj = {
        [id]: {
          ...prev[id],
          value,
          error
        }
      };
      setData(obj);
      return obj;
    });

    return !error;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
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
          value={password.value}
          onChange={this.handleChange}
          error={password.error ? password.errorMsg : null}
        />
        <Input
          size="modal"
          id="confirmPassword"
          placeholder="Confirm password"
          type="password"
          value={confirmPassword.value}
          onChange={this.handleChange}
          error={confirmPassword.error ? confirmPassword.errorMsg : null}
        />
      </ContentContainer>
    );
  }
}

SignUp2.defaultProps = {
  data: undefined,
  signUp: () => null,
  setData: undefined,
  setProgress: undefined,
  setLeftIcon: undefined,
  setLeftClick: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

SignUp2.propTypes = {
  data: PropTypes.shape({
    password: PropTypes.object,
    confirmPassword: PropTypes.object
  }),
  signUp: PropTypes.func,
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default SignUp2;
