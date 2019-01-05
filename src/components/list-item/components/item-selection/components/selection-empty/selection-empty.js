import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const SelectionEmpty = styled(Container)`
  border: ${({ uniqueSelection }) => (uniqueSelection ? "3" : "2")}px solid
    ${({ theme, selectedColorAlternate }) =>
      selectedColorAlternate ? "#333333" : theme.secondaryVariantColor};
  width: 18px;
  height: 18px;
  border-radius: ${({ uniqueSelection }) => (uniqueSelection ? "9" : "3")}px;

  ${screenWidthsMedias.medium`
    width: 22px;
    height: 22px;
    border-radius: ${({ uniqueSelection }) => (uniqueSelection ? "11" : "3")}px;
  `}
`;

export default SelectionEmpty;
