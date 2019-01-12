import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const SelectionEmpty = styled(Container)`
  border: 2px solid
    ${({ theme, selectedColorAlternate }) =>
      selectedColorAlternate ? "#333333" : theme.secondaryVariantColor};
  ${({ selectionType }) =>
    selectionType
      ? "width: 20px; height: 20px; border-radius: 10px;"
      : "width: 18px; height: 18px; border-radius: 2px;"}

  ${screenWidthsMedias.medium`
      width: 18px;
      height: 18px;
  `};
`;

export default SelectionEmpty;
