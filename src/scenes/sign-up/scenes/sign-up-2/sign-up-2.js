import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import { SignUp1 } from "../..";
import ContentContainer from "./components/content-container";
import ContentInput from "./components/content-input";

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
      password,
      confirmPassword,
      error: { password: undefined }
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.sumbit = this.submit.bind(this);

    setProgress({ progress: 2, total: 2 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(SignUp1, -1));
    setButtonTitle("Finish");
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    if (this.checkForm()) this.submit();
  }

  checkForm() {
    const { password, confirmPassword } = this.state;

    if (password === "" || (password !== "" && password !== confirmPassword))
      this.setState({ error: { password: "Passwords don't match" } });
    else {
      this.setState({ error: { password: undefined } });
      return true;
    }
    return false;
  }

  submit() {
    const { data } = this.props;

    console.log(data);

    // Make the API call to create account

    // Then redirect to Home
  }

  handleChange(event) {
    const { setData } = this.props;

    setData({ [event.target.id]: event.target.value });
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { password, confirmPassword, error } = this.state;

    return (
      <ContentContainer>
        <ContentInput
          size="modal"
          title="Choose a password"
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <ContentInput
          size="modal"
          title="Confirm password"
          id="confirmPassword"
          placeholder="Password"
          type="password"
          value={confirmPassword}
          onChange={this.handleChange}
          error={error.password}
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
  data: PropTypes.shape({
    password: PropTypes.string,
    confirmPassword: PropTypes.string
  }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default SignUp2;
