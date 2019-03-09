import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { withNamespaces } from "react-i18next";
import FooterContainer from "./components/footer-container";
import FooterButton from "./components/footer-button";
import FooterBar from "./components/footer-bar";
import Text from "../../../../components/text";
// eslint-disable-next-line
import ForgotPassword from "../../../forgot-password";
import SignUp from "../../../sign-up";

const SignInFooter = ({ t, theme, setComponent }) => (
  <FooterContainer>
    <FooterButton onClick={() => setComponent(ForgotPassword, 1)}>
      <Text style={{ color: theme.linkColor }}>{t("forgotPass")}</Text>
    </FooterButton>
    <FooterBar />
    <FooterButton onClick={() => setComponent(SignUp, 1)}>
      <Text style={{ color: theme.linkColor }}>{t("signUp")}</Text>
    </FooterButton>
  </FooterContainer>
);

SignInFooter.propTypes = {
  t: PropTypes.func.isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  setComponent: PropTypes.func.isRequired
};

export default withTheme(withNamespaces("signIn")(SignInFooter));
