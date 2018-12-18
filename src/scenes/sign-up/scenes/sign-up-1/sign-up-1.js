import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import { SignUp2 } from "../..";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import SelectImage from "./components/select-image";
import ContentInput from "./components/content-input";

class SignUp1 extends Component {
  constructor(props) {
    super(props);
    const {
      data: { name = "", email = "" },
      setProgress,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      name: {
        data: name,
        error: false,
        errorMsg: "You must enter a username"
      },
      email: {
        data: email,
        error: false,
        errorMsg: "You must enter a mail"
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.checkForm = this.checkForm.bind(this);

    setProgress({ progress: 1, total: 2 });
    setButtonTitle("Next");
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    const { setComponent } = this.props;

    if (this.checkForm()) setComponent(SignUp2, 1);
  }

  checkForm() {
    const { name, email } = this.state;

    const nameCheck = this.checkInput("name", name.data);
    const emailCheck = this.checkInput("email", email.data);

    return nameCheck && emailCheck;
  }

  checkInput(id, value) {
    if (value.length === 0)
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
    const { name, email } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>Create account</ContentTitle>
        <SelectImage />
        <ContentInput
          size="modal"
          id="name"
          placeholder="Username"
          onChange={this.handleChange}
          value={name.data}
          error={name.error ? name.errorMsg : null}
        />
        <ContentInput
          size="modal"
          id="email"
          placeholder="Mail address"
          onChange={this.handleChange}
          value={email.data}
          error={email.error ? email.errorMsg : null}
        />
      </ContentContainer>
    );
  }
}

SignUp1.defaultProps = {
  data: undefined,
  setData: undefined,
  setProgress: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

SignUp1.propTypes = {
  /* eslint-disable-next-line */
  data: PropTypes.object,
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default SignUp1;
