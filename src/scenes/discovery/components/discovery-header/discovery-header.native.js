import React from "react";
// import PropTypes from "prop-types";
// import { withNamespaces } from "react-i18next";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import HeaderTitle from "./components/header-title";
import HeaderSubtitle from "./components/header-subtitle";

const DiscoveryHeader = () => (
  <HeaderContainer>
    <HeaderButtonIcon onClick={() => undefined} />
    <HeaderTitle>Discovery</HeaderTitle>
    <HeaderSubtitle>Join popular groups on the network</HeaderSubtitle>
  </HeaderContainer>
);

// DiscoveryHeader.propTypes = { t: PropTypes.func.isRequired };

export default DiscoveryHeader; // withNamespaces("")();
