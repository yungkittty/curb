import styled from "styled-components";
import ButtonContainer from "../../../../../../../../../../components/button-container";

const OptionContainer = styled(ButtonContainer)`
  padding: 18px 30px;
  flex: 1;
  background: ${({ selected, theme }) => (selected ? theme.primaryVariantColor : "transparent")};
`;

export default OptionContainer;
