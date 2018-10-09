import React from "react";
import RedirectContainer from "./components/redirect-container";

const LoginRedirect = props => (
  <RedirectContainer placeholder={ props.placeholder } type={ props.type }>
  New to Curb ? 
  </RedirectContainer>
);

export default LoginRedirect;