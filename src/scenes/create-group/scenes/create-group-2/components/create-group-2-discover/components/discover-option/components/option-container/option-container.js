import styled from "styled-components";
import ButtonContainer from "../../../../../../../../../../components/button-container";

const OptionContainer = styled(ButtonContainer)`
  padding: 0 22px;
  flex: 1;
  background-color: ${({ selected, theme }) => (selected ? theme.primaryVariantColor : "transparent")};
  &:hover {
    filter: initial;
    background-color: ${({ theme }) => theme.primaryVariantColor};
  }
`;

export default OptionContainer;
