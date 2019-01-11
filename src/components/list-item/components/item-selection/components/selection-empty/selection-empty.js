import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const SelectionEmpty = styled(Container)`
  border: 2px solid
    ${({ theme, selectedColorAlternate }) =>
      selectedColorAlternate ? "#333333" : theme.secondaryVariantColor};
  width: 14px;
  height: 14px;
  border-radius: ${({ selectionType }) => (selectionType ? "7" : "2")}px;

  ${screenWidthsMedias.medium`
    width: 18px;
    height: 18px;
    border-radius: ${({ selectionType }) => (selectionType ? "9" : "2")}px;
  `}
`;

export default SelectionEmpty;
