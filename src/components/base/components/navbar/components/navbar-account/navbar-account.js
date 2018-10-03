import React from "react";
import AccountContainer from "./components/account-container";
import AccountButton from "./components/account-button";

const NavbarAccount = ({ onClick }) => (
  <AccountContainer top>
    <AccountButton onClick={onClick} />
  </AccountContainer>
);

export default NavbarAccount;
