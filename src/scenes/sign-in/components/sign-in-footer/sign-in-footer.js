import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import FooterContainer from "./components/footer-container";
import FooterLink from "./components/footer-link";
import FooterBar from "./components/footer-bar";
import Link from "../../../../components/link";

const SignInFooter = ({ t }) => (
  <FooterContainer>
    <FooterLink>
      <Link to={{ pathname: "/forgot-password", state: { isModal: true } }}>
        {t("forgotPass")}
      </Link>
    </FooterLink>
    <FooterBar />
    <FooterLink>
      <Link to={{ pathname: "/sign-up", state: { isModal: true } }}>
        {t("signUp")}
      </Link>
    </FooterLink>
  </FooterContainer>
);

SignInFooter.propTypes = { t: PropTypes.func.isRequired };

export default withNamespaces("signIn")(SignInFooter);
