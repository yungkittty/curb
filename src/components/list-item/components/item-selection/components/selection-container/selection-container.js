import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

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

  ${screenWidthsMedias.medium`
    width: 94px;
    height: 125px;
  `};
`;

export default SelectionContainer;
