import React from "react";
import HeaderContainer from "./components/header-container";
import HeaderTitle from "./components/header-title";
import HeaderSubtitle from "./components/header-subtitle";

const DiscoveryHeader = () => (
  <HeaderContainer>
    <HeaderTitle type="h1">
      {/* eslint-disable-next-line */}
      Discovery
    </HeaderTitle>
    <HeaderSubtitle type="h3">
      Join popular groups on the network
    </HeaderSubtitle>
  </HeaderContainer>
);

export default DiscoveryHeader;
