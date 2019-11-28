import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderTitle from "./components/header-title";

const EventHeader = ({ color, value, onChange }) => (
  <HeaderContainer backgroundColor={color}>
    <HeaderTitle
      value={value}
      onChange={onChange}
      placeholder="Name of the event"
      placeholderTextColor="rgba(255,255,255,0.3)"
    />
  </HeaderContainer>
);

EventHeader.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EventHeader;
