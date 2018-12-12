import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import { SignUp2 } from "../..";
import ContentContainer from "./components/content-container";
import Text from "../../../../components/text";
import ContentInput from "./components/content-input";

class SignUp1 extends Component {
  constructor(props) {
    super(props);
    const {
      data: { username = "" },
      setProgress,
      setComponent,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = { username };

    setProgress({ progress: 1, total: 2 });
    setButtonTitle("Next");
    setButtonClick(() => setComponent(SignUp2, 1));

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { setData } = this.props;

    setData({ [event.target.id]: event.target.value });
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { username } = this.state;

    return (
      <ContentContainer>
        <Text p h3 b>
          Choose a username
        </Text>
        <ContentInput
          placeholder="Username"
          id="username"
          onChange={this.handleChange}
          value={username}
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
