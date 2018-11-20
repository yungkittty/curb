import React from "react";
import UserContainer from "./components/user-container";
import NavigationButton from "../navigation-button";
import NavigationBar from "../navigation-bar";

const NavigationUser = () => (
  <UserContainer>
    <NavigationButton icon="user" />
    <NavigationBar />
  </UserContainer>
);

export default NavigationUser;
