import styled from "styled-components";
import Container from "../../../../../container";

const SelectionEmpty = styled(Container)`
  width: 18px;
  height: 18px;
  border: 2px solid
    ${({ theme, selectedColorAlternate }) =>
      selectedColorAlternate ? "#333333" : theme.secondaryVariantColor};
  border-radius: ${({ selectionType }) => (selectionType ? "10" : "2")}px;
`;

export default SelectionEmpty;
