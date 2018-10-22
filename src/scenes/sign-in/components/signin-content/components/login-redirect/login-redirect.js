import React from "react";
import RedirectContainer from "./components/redirect-container";

const LoginRedirect = props => (
  <RedirectContainer placeholder={ props.placeholder } type={ props.type }>
  New to Curb? 
  <a onClick={this.handleClick} style={{cursor: 'pointer'}}>
    <font color="#2D9CDB">
      Sign up
    </font>
  </a>
  </RedirectContainer>
);

export default LoginRedirect;