import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import { SignUp2 } from "../..";
import ContentContainer from "./components/content-container";
import ContentInput from "./components/content-input";

class SignUp1 extends Component {
  constructor(props) {
    super(props);
    const {
      data: { username = "" },
      setProgress,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = { username, error: { username: undefined } };

    this.handleChange = this.handleChange.bind(this);
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
    const { username } = this.state;

    if (username === "")
      this.setState({
        error: { username: "You must enter a username" }
      });
    else {
      this.setState({
        error: { username: undefined }
      });
      return true;
    }
    return false;
  }

  handleChange(event) {
    const { setData } = this.props;

    setData({ [event.target.id]: event.target.value });
    this.setState(
      { [event.target.id]: event.target.value },
      this.checkForm.bind(this)
    );
  }

  render() {
    const { username, error } = this.state;

    return (
      <ContentContainer>
        <ContentInput
          size="modal"
          title="Choose a username"
          id="username"
          placeholder="Username"
          onChange={this.handleChange}
          value={username}
          error={error.username}
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
  data: PropTypes.shape({ username: PropTypes.string }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default SignUp1;
