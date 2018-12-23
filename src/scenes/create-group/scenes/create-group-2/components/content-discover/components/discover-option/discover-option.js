import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import OptionContainer from "./components/option-container";
import OptionIcon from "./components/option-icon";
import OptionTitle from "./components/option-title";
import OptionDescription from "./components/option-description";

const DiscoverOption = ({
  theme,
  icon,
  title,
  description,
  selected,
  onClick
}) => (
  <OptionContainer selected={selected} onClick={onClick}>
    <Fragment>
      <OptionIcon
        icon={icon}
        size="huge"
        color={selected === false ? theme.pimaryColor : theme.fontVariantColor}
      />
      <OptionTitle selected={selected}>{title}</OptionTitle>
      <OptionDescription selected={selected}>{description}</OptionDescription>
    </Fragment>
  </OptionContainer>
);

DiscoverOption.defaultProps = {
  theme: undefined,
  selected: undefined,
  onClick: undefined
};

DiscoverOption.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default withTheme(DiscoverOption);
