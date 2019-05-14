import styled from "styled-components";
import ButtonContainer from "../../../../../../../../../../components/button-container";

const OptionContainer = styled(ButtonContainer)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px 30px;
  background: ${({ selected, theme }) => (selected ? theme.primaryVariantColor : "transparent")};
`;

export default OptionContainer;
