import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import FooterContainer from "./components/footer-container";
import FooterButton from "./components/footer-button";
import FooterBar from "./components/footer-bar";
import Text from "../../../../components/text";
// eslint-disable-next-line
import ResetPassword from "../../../reset-password";
// eslint-disable-next-line
import SignUp from "../../../sign-up";

const SignInFooter = ({ setAppModalScene, theme, t }) => (
  <FooterContainer>
    <FooterButton
      onClick={() =>
        setAppModalScene({ scene: ResetPassword, sceneDirection: 1 })
      }
    >
      <Text style={{ color: theme.linkColor }}>{t("forgotPass")}</Text>
    </FooterButton>
    <FooterBar />
    <FooterButton
      onClick={() => setAppModalScene({ scene: SignUp, sceneDirection: 1 })}
    >
      <Text style={{ color: theme.linkColor }}>{t("signUp")}</Text>
    </FooterButton>
  </FooterContainer>
);

SignInFooter.propTypes = {
  setAppModalScene: PropTypes.func.isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default withTheme(SignInFooter);
