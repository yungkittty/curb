import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderTitle from "./components/header-title";

const EventHeader = React.forwardRef(({ color }, ref) => (
  <HeaderContainer backgroundColor={color}>
    <HeaderTitle ref={ref} placeholder="Name of the event" />
  </HeaderContainer>
));

EventHeader.propTypes = {
  color: PropTypes.string.isRequired
};

export default EventHeader;
