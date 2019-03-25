import styled from "styled-components";
import Container from "../../../../../container";

const SelectionContainer = styled(Container)`
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 125px;

  opacity: ${({ selected, selectedColorAlternate }) =>
    selectedColorAlternate ? (selected ? "0.4" : "0.15") : "1"};
`;

export default SelectionContainer;
