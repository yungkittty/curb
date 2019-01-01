import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import SelectionContainer from "./components/selection-container";
import Icon from "../../../icon";
import SelectionEmpty from "./components/selection-empty/selection-empty";

const ItemSelection = ({ theme, selected }) => (
  <SelectionContainer>
    {selected ? (
      <Icon
        icon="check-circle"
        color={theme.secondaryVariantColor}
        size="small"
      />
    ) : (
      <SelectionEmpty />
    )}
  </SelectionContainer>
);

ItemSelection.defaultProps = {
  theme: undefined,
  selected: undefined
};

ItemSelection.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  selected: PropTypes.bool
};

export default withTheme(ItemSelection);
