import styled from "styled-components";
import Container from "../../../../../container";

const SelectionContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;

  opacity: ${({ selected, selectedColorAlternate }) =>
    // eslint-disable-next-line no-nested-ternary
    selectedColorAlternate ? (selected ? "0.4" : "0.15") : "1"};

  ${({ titleCentered }) => (titleCentered ? "position: absolute; right: 10px;" : "")}
`;

export default SelectionContainer;
