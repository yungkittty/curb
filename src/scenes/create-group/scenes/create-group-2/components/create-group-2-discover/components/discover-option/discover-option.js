import React, { Fragment } from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import OptionContainer from "./components/option-container";
import Icon from "../../../../../../../../components/icon";
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
  <OptionContainer
    hoverColor={theme.primaryVariantColor}
    selected={selected}
    onClick={onClick}
  >
    <Fragment>
      <Icon
        icon={icon}
        size="large"
        color={selected === false ? theme.primaryColor : theme.fontVariantColor}
      />
      <OptionTitle selected={selected} type="h3" weight={700}>
        {title}
      </OptionTitle>
      <OptionDescription selected={selected} type="h4" weight={400}>
        {description}
      </OptionDescription>
    </Fragment>
  </OptionContainer>
);

DiscoverOption.defaultProps = {
  selected: undefined,
  onClick: undefined
};

DiscoverOption.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default withTheme(DiscoverOption);
