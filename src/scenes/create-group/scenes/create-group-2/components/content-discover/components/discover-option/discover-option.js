import React, { Fragment } from "react";
import PropTypes from "prop-types";
import OptionContainer from "./components/option-container";
import OptionIcon from "./components/option-icon";
import OptionTitle from "./components/option-title";
import OptionDescription from "./components/option-description";

const DiscoverOption = ({ icon, title, description, selected, onClick }) => (
  <OptionContainer selected={selected} onClick={onClick}>
    <Fragment>
      <OptionIcon icon={icon} size="huge" selected={selected} />
      <OptionTitle selected={selected}>{title}</OptionTitle>
      <OptionDescription selected={selected}>{description}</OptionDescription>
    </Fragment>
  </OptionContainer>
);

DiscoverOption.defaultProps = {
  selected: undefined,
  onClick: undefined
};

DiscoverOption.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default DiscoverOption;
