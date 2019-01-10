import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
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
          error: false
        },
        email = {
          value: "",
          error: false
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

    setProgress({ progress: 1, total: 2 });
    setButtonTitle(t("common:next"));
    setButtonClick(this.goToNext.bind(this));
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

    this.setState(prev => {
      const obj = {
        [id]: {
          ...prev[id],
          value,
          error: value.length === 0
        }
      };
      setData(obj);
      return obj;
    });

    return value.length !== 0;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { name, email } = this.state;
    const { t } = this.props;

    return (
      <ContentContainer>
        <ContentTitle>{t("signUp:createAccount")}</ContentTitle>
        <SelectImage />
        <Input
          size="modal"
          id="name"
          placeholder={t("signUp:username")}
          onChange={this.handleChange}
          value={name.value}
          error={name.error && t("validation:username.missing")}
        />
        <Input
          size="modal"
          id="email"
          placeholder={t("signUp:mailAddress")}
          onChange={this.handleChange}
          value={email.value}
          error={email.error && t("validation:mail.missing")}
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
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({ name: PropTypes.object, email: PropTypes.object }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default withNamespaces()(SignUp1);
