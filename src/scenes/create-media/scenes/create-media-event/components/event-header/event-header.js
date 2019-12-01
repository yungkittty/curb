import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import HeaderContainer from "./components/header-container";
import HeaderTitle from "./components/header-title";

const EventHeader = ({ t, color, value, onChange }) => (
  <HeaderContainer backgroundColor={color}>
    <HeaderTitle
      value={value}
      onChange={event => onChange(event.target.value)}
      placeholder={t("title")}
      placeholderTextColor="rgba(255,255,255,0.3)"
    />
  </HeaderContainer>
);

EventHeader.propTypes = {
  t: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default _.flowRight([withTranslation("eventCreate")])(EventHeader);
