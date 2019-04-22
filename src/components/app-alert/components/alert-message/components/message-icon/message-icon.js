import React from "react";
import PropTypes from "prop-types";
import Loader from "../../../../../loader";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../icon";

const MessageIcon = ({ icon }) => (
  <IconContainer>
    {icon === "loader" ? (
      <Loader size="small" color="white" />
    ) : (
      <Icon icon={icon} color="white" size="small" />
    )}
  </IconContainer>
);

MessageIcon.defaultProps = {
  icon: undefined
};

MessageIcon.propTypes = {
  icon: PropTypes.string
};

export default MessageIcon;
