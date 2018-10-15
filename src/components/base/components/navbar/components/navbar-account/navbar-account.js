import React from "react";
import AccountContainer from "./components/account-container";
import AccountButton from "./components/account-button";

const NavbarAccount = ({ to }) => (
  <AccountContainer top>
    <AccountButton to={to} />
  </AccountContainer>
);

export default NavbarAccount;
