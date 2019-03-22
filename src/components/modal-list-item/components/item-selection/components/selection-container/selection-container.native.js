import styled from "styled-components";
import Container from "../../../../../container";

const SelectionContainer = styled(Container)`
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 100px;

  opacity: ${({ selected, selectedColorAlternate }) =>
    selectedColorAlternate ? (selected ? "0.4" : "0.15") : "1"};
`;

export default SelectionContainer;
