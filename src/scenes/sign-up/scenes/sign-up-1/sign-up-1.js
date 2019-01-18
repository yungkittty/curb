import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { Redirect } from "react-router";
/* eslint-disable-next-line */
import SignUp2 from "../sign-up-2";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import SelectImage from "./components/select-image";
import Input from "../../../../components/input";

class SignUp1 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      data: {
        name = {
          value: "",
          error: undefined
        },
        email = {
          value: "",
          error: undefined
        }
      },
      setProgress,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      name,
      email
    };

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goToNext = this.goToNext.bind(this);

    setProgress({ progress: 1, total: 2 });
    setButtonTitle(t("common:next"));
    setButtonClick(this.goToNext);
  }

  goToNext() {
    const { setComponent } = this.props;

    if (this.checkForm()) setComponent(SignUp2, 1);
  }

  checkForm() {
    const { name, email } = this.state;

    const nameCheck = this.checkInput("name", name.value);
    const emailCheck = this.checkInput("email", email.value);

    return nameCheck && emailCheck;
  }

  checkInput(id, value) {
    const { setData } = this.props;

    const error = value.length === 0 ? "missing" : undefined;

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

    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { currentUserToken, t } = this.props;
    const { name, email } = this.state;

    return currentUserToken ? (
      <Redirect to="/" />
    ) : (
      <ContentContainer>
        <ContentTitle>{t("createAccount")}</ContentTitle>
        <SelectImage />
        <Input
          size="modal"
          id="name"
          placeholder={t("username")}
          onChange={this.handleChange}
          value={name.value}
          error={name.error && t(`validation:username.${name.error}`)}
        />
        <Input
          size="modal"
          id="email"
          placeholder={t("mailAddress")}
          onChange={this.handleChange}
          value={email.value}
          error={email.error && t(`validation:email.${email.error}`)}
        />
      </ContentContainer>
    );
  }
}

SignUp1.defaultProps = {
  currentUserToken: undefined
};

SignUp1.propTypes = {
  currentUserToken: PropTypes.string,
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({ name: PropTypes.object, email: PropTypes.object })
    .isRequired,
  setData: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.func.isRequired,
  setButtonClick: PropTypes.func.isRequired
};

export default withNamespaces("signUp")(SignUp1);
