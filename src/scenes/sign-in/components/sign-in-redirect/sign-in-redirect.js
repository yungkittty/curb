import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import RedirectContainer from "./components/redirect-container";
import Text from "../../../../components/text";
import ButtonText from "../../../../components/button-text";
// eslint-disable-next-line
import SignUp from "../../../sign-up";

const SignInRedirect = ({ setAppModalScene, t, theme }) => (
  <RedirectContainer>
    <Text>{t("redirectMsg")}</Text>
    <ButtonText
      text={t("createAccount")}
      contentTextStyle={{ color: theme.linkColor }}
      onClick={() => setAppModalScene({ scene: SignUp, direction: 1 })}
    />
  </RedirectContainer>
);

SignInRedirect.propTypes = {
  setAppModalScene: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(SignInRedirect);
