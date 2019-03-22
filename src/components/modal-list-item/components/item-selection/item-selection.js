import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import SelectionContainer from "./components/selection-container";
import Icon from "../../../icon";
import SelectionEmpty from "./components/selection-empty/selection-empty";

const ItemSelection = ({
  theme,
  selected,
  selectedColorAlternate,
  selectionType
}) => (
  <SelectionContainer
    selected={selected}
    selectedColorAlternate={selectedColorAlternate}
  >
    {selected ? (
      <Icon
        icon={selectionType ? "check-circle" : "check-square"}
        color={selectedColorAlternate ? "#333333" : theme.secondaryVariantColor}
        size="small"
      />
    ) : (
      <SelectionEmpty
        selectionType={selectionType}
        selectedColorAlternate={selectedColorAlternate}
      />
    )}
  </SelectionContainer>
);

ItemSelection.defaultProps = {
  theme: undefined,
  selected: undefined,
  selectedColorAlternate: false,
  selectionType: false
};

ItemSelection.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  selected: PropTypes.bool,
  selectedColorAlternate: PropTypes.bool,
  selectionType: PropTypes.bool
};

export default withTheme(ItemSelection);
