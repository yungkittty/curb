import React from "react";
import AccountContainer from "./components/account-container";
import AccountButton from "./components/account-button";
import SectionBar from "../navigation-section/components/section-bar";

const NavigationAccount = () => (
  <AccountContainer>
    <AccountButton />
    <SectionBar />
  </AccountContainer>
);

export default NavigationAccount;
