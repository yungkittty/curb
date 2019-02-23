import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import RedirectContainer from "./components/redirect-container";
import Text from "../../../../components/text";
import Link from "../../../../components/link";

const SignInRedirect = ({ t }) => (
  <RedirectContainer>
    <Text>{t("redirectMsg")}</Text>
    <Link to={{ pathname: "/sign-up", state: { isModal: true } }}>
      {t("createAccount")}
    </Link>
  </RedirectContainer>
);

SignInRedirect.propTypes = { t: PropTypes.func.isRequired };

export default withNamespaces("signIn")(SignInRedirect);
