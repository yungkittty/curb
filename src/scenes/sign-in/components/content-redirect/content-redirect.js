import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import RedirectContainer from "./components/redirect-container";
import Text from "../../../../components/text";
import Link from "../../../../components/link";

const ContentRedirect = ({ t }) => (
  <RedirectContainer>
    <Text>{t("redirectMsg")}</Text>
    <Link to={{ pathname: "/sign-up", state: { isModal: true } }}>
      <Text>{t("createAccount")}</Text>
    </Link>
  </RedirectContainer>
);

ContentRedirect.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces("signIn")(ContentRedirect);
