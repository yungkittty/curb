import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const SelectionEmpty = styled(Container)`
  border: 2px solid ${({ theme }) => theme.secondaryVariantColor};
  width: 18px;
  height: 18px;
  border-radius: ${props => (props.uniqueSelection ? "9" : "3")}px;

  ${screenWidthsMedias.medium`
    width: 22px;
    height: 22px;
    border-radius: ${props => (props.uniqueSelection ? "11" : "3")}px;
  `}
`;

export default SelectionEmpty;
