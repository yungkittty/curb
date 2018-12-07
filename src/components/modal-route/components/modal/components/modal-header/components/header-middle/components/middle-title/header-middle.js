import React from "react";
import PropTypes from "prop-types";
import TitleContainer from "./components/title-container";

const MiddleTitle = ({ title }) => <TitleContainer>{title}</TitleContainer>;

MiddleTitle.defaultProps = {
  title: undefined
};

MiddleTitle.propTypes = {
  title: PropTypes.string
};

export default MiddleTitle;
