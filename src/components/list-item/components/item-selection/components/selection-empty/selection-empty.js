import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const SelectionEmpty = styled(Container)`
  border: ${({ selectionType }) => (selectionType ? "3" : "2")}px solid
    ${({ theme, selectedColorAlternate }) =>
      selectedColorAlternate ? "#333333" : theme.secondaryVariantColor};
  width: 15px;
  height: 15px;
  border-radius: ${({ selectionType }) => (selectionType ? "8" : "3")}px;

  ${screenWidthsMedias.medium`
    width: 20px;
    height: 20px;
    border-radius: ${({ selectionType }) => (selectionType ? "10" : "2")}px;
  `}
`;

export default SelectionEmpty;
