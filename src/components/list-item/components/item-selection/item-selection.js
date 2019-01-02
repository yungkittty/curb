import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import SelectionContainer from "./components/selection-container";
import Icon from "../../../icon";
import SelectionEmpty from "./components/selection-empty/selection-empty";

const ItemSelection = ({ theme, selected, uniqueSelection }) => (
  <SelectionContainer>
    {selected ? (
      <Icon
        icon={uniqueSelection ? "check-circle" : "check-square"}
        color={theme.secondaryVariantColor}
        size="small"
      />
    ) : (
      <SelectionEmpty uniqueSelection={uniqueSelection} />
    )}
  </SelectionContainer>
);

ItemSelection.defaultProps = {
  theme: undefined,
  selected: undefined,
  uniqueSelection: false
};

ItemSelection.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  selected: PropTypes.bool,
  uniqueSelection: PropTypes.bool
};

export default withTheme(ItemSelection);
