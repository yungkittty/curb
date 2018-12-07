import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import { SignUp1 } from "../..";
import ContentContainer from "./components/content-container";
import Text from "../../../../components/text";
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
      confirmPassword
    };

    setProgress({ progress: 2, total: 2 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(SignUp1));
    setButtonTitle("Finish");
    setButtonClick(this.submit.bind(this));

    this.handleChange = this.handleChange.bind(this);
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
    const { password, confirmPassword } = this.state;

    return (
      <ContentContainer>
        <Text p h3 b>
          Choose a password
        </Text>
        <ContentInput
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <Text p h3 b>
          Confirm password
        </Text>
        <ContentInput
          id="confirmPassword"
          placeholder="Password"
          type="password"
          value={confirmPassword}
          onChange={this.handleChange}
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
